<?php
$garr = array(
100,
101,
103,
107,
108,
109,
110,
111,
112,
113,
115,
116,
117,
118,
119,
121,
123,
125,
127,
129,
131,
132,
133,
135,
136,
151,
152,
153,
155,
157,
161,
162,
163,
170,
171,
172,
173,
175,
177,
174,
179,
200,
114,
211,
212,
213,
215,
221,
222,
223,
225,
231,
232,
233,
235,
227,
191,
158,
214,
215,
224,
234,
300,
350,
400,
500,
253,
229,
251,
254,
157,
159,
216,
218,
217,
225,
226,
227,
228,
601,
602,
603,
604,
255
);

$tb_admins       = "x_admins";
$tb_admins_login = "x_admins_login";
$tb_admins_page  = "x_admins_page";
$tb_message      = "x_message";
$tb_news         = "x_news";
$tb_user         = "x_user";
$tb_online       = "x_online";
$tb_user_login   = "x_user_login";
$tb_user_page    = "x_user_page";
$tb_user_edit    = "x_user_edit";
$tb_user         = "x_user";
$tb_faq          = "x_faq";
$tb_bclass       = "x_bclass";
$tb_class        = "x_class";
$tb_play         = "x_play";
$tb_play_user    = "x_play_user";
$tb_zhong        = "x_zhong";
$tb_order        = "x_order";
$tb_kj           = "x_kj";
$tb_kjinfo           = "x_kjinfo";
$tb_kj_m           = "x_kj_m";
$tb_lib          = "x_lib";
$tb_logs          = "x_logs";
$tb_libu      = "x_libu";
$tb_error       = "x_lib_err";
$tb_z            = "x_z";
$tb_c            = "x_c";
$tb_zpan         = "x_zpan";
$tb_points       = "x_points";
$tb_points_bak       = "x_points_bak";
$tb_att          = "x_att";
$tb_auto         = "x_auto";
$tb_config       = "x_config";
$tb_session      = "x_session";
$tb_fly          = "x_fly";
$tb_flyinfo          = "x_flyinfo";
$tb_flylist          = "x_flylist";
$tb_sclass       = "x_sclass";
$tb_web       = "x_web";
$tb_game       = "x_game";
$tb_fastje       = "x_fastje";
$tb_warn = "x_warn";
$tb_peilv       = "x_peilv";
$tb_ctrl       = "x_ctrl";
$tb_gamecs      = "x_gamecs";
$tb_ip      = "ip";
$tb_bank      = "x_bank";
$tb_banknum      = "x_banknum";
$tb_money     = "x_money";
$tb_notices      = "x_notices";
$tb_money_log      = "x_money_log";
$tb_gamezc      = "x_gamezc";
$tb_shui      = "x_shui";
$tb_log = "x_log";
if ($_REQUEST['gids'] && is_numeric($_REQUEST['gids']) && strlen($_REQUEST['gids'])==3) {
    $_SESSION['gid'] = $_REQUEST['gids'];
}
//$wid                  = $_SESSION['wid'];
$wid                  = 100;
$config               = array();
$config['maxmoney']   = 1000000000;
$config['kmaxmoney']  = 1000000000;
$config['maxren']     = 100000;
$config['namelength'] = 8;
$config['upass']      = "puhh8kik";
$msql->query("select id,flyflag,autobaoma,allpass,ifopen,passtime,editzc,deluser,startid ,livetime,upass,kjip,rkey,s1,s2,s3,s4,s5,s6,editstart,editend,maxpc,tzjg,libkey,supass,maxrenflag,psize,psize1,psize2,psize3,psize5,moneytype,zcmode,pk10num,pk10ts,pk10niu,trys from `$tb_config` ");
$msql->next_record();
$config['psize']      = $msql->f('psize');
$config['psize1']     = $msql->f('psize1');
$config['psize2']     = $msql->f('psize2');
$config['psize3']     = $msql->f('psize3');
$config['psize5']     = $msql->f('psize5');
$config['flyflag']    = $msql->f('flyflag');
$config['autobaoma']  = $msql->f('autobaoma');
$config['allpass']    = $msql->f('allpass');
$config['ifopen']     = $msql->f('ifopen');
$config['passtime']   = $msql->f('passtime');
$config['editzc']     = $msql->f('editzc');
$config['deluser']    = $msql->f('deluser');
$config['startid']    = $msql->f('startid');
$config['livetime']   = $msql->f('livetime');
$config['rkey']       = $msql->f('rkey');
$config['editstart']  = $msql->f('editstart');
$config['editend']    = $msql->f('editend');
$config['maxpc']      = $msql->f('maxpc');
$config['tzjg']       = $msql->f('tzjg');
$config['libkey']     = $msql->f('libkey');
$config['supass']     = $msql->f('supass');
$config['maxrenflag'] = $msql->f('maxrenflag');
$config['zcmode'] = $msql->f('zcmode');
$config['pk10num'] = $msql->f('pk10num');
$config['pk10ts'] = $msql->f('pk10ts');
$config['pk10niu'] = $msql->f('pk10niu');
$config['trys'] = $msql->f('trys');
$config['s5'] = $msql->f('s5');
$config['s6'] = $msql->f('s6');

$config['kjip']       = $msql->f('kjip');
$msql->query("select * from `$tb_web` where wid='$wid'");
$msql->next_record();
if ($msql->f('wid') == '') {
    session_destroy();
    header("Location:../index.php");
    exit;
}
$config['wid']      = $msql->f('wid');
$config['patt']     = $msql->f('patt');
$config['webname']  = $msql->f('webname');
/*$config['namehead'] = json_decode($msql->f('namehead'), true);*/
$config['layer']    = json_decode($msql->f('layer'), true);
$config['maxlayer'] = $msql->f('maxlayer');
$config['skins']    = $msql->f('skins');
$config['mpo']    = $msql->f('mpo');
$config['upo']    = $msql->f('upo');
$config['apo']    = $msql->f('apo');
$config['hpo']    = $msql->f('hpo');
$config['mdi'] = $msql->f('mdi');
$config['udi'] = $msql->f('udi');
$config['adi']      = $msql->f('adi');
$config['hdi']      = $msql->f('hdi');
$config['murl']      = $msql->f('murl');
$config['uurl']      = $msql->f('uurl');
$config['aurl']      = $msql->f('aurl');
$config['hurl']      = $msql->f('hurl');
$config['moneytype']  = $msql->f('moneytype');
$config['slowtype']  = $msql->f('slowtype');
$config['fasttype']  = $msql->f('fasttype');
$config['ifopens']   = $msql->f('webclose');
$config['fastinput'] = $msql->f('fastinput');
$times               = json_decode($msql->f('times'), true);
if ($_SESSION['gid']) {
    $msql->query("select * from `$tb_game` where gid='" . $_SESSION['gid'] . "'");
    
}else{
    $msql->query("select * from `$tb_game` where gid='107'");
}

$msql->next_record();
    $config['gname']          = $msql->f('gname');
    $config['class']          = $msql->f('class');
    $config['fenlei']         = $msql->f('fenlei');
    $config['kjurl']          = $msql->f('kjurl');
    $config['fast']           = $msql->f('fast');
    $config['mnum']           = $msql->f('mnum');
    $config['havetm']         = $msql->f('havetm');
    $config['thisqishu']      = $msql->f('thisqishu');
    $config['thisbml']        = $msql->f('thisbml');
    $config['autoopenpan']    = $msql->f('autoopenpan');
    $config['otherclosetime'] = $msql->f('otherclosetime');
    $config['userclosetime']  = $msql->f('userclosetime');
    $config['baostatus']      = $msql->f('baostatus');
    $config['panstatus']      = $msql->f('panstatus');
    $config['otherstatus']    = $msql->f('otherstatus');
    $config['uppanstatus']      = $msql->f('panstatus');
    $config['upotherstatus']    = $msql->f('otherstatus');
    $config['cs']             = json_decode($msql->f('cs'), true);
    $config['ftype']          = json_decode($msql->f('ftype'), true);
    //$config['ztype']          = json_decode($msql->f('ztype'), true);
    //$config['mtype']          = json_decode($msql->f('mtype'), true);
    $config['patt']           = json_decode($msql->f('patt' . $config['patt']), true);
    $config['pan']            = json_decode($msql->f('pan'), true);
	/*$config['dpan']            = json_decode($msql->f('dpan'), true);*/
    $_SESSION['gid']          = $msql->f('gid');
    $gid                      = $_SESSION['gid'];

//if ($wid != 100) {
    foreach ($times as $v) {
        if ($v['gid'] == $_SESSION['gid']) {
            $config['times']['o']  = $v['o'];
            $config['times']['c']  = $v['c'];
            $config['times']['io'] = $v['io'];
            if ($v['io'] == 0) {
                $config['panstatus']   = 0;
                $config['otherstatus'] = 0;
            }
        }
    }
//}
$times = null;
