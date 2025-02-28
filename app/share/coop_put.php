<?php
//查询term字典

require_once "../config.php";
require_once "../public/_pdo.php";
require_once '../public/function.php';
require_once '../ucenter/function.php';
require_once '../group/function.php';
require_once "../redis/function.php";
require_once "../collect/function.php";

$respond['status']=0;
$respond['message']="成功";
if(isset($_POST["res_id"])){
	$redis = redis_connect();
	PDO_Connect(_FILE_DB_USER_SHARE_);
	$PDO->beginTransaction();
    $query = "INSERT  INTO share_cooperator ('id','res_id','res_type','cooperator_id','cooperator_type','power','create_time','modify_time','is_deleted') VALUES (null,?,?,?,?,?,?,?,?) ";
	$sth = $PDO->prepare($query);
	$data = json_decode($_POST["user_info"]);
	foreach ($data as $key => $user) {
		# code...
		$sth->execute(array($_POST["res_id"],
							$_POST["res_type"],
							$user->id,
							$user->type,
							$_POST["power"],
							mTime(),
							mTime(),
							0
						));
	}
	$PDO->commit();
        
	if (!$sth || ($sth && $sth->errorCode() != 0)) {
		/*  识别错误且回滚更改  */
		$PDO->rollBack();
		$error = PDO_ErrorInfo();
		$respond['status']=1;
		$respond['message']=$error[2];
		echo json_encode($respond, JSON_UNESCAPED_UNICODE);
		exit;
	}
	else{
		$respond['status']=0;
		$respond['message']="成功";
		if($redis){
			switch ((int)$_POST["res_type"]) {
				case 1:
					# pcs
					$redis->del("power://pcs/".$_POST["res_id"]);
					break;
				case 2:
					# channel
					$redis->del("power://channel/".$_POST["res_id"]);
					break;
				case 3:
					# code...
					$redis->del("power://article/".$_POST["res_id"]);
					break;
				case 4:
					# 文集
					$redis->del("power://collection/".$_POST["res_id"]);
					# 删除文章列表权限缓存
					$collection = new CollectInfo($redis);
					$articleList = $collection->getArticleList($_POST["res_id"]);
					foreach ($articleList as $key => $value) {
						# code...
						$redis->del("power://article/".$value);
					}					
					break;											
				default:
					# code...
					break;
			}
		}
	}	
    echo json_encode($respond, JSON_UNESCAPED_UNICODE);
}
else{
	$respond['status']=1;
	$respond['message']="no res id";
    echo json_encode($respond, JSON_UNESCAPED_UNICODE);
}
?>