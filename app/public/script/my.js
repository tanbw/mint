		function to_roman(k) {
		k=k.replace(/က္ခ္ခ္န္ဓေ/g,'kkhkhndhe');
		k=k.replace(/မ္ပ္မ္ပ္ပိ/g,'mpmppi');
		k=k.replace(/န္တ္န္တ္တိ/g,'ntntti');
		k=k.replace(/သ္မ္သ္မ္မိ/g,'smsmmi');
		k=k.replace(/တ္ထ္တ္ထ္ထိ/g,'tthtththi');
		k=k.replace(/ယ္ဒ္တ္တော/g,'ydtto');
		k=k.replace(/ဝ္တ္တ္ညါ/g,'vttññā');
		k=k.replace(/က္က္ကျာ/g,'kkkyā');
		k=k.replace(/န္တ္တော/g,'ntto');
		k=k.replace(/ဿ္ဒ္ဓိိ/g,'ssddhī');
		k=k.replace(/ဗြှ္မိ/g,'brhmi');
		k=k.replace(/န္ဒြော/g,'ndro');
		k=k.replace(/န္တ္တိ/g,'ntti');
		k=k.replace(/န္တ္တာ/g,'nttā');
		k=k.replace(/န္တ္တီ/g,'nttī');
		k=k.replace(/န္တွော/g,'ntvo');
		k=k.replace(/ပ္ပ္ဖါ/g,'ppphā');
		k=k.replace(/ပ္ပ္ပီ/g,'pppī');
		k=k.replace(/သ္မ္မအ/g,'smmā');
		k=k.replace(/သ္တြော/g,'stro');
		k=k.replace(/တ္ဗ္ဗအ/g,'tbbā');
		k=k.replace(/တ္ထ္ပာ/g,'tthpā');
		k=k.replace(/င်္ဃော/g,'ṅgho');
		k=k.replace(/င်္ဂော/g,'ṅgo');
		k=k.replace(/င်္ခော/g,'ṅkho');
		k=k.replace(/င်္ကော/g,'ṅko');
		k=k.replace(/ဏ္ချော/g,'ṇkhyo');
		k=k.replace(/ဏ္ကျော/g,'ṇkyo');
		k=k.replace(/ဏ္ဋ္ဌိ/g,'ṇṭṭhi');
		k=k.replace(/ဗ္ဘော/g,'bbho');
		k=k.replace(/ဗ္ဗော/g,'bbo');
		k=k.replace(/စ္စ္ဆ/g,'cccha');
		k=k.replace(/စ္ဆော/g,'ccho');
		k=k.replace(/စ္စော/g,'cco');
		k=k.replace(/ဒ္ဓေါ/g,'ddho');
		k=k.replace(/ဒ္ဒေါ/g,'ddo');
		k=k.replace(/ဂ္ဂ္ဂ/g,'ggga');
		k=k.replace(/ဂ္ဃေါ/g,'ggho');
		k=k.replace(/ဂ္ဂေါ/g,'ggo');
		k=k.replace(/ဟ္မော/g,'hmo');
		k=k.replace(/ဇ္ဈော/g,'jjho');
		k=k.replace(/ဇ္ဇ္ဇ/g,'jjja');
		k=k.replace(/ဇ္ဇော/g,'jjo');
		k=k.replace(/က္ခော/g,'kkho');
		k=k.replace(/က္ကော/g,'kko');
		k=k.replace(/က္လော/g,'klo');
		k=k.replace(/က္ဏ္ဋ/g,'kṇṭa');
		k=k.replace(/လ္လော/g,'llo');
		k=k.replace(/မ္ဘော/g,'mbho');
		k=k.replace(/မ္ဗော/g,'mbo');
		k=k.replace(/မ္မော/g,'mmo');
		k=k.replace(/မ္ဖော/g,'mpho');
		k=k.replace(/မ္ပော/g,'mpo');
		k=k.replace(/န္ဓော/g,'ndho');
		k=k.replace(/န္ဓျာ/g,'ndhyā');
		k=k.replace(/န္ဒော/g,'ndo');
		k=k.replace(/န္ဒြေ/g,'ndre');
		k=k.replace(/န္ဒြိ/g,'ndri');
		k=k.replace(/န္ဒြု/g,'ndru');
		k=k.replace(/န္ဒြာ/g,'ndrā');
		k=k.replace(/န္ဒြီ/g,'ndrī');
		k=k.replace(/န္ဒြူ/g,'ndrū');
		k=k.replace(/န္နော/g,'nno');
		k=k.replace(/န္ထော/g,'ntho');
		k=k.replace(/န္တော/g,'nto');
		k=k.replace(/န္တွေ/g,'ntve');
		k=k.replace(/န္တွိ/g,'ntvi');
		k=k.replace(/န္တွု/g,'ntvu');
		k=k.replace(/န္တွာ/g,'ntvā');
		k=k.replace(/န္တွီ/g,'ntvī');
		k=k.replace(/န္တွူ/g,'ntvū');
		k=k.replace(/န္တျေ/g,'ntye');
		k=k.replace(/ပ္ဗေါ/g,'pbo');
		k=k.replace(/ပ္လေါ/g,'plo');
		k=k.replace(/ပ္ဖေါ/g,'ppho');
		k=k.replace(/ပ္ပေါ/g,'ppo');
		k=k.replace(/သ္မော/g,'smo');
		k=k.replace(/သ္နော/g,'sno');
		k=k.replace(/သ္န္ဠ/g,'snḷa');
		k=k.replace(/သ္တော/g,'sto');
		k=k.replace(/သ္တြေ/g,'stre');
		k=k.replace(/သ္တြိ/g,'stri');
		k=k.replace(/သ္တြု/g,'stru');
		k=k.replace(/သ္တြာ/g,'strā');
		k=k.replace(/သ္တြီ/g,'strī');
		k=k.replace(/သ္တြူ/g,'strū');
		k=k.replace(/တ္ထော/g,'ttho');
		k=k.replace(/တ္ထျာ/g,'tthyā');
		k=k.replace(/တ္တော/g,'tto');
		k=k.replace(/ဉ္ဆော/g,'ñcho');
		k=k.replace(/ဉ္စော/g,'ñco');
		k=k.replace(/ဉ္ဈော/g,'ñjho');
		k=k.replace(/ဉ္ဇော/g,'ñjo');
		k=k.replace(/ဍ္ဎော/g,'ḍḍho');
		k=k.replace(/ဍ္ဍော/g,'ḍḍo');
		k=k.replace(/ဠ္ဉ္ဇ/g,'ḷñja');
		k=k.replace(/င်္ဂေ/g,'ṅge');
		k=k.replace(/င်္ဃေ/g,'ṅghe');
		k=k.replace(/င်္ဃိ/g,'ṅghi');
		k=k.replace(/င်္ဃု/g,'ṅghu');
		k=k.replace(/င်္ဃာ/g,'ṅghā');
		k=k.replace(/င်္ဃီ/g,'ṅghī');
		k=k.replace(/င်္ဃူ/g,'ṅghū');
		k=k.replace(/င်္ဂိ/g,'ṅgi');
		k=k.replace(/င်္ဂု/g,'ṅgu');
		k=k.replace(/င်္ဂာ/g,'ṅgā');
		k=k.replace(/င်္ဂီ/g,'ṅgī');
		k=k.replace(/င်္ဂူ/g,'ṅgū');
		k=k.replace(/င်္ကေ/g,'ṅke');
		k=k.replace(/င်္ခေ/g,'ṅkhe');
		k=k.replace(/င်္ခိ/g,'ṅkhi');
		k=k.replace(/င်္ခု/g,'ṅkhu');
		k=k.replace(/င်္ခာ/g,'ṅkhā');
		k=k.replace(/င်္ခီ/g,'ṅkhī');
		k=k.replace(/င်္ခူ/g,'ṅkhū');
		k=k.replace(/င်္ကိ/g,'ṅki');
		k=k.replace(/င်္ကု/g,'ṅku');
		k=k.replace(/င်္ကာ/g,'ṅkā');
		k=k.replace(/င်္ကီ/g,'ṅkī');
		k=k.replace(/င်္ကူ/g,'ṅkū');
		k=k.replace(/ဏ္ဓော/g,'ṇdho');
		k=k.replace(/ဏ္ချေ/g,'ṇkhye');
		k=k.replace(/ဏ္ချု/g,'ṇkhyu');
		k=k.replace(/ဏ္ချာ/g,'ṇkhyā');
		k=k.replace(/ဏ္ချူ/g,'ṇkhyū');
		k=k.replace(/ဏ္ဍော/g,'ṇḍo');
		k=k.replace(/ဏ္ဏော/g,'ṇṇo');
		k=k.replace(/ဏ္ဏ္ဏ/g,'ṇṇṇa');
		k=k.replace(/ဏ္ဌော/g,'ṇṭho');
		k=k.replace(/ဏ္ဋော/g,'ṇṭo');
		k=k.replace(/ဏ္ဋ္ဌ/g,'ṇṭṭha');
		k=k.replace(/ဌ္စေ/g,'ṭhce');
		k=k.replace(/ဋ္ဌော/g,'ṭṭho');
		k=k.replace(/ဋ္ဋော/g,'ṭṭo');
		k=k.replace(/ဗ္ဗေ/g,'bbe');
		k=k.replace(/ဗ္ဘေ/g,'bbhe');
		k=k.replace(/ဗ္ဘိ/g,'bbhi');
		k=k.replace(/ဗ္ဘု/g,'bbhu');
		k=k.replace(/ဗ္ဘာ/g,'bbhā');
		k=k.replace(/ဗ္ဘာ/g,'bbhā');
		k=k.replace(/ဗ္ဘီ/g,'bbhī');
		k=k.replace(/ဗ္ဘူ/g,'bbhū');
		k=k.replace(/ဗ္ဗိ/g,'bbi');
		k=k.replace(/ဗ္ဗု/g,'bbu');
		k=k.replace(/ဗ္ဗာ/g,'bbā');
		k=k.replace(/ဗ္ဗီ/g,'bbī');
		k=k.replace(/ဗ္ဗူ/g,'bbū');
		k=k.replace(/ဘ္မာ/g,'bhmā');
		k=k.replace(/ဗ္မု/g,'bmu');
		k=k.replace(/ဗြော/g,'bro');
		k=k.replace(/ဗြွိ/g,'brvi');
		k=k.replace(/ဗျော/g,'byo');
		k=k.replace(/ဗျော/g,'byo');
		k=k.replace(/စ္စေ/g,'cce');
		k=k.replace(/စ္ဆေ/g,'cche');
		k=k.replace(/စ္ဆိ/g,'cchi');
		k=k.replace(/စ္ဆု/g,'cchu');
		k=k.replace(/စ္ဆာ/g,'cchā');
		k=k.replace(/စ္ဆီ/g,'cchī');
		k=k.replace(/စ္ဆူ/g,'cchū');
		k=k.replace(/စ္စိ/g,'cci');
		k=k.replace(/စ္စု/g,'ccu');
		k=k.replace(/စ္စာ/g,'ccā');
		k=k.replace(/စ္စီ/g,'ccī');
		k=k.replace(/စ္စူ/g,'ccū');
		k=k.replace(/စ္သာ/g,'csā');
		k=k.replace(/ဒ္ဒေ/g,'dde');
		k=k.replace(/ဒ္ဓေ/g,'ddhe');
		k=k.replace(/ဒ္ဓိ/g,'ddhi');
		k=k.replace(/ဒ္ဓု/g,'ddhu');
		k=k.replace(/ဒ္ဓါ/g,'ddhā');
		k=k.replace(/ဒ္ဓီ/g,'ddhī');
		k=k.replace(/ဒ္ဓူ/g,'ddhū');
		k=k.replace(/ဒ္ဒိ/g,'ddi');
		k=k.replace(/ဒ္ဒု/g,'ddu');
		k=k.replace(/ဒ္ဒါ/g,'ddā');
		k=k.replace(/ဒ္ဒီ/g,'ddī');
		k=k.replace(/ဒ္ဒူ/g,'ddū');
		k=k.replace(/ဓ္ဒိ/g,'dhdi');
		k=k.replace(/ဓွေါ/g,'dhvo');
		k=k.replace(/ဓျော/g,'dhyo');
		k=k.replace(/ဒ္မေ/g,'dme');
		k=k.replace(/ဒ္မု/g,'dmu');
		k=k.replace(/ဒ္မါ/g,'dmā');
		k=k.replace(/ဒြေါ/g,'dro');
		k=k.replace(/ဒွေါ/g,'dvo');
		k=k.replace(/ဒျော/g,'dyo');
		k=k.replace(/ဂ္ဓိ/g,'gdhi');
		k=k.replace(/ဂ္ဓါ/g,'gdhā');
		k=k.replace(/ဂ္ဂေ/g,'gge');
		k=k.replace(/ဂ္ဃေ/g,'gghe');
		k=k.replace(/ဂ္ဃိ/g,'gghi');
		k=k.replace(/ဂ္ဃု/g,'gghu');
		k=k.replace(/ဂ္ဃါ/g,'gghā');
		k=k.replace(/ဂ္ဃီ/g,'gghī');
		k=k.replace(/ဂ္ဃူ/g,'gghū');
		k=k.replace(/ဂ္ဂိ/g,'ggi');
		k=k.replace(/ဂ္ဂု/g,'ggu');
		k=k.replace(/ဂ္ဂါ/g,'ggā');
		k=k.replace(/ဂ္ဂီ/g,'ggī');
		k=k.replace(/ဂ္ဂူ/g,'ggū');
		k=k.replace(/ဂြေါ/g,'gro');
		k=k.replace(/ဂျော/g,'gyo');
		k=k.replace(/ဟ္ဈာ/g,'hjhā');
		k=k.replace(/ဟ္မေ/g,'hme');
		k=k.replace(/ဟ္မိ/g,'hmi');
		k=k.replace(/ဟ္မု/g,'hmu');
		k=k.replace(/ဟ္မာ/g,'hmā');
		k=k.replace(/ဟ္မီ/g,'hmī');
		k=k.replace(/ဟ္မူ/g,'hmū');
		k=k.replace(/ဟွော/g,'hvo');
		k=k.replace(/ဇ္ဇေ/g,'jje');
		k=k.replace(/ဇ္ဈေ/g,'jjhe');
		k=k.replace(/ဇ္ဈိ/g,'jjhi');
		k=k.replace(/ဇ္ဈု/g,'jjhu');
		k=k.replace(/ဇ္ဈာ/g,'jjhā');
		k=k.replace(/ဇ္ဈီ/g,'jjhī');
		k=k.replace(/ဇ္ဈူ/g,'jjhū');
		k=k.replace(/ဇ္ဇိ/g,'jji');
		k=k.replace(/ဇ္ဇု/g,'jju');
		k=k.replace(/ဇ္ဇာ/g,'jjā');
		k=k.replace(/ဇ္ဇီ/g,'jjī');
		k=k.replace(/ဇ္ဇူ/g,'jjū');
		k=k.replace(/ဇ္ထီ/g,'jthī');
		k=k.replace(/ဇ္တူ/g,'jtū');
		k=k.replace(/ဇ္ဌိ/g,'jṭhi');
		k=k.replace(/ခွေါ/g,'khvo');
		k=k.replace(/ချော/g,'khyo');
		k=k.replace(/က္ကေ/g,'kke');
		k=k.replace(/က္ခေ/g,'kkhe');
		k=k.replace(/က္ခိ/g,'kkhi');
		k=k.replace(/က္ခု/g,'kkhu');
		k=k.replace(/က္ခာ/g,'kkhā');
		k=k.replace(/က္ခီ/g,'kkhī');
		k=k.replace(/က္ခူ/g,'kkhū');
		k=k.replace(/က္ကိ/g,'kki');
		k=k.replace(/က္ကု/g,'kku');
		k=k.replace(/က္ကာ/g,'kkā');
		k=k.replace(/က္ကီ/g,'kkī');
		k=k.replace(/က္ကူ/g,'kkū');
		k=k.replace(/က္လေ/g,'kle');
		k=k.replace(/က္လိ/g,'kli');
		k=k.replace(/က္လု/g,'klu');
		k=k.replace(/က္လာ/g,'klā');
		k=k.replace(/က္လီ/g,'klī');
		k=k.replace(/က္လူ/g,'klū');
		k=k.replace(/ကြော/g,'kro');
		k=k.replace(/ကွော/g,'kvo');
		k=k.replace(/ကျော/g,'kyo');
		k=k.replace(/လှော/g,'lho');
		k=k.replace(/လ္လေ/g,'lle');
		k=k.replace(/လ္လိ/g,'lli');
		k=k.replace(/လ္လု/g,'llu');
		k=k.replace(/လ္လာ/g,'llā');
		k=k.replace(/လ္လီ/g,'llī');
		k=k.replace(/လ္လူ/g,'llū');
		k=k.replace(/လျော/g,'lyo');
		k=k.replace(/မ္ဗေ/g,'mbe');
		k=k.replace(/မ္ဘေ/g,'mbhe');
		k=k.replace(/မ္ဘိ/g,'mbhi');
		k=k.replace(/မ္ဘု/g,'mbhu');
		k=k.replace(/မ္ဘာ/g,'mbhā');
		k=k.replace(/မ္ဘီ/g,'mbhī');
		k=k.replace(/မ္ဘူ/g,'mbhū');
		k=k.replace(/မ္ဗိ/g,'mbi');
		k=k.replace(/မ္ဗု/g,'mbu');
		k=k.replace(/မ္ဗာ/g,'mbā');
		k=k.replace(/မ္ဗီ/g,'mbī');
		k=k.replace(/မ္ဗူ/g,'mbū');
		k=k.replace(/မှော/g,'mho');
		k=k.replace(/မ္ကု/g,'mku');
		k=k.replace(/မ္မေ/g,'mme');
		k=k.replace(/မ္မိ/g,'mmi');
		k=k.replace(/မ္မု/g,'mmu');
		k=k.replace(/မ္မာ/g,'mmā');
		k=k.replace(/မ္မီ/g,'mmī');
		k=k.replace(/မ္မူ/g,'mmū');
		k=k.replace(/မ္ပေ/g,'mpe');
		k=k.replace(/မ္ဖေ/g,'mphe');
		k=k.replace(/မ္ဖိ/g,'mphi');
		k=k.replace(/မ္ဖု/g,'mphu');
		k=k.replace(/မ္ဖာ/g,'mphā');
		k=k.replace(/မ္ဖီ/g,'mphī');
		k=k.replace(/မ္ဖူ/g,'mphū');
		k=k.replace(/မ္ပိ/g,'mpi');
		k=k.replace(/မ္ပု/g,'mpu');
		k=k.replace(/မ္ပာ/g,'mpā');
		k=k.replace(/မ္ပီ/g,'mpī');
		k=k.replace(/မ္ပူ/g,'mpū');
		k=k.replace(/မ္သိ/g,'msi');
		k=k.replace(/မျော/g,'myo');
		k=k.replace(/န္ဒေ/g,'nde');
		k=k.replace(/န္ဓေ/g,'ndhe');
		k=k.replace(/န္ဓိ/g,'ndhi');
		k=k.replace(/န္ဓု/g,'ndhu');
		k=k.replace(/န္ဓျ/g,'ndhya');
		k=k.replace(/န္ဓာ/g,'ndhā');
		k=k.replace(/န္ဓီ/g,'ndhī');
		k=k.replace(/န္ဓူ/g,'ndhū');
		k=k.replace(/န္ဒိ/g,'ndi');
		k=k.replace(/န္ဒြ/g,'ndra');
		k=k.replace(/န္ဒု/g,'ndu');
		k=k.replace(/န္ဒာ/g,'ndā');
		k=k.replace(/န္ဒီ/g,'ndī');
		k=k.replace(/န္ဒူ/g,'ndū');
		k=k.replace(/နှော/g,'nho');
		k=k.replace(/န္နေ/g,'nne');
		k=k.replace(/န္နိ/g,'nni');
		k=k.replace(/န္နု/g,'nnu');
		k=k.replace(/န္နာ/g,'nnā');
		k=k.replace(/န္နီ/g,'nnī');
		k=k.replace(/န္နူ/g,'nnū');
		k=k.replace(/န္တေ/g,'nte');
		k=k.replace(/န္ထေ/g,'nthe');
		k=k.replace(/န္ထိ/g,'nthi');
		k=k.replace(/န္ထု/g,'nthu');
		k=k.replace(/န္ထာ/g,'nthā');
		k=k.replace(/န္ထီ/g,'nthī');
		k=k.replace(/န္ထူ/g,'nthū');
		k=k.replace(/န္တိ/g,'nti');
		k=k.replace(/န္တြ/g,'ntra');
		k=k.replace(/န္တု/g,'ntu');
		k=k.replace(/န္တွ/g,'ntva');
		k=k.replace(/န္တာ/g,'ntā');
		k=k.replace(/န္တီ/g,'ntī');
		k=k.replace(/န္တူ/g,'ntū');
		k=k.replace(/နျော/g,'nyo');
		k=k.replace(/ပ္ဗေ/g,'pbe');
		k=k.replace(/ပ္ဗိ/g,'pbi');
		k=k.replace(/ပ္ဗု/g,'pbu');
		k=k.replace(/ပ္ဗါ/g,'pbā');
		k=k.replace(/ပ္ဗီ/g,'pbī');
		k=k.replace(/ပ္ဗူ/g,'pbū');
		k=k.replace(/ပ္လေ/g,'ple');
		k=k.replace(/ပ္လိ/g,'pli');
		k=k.replace(/ပ္လု/g,'plu');
		k=k.replace(/ပ္လါ/g,'plā');
		k=k.replace(/ပ္လီ/g,'plī');
		k=k.replace(/ပ္လူ/g,'plū');
		k=k.replace(/ပ္ပေ/g,'ppe');
		k=k.replace(/ပ္ဖေ/g,'pphe');
		k=k.replace(/ပ္ဖိ/g,'pphi');
		k=k.replace(/ပ္ဖု/g,'pphu');
		k=k.replace(/ပ္ဖါ/g,'pphā');
		k=k.replace(/ပ္ဖီ/g,'pphī');
		k=k.replace(/ပ္ဖူ/g,'pphū');
		k=k.replace(/ပ္ပိ/g,'ppi');
		k=k.replace(/ပ္ပု/g,'ppu');
		k=k.replace(/ပ္ပါ/g,'ppā');
		k=k.replace(/ပ္ပီ/g,'ppī');
		k=k.replace(/ပ္ပူ/g,'ppū');
		k=k.replace(/ပျော/g,'pyo');
		k=k.replace(/သ္မေ/g,'sme');
		k=k.replace(/သ္မိ/g,'smi');
		k=k.replace(/သ္မု/g,'smu');
		k=k.replace(/သ္မာ/g,'smā');
		k=k.replace(/သ္မီ/g,'smī');
		k=k.replace(/သ္မူ/g,'smū');
		k=k.replace(/သ္နေ/g,'sne');
		k=k.replace(/သ္နိ/g,'sni');
		k=k.replace(/သ္နု/g,'snu');
		k=k.replace(/သ္နာ/g,'snā');
		k=k.replace(/သ္နီ/g,'snī');
		k=k.replace(/သ္နူ/g,'snū');
		k=k.replace(/ဿ္သိ/g,'sssi');
		k=k.replace(/ဿ္သအ/g,'sssā');
		k=k.replace(/သ္တေ/g,'ste');
		k=k.replace(/သ္တိ/g,'sti');
		k=k.replace(/သ္တြ/g,'stra');
		k=k.replace(/သ္တု/g,'stu');
		k=k.replace(/သ္တာ/g,'stā');
		k=k.replace(/သ္တီ/g,'stī');
		k=k.replace(/သ္တူ/g,'stū');
		k=k.replace(/သွော/g,'svo');
		k=k.replace(/သျော/g,'syo');
		k=k.replace(/တြော/g,'tro');
		k=k.replace(/တ္တေ/g,'tte');
		k=k.replace(/တ္ထေ/g,'tthe');
		k=k.replace(/တ္ထိ/g,'tthi');
		k=k.replace(/တ္ထု/g,'tthu');
		k=k.replace(/တ္ထျ/g,'tthya');
		k=k.replace(/တ္ထာ/g,'tthā');
		k=k.replace(/တ္ထီ/g,'tthī');
		k=k.replace(/တ္ထူ/g,'tthū');
		k=k.replace(/တ္တိ/g,'tti');
		k=k.replace(/တ္တု/g,'ttu');
		k=k.replace(/တ္တာ/g,'ttā');
		k=k.replace(/တ္တီ/g,'ttī');
		k=k.replace(/တ္တူ/g,'ttū');
		k=k.replace(/တွော/g,'tvo');
		k=k.replace(/တျော/g,'tyo');
		k=k.replace(/ဝှေါ/g,'vho');
		k=k.replace(/ယှော/g,'yho');
		k=k.replace(/ယျော/g,'yyo');
		k=k.replace(/ဉ္စေ/g,'ñce');
		k=k.replace(/ဉ္ဆေ/g,'ñche');
		k=k.replace(/ဉ္ဆိ/g,'ñchi');
		k=k.replace(/ဉ္ဆု/g,'ñchu');
		k=k.replace(/ဉ္ဆာ/g,'ñchā');
		k=k.replace(/ဉ္ဆီ/g,'ñchī');
		k=k.replace(/ဉ္ဆူ/g,'ñchū');
		k=k.replace(/ဉ္စိ/g,'ñci');
		k=k.replace(/ဉ္စု/g,'ñcu');
		k=k.replace(/ဉ္စာ/g,'ñcā');
		k=k.replace(/ဉ္စီ/g,'ñcī');
		k=k.replace(/ဉ္စူ/g,'ñcū');
		k=k.replace(/ဉှော/g,'ñho');
		k=k.replace(/ဉ္ဇေ/g,'ñje');
		k=k.replace(/ဉ္ဈေ/g,'ñjhe');
		k=k.replace(/ဉ္ဈိ/g,'ñjhi');
		k=k.replace(/ဉ္ဈု/g,'ñjhu');
		k=k.replace(/ဉ္ဈာ/g,'ñjhā');
		k=k.replace(/ဉ္ဈီ/g,'ñjhī');
		k=k.replace(/ဉ္ဈူ/g,'ñjhū');
		k=k.replace(/ဉ္ဇိ/g,'ñji');
		k=k.replace(/ဉ္ဇု/g,'ñju');
		k=k.replace(/ဉ္ဇာ/g,'ñjā');
		k=k.replace(/ဉ္ဇီ/g,'ñjī');
		k=k.replace(/ဉ္ဇူ/g,'ñjū');
		k=k.replace(/ဉ္မာ/g,'ñmā');
		k=k.replace(/ည္ဉာ/g,'ñññā');
		k=k.replace(/ဍ္ဍေ/g,'ḍḍe');
		k=k.replace(/ဍ္ဎု/g,'ḍḍhu');
		k=k.replace(/ဍ္ဎီ/g,'ḍḍhī');
		k=k.replace(/ဍ္ဎူ/g,'ḍḍhū');
		k=k.replace(/ဍ္ဍိ/g,'ḍḍi');
		k=k.replace(/ဍ္ဍု/g,'ḍḍu');
		k=k.replace(/ဍ္ဍာ/g,'ḍḍā');
		k=k.replace(/ဍ္ဍီ/g,'ḍḍī');
		k=k.replace(/ဍ္ဍူ/g,'ḍḍū');
		k=k.replace(/ဠှော/g,'ḷho');
		k=k.replace(/င်္ဂ/g,'ṅga');
		k=k.replace(/င်္ဃ/g,'ṅgha');
		k=k.replace(/င်္က/g,'ṅka');
		k=k.replace(/င်္ခ/g,'ṅkha');
		k=k.replace(/ဏှော/g,'ṇho');
		k=k.replace(/ဏ္ချ/g,'ṇkhya');
		k=k.replace(/ဏ္ကျ/g,'ṇkya');
		k=k.replace(/ဏ္ဍေ/g,'ṇḍe');
		k=k.replace(/ဏ္ဍိ/g,'ṇḍi');
		k=k.replace(/ဏ္ဍု/g,'ṇḍu');
		k=k.replace(/ဏ္ဍာ/g,'ṇḍā');
		k=k.replace(/ဏ္ဍီ/g,'ṇḍī');
		k=k.replace(/ဏ္ဍူ/g,'ṇḍū');
		k=k.replace(/ဏ္ဏေ/g,'ṇṇe');
		k=k.replace(/ဏ္ဏိ/g,'ṇṇi');
		k=k.replace(/ဏ္ဏု/g,'ṇṇu');
		k=k.replace(/ဏ္ဏာ/g,'ṇṇā');
		k=k.replace(/ဏ္ဏီ/g,'ṇṇī');
		k=k.replace(/ဏ္ဏူ/g,'ṇṇū');
		k=k.replace(/ဏ္ဋေ/g,'ṇṭe');
		k=k.replace(/ဏ္ဌေ/g,'ṇṭhe');
		k=k.replace(/ဏ္ဌိ/g,'ṇṭhi');
		k=k.replace(/ဏ္ဌု/g,'ṇṭhu');
		k=k.replace(/ဏ္ဌာ/g,'ṇṭhā');
		k=k.replace(/ဏ္ဌီ/g,'ṇṭhī');
		k=k.replace(/ဏ္ဌူ/g,'ṇṭhū');
		k=k.replace(/ဏ္ဋိ/g,'ṇṭi');
		k=k.replace(/ဏ္ဋု/g,'ṇṭu');
		k=k.replace(/ဏ္ဋာ/g,'ṇṭā');
		k=k.replace(/ဏ္ဋီ/g,'ṇṭī');
		k=k.replace(/ဋ္တိ/g,'ṭti');
		k=k.replace(/ဋ္ဋေ/g,'ṭṭe');
		k=k.replace(/ဋ္ဌေ/g,'ṭṭhe');
		k=k.replace(/ဋ္ဌိ/g,'ṭṭhi');
		k=k.replace(/ဋ္ဌု/g,'ṭṭhu');
		k=k.replace(/ဋ္ဌျ/g,'ṭṭhya');
		k=k.replace(/ဋ္ဌာ/g,'ṭṭhā');
		k=k.replace(/ဋ္ဌီ/g,'ṭṭhī');
		k=k.replace(/ဋ္ဌူ/g,'ṭṭhū');
		k=k.replace(/ဋ္ဋိ/g,'ṭṭi');
		k=k.replace(/ဋ္ဋု/g,'ṭṭu');
		k=k.replace(/ဋ္ဋာ/g,'ṭṭā');
		k=k.replace(/ဋ္ဋီ/g,'ṭṭī');
		k=k.replace(/ဋ္ဋူ/g,'ṭṭū');
		k=k.replace(/ဂွါ/g,'Gvā');
		k=k.replace(/ဗ္ဗ/g,'bba');
		k=k.replace(/ဗ္ဘ/g,'bbha');
		k=k.replace(/ဗ္ဘ/g,'bbha');
		k=k.replace(/ဘော/g,'bho');
		k=k.replace(/ဘျာ/g,'bhyā');
		k=k.replace(/ဘျူ/g,'bhyū');
		k=k.replace(/ဗော/g,'bo');
		k=k.replace(/ဗြေ/g,'bre');
		k=k.replace(/ဗြိ/g,'bri');
		k=k.replace(/ဗြု/g,'bru');
		k=k.replace(/ဗြာ/g,'brā');
		k=k.replace(/ဗြီ/g,'brī');
		k=k.replace(/ဗြူ/g,'brū');
		k=k.replace(/ဗွေ/g,'bve');
		k=k.replace(/ဗွာ/g,'bvā');
		k=k.replace(/ဗျေ/g,'bye');
		k=k.replace(/ဗျိ/g,'byi');
		k=k.replace(/ဗျု/g,'byu');
		k=k.replace(/ဗျာ/g,'byā');
		k=k.replace(/ဗျီ/g,'byī');
		k=k.replace(/ဗျူ/g,'byū');
		k=k.replace(/စ္စ/g,'cca');
		k=k.replace(/စ္ဆ/g,'ccha');
		k=k.replace(/ဆော/g,'cho');
		k=k.replace(/စော/g,'co');
		k=k.replace(/ဒ္ဒ/g,'dda');
		k=k.replace(/ဒ္ဓ/g,'ddha');
		k=k.replace(/ဓေါ/g,'dho');
		k=k.replace(/ဓွေ/g,'dhve');
		k=k.replace(/ဓွိ/g,'dhvi');
		k=k.replace(/ဓွု/g,'dhvu');
		k=k.replace(/ဓွါ/g,'dhvā');
		k=k.replace(/ဓွီ/g,'dhvī');
		k=k.replace(/ဓွူ/g,'dhvū');
		k=k.replace(/ဓျေ/g,'dhye');
		k=k.replace(/ဓျိ/g,'dhyi');
		k=k.replace(/ဓျု/g,'dhyu');
		k=k.replace(/ဓျာ/g,'dhyā');
		k=k.replace(/ဓျီ/g,'dhyī');
		k=k.replace(/ဓျူ/g,'dhyū');
		k=k.replace(/ဒ္မ/g,'dma');
		k=k.replace(/ဒေါ/g,'do');
		k=k.replace(/ဒ္ပ/g,'dpa');
		k=k.replace(/ဒြေ/g,'dre');
		k=k.replace(/ဒြိ/g,'dri');
		k=k.replace(/ဒြု/g,'dru');
		k=k.replace(/ဒြါ/g,'drā');
		k=k.replace(/ဒြီ/g,'drī');
		k=k.replace(/ဒြူ/g,'drū');
		k=k.replace(/ဒွေ/g,'dve');
		k=k.replace(/ဒွိ/g,'dvi');
		k=k.replace(/ဒွု/g,'dvu');
		k=k.replace(/ဒွါ/g,'dvā');
		k=k.replace(/ဒွီ/g,'dvī');
		k=k.replace(/ဒွူ/g,'dvū');
		k=k.replace(/ဒျေ/g,'dye');
		k=k.replace(/ဒျိ/g,'dyi');
		k=k.replace(/ဒျု/g,'dyu');
		k=k.replace(/ဒျာ/g,'dyā');
		k=k.replace(/ဒျီ/g,'dyī');
		k=k.replace(/ဒျူ/g,'dyū');
		k=k.replace(/ဂ္ဓ/g,'gdha');
		k=k.replace(/ဂ္ဂ/g,'gga');
		k=k.replace(/ဂ္ဃ/g,'ggha');
		k=k.replace(/ဃော/g,'gho');
		k=k.replace(/ဂေါ/g,'go');
		k=k.replace(/ဂြေ/g,'gre');
		k=k.replace(/ဂြိ/g,'gri');
		k=k.replace(/ဂြု/g,'gru');
		k=k.replace(/ဂြါ/g,'grā');
		k=k.replace(/ဂြီ/g,'grī');
		k=k.replace(/ဂြူ/g,'grū');
		k=k.replace(/ဂျေ/g,'gye');
		k=k.replace(/ဂျိ/g,'gyi');
		k=k.replace(/ဂျု/g,'gyu');
		k=k.replace(/ဂျာ/g,'gyā');
		k=k.replace(/ဂျီ/g,'gyī');
		k=k.replace(/ဂျူ/g,'gyū');
		k=k.replace(/ဟ္မ/g,'hma');
		k=k.replace(/ဟော/g,'ho');
		k=k.replace(/ဟွေ/g,'hve');
		k=k.replace(/ဟွိ/g,'hvi');
		k=k.replace(/ဟွု/g,'hvu');
		k=k.replace(/ဟွာ/g,'hvā');
		k=k.replace(/ဟွီ/g,'hvī');
		k=k.replace(/ဟွူ/g,'hvū');
		k=k.replace(/ဈော/g,'jho');
		k=k.replace(/ဇ္ဇ/g,'jja');
		k=k.replace(/ဇ္ဈ/g,'jjha');
		k=k.replace(/ဇော/g,'jo');
		k=k.replace(/ခေါ/g,'kho');
		k=k.replace(/ခွေ/g,'khve');
		k=k.replace(/ခွိ/g,'khvi');
		k=k.replace(/ခွု/g,'khvu');
		k=k.replace(/ခွါ/g,'khvā');
		k=k.replace(/ခွီ/g,'khvī');
		k=k.replace(/ခွူ/g,'khvū');
		k=k.replace(/ချေ/g,'khye');
		k=k.replace(/ချိ/g,'khyi');
		k=k.replace(/ချု/g,'khyu');
		k=k.replace(/ချာ/g,'khyā');
		k=k.replace(/ချီ/g,'khyī');
		k=k.replace(/ချူ/g,'khyū');
		k=k.replace(/က္က/g,'kka');
		k=k.replace(/က္ခ/g,'kkha');
		k=k.replace(/က္လ/g,'kla');
		k=k.replace(/ကော/g,'ko');
		k=k.replace(/ကြေ/g,'kre');
		k=k.replace(/ကြိ/g,'kri');
		k=k.replace(/ကြု/g,'kru');
		k=k.replace(/ကြာ/g,'krā');
		k=k.replace(/ကြီ/g,'krī');
		k=k.replace(/ကြူ/g,'krū');
		k=k.replace(/ကွေ/g,'kve');
		k=k.replace(/ကွိ/g,'kvi');
		k=k.replace(/ကွု/g,'kvu');
		k=k.replace(/ကွာ/g,'kvā');
		k=k.replace(/ကွီ/g,'kvī');
		k=k.replace(/ကွူ/g,'kvū');
		k=k.replace(/ကျေ/g,'kye');
		k=k.replace(/ကျိ/g,'kyi');
		k=k.replace(/ကျု/g,'kyu');
		k=k.replace(/ကျာ/g,'kyā');
		k=k.replace(/ကျီ/g,'kyī');
		k=k.replace(/ကျူ/g,'kyū');
		k=k.replace(/လှေ/g,'lhe');
		k=k.replace(/လှိ/g,'lhi');
		k=k.replace(/လှု/g,'lhu');
		k=k.replace(/လှာ/g,'lhā');
		k=k.replace(/လှီ/g,'lhī');
		k=k.replace(/လှူ/g,'lhū');
		k=k.replace(/လ္လ/g,'lla');
		k=k.replace(/လော/g,'lo');
		k=k.replace(/လျေ/g,'lye');
		k=k.replace(/လျိ/g,'lyi');
		k=k.replace(/လျု/g,'lyu');
		k=k.replace(/လျာ/g,'lyā');
		k=k.replace(/လျီ/g,'lyī');
		k=k.replace(/လျူ/g,'lyū');
		k=k.replace(/မ္ဗ/g,'mba');
		k=k.replace(/မ္ဘ/g,'mbha');
		k=k.replace(/မှေ/g,'mhe');
		k=k.replace(/မှိ/g,'mhi');
		k=k.replace(/မှု/g,'mhu');
		k=k.replace(/မှာ/g,'mhā');
		k=k.replace(/မှီ/g,'mhī');
		k=k.replace(/မှူ/g,'mhū');
		k=k.replace(/မ္မ/g,'mma');
		k=k.replace(/မော/g,'mo');
		k=k.replace(/မ္ပ/g,'mpa');
		k=k.replace(/မ္ဖ/g,'mpha');
		k=k.replace(/မွိ/g,'mvi');
		k=k.replace(/မျေ/g,'mye');
		k=k.replace(/မျိ/g,'myi');
		k=k.replace(/မျု/g,'myu');
		k=k.replace(/မျာ/g,'myā');
		k=k.replace(/မျီ/g,'myī');
		k=k.replace(/မျူ/g,'myū');
		k=k.replace(/န္ဒ/g,'nda');
		k=k.replace(/န္ဓ/g,'ndha');
		k=k.replace(/နှေ/g,'nhe');
		k=k.replace(/နှိ/g,'nhi');
		k=k.replace(/နှု/g,'nhu');
		k=k.replace(/နှာ/g,'nhā');
		k=k.replace(/နှီ/g,'nhī');
		k=k.replace(/နှူ/g,'nhū');
		k=k.replace(/န္န/g,'nna');
		k=k.replace(/နော/g,'no');
		k=k.replace(/န္တ/g,'nta');
		k=k.replace(/န္ထ/g,'ntha');
		k=k.replace(/နွေ/g,'nve');
		k=k.replace(/နွိ/g,'nvi');
		k=k.replace(/နွာ/g,'nvā');
		k=k.replace(/နျေ/g,'nye');
		k=k.replace(/နျိ/g,'nyi');
		k=k.replace(/နျု/g,'nyu');
		k=k.replace(/နျာ/g,'nyā');
		k=k.replace(/နျီ/g,'nyī');
		k=k.replace(/နျူ/g,'nyū');
		k=k.replace(/န္ဍ/g,'nḍa');
		k=k.replace(/န္ဌ/g,'nṭha');
		k=k.replace(/ပ္ဗ/g,'pba');
		k=k.replace(/ဖော/g,'pho');
		k=k.replace(/ဖြူ/g,'phrū');
		k=k.replace(/ပ္လ/g,'pla');
		k=k.replace(/ပေါ/g,'po');
		k=k.replace(/ပ္ပ/g,'ppa');
		k=k.replace(/ပ္ဖ/g,'ppha');
		k=k.replace(/ပွါ/g,'pvā');
		k=k.replace(/ပျေ/g,'pye');
		k=k.replace(/ပျိ/g,'pyi');
		k=k.replace(/ပျု/g,'pyu');
		k=k.replace(/ပျာ/g,'pyā');
		k=k.replace(/ပျီ/g,'pyī');
		k=k.replace(/ပျူ/g,'pyū');
		k=k.replace(/ပ္ဏ/g,'pṇa');
		k=k.replace(/ရော/g,'ro');
		k=k.replace(/သ္မ/g,'sma');
		k=k.replace(/သ္န/g,'sna');
		k=k.replace(/သော/g,'so');
		k=k.replace(/သ္ပ/g,'spa');
		k=k.replace(/ဿော/g,'sso');
		k=k.replace(/ဿ္ပ/g,'sspa');
		k=k.replace(/ဿ္သ/g,'sssa');
		k=k.replace(/သ္တ/g,'sta');
		k=k.replace(/သွေ/g,'sve');
		k=k.replace(/သွိ/g,'svi');
		k=k.replace(/သွု/g,'svu');
		k=k.replace(/သွာ/g,'svā');
		k=k.replace(/သွီ/g,'svī');
		k=k.replace(/သွူ/g,'svū');
		k=k.replace(/သျေ/g,'sye');
		k=k.replace(/သျိ/g,'syi');
		k=k.replace(/သျု/g,'syu');
		k=k.replace(/သျာ/g,'syā');
		k=k.replace(/သျီ/g,'syī');
		k=k.replace(/သျူ/g,'syū');
		k=k.replace(/တ္စ/g,'tca');
		k=k.replace(/ထော/g,'tho');
		k=k.replace(/ထျအ/g,'thyā');
		k=k.replace(/တ္ဈ/g,'tjha');
		k=k.replace(/တော/g,'to');
		k=k.replace(/တ္ပ/g,'tpa');
		k=k.replace(/တြေ/g,'tre');
		k=k.replace(/တြိ/g,'tri');
		k=k.replace(/တြု/g,'tru');
		k=k.replace(/တြာ/g,'trā');
		k=k.replace(/တြီ/g,'trī');
		k=k.replace(/တြူ/g,'trū');
		k=k.replace(/တ္တ/g,'tta');
		k=k.replace(/တ္ထ/g,'ttha');
		k=k.replace(/တွေ/g,'tve');
		k=k.replace(/တွိ/g,'tvi');
		k=k.replace(/တွု/g,'tvu');
		k=k.replace(/တွာ/g,'tvā');
		k=k.replace(/တွီ/g,'tvī');
		k=k.replace(/တွူ/g,'tvū');
		k=k.replace(/တျေ/g,'tye');
		k=k.replace(/တျိ/g,'tyi');
		k=k.replace(/တျု/g,'tyu');
		k=k.replace(/တျာ/g,'tyā');
		k=k.replace(/တျီ/g,'tyī');
		k=k.replace(/တျူ/g,'tyū');
		k=k.replace(/ဝ္ဗ/g,'vba');
		k=k.replace(/ဝှေ/g,'vhe');
		k=k.replace(/ဝှိ/g,'vhi');
		k=k.replace(/ဝှု/g,'vhu');
		k=k.replace(/ဝှါ/g,'vhā');
		k=k.replace(/ဝှီ/g,'vhī');
		k=k.replace(/ဝှူ/g,'vhū');
		k=k.replace(/ဝေါ/g,'vo');
		k=k.replace(/ဝွိ/g,'vvi');
		k=k.replace(/ဝျာ/g,'vyā');
		k=k.replace(/ယှေ/g,'yhe');
		k=k.replace(/ယှိ/g,'yhi');
		k=k.replace(/ယှု/g,'yhu');
		k=k.replace(/ယှာ/g,'yhā');
		k=k.replace(/ယှီ/g,'yhī');
		k=k.replace(/ယှူ/g,'yhū');
		k=k.replace(/ယော/g,'yo');
		k=k.replace(/ယွာ/g,'yvā');
		k=k.replace(/ယျေ/g,'yye');
		k=k.replace(/ယျိ/g,'yyi');
		k=k.replace(/ယျု/g,'yyu');
		k=k.replace(/ယျာ/g,'yyā');
		k=k.replace(/ယျီ/g,'yyī');
		k=k.replace(/ယျူ/g,'yyū');
		k=k.replace(/ဉ္စ/g,'ñca');
		k=k.replace(/ဉ္ဆ/g,'ñcha');
		k=k.replace(/ဉှေ/g,'ñhe');
		k=k.replace(/ဉှိ/g,'ñhi');
		k=k.replace(/ဉှု/g,'ñhu');
		k=k.replace(/ဉှာ/g,'ñhā');
		k=k.replace(/ဉှီ/g,'ñhī');
		k=k.replace(/ဉှူ/g,'ñhū');
		k=k.replace(/ဉ္ဇ/g,'ñja');
		k=k.replace(/ဉ္ဈ/g,'ñjha');
		k=k.replace(/ဉော/g,'ño');
		k=k.replace(/ညော/g,'ñño');
		k=k.replace(/ဎော/g,'ḍho');
		k=k.replace(/ဎ္ဍ/g,'ḍhḍa');
		k=k.replace(/ဍော/g,'ḍo');
		k=k.replace(/ဍ္တ/g,'ḍta');
		k=k.replace(/ဍ္ဍ/g,'ḍḍa');
		k=k.replace(/ဍ္ဎ/g,'ḍḍha');
		k=k.replace(/ဠှေ/g,'ḷhe');
		k=k.replace(/ဠှိ/g,'ḷhi');
		k=k.replace(/ဠှု/g,'ḷhu');
		k=k.replace(/ဠှာ/g,'ḷhā');
		k=k.replace(/ဠှီ/g,'ḷhī');
		k=k.replace(/ဠှူ/g,'ḷhū');
		k=k.replace(/ဠော/g,'ḷo');
		k=k.replace(/ငော/g,'ṅo');
		k=k.replace(/ဏှေ/g,'ṇhe');
		k=k.replace(/ဏှိ/g,'ṇhi');
		k=k.replace(/ဏှိ/g,'ṇhi');
		k=k.replace(/ဏှု/g,'ṇhu');
		k=k.replace(/ဏှာ/g,'ṇhā');
		k=k.replace(/ဏှီ/g,'ṇhī');
		k=k.replace(/ဏှူ/g,'ṇhū');
		k=k.replace(/ဏော/g,'ṇo');
		k=k.replace(/ဏွု/g,'ṇvu');
		k=k.replace(/ဏွာ/g,'ṇvā');
		k=k.replace(/ဏျာ/g,'ṇyā');
		k=k.replace(/ဏ္ဍ/g,'ṇḍa');
		k=k.replace(/ဏ္ဏ/g,'ṇṇa');
		k=k.replace(/ဏ္ဋ/g,'ṇṭa');
		k=k.replace(/ဏ္ဌ/g,'ṇṭha');
		k=k.replace(/ဌော/g,'ṭho');
		k=k.replace(/ဋော/g,'ṭo');
		k=k.replace(/ဋျု/g,'ṭyu');
		k=k.replace(/ဋ္ဋ/g,'ṭṭa');
		k=k.replace(/ဋ္ဌ/g,'ṭṭha');
		k=k.replace(/ဗေ/g,'be');
		k=k.replace(/ဘေ/g,'bhe');
		k=k.replace(/ဘိ/g,'bhi');
		k=k.replace(/ဘု/g,'bhu');
		k=k.replace(/ဘျ/g,'bhya');
		k=k.replace(/ဘာ/g,'bhā');
		k=k.replace(/ဘီ/g,'bhī');
		k=k.replace(/ဘူ/g,'bhū');
		k=k.replace(/ဗိ/g,'bi');
		k=k.replace(/ဗြ/g,'bra');
		k=k.replace(/ဗု/g,'bu');
		k=k.replace(/ဗျ/g,'bya');
		k=k.replace(/ဗာ/g,'bā');
		k=k.replace(/ဗီ/g,'bī');
		k=k.replace(/ဗူ/g,'bū');
		k=k.replace(/စေ/g,'ce');
		k=k.replace(/ဆေ/g,'che');
		k=k.replace(/ဆိ/g,'chi');
		k=k.replace(/ဆု/g,'chu');
		k=k.replace(/ဆာ/g,'chā');
		k=k.replace(/ဆီ/g,'chī');
		k=k.replace(/ဆူ/g,'chū');
		k=k.replace(/စိ/g,'ci');
		k=k.replace(/စု/g,'cu');
		k=k.replace(/စာ/g,'cā');
		k=k.replace(/စီ/g,'cī');
		k=k.replace(/စူ/g,'cū');
		k=k.replace(/ဒေ/g,'de');
		k=k.replace(/ဓေ/g,'dhe');
		k=k.replace(/ဓိ/g,'dhi');
		k=k.replace(/ဓု/g,'dhu');
		k=k.replace(/ဓွ/g,'dhva');
		k=k.replace(/ဓျ/g,'dhya');
		k=k.replace(/ဓါ/g,'dhā');
		k=k.replace(/ဓီ/g,'dhī');
		k=k.replace(/ဓူ/g,'dhū');
		k=k.replace(/ဒိ/g,'di');
		k=k.replace(/ဒြ/g,'dra');
		k=k.replace(/ဒု/g,'du');
		k=k.replace(/ဒွ/g,'dva');
		k=k.replace(/ဒျ/g,'dya');
		k=k.replace(/ဒါ/g,'dā');
		k=k.replace(/ဒီ/g,'dī');
		k=k.replace(/ဒူ/g,'dū');
		k=k.replace(/ဂေ/g,'ge');
		k=k.replace(/ဃေ/g,'ghe');
		k=k.replace(/ဃိ/g,'ghi');
		k=k.replace(/ဃု/g,'ghu');
		k=k.replace(/ဃာ/g,'ghā');
		k=k.replace(/ဃီ/g,'ghī');
		k=k.replace(/ဃူ/g,'ghū');
		k=k.replace(/ဂိ/g,'gi');
		k=k.replace(/ဂြ/g,'gra');
		k=k.replace(/ဂု/g,'gu');
		k=k.replace(/ဂျ/g,'gya');
		k=k.replace(/ဂါ/g,'gā');
		k=k.replace(/ဂီ/g,'gī');
		k=k.replace(/ဂူ/g,'gū');
		k=k.replace(/ဟေ/g,'he');
		k=k.replace(/ဟိ/g,'hi');
		k=k.replace(/ဟု/g,'hu');
		k=k.replace(/ဟွ/g,'hva');
		k=k.replace(/ဟျ/g,'hya');
		k=k.replace(/ဟာ/g,'hā');
		k=k.replace(/ဟီ/g,'hī');
		k=k.replace(/ဟူ/g,'hū');
		k=k.replace(/ဇေ/g,'je');
		k=k.replace(/ဈေ/g,'jhe');
		k=k.replace(/ဈိ/g,'jhi');
		k=k.replace(/ဈု/g,'jhu');
		k=k.replace(/ဈာ/g,'jhā');
		k=k.replace(/ဈီ/g,'jhī');
		k=k.replace(/ဈူ/g,'jhū');
		k=k.replace(/ဇိ/g,'ji');
		k=k.replace(/ဇု/g,'ju');
		k=k.replace(/ဇာ/g,'jā');
		k=k.replace(/ဇီ/g,'jī');
		k=k.replace(/ဇူ/g,'jū'); 
		k=k.replace(/ကေ/g,'ke');
		k=k.replace(/ခေ/g,'khe');
		k=k.replace(/ခိ/g,'khi');
		k=k.replace(/ခု/g,'khu');
		k=k.replace(/ခွ/g,'khva');
		k=k.replace(/ချ/g,'khya');
		k=k.replace(/ခါ/g,'khā');
		k=k.replace(/ခီ/g,'khī');
		k=k.replace(/ခူ/g,'khū');
		k=k.replace(/ကိ/g,'ki');
		k=k.replace(/ကြ/g,'kra');
		k=k.replace(/ကု/g,'ku');
		k=k.replace(/ကွ/g,'kva');
		k=k.replace(/ကျ/g,'kya');
		k=k.replace(/ကာ/g,'kā');
		k=k.replace(/ကီ/g,'kī');
		k=k.replace(/ကူ/g,'kū');
		k=k.replace(/လေ/g,'le');
		k=k.replace(/လှ/g,'lha');
		k=k.replace(/လိ/g,'li');
		k=k.replace(/လု/g,'lu');
		k=k.replace(/လျ/g,'lya');
		k=k.replace(/လာ/g,'lā');
		k=k.replace(/လီ/g,'lī');
		k=k.replace(/လူ/g,'lū');
		k=k.replace(/မေ/g,'me');
		k=k.replace(/မှ/g,'mha');
		k=k.replace(/မိ/g,'mi');
		k=k.replace(/မု/g,'mu');
		k=k.replace(/မျ/g,'mya');
		k=k.replace(/မာ/g,'mā');
		k=k.replace(/မီ/g,'mī');
		k=k.replace(/မူ/g,'mū');
		k=k.replace(/နေ/g,'ne');
		k=k.replace(/နှ/g,'nha');
		k=k.replace(/နိ/g,'ni');
		k=k.replace(/နု/g,'nu');
		k=k.replace(/နွ/g,'nva');
		k=k.replace(/နျ/g,'nya');
		k=k.replace(/နာ/g,'nā');
		k=k.replace(/နီ/g,'nī');
		k=k.replace(/နူ/g,'nū');
		k=k.replace(/ပေ/g,'pe');
		k=k.replace(/ဖေ/g,'phe');
		k=k.replace(/ဖိ/g,'phi');
		k=k.replace(/ဖု/g,'phu');
		k=k.replace(/ဖာ/g,'phā');
		k=k.replace(/ဖီ/g,'phī');
		k=k.replace(/ဖူ/g,'phū');
		k=k.replace(/ပိ/g,'pi');
		k=k.replace(/ပြ/g,'pra');
		k=k.replace(/ပု/g,'pu');
		k=k.replace(/ပျ/g,'pya');
		k=k.replace(/ပါ/g,'pā');
		k=k.replace(/ပီ/g,'pī');
		k=k.replace(/ပူ/g,'pū');
		k=k.replace(/ရေ/g,'re');
		k=k.replace(/ရိ/g,'ri');
		k=k.replace(/ရု/g,'ru');
		k=k.replace(/ရာ/g,'rā');
		k=k.replace(/ရီ/g,'rī');
		k=k.replace(/ရူ/g,'rū');
		k=k.replace(/သေ/g,'se');
		k=k.replace(/သိ/g,'si');
		k=k.replace(/ဿေ/g,'sse');
		k=k.replace(/ဿိ/g,'ssi');
		k=k.replace(/ဿု/g,'ssu');
		k=k.replace(/ဿွ/g,'ssva');
		k=k.replace(/ဿာ/g,'ssā');
		k=k.replace(/ဿီ/g,'ssī');
		k=k.replace(/ဿူ/g,'ssū');
		k=k.replace(/သု/g,'su');
		k=k.replace(/သွ/g,'sva');
		k=k.replace(/သျ/g,'sya');
		k=k.replace(/သာ/g,'sā');
		k=k.replace(/သီ/g,'sī');
		k=k.replace(/သူ/g,'sū');
		k=k.replace(/တေ/g,'te');
		k=k.replace(/ထေ/g,'the');
		k=k.replace(/ထိ/g,'thi');
		k=k.replace(/ထု/g,'thu');
		k=k.replace(/ထျ/g,'thya');
		k=k.replace(/ထာ/g,'thā');
		k=k.replace(/ထီ/g,'thī');
		k=k.replace(/ထူ/g,'thū');
		k=k.replace(/တိ/g,'ti');
		k=k.replace(/တြ/g,'tra');
		k=k.replace(/တု/g,'tu');
		k=k.replace(/တွ/g,'tva');
		k=k.replace(/တျ/g,'tya');
		k=k.replace(/တာ/g,'tā');
		k=k.replace(/တီ/g,'tī');
		k=k.replace(/တူ/g,'tū');
		k=k.replace(/ဝေ/g,'ve');
		k=k.replace(/ဝှ/g,'vha');
		k=k.replace(/ဝိ/g,'vi');
		k=k.replace(/ဝု/g,'vu');
		k=k.replace(/ဝျ/g,'vya');
		k=k.replace(/ဝါ/g,'vā');
		k=k.replace(/ဝီ/g,'vī');
		k=k.replace(/ဝူ/g,'vū');
		k=k.replace(/ယေ/g,'ye');
		k=k.replace(/ယှ/g,'yha');
		k=k.replace(/ယိ/g,'yi');
		k=k.replace(/ယု/g,'yu');
		k=k.replace(/ယျ/g,'yya');
		k=k.replace(/ယာ/g,'yā');
		k=k.replace(/ယီ/g,'yī');
		k=k.replace(/ယူ/g,'yū');
		k=k.replace(/ဉေ/g,'ñe');
		k=k.replace(/ဉှ/g,'ñha');
		k=k.replace(/ဉိ/g,'ñi');
		k=k.replace(/ဉု/g,'ñu');
		k=k.replace(/ညေ/g,'ññe');
		k=k.replace(/ညိ/g,'ññi');
		k=k.replace(/ညု/g,'ññu');
		k=k.replace(/ညာ/g,'ññā');
		k=k.replace(/ညီ/g,'ññī');
		k=k.replace(/ညူ/g,'ññū');
		k=k.replace(/ဉာ/g,'ñā');
		k=k.replace(/ဉီ/g,'ñī');
		k=k.replace(/ဉူ/g,'ñū');
		k=k.replace(/အာ/g,'ā');
		k=k.replace(/ဍေ/g,'ḍe');
		k=k.replace(/ဎေ/g,'ḍhe');
		k=k.replace(/ဎိ/g,'ḍhi');
		k=k.replace(/ဎု/g,'ḍhu');
		k=k.replace(/ဎာ/g,'ḍhā');
		k=k.replace(/ဎီ/g,'ḍhī');
		k=k.replace(/ဎူ/g,'ḍhū');
		k=k.replace(/ဍိ/g,'ḍi');
		k=k.replace(/ဍု/g,'ḍu');
		k=k.replace(/ဍာ/g,'ḍā');
		k=k.replace(/ဍီ/g,'ḍī');
		k=k.replace(/ဍူ/g,'ḍū');
		k=k.replace(/ဠေ/g,'ḷe');
		k=k.replace(/ဠှ/g,'ḷha');
		k=k.replace(/ဠိ/g,'ḷi');
		k=k.replace(/ဠု/g,'ḷu');
		k=k.replace(/ဠွ/g,'ḷva');
		k=k.replace(/ဠာ/g,'ḷā');
		k=k.replace(/ဠီ/g,'ḷī');
		k=k.replace(/ဠူ/g,'ḷū');
		k=k.replace(/ငေ/g,'ṅe');
		k=k.replace(/ငိ/g,'ṅi');
		k=k.replace(/ငု/g,'ṅu');
		k=k.replace(/ငာ/g,'ṅā');
		k=k.replace(/ငီ/g,'ṅī');
		k=k.replace(/ငူ/g,'ṅū');
		k=k.replace(/ဏေ/g,'ṇe');
		k=k.replace(/ဏှ/g,'ṇha');
		k=k.replace(/ဏိ/g,'ṇi');
		k=k.replace(/ဏု/g,'ṇu');
		k=k.replace(/ဏျ/g,'ṇya');
		k=k.replace(/ဏျ/g,'ṇya');
		k=k.replace(/ဏာ/g,'ṇā');
		k=k.replace(/ဏီ/g,'ṇī');
		k=k.replace(/ဏူ/g,'ṇū');
		k=k.replace(/ဋေ/g,'ṭe');
		k=k.replace(/ဌေ/g,'ṭhe');
		k=k.replace(/ဌိ/g,'ṭhi');
		k=k.replace(/ဌု/g,'ṭhu');
		k=k.replace(/ဌာ/g,'ṭhā');
		k=k.replace(/ဌီ/g,'ṭhī');
		k=k.replace(/ဌူ/g,'ṭhū');
		k=k.replace(/ဋိ/g,'ṭi');
		k=k.replace(/ဋု/g,'ṭu');
		k=k.replace(/ဋျ/g,'ṭya');
		k=k.replace(/ဋာ/g,'ṭā');
		k=k.replace(/ဋီ/g,'ṭī');
		k=k.replace(/ဋူ/g,'ṭū');
		k=k.replace(/၊/g,',');
		k=k.replace(/။/g,'.');
		k=k.replace(/၀/g,'0');
		k=k.replace(/၁/g,'1');
		k=k.replace(/၂/g,'2');
		k=k.replace(/၃/g,'3');
		k=k.replace(/၄/g,'4');
		k=k.replace(/၅/g,'5');
		k=k.replace(/၆/g,'6');
		k=k.replace(/၇/g,'7');
		k=k.replace(/၈/g,'8');
		k=k.replace(/၉/g,'9');
		k=k.replace(/အ/g,'a');
		k=k.replace(/ဗ/g,'ba');
		k=k.replace(/ဘ/g,'bha');
		k=k.replace(/စ/g,'ca');
		k=k.replace(/ဆ/g,'cha');
		k=k.replace(/ဒ/g,'da');
		k=k.replace(/ဓ/g,'dha');
		k=k.replace(/ဧ/g,'e');
		k=k.replace(/ဂ/g,'ga');
		k=k.replace(/ဃ/g,'gha');
		k=k.replace(/ဟ/g,'ha');
		k=k.replace(/ဣ/g,'i');
		k=k.replace(/ဇ/g,'ja');
		k=k.replace(/ဈ/g,'jha');
		k=k.replace(/က/g,'ka');
		k=k.replace(/ခ/g,'kha');
		k=k.replace(/လ/g,'la');
		k=k.replace(/မ/g,'ma');
		k=k.replace(/န/g,'na');
		k=k.replace(/ဩ/g,'o');
		k=k.replace(/ပ/g,'pa');
		k=k.replace(/ဖ/g,'pha');
		k=k.replace(/ရ/g,'ra');
		k=k.replace(/သ/g,'sa');
		k=k.replace(/ဿ/g,'ssa');
		k=k.replace(/တ/g,'ta');
		k=k.replace(/ထ/g,'tha');
		k=k.replace(/ဥ/g,'u');
		k=k.replace(/ဝ/g,'va');
		k=k.replace(/ယ/g,'ya');
		k=k.replace(/ဉ/g,'ña');
		k=k.replace(/ည/g,'ñña');
		k=k.replace(/ဤ/g,'ī');
		k=k.replace(/ဦ/g,'ū');
		k=k.replace(/ဍ/g,'ḍa');
		k=k.replace(/ဎ/g,'ḍha');
		k=k.replace(/ဠ/g,'ḷa');
		k=k.replace(/ံ/g,'ṃ');
		k=k.replace(/င/g,'ṅa');
		k=k.replace(/ဏ/g,'ṇa');
		k=k.replace(/ဋ/g,'ṭa');
		k=k.replace(/ဌ/g,'ṭha');
		return (k) }
	
		function to_local(k){
		k=k.toLowerCase()+" ";
		var m={a:"အ",i:"ဣ",u:"ဥ","ā":"အာ","ī":"ဤ","ū":"ဦ",e:"ဧ",o:"ဩ"};
		var l={i:"ိ","ī":"ီ",u:"ု","ū":"ူ",e:"ေ","ṃ":"ံ",k:"က",kh:"ခ",g:"ဂ",gh:"ဃ","ṅ":"င",c:"စ",ch:"ဆ",j:"ဇ",jh:"ဈ","ñ":"ဉ","ṭ":"ဋ","ṭh":"ဌ","ḍ":"ဍ","ḍh":"ဎ","ṇ":"ဏ",t:"တ",th:"ထ",d:"ဒ",dh:"ဓ",n:"န",p:"ပ",ph:"ဖ",b:"ဗ",bh:"ဘ",m:"မ",y:"ယ",r:"ရ",l:"လ","ḷ":"ဠ",v:"ဝ",s:"သ",h:"ဟ"};
		var a={k:"က",g:"ဂ","ṅ":"င",c:"စ",j:"ဇ","ñ":"ဉ","ṭ":"ဋ","ḍ":"ဍ","ṇ":"ဏ",t:"တ",d:"ဒ",n:"န",p:"ပ",b:"ဗ",m:"မ",y:"ယ",r:"ရ",l:"လ","ḷ":"ဠ",v:"ဝ",s:"သ",h:"ဟ"};
	var n={kh:"1",g:"1",d:"1",dh:"1",p:"1",v:"1"};
	var j,f,e,d,c;
	var b="";
	var g=0;k=k.replace(/\&quot;/g,"`");
	var h=false;
	while(g<k.length)
	{
		j=k.charAt(g-2);
		f=k.charAt(g-1);
		e=k.charAt(g);
		d=k.charAt(g+1);
		c=k.charAt(g+2);
		if(m[e]){if(g==0||f=="a"){b+=m[e]}else{if(e=="ā"){if(n[h]){b+="ါ"}else{b+="ာ"}}else{if(e=="o"){if(n[h]){b+="ေါ"}else{b+="ော"}}else{if(e!="a"){b+=l[e]}}}}g++;h=false}else{if(l[e+d]&&d=="h"){b+=l[e+d];if(c!="y"&&!h){h=e+d}if(a[c]){b+="္"}g+=2}else{if(l[e]&&e!="a"){b+=l[e];g++;if(d!="y"&&!h){h=e}if(a[d]&&e!="ṃ"){b+="္"}}else{if(!l[e]){b+=e;g++;if(m[d]){if(m[d+c]){b+=m[d+c];g+=2}else{b+=m[d];g++}}h=false}else{h=false;g++}}}}
	}
	b=b.replace(/ဉ္ဉ/g,"ည");b=b.replace(/္ယ/g,"ျ");b=b.replace(/္ရ/g,"ြ");b=b.replace(/္ဝ/g,"ွ");b=b.replace(/္ဟ/g,"ှ");b=b.replace(/သ္သ/g,"ဿ");b=b.replace(/င္/g,"င်္");
	return b.slice(0,-1)
}
