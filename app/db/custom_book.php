<?php
require_once "../config.php";
require_once "../db/table.php";
require_once '../hostsetting/function.php';

class CustomBook extends Table
{
    function __construct($redis=false) {
		parent::__construct(_FILE_DB_USER_CUSTOM_BOOK_, "custom_book", "", "",$redis);
    }

	public function new($title,$data,$lang)
	{
		$respond['status']=0;
		$respond['message']="";
		$respond['content']="";

		$sent = explode("\n",$data);
		if($sent && count($sent)>0){
			$setting =  new Hostsetting();
			$max_book = $setting->get("max_book_number");
			if($max_book){
				$currBook = $max_book+1;
				$setbooknum = $setting->set("max_book_number",$currBook);
				if($setbooknum==false){
					$respond["status"]=1;
					$respond["message"]="设置书号错误";
					return $respond;
				}
			}
			else{
				$respond["status"]=1;
				$respond["message"]="获取书号错误";
				return $respond;
			}

			$query="INSERT INTO {$this->table} ('book_id','title','owner','lang','status','modify_time','create_time') VALUES (?, ?, ?, ?, ?, ?, ?)";

			$stmt = $this->execute($query,array($currBook,$title,$_COOKIE["userid"],$lang,10,mTime(),mTime()));
			if($stmt){
				$CSent = new CustomBookSentence($this->redis);
				$respond = $CSent->insert($currBook,$sent,$lang);
			}
			else{
				$respond["status"]=1;
				$respond["message"]="插入新书失败";
			}
		}
		return $respond;
	}
}

class CustomBookSentence extends Table
{
    function __construct($redis=false) {
		parent::__construct(_FILE_DB_USER_CUSTOM_BOOK_, "custom_book_sentence", "", "",$redis);
    }

	public function getAll($book,$para,$start,$end){
		$query="SELECT text,length,lang,modify_time,create_time,owner FROM custom_book_sentence WHERE book = ? AND paragraph = ? AND begin=? AND end = ?";
		$result = $this->fetch($query,array($book,$para,$start,$end));
		if($result){
			return $result;
		}
		else{
			return array("text"=>"","length"=>"","lang"=>"","modify_time"=>0,"create_time"=>0,"owner"=>"");
		}
	}

	#将句子插入数据库
	#包含句子识别算法，表格算一个句子，list算一个句子
	public function insert($book,$content,$lang)
	{
		$respond['status']=0;
		$respond['message']="";
		$respond['content']="";
		# 开始一个事务，关闭自动提交 
		$this->dbh->beginTransaction();
		$query="INSERT INTO custom_book_sentence ('book','paragraph','begin','end','length','text','lang','owner','status','create_time','modify_time') VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
		
		$sth = $this->dbh->prepare($query);
		
		$para = 1;
		$sentNum = 1;
		$newText =  "";
		$isTable=false;
		$isList=false;
		$newSent="";		
		foreach ($content as $data) {
			$trimData = trim($data);
			$newSent .= $trimData;

			/*
			$left2 = mb_substr($trimData,0,2,"UTF-8");
			if($left2 == "- " || $left2 == "* " || $left2 == "+ "){
				$isList=true;
			}
			*/
			if(mb_substr($trimData,0,1,"UTF-8")=="|"){
				$isTable=true;
			}
			if($trimData!="" && ($isTable == true || $isList == true)){
				$newSent .= "\n";
				continue;
			}
			#生成句子编号
			if($trimData==""){
				#空行
				if(strlen($newSent)>0){
					//之前有内容
					{
					$newText .='{{'."{$book}-{$para}-{$sentNum}-{$sentNum}"."}}\n";
					$sth->execute(
							array(
								$book,
								$para,
								$sentNum,
								$sentNum,
								mb_strlen($data,"UTF-8"),
								$newSent,
								$lang,
								$_COOKIE["userid"],
								10,
								mTime(),
								mTime()
							)); 
						}
					$newSent="";				
				}
				#新的段落 不插入数据库
				$para++;
				$sentNum = 1;
				$newText .="\n";
				$isTable = false;
				$isList = false;			
				continue;
			}else{
				$sentNum=$sentNum+10;
			}

			if(mb_substr($trimData,0,2,"UTF-8")=="{{"){
				#已经有的句子链接不处理
				$newText .=$trimData."\n";
			}else{
				
				$newText .='{{'."{$book}-{$para}-{$sentNum}-{$sentNum}"."}}\n";
				$sth->execute(
						array(
							$book,
							$para,
							$sentNum,
							$sentNum,
							mb_strlen($data,"UTF-8"),
							$newSent,
							$lang,
							$_COOKIE["userid"],
							10,
							mTime(),
							mTime()
						));  
				$newSent="";              
			}

		}

		if(strlen($newSent)>0){
			//最后一行是表格结束
			{
			$newText .='{{'."{$book}-{$para}-{$sentNum}-{$sentNum}"."}}\n";
			$sth->execute(
					array(
						$book,
						$para,
						$sentNum,
						$sentNum,
						mb_strlen($data,"UTF-8"),
						$newSent,
						$lang,
						$_COOKIE["userid"],
						10,
						mTime(),
						mTime()
					)); 
				}
			$newSent="";				
		}
		$this->dbh->commit();
		
		if (!$sth || ($sth && $sth->errorCode() != 0)) {
			#  识别错误且回滚更改  
			$this->dbh->rollBack();
			$error = $this->dbh->errorInfo();
			$respond['status']=1;
			$respond['message']=$error[2];
			$respond['content']="";
		}
		else{
			$respond['status']=0;
			$respond['message']="成功";
			$respond['content']=$newText;
		}	

		return $respond;
	}

	public function getText($book,$para,$start,$end){
		$query="SELECT text FROM custom_book_sentence WHERE book = ? AND paragraph = ? AND begin=? AND end = ?";
		$result = $this->fetch($query,array($book,$para,$start,$end));
		if($result){
			return $result["text"];
		}
		else{
			return "unkow";
		}
	}

}

?>