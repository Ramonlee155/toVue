<?php
 
namespace app\user\controller;

use think\facade\Db;
use think\facade\View;

//require_once __DIR__ . '/uxj/make.php';
/*include '../data/comm.inc.php';
include '../data/uservar.php';
include '../func/func.php';
include '../func/csfunc.php';
include '../func/userfunc.php';
include '../include.php';
include './checklogin.php';
include '../func/jsfunc.php';*/
/**
 * Make主页
 */
class MakeController{

    public function index(){
        $userid = session('agentId') ?? ($_REQUEST["user_id"] ?? "");
        $gid = $_REQUEST["gid"] ?? "200";
        $xType = $_REQUEST['xtype'] ?? "show";
        $gameDetail = Db::name("x_game")->where("gid",$gid)->find();
        $gameDetail['cs'] = json_decode($gameDetail['cs'],true);
        View::assign('class', $gameDetail["class"]);
        $xWeb = Db::name("x_web")->where("wid",100)->find();
        $timesArr = json_decode($xWeb['times'],true);
        foreach ($timesArr as $tv){
            if($tv["gid"] == $gid){
                $xWeb['times'] = $tv;
            }
        }
        $xConfig = Db::name("x_config")->order("id asc")->find();
        if($userid){
            $xUser = Db::name("agent")->where("id",$userid)->find();
        }else{
            $xUser = [];
        }

        $agentConfig = (new PanIncController())->index();
        $func = new FuncController();
        $csFunc = new CsFuncController();
        $jsFunc = new JsFuncController();
        switch ($xType) {
            case 'show':
                $sdate = $csFunc->week();
                $fenlei = $func->transgame($gid, "fenlei");
                View::assign('sdate', $sdate);
                View::assign('fudong', $xUser["fudong"]);
                View::assign('status', $xUser["status"]);
                View::assign('username', $xUser["username"]."[".$xUser["name"]."]");

                $xFastje = Db::name("x_fastje")->where("userid",$userid)->order("je")->select();
                $i = 0;
                $je = array();
                if($xFastje){
                    foreach ($xFastje as $fv){
                        $je[$i] = $fv["je"];
                        $i++;
                    }
                }
                View::assign('je', $je);
                View::assign('thisqishu', $gameDetail['thisqishu']);
                View::assign('gid', $gid);

                $b = $csFunc->getbh();
                if ($fenlei == 161) {
                    $c = $b[0];
                    $b = array($b[0]);
                }

                View::assign('b', $b);
                View::assign('webname', $xWeb['webname']);
                View::assign('title', $xWeb['webname']. '-' . $xUser["username"] . '[' . $xUser["name"] . ']-' . $gameDetail['gname']);
                View::assign('title', "");
                View::assign('gname', $gameDetail['gname']);
                View::assign('fast', $gameDetail['fast']);
                View::assign('kjurl', $gameDetail['kjurl']);
                View::assign('fastinput', $xWeb['fastinput']);

                $xKj = Db::name("x_kj")->where(["qishu"=>$gameDetail['thisqishu'],"gid"=>$gid])->field("opentime,closetime,kjtime")->find();
                $xKjOpentime = isset($xKj['opentime'])?strtotime($xKj['opentime']):0;
                $xKjClosetime = isset($xKj['closetime'])?strtotime($xKj['closetime']):0;
                $xKjKjtime = isset($xKj['kjtime'])?strtotime($xKj['kjtime']):0;

                $time = time();
                if ($gameDetail['panstatus'] == 1 && ($time - $xKjOpentime - $xWeb['times']['o'] > 0 || $gameDetail['autoopenpan'] == 0)) {
                    $pantime = $xKjClosetime - $time - $gameDetail['userclosetime'] - $xWeb['times']['c'];
                } else {
                    $gameDetail['panstatus'] = 0;
                    $pantime = $time - $xKjOpentime - $xWeb['times']['o'];
                    if ($pantime > 0) {
                        $pantime = 0;
                    }
                }
                if ($gameDetail['otherstatus'] == 1 && ($gameDetail['autoopenpan'] == 0 || $time - $xKjOpentime - $xWeb['times']['o'] > 0)) {
                    $othertime = $xKjClosetime - $time - $gameDetail['userclosetime'] - $gameDetail['otherclosetime'] - $xWeb['times']['c'];
                } else {
                    $gameDetail['otherstatus'] = 0;
                    $othertime = $time - $xKjOpentime - $xWeb['times']['o'];
                    if ($othertime > 0) {
                        $othertime = 0;
                    }
                }
                if ($gameDetail['autoopenpan'] == 0 || $xWeb['times']['io'] == 0) {
                    $pantime = 99999;
                    $othertime = 99999;
                }
                $kjtime = $xKjKjtime-time() < 0 ? 0 :$xKjKjtime-time();

                View::assign('panstatus', $gameDetail['panstatus']);
                View::assign('otherstatus', $gameDetail['otherstatus']);
                View::assign('kjtime', $kjtime);
                View::assign('pantime', $pantime);
                View::assign('othertime', $othertime);
                View::assign('wid', $_SESSION['wid'] ?? $xWeb["wid"]);
                View::assign('pk10num', $xConfig['pk10num']);
                View::assign('pk10ts', $xConfig['pk10ts']);
                View::assign('pk10niu', $xConfig['pk10niu']);
                View::assign('ft', $gameDetail['cs']['ft']);
                View::assign('fenlei', $fenlei);
                View::assign('globalpath', "/");
                View::assign('kfurl', $xConfig['kfurl']);
                View::assign('fast', $gameDetail['fast']);

                if(isset($_GET['menu']) && $_GET['menu']!=''){
                    View::assign('menu', $_REQUEST['menu']);
                }else{
                    View::assign('menu', '0');
                }
                if ($fenlei == 100) {
                    View::assign('ma', $csFunc->getma());
                }

                //六合彩 UI样式
                if(in_array($gid ,[100,200 ,300,350])){
                    return view('index/makes_lhc');
                }else{
                    return view('index/makes');
                }

                break;
            case "skin":
                $_SESSION['skin'] = trim($_POST['skin']);
                break;
            case 'duolib':
                $abcd  = $_POST['abcd'];
                $ab    = $_POST['ab'];
                $pid   = $_POST['pid'];
                $fid1  = $xUser['fid1'];
                $layer = $xUser['layer'];
                $ifexe = $xUser['ifexe'];
                $pself = $xUser['pself'];

                if ($layer > 1) {
                    $fid1User = Db::name("agent")->where("id",$fid1)->find();
                    $ifexe = $fid1User['ifexe'];
                    $pself = $fid1User['pself'];
                }
                if ($layer == 1) {
                    $xPlay = Db::name("x_play")->where(["gid"=>$gid,"pid"=>$pid])->find();
                    $duo[0] = $csFunc->getduoarr($xPlay['name']);
                    $pl = json_decode($xPlay['pl'],true);
                    $pname = $xPlay['name'];
                    $ftype = $csFunc->transc('ftype',$xPlay['cid'],$gid);
                } else {
                    if ($ifexe == 0) {
                        $xPlay = Db::name("x_play")->where(["gid"=>$gid,"pid"=>$pid])->find();
                        $duo[0] = $csFunc->getduoarr($xPlay['name']);
                        $pl = json_decode($xPlay['pl'],true);
                        $cid = $xPlay['cid'];
                        $pname = $xPlay['name'];
                    } else {
                        $xPlay = Db::name("x_play")->where(["gid"=>$gid,"pid"=>$pid])->find();
                        $duo[0] = $csFunc->getduoarr($xPlay['name']);
                        $pl = json_decode($xPlay['pl'],true);
                        $cid = $xPlay['cid'];
                        $pname = $xPlay['name'];

                        $xPlayUser = Db::name("x_play_user")->where(["userid"=>$fid1,"gid"=>$gid,"pid"=>$pid])->find();
                        $pl2 = json_decode($xPlayUser['pl'], true);
                        if ($pself == 1) {
                            $pl = $pl2;
                        } else {
                            $cd = count($duo[0]);
                            for ($i = 0; $i < $cd; $i++) {
                                $pl[0][$i] -= $pl2[0][$i];
                                $pl[1][$i] -= $pl2[1][$i];
                                $pl[2][$i] -= $pl2[2][$i];
                            }
                        }
                    }
                    $ftype = $csFunc->transc('ftype', $cid,$gid);
                    if ($ifexe == 1 & $pself == 1) {
                        $peilvcha = $csFunc->getuserpeilvcha2s($userid, $ftype, $gid);
                    } else {
                        $peilvcha = $csFunc->getuserpeilvchas($userid, $ftype, $gid);
                    }
                }
                $cd = count($duo[0]);
                for ($i = 0; $i < $cd; $i++) {
                    $duo[1][$i] = (double) ($func->pr3($pl[0][$i]) - $peilvcha-$xWeb['patt'][$ftype][strtolower($abcd)]);
                    if ($pname == '三中二' | $pname == '二中特' | strpos($pname, '字组合')) {
                        $duo[2][$i] = (double) ($func->pr3($pl[1][$i]) - $peilvcha-$xWeb['patt'][$ftype][strtolower($abcd)]);
                    }
                    if (strpos($pname, '2字组合')) {
                        $duo[3][$i] = (double) ($func->pr3($pl[2][$i]) - $peilvcha-$xWeb['patt'][$ftype][strtolower($abcd)]);
                    }
                }
                echo json_encode($duo);
                return json_encode($duo);
                break;
            case 'duolibss':
                $abcd  = $_POST['abcd'];
                $ab    = $_POST['ab'];
                $pid   = $_POST['pid'];
                $fid1  = $xUser['fid1'];
                $layer = $xUser['layer'];
                $ifexe = $xUser['ifexe'];
                $pself = $xUser['pself'];

                if ($layer > 1) {
                    $fid1User = Db::name("agent")->where("id",$fid1)->find();
                    $ifexe = $fid1User['ifexe'];
                    $pself = $fid1User['pself'];
                }
                if ($layer == 1) {
                    $xPlay = Db::name("x_play")->where(["gid"=>$gid,"pid"=>$pid])->find();
                    $duo[0] = $csFunc->getduoarrssuser($gameDetail["fenlei"],$xPlay['name']);
                    $pl = json_decode($xPlay['pl'],true);
                    $pname = $xPlay['name'];
                    $ftype = $csFunc->transc('ftype',$xPlay['cid'],$gid);
                } else {
                    if ($ifexe == 0) {
                        $xPlay = Db::name("x_play")->where(["gid"=>$gid,"pid"=>$pid])->find();
                        $duo[0] = $csFunc->getduoarrssuser($gameDetail["fenlei"],$xPlay['name']);
                        $pl = json_decode($xPlay['pl'],true);
                        $cid = $xPlay['cid'];
                        $pname = $xPlay['name'];
                    } else {
                        $xPlay = Db::name("x_play")->where(["gid"=>$gid,"pid"=>$pid])->find();
                        $duo[0] = $csFunc->getduoarrssuser($gameDetail["fenlei"],$xPlay['name']);
                        $pl = json_decode($xPlay['pl'],true);
                        $cid = $xPlay['cid'];
                        $pname = $xPlay['name'];

                        $xPlayUser = Db::name("x_play_user")->where(["userid"=>$fid1,"gid"=>$gid,"pid"=>$pid])->find();
                        $pl2 = json_decode($xPlayUser['pl'], true);
                        if ($pself == 1) {
                            $pl = $pl2;
                        } else {
                            $cd = count($duo[0]);
                            for ($i = 0; $i < $cd; $i++) {
                                $pl[0][$i] -= $pl2[0][$i];
                                $pl[1][$i] -= $pl2[1][$i];
                                $pl[2][$i] -= $pl2[2][$i];
                            }
                        }
                    }
                    $ftype = $csFunc->transc('ftype', $cid,$gid);
                    if ($ifexe == 1 & $pself == 1) {
                        $peilvcha = $csFunc->getuserpeilvcha2s($userid, $ftype, $gid);
                    } else {
                        $peilvcha = $csFunc->getuserpeilvcha($userid, $ftype,$gid);
                    }
                }
                $cd = count($duo[0]);
                for ($i = 0; $i < $cd; $i++) {
                    $duo[1][$i] = (double) ($func->pr3($pl[0][$i]) - $peilvcha-$xWeb['patt'][$ftype][strtolower($abcd)]);
                    if ($pname == '三中二' | $pname == '二中特' | strpos($pname, '字组合')) {
                        $duo[2][$i] = (double) ($func->pr3($pl[1][$i]) - $peilvcha-$xWeb['patt'][$ftype][strtolower($abcd)]);
                    }
                    if (strpos($pname, '2字组合')) {
                        $duo[3][$i] = (double) ($func->pr3($pl[2][$i]) - $peilvcha-$xWeb['patt'][$ftype][strtolower($abcd)]);
                    }
                }
                echo json_encode($duo);
                return json_encode($duo);
                break;
            case 'lib':
                if ($func->transuser($userid, 'status') != 1) {
                    die;
                }

                $fGamecs = Db::name("x_gamecs")->where(["gid"=>$gid,"userid"=>$userid])->field("ifok")->find();
                if ($fGamecs && $fGamecs["ifok"] == 0) {
                    die;
                }

                $bid = $_POST['bid'];
                $sid = $_POST['sid'];
                $cid = $_POST['cid'];
                $pid = $_POST['pid'];
                $ab = strtoupper($_POST['ab']);
                $abcd = strtoupper($_POST['abcd']);
                $qishu = $_POST['qishu'];
                $p = $_POST['p'];
                $stype = $_POST['stype'];
                $smtype = $_POST['smtype'];
                if ($ab !== 'A' & $ab !== 'B') {
                    $ab = 'A';
                }
                $uabcd = json_decode($func->transuser($userid, 'pan'), true);
                if (!in_array($abcd, $uabcd)) {
                    $abcd = $uabcd[0];
                }
                $_SESSION['abcd'] = $abcd;
                $ab = strtolower($ab);
                $abcd = strtolower($abcd);
                switch ($stype) {
                    case "a":
                        $play = $csFunc->getpsm($bid, $ab, $abcd, $cid,$gid,$agentConfig);
                        break;
                    case "1dw":
                        $play = $csFunc->getpsm($bid, $ab, $abcd, $cid,$gid,$agentConfig);
                        break;
                    case "gg":
                    case "1-6":
                        $play = $this->getsmgg($bid, $ab, $abcd, $sid, $stype,$gid,$agentConfig);
                        break;
                    case "sm":
                        $play = $this->getsm($bid, $ab, $abcd, $sid, $smtype,$gid,$agentConfig);
                        break;
                    case "d":
                        $play = $csFunc->getpsme($bid, $ab, $abcd, $sid,$gid,$agentConfig);
                        break;
                    case "b":
                        $play = $csFunc->getpsmd($bid, $ab, $abcd, $cid, $sid,$gid,$agentConfig);
                        break;
                    case "15":
                    case "610":
                    case "110":
                    case "105":
                    case "108":
                        $play = $this->getpaiming($bid, $ab, $abcd, $stype,$gid,$agentConfig);
                        break;
                    case "c":
                        $play = $csFunc->getpsmc($bid, $ab, $abcd, $cid, $p,$gid,$agentConfig);
                        break;
                }
                $cp = $play ? count($play) : 0;
                $ftype = '';
                $peilcha = 0;
                $minje = 0;
                $maxje = 0;

                $xKj = Db::name("x_kj")->where(["qishu"=>$gameDetail['thisqishu'],"gid"=>$gid])->field("opentime,closetime,kjtime")->find();

                $opentime = strtotime($xKj['opentime']);
                $closetime = strtotime($xKj['closetime']);
                $time = time();
                $ifok = 0;
                if ($gameDetail['panstatus'] == 1 & ($time - $opentime - $xWeb['times']['o'] > 0 | $gameDetail['autoopenpan'] == 0)) {
                    if ($closetime - $gameDetail['userclosetime'] - $time - $xWeb['times']['c'] > 0) {
                        $ifok = 1;
                    }
                }
                $fid1 = $func->transuser($userid, 'fid1');
                $fid1User = Db::name("agent")->where("id",$fid1)->find();

                $ifexe = $fid1User["ifexe"];
                $pself = $fid1User["pself"];

                for ($i = 0; $i < $cp; $i++) {
                    if ($play[$i]['ftype'] != $ftype) {
                        $cs = getjes($play[$i]['dftype'], $userid);
                        $minje = $cs['minje'];
                        $maxje = $cs['maxje'];
                        if ($ifexe == 1 & $pself == 1) {
                            $peilvcha = $csFunc->getuserpeilvcha2s($userid, $play[$i]['ftype'], $gid);
                        } else {
                            $peilvcha = $csFunc->getuserpeilvchas($userid, $play[$i]['ftype'], $gid);
                        }
                    }
                    if ($ifexe == 1) {
                        if ($pself == 1) {
                            $xPlayUser = Db::name("x_play_user")->where(["userid"=>$fid1,"gid"=>$gid,"pid"=>$play[$i]['pid']])->find();
                            if ($stype == 'gg') {
                                $play[$i]['peilv1'] = $xPlayUser['peilv1'] - $gameDetail['cs']['ggpeilv'];
                                $play[$i]['peilv2'] = $xPlayUser['peilv2'] - $gameDetail['cs']['ggpeilv'];
                            } else {
                                $play[$i]['peilv1'] = $xPlayUser['peilv1'];
                                $play[$i]['peilv2'] = $xPlayUser['peilv2'];
                            }
                            if ($abcd != 'a' & $stype != 'gg') {
                                $play[$i]['peilv1'] -= $xWeb['patt'][$play[$i]['ftype']][$abcd];
                            }
                            if ($ab == 'b') {
                                $play[$i]['peilv1'] += $xWeb['patt'][$play[$i]['ftype']]['ab'];
                            }
                        }
                        // else {
                        //     $psql->query("select peilv1,peilv2 from `{$tb_play_user}` where  userid='{$fid1}' and gid='{$gid}' and pid='" . $play[$i]['pid'] . '\'');
                        //     $psql->next_record();
                        //     $play[$i]['peilv1'] -= $psql->f('peilv1');
                        //     $play[$i]['peilv2'] -= $psql->f('peilv2');
                        // }
                    }
                    if ($stype != 'gg') {
                        $play[$i]['peilv1'] -= $peilvcha;
                        $play[$i]['peilv2'] -= $peilvcha;
                    }
                    $play[$i]['peilv1'] = (double) $play[$i]['peilv1'];
                    $play[$i]['peilv2'] = (double) $play[$i]['peilv2'];


                    $play[$i]['minje'] = $minje;
                    $play[$i]['maxje'] = $maxje;
                    if ($ifok == 0) {
                        $play[$i]['ifok'] = 0;
                    }
                    if ($gid == 100 & ($play[$i]['bid'] != 23378685 | !is_numeric($play[$i]['name']))) {
                        if ($closetime - $gameDetail['userclosetime'] - $time - $gameDetail['otherclosetime'] - $xWeb['times']['c'] < 0) {
                            $play[$i]['ifok'] = 0;
                        }
                    }
                    $ftype = $play[$i]['ftype'];
                }
                if ($stype == 'gg') {
                    $xPlay = Db::name("x_play")->where(["gid"=>$gid,"name"=>'過關'])->find();
                    $play[0]['ifok'] = $xPlay["ifok"];
                    if ($closetime - $gameDetail['userclosetime'] - $time - $gameDetail['otherclosetime'] - $xWeb['times']['c'] < 0 | $ifok == 0) {
                        $play[0]['ifok'] = 0;
                    }
                    $play[0]['pids'] = $xPlay["pid"];
                    $cid =$xPlay["cid"];

                    $xClass = Db::name("x_class")->where(["gid"=>$gid,"cid"=>$cid])->find();
                    $cs = $func->getzcs($xClass['ftype'], $userid,$gid);
                    $play[0]['minje'] = $cs['minje'];
                    $play[0]['maxje'] = $cs['maxje'];
                }
                echo json_encode($play);
                unset($play);
                break;
            case 'getc':
                $bid = $_POST['bid'];
                $xClass = Db::name("x_class")->where(["gid"=>$gid,"bid"=>$bid])->order("bid,sid,xsort")->select();
                $i = 0;
                $c = array();
                foreach ($xClass as $cv){
                    $c[$i]['cid'] = $cv['cid'];
                    $c[$i]['name'] = $cv['name'];
                    $i++;
                }
                echo json_encode($c);
                unset($c);
                break;
            case 'gets':
                $bid = $_POST['bid'];
                $xClass = Db::name("x_class")->where(["gid"=>$gid,"bid"=>$bid])->order("bid,xsort")->select();
                $i = 0;
                $s = array();
                foreach ($xClass as $cv){
                    $s[$i]['sid'] = $cv['sid'];
                    $s[$i]['name'] = $cv['name'];
                    $i++;
                }
                echo json_encode($s);
                unset($s);
                break;
            case 'getpan':
                $arr = array('panstatus' => $gameDetail['panstatus'], 'otherstatus' => $gameDetail['otherstatus']);
                $res = json_encode($arr);
                echo $res;
                unset($arr);
                break;
            case 'upl':
                $qishu = $gameDetail['thisqishu'];
                $qs   = $_POST['qs'];
                $tu   = $_POST['tu'];
                $news = $_POST['news'];
                $m1   = $_POST['m1'];
                $time = $func->sqltime(time());
                $xKj = Db::name("x_kj")->where(["gid"=>$gid,"m1"=>["<>",""],"closetime"=>["<",$time]])->order("gid,closetime desc")->find();

                $mqishu = $xKj['qishu'] ?? 0;
                if ($m1 == ($xKj['m1']??"") && $qs == $mqishu && $news != '1') {
                    echo json_encode(array("A", "B",$news));
                    exit;
                }
                $mm = 1;
                if ($gameDetail["panstatus"]!=1) {
                    $mm = 0;
                }
                $ma = array();
                $sx=[];
                for ($i = 1; $i <= $gameDetail['mnum']; $i++) {
                    $randNum = 'm' . $i;
                    $randValue = $xKj[$randNum]??"";
                    if($randValue){
                        $ma[] = $randValue;
                        $maStr = $this->shengxiaos($randValue,($xKj["bml"]??""));
                        $gameDetail['fenlei']==100 && $sx[] =$maStr;
                    }
                }
                $fenlei = $gameDetail['fenlei'];

                View::assign('fenlei', $fenlei);
                View::assign('tu', $tu);

                if ($fenlei != 151 & 1 == 2) {
                    $kj = $jsFunc->getkjs($gid, $gameDetail['mnum'], 30, sqltime(time()),$fenlei);

                    View::assign('kj', $kj);
                    $co[0] = 'blue';
                    $co[1] = 'orange';
                    $co[2] = 'lv';
                    $co[3] = 'red';

                    View::assign('co', $co);
                    // 加载模板文件的内容
                    $longl = View::fetch('longl.html');
                }
                $ftlu=[];
                if ($gameDetail['cs']['ft'] == '1' && $tu == 2) {
                    View::assign('ftnum', $gameDetail['cs']['ftnum']);

                    if(date("H:i:s")<$xConfig['editend']){
                        $timestr = date("Y-m-d", time()-86400);//" and dates='" . date("Y-m-d", time()-86400) . "' ";
                    } else {
                        $timestr = date("Y-m-d");//" and dates='" . date("Y-m-d") . "' ";
                    }
                    $sql = '';
                    for ($i = 1; $i <= $gameDetail['mnum']; $i++) {
                        $sql .= ",m" . $i;
                    }
                    $kj = Db::name("x_kj")->where(["gid"=>$gid,"m1"=>["<>",""],"dates"=>$timestr])->order("qishu desc")->limit(99)->select();
                    $ck = $kj ? count($kj) : 0;
                    for($i=0;$i<99;$i++){
                        $ftlu[$i] = 0;
                    }
                    for ($i = 0; $i < $ck; $i++) {
                        $kjarr = [$kj[$i]['m1'],$kj[$i]['m2'],$kj[$i]['m3'],$kj[$i]['m4'],$kj[$i]['m5'],$kj[$i]['m6'],$kj[$i]['m7'],$kj[$i]['m8'],$kj[$i]['m9'],$kj[$i]['m10']] ;
                        $zh = $func->getftzh($kjarr,$gameDetail['cs']);
                        $kj[$i]['z'] = $zh;
                        $zh = $zh % 4 == 0 ? 4 : $zh % 4;
                        $kj[$i]['mft'] = $zh;
                        $kj[$i]['ftds'] = $jsFunc->danshuang($zh);
                        $kj[$i]['ftdx'] = $zh <= 2 ? '小' : '大';
                        $j = $ck-$i-1;
                        $k1 = floor($j/10);//2
                        $k2 = $j%10;
                        //$ftlu[$k2*10+$k1] = substr($kj[$i]['qishu'],-3); //21
                        $ftlu[$k2*10+$k1] = $zh;
                    }

                    View::assign('kj', $kj);
                    $longr = View::fetch('longr.html');
                } else {
                    if ($fenlei == 151) {
                        $kj = $jsFunc->getkjs($gid, $gameDetail['mnum'], $gameDetail['cs']['qsnums'], $func->sqltime(time()), $fenlei);
                        View::assign('kj', $kj);
                        $longr = View::fetch('longr.html');
                    } else {
                        $z = $this->getzlong($gid,$agentConfig);
                        $buz = $this->getbuzlong($gid,$agentConfig);
                        View::assign('z', $z);
                        View::assign('buz', $buz);
                        $longr = View::fetch('longr.html');
                    }
                }
                if ($tu != 0) {
                    $tu = $this->tu($gid, $gameDetail['mnum'], $fenlei, $tu);
                }
                $num = trim($_POST['num']);
                $longl = json_encode($num);
                $news="";
                $diffTime = time() - 600;
                $xMessage = Db::name("x_message")->where(["userid"=>$userid,"time"=>[">",$diffTime]])->order("time desc")->find();
                if ($xMessage) {
                    $news = $xMessage['content'];
                }
                echo json_encode(array($longl, $longr, $tu, $mm, $ma, $mqishu, $gameDetail['gname'],$news,$gameDetail['cs']['ft'],$ftlu,$sx));
                unset($longl);
                unset($longr);
                break;
            case "tu":
                $tu = $_POST['tu'];
                $tu = tu($gid, $gameDetail['mnum'], $gameDetail['fenlei'], $tu);
                $res = json_encode($tu);
                echo $res;
                return $res;
                unset($tu);
                break;
        }
    }

    public function getsmgg($bid, $ab, $abcd, $sid, $stype,$gid,$config){
        $xPlay = Db::name("x_play")->where(["gid"=>$gid,"bid"=>23378688,"name"=>["<",1]])->order("bid,sid,xsort")->select();

        $i = 0;
        $p = array();
        $cid = 0;
        $sid = 0;
        $csid = 1;
        $ccid = 1;
        $abcd = strtolower($abcd);
        if ($xPlay) {
            foreach ($xPlay as $pv){
                if ($sid != $pv['sid'] & $sid != 0){
                    $csid++;
                }
                if ($cid != $pv['cid'] & $cid != 0){
                    $ccid++;
                }
                if ($cid != $pv['cid']) {
                    $xClass = Db::name("x_class")->where(["gid"=>$gid,"cid"=>$pv['cid']])->field("dftype,ftype,name")->find();
                    $ftype = $xClass['ftype'];
                    $dftype = $xClass['dftype'];
                    $cname = $xClass['name'];
                }
                if ($sid != $pv['sid']) {
                    $csFunc = new CsFuncController();
                    $sname = $csFunc->transs('name', $pv['sid']);
                }

                $p[$i]['ftype'] = $ftype;
                $p[$i]['dftype'] = $dftype;
                $p[$i]['bid'] = $pv['bid'];
                $p[$i]['sid'] =$pv['sid'];
                $p[$i]['sname'] = $sname;
                $p[$i]['cid'] = $pv['cid'];
                $p[$i]['cname'] = $cname;
                $p[$i]['pid'] = $pv['pid'];
                $p[$i]['name'] = $pv['name'];
                $p[$i]['ifok'] = $pv['ifok'];
                $p[$i]['name'] = $pv['name'];
                $p[$i]['xsort'] = $pv['xsort'];

                $p[$i]['znum1'] = $pv['znum1'];
                $p[$i]['peilv1'] = (float)($pv['peilv1'] - $config['patt'][$ftype][$abcd]);


                if ($stype == 'gg') {
                    $p[$i]['peilv1'] = (double) ($pv['peilv1'] - $config['cs']['ggpeilv']);
                    $p[$i]['peilv2'] = (double) ($pv['peilv2'] - $config['cs']['ggpeilv']);
                } else {
                    $p[$i]['peilv1'] = (double)($pv['peilv1']-$config['patt'][$ftype][strtolower($abcd)]);
                    $p[$i]['peilv2'] = (double)($pv['peilv2']-$config['patt'][$ftype][strtolower($abcd)]);
                }

                $p[$i]['mp1'] = (float)$pv['mp1'];
                $p[$i]['mp2'] = (float)$pv['mp2'];
                $cid = $pv['cid'];
                $sid = $pv['sid'];
                $bid = $pv['bid'];
                $p[$i]['cid'] = $pv['cid'];
                $p[$i]['sid'] = $pv['sid'];
                $p[$i]['bid'] = $pv['bid'];
                $i++;
            }
            $p[0]['csid'] = $csid;
            $p[0]['ccid'] = $ccid;
        }
        return $p;
    }

    public function getpaiming($bid, $ab, $abcd, $stype,$gid,$config){

        if ($stype == 15) {
            $xPlay = Db::name("x_play")
                ->where(['gid'=>$gid,"ztype"=>0])->whereIn("bid",[23378800,23378803,23378807,23378809,23378812])
                ->order('bid, sid, xsort')
                ->select();
        } else {
            if ($stype == 110) {
                $xPlay = Db::name("x_play")
                    ->where(['gid'=>$gid,"ztype"=>0])->whereIn("bid",[23378800,23378803,23378807,23378809,23378812,23378813,23378816,23378819,23378821,23378823])
                    ->order('bid, sid, xsort')
                    ->select();
            } else {
                if ($stype == 610) {
                    $xPlay = Db::name("x_play")
                        ->where(['gid'=>$gid,"ztype"=>0])->whereIn("bid",[23378813,23378816,23378819,23378821,23378823])
                        ->order('bid, sid, xsort')
                        ->select();
                } else {
                    if ($stype == 105) {
                        $xPlay = Db::name("x_play")
                            ->where(['gid'=>$gid,"ztype"=>0,"bid"=>["<>",23378798]])
                            ->order('bid, sid, xsort')
                            ->select();
                    } else {
                        if ($stype == 108) {
                            $xPlay = Db::name("x_play")
                                ->where(['gid'=>$gid,"ztype"=>0,"bid"=>["<>",23378785]])
                                ->order('bid, sid, xsort')
                                ->select();
                        }
                    }
                }
            }
        }

        $i = 0;
        $p = array();
        $abcd = strtolower($abcd);
        if (isset($xPlay) && $xPlay) {
            foreach ($xPlay as $pv){
                $p[$i]['name'] = $pv['name'];
                if ($cid != $pv['cid']) {
                    $xClass = Db::name("x_class")->where(["gid"=>$gid,"cid"=>$pv['cid']])->field("dftype,ftype,name")->find();
                    $ftype = $xClass['ftype'];
                    $dftype = $xClass['dftype'];
                    $cname = $xClass['name'];
                }
                $csFunc = new CsFuncController();

                if ($sid != $pv['sid']) {
                    $sname = $csFunc->transs('name', $pv['sid']);
                }

                if ($bid != $pv['bid']) {
                    $bname = $csFunc->transb('name', $pv['bid']);
                }
                $p[$i]['bname'] = $bname;
                $p[$i]['sname'] = $sname;
                $p[$i]['cname'] = $cname;
                $p[$i]['ftype'] = $ftype;

                $p[$i]['pid'] = $pv['pid'];
                $p[$i]['ifok'] = $pv['ifok'];
                $p[$i]['dftype'] = $dftype;
                $cid = $pv['cid'];
                $sid = $pv['sid'];
                $bid = $pv['bid'];
                $p[$i]['cid'] = $pv['cid'];
                $p[$i]['sid'] = $pv['sid'];
                $p[$i]['bid'] = $pv['bid'];

                if ($abcd == 'a') {
                    $p[$i]['peilv1'] = (double)$pv['peilv1'];
                } else {
                    $p[$i]['peilv1'] = (double)($pv['peilv1'] - $config['patt'][$ftype][$abcd]);
                }
                if ($config['pan'][$ftype]['ab'] == 1 & ($ab == 'B' | $ab == 'b')) {
                    $p[$i]['peilv1'] += $config['patt'][$ftype]['ab'];
                }
                $i++;
            }
        }
        return $p;
    }

    public function getsm($bid, $ab, $abcd, $sid, $smtype,$gid,$config){
        $fenlei = $config['fenlei'];
        if ($fenlei == 101) {
            $xPlay = Db::name("x_play")
                ->where('gid', $gid)
                ->where(function($query) {
                    $query->where('bid', 23378755)->whereIn('name',['单', '双', '大', '小'])
                        ->whereOr('name', 'in', ['总和单', '总和双', '总和大', '总和小', '龙', '虎', '和'])
                        ->whereOr('bid', 23378767);
                })
                ->order('bid, sid, cid, xsort')
                ->select();
        } else {
            if ($fenlei == 103 | $fenlei == 121) {
                $xPlay = Db::name("x_play")
                    ->where('gid', $gid)
                    ->whereIn('name', ['单', '双', '大', '小', '合数单', '合数双', '尾大', '尾小', '总和单', '总和双', '总和大', '总和小', '总和尾大', '总和尾小', '龙', '虎'])
                    ->order('bid, sid, xsort')
                    ->select();
            } else {
                if ($fenlei == 151) {
                    $xPlay = Db::name("x_play")->where("gid",$gid)->order("bid,sid,cid,xsort")->select();
                } else {
                    if ($fenlei == 161) {
                        $xPlay = Db::name("x_play")->where(["gid"=>$gid,"cid"=>["<",23379261],"bid"=>["<>",26000000]])
                            ->order("id")->select();
                    } else {
                        if ($fenlei == 107) {
                            $xPlay = Db::name("x_play")
                                ->where('gid', $gid)
                                ->whereIn('name', ['单','双','大','小','龙','虎','冠亚单','冠亚双','冠亚大','冠亚小'])
                                ->order('bid, sid, xsort')
                                ->select();
                        } else {
                            if ($fenlei == 163) {
                                $xPlay = Db::name("x_play")
                                    ->where('gid', $gid)
                                    ->where(function($query) {
                                        $query->whereIn('name',['单', '双', '大', '小'])
                                            ->whereOr('bid', 23378858);
                                    })
                                    ->where('bid', "<>",23378857)
                                    ->order('bid, sid, xsort')
                                    ->select();
                            }
                        }
                    }
                }
            }
        }
        $i = 0;
        $p = array();
        $abcd = strtolower($abcd);
        if (isset($xPlay) && $xPlay) {
            foreach ($xPlay as $pv){
                $p[$i]['name'] = $pv['name'];
                if ($cid != $pv['cid']) {
                    $xClass = Db::name("x_class")->where(["gid"=>$gid,"cid"=>$pv['cid']])->field("dftype,ftype,name")->find();
                    $ftype = $xClass['ftype'];
                    $dftype = $xClass['dftype'];
                    $cname = $xClass['name'];
                }
                $csFunc = new CsFuncController();

                if ($sid != $pv['sid']) {
                    $sname = $csFunc->transs('name', $pv['sid']);
                }

                if ($bid != $pv['bid']) {
                    $bname = $csFunc->transb('name', $pv['bid']);
                }
                $p[$i]['bname'] = $bname;
                $p[$i]['sname'] = $sname;
                $p[$i]['cname'] = $cname;
                $p[$i]['ftype'] = $ftype;

                $p[$i]['pid'] = $pv['pid'];
                $p[$i]['ifok'] = $pv['ifok'];
                $p[$i]['dftype'] = $dftype;
                $cid = $pv['cid'];
                $sid = $pv['sid'];
                $bid = $pv['bid'];
                $p[$i]['cid'] = $pv['cid'];
                $p[$i]['sid'] = $pv['sid'];
                $p[$i]['bid'] = $pv['bid'];

                if ($abcd == 'a') {
                    $p[$i]['peilv1'] = (double)$pv['peilv1'];
                } else {
                    $p[$i]['peilv1'] = (double)($pv['peilv1'] - $config['patt'][$ftype][$abcd]);
                }
                if ($config['pan'][$ftype]['ab'] == 1 & ($ab == 'B' | $ab == 'b')) {
                    $p[$i]['peilv1'] += $config['patt'][$ftype]['ab'];
                }
                $i++;
            }
        }
        return $p;
    }

    public function getbuzlong($gid,$config){
        $buz = array();
        if ($gid == 161 | $gid == 162) {
            $xPlay = Db::name('x_play')
                ->where(["gid"=>$gid,"buzqishu"=>[">=",2]])
                ->whereIn('cid', function($query) use ($gid) {
                    $query->name('x_class')->where('gid', $gid)->whereNotIn('ftype', [1, 2])->field('cid');
                })
                ->order("buzqishu desc,bid,sid,cid,xsort")->select();
        } else {
            $xPlay = Db::name("x_play")
                ->where(["gid"=>$gid,"buzqishu"=>[">=",2]])
                ->whereIn('cid', function($query) use ($gid) {
                    $query->name('x_class')->where('gid', $gid)->where('ftype', 0)
                        ->whereNotIn("name",['质','合','总尾质','总尾合','和尾质','和尾合'])->field('cid');
                })
                ->order("buzqishu desc,bid,sid,cid,xsort")->select();
        }
        $i = 0;
        $tmp = array();
        $csFunc = new CsFuncController();
        $func = new FuncController();
        if(isset($xPlay) && $xPlay){
            foreach ($xPlay as $pv) {
                $pname = $pv["name"];
                if (!isset($tmp['b' . $pv["bid"]]) || $tmp['b' . $pv["bid"]] == '') {
                    $tmp['b' . $pv["bid"]] = $csFunc->transb('name', $pv["bid"],$gid);
                }
                if (!isset($tmp['s' . $pv["sid"]]) || $tmp['s' . $pv["sid"]] == '') {
                    $tmp['s' . $pv["sid"]] = $csFunc->transs('name', $pv["sid"],$gid);
                }
                if (!isset($tmp['c' . $pv["cid"]]) || $tmp['c' . $pv["cid"]] == '') {
                    $tmp['c' . $pv["cid"]] = $csFunc->transc('name', $pv["cid"],$gid);
                }
                $buz[$i]['name'] = $func->wf2($config["fenlei"], $tmp['b' . $pv["bid"]] ?? "", $tmp['s' . $pv["sid"]] ?? "", $tmp['c' . $pv["cid"]] ?? "");
                $buz[$i]['pname'] = $pname;
                $buz[$i]['bname'] = $tmp['b' . $pv["bid"]];
                $buz[$i]['qishu'] = $pv["zqishu"];
                $i++;
            }
        }
        return $buz;
    }

    public function getzlong($gid,$config)
    {
        $z = array();
        if ($gid == 161 | $gid == 162) {
            $xPlay = Db::name('x_play')
                ->where(["gid"=>$gid,"zqishu"=>[">=",2]])
                ->whereIn('cid', function($query) use ($gid) {
                    $query->name('x_class')->where('gid', $gid)->whereNotIn('ftype', [1, 2])->field('cid');
                })
                ->order("zqishu desc,bid,sid,cid,xsort")->select();
        } else {
            $xPlay = Db::name("x_play")
                ->where(["gid"=>$gid,"zqishu"=>[">=",2]])
                ->whereIn("name",['单','双','大','小','龙','虎','冠亚单','冠亚双','冠亚大','冠亚小','总和单','总和双','总和大','总和小','合数单','合数双','尾大','尾小'])
                ->order("zqishu desc,bid,sid,cid,xsort")->select();
        }
        $i = 0;
        $tmp = array();
        $csFunc = new CsFuncController();
        $func = new FuncController();
        if(isset($xPlay) && $xPlay){
            foreach ($xPlay as $pv) {
                $pname = $pv["name"];
                if (!isset($tmp['b' . $pv["bid"]]) || $tmp['b' . $pv["bid"]] == '') {
                    $tmp['b' . $pv["bid"]] = $csFunc->transb('name', $pv["bid"],$gid);
                }
                if (!isset($tmp['s' . $pv["sid"]]) || $tmp['s' . $pv["sid"]] == '') {
                    $tmp['s' . $pv["sid"]] = $csFunc->transs('name', $pv["sid"],$gid);
                }
                if (!isset($tmp['c' . $pv["cid"]]) || $tmp['c' . $pv["cid"]] == '') {
                    $tmp['c' . $pv["cid"]] = $csFunc->transc('name', $pv["cid"],$gid);
                }
                $z[$i]['name'] = $func->wf2($config["fenlei"], $tmp['b' . $pv["bid"]] ?? "", $tmp['s' . $pv["sid"]] ?? "", $tmp['c' . $pv["cid"]] ?? "");
                $z[$i]['pname'] = $pname;
                $z[$i]['bname'] = $tmp['b' . $pv["bid"]];
                $z[$i]['qishu'] = $pv["zqishu"];
                $i++;
            }
        }

        return $z;
    }

    public function tu($gid, $mnum, $fenlei, $tt)
    {
        global $psql, $tb_kj, $tb_play, $tb_class, $tb_bclass, $tb_sclass, $config;
        $his = date("H:i:s");
        if ($his <= $config['editend']) {
            $timestr = " and kjtime<='" . date("Y-m-d") . " " . $config['editstart'] . "' and kjtime>='" . date("Y-m-d", time()-86400) . " " . $config['editstart'] . "'";
        }  else {
            $timestr = " and kjtime>='" . date("Y-m-d") . " " . $config['editstart'] . "'";
        }
        $sql = '';
        for ($i = 1; $i <= $mnum; $i++) {
            $sql .= ",m" . $i;
        }
        //echo "select qishu$sql from `$tb_kj` where gid='$gid' and m1!='' $timestr $kjtime order by qishu desc";
        $kj = $psql->arr("select qishu{$sql} from `{$tb_kj}` where gid='{$gid}' and m1!='' {$timestr} order by gid,qishu desc", 1);
        $tu = array();
        if ($kj){
            $ck = $kj ? count($kj) : 0;
        }
        else{
            $ck=0;
        }
        if ($config['cs']['ft'] == 1 && $tt == 2) {
            for ($i = 0; $i < $ck; $i++) {
                $zh = 0;
                $kjarr = [$kj[$i]['m1'],$kj[$i]['m2'],$kj[$i]['m3'],$kj[$i]['m4'],$kj[$i]['m5'],$kj[$i]['m6'],$kj[$i]['m7'],$kj[$i]['m8'],$kj[$i]['m9'],$kj[$i]['m10']] ;
                $zh = getftzh($kjarr,$config['cs']);
                $tu['番'][$i] = $zh % 4 == 0 ? 4 : $zh % 4;
                $tu['单双'][$i] = danshuang($tu['番'][$i]);
                if ($tu['番'][$i] <= 2) {
                    $tu['大小'][$i] = '小';
                } else {
                    $tu['大小'][$i] = '大';
                }
            }
        } else {
            if ($fenlei == 161) {
                for ($i = 0; $i < $ck; $i++) {
                    $tmpbid = 0;
                    $zq = 0;
                    $zd = 0;
                    $he = 0;
                    for ($h = 1; $h <= $mnum; $h++) {
                        if ($kj[$i]['m' . $h] <= 40) {
                            $zq++;
                        }
                        if ($kj[$i]['m' . $h] <= 40) {
                            $zd++;
                        }
                        $he += $kj[$i]['m' . $h];
                    }
                    if ($zq == 10) {
                        $tu["前后和"][$i] = "和";
                    } else {
                        if ($zq > 10) {
                            $tu["前后和"][$i] = "前";
                        } else {
                            $tu["前后和"][$i] = "后";
                        }
                    }
                    if ($zd == 10) {
                        $tu["单双和"][$i] = "和";
                    } else {
                        if ($zd > 10) {
                            $tu["单双和"][$i] = "单";
                        } else {
                            $tu["单双和"][$i] = "双";
                        }
                    }
                    $tu["五行"][$i] = wuhang_161($he);
                    $tu["总和单双"][$i] = danshuang($he);
                    if ($he == 810) {
                        $tu["总和大小"][$i] = "和";
                    } else {
                        if ($he > 810) {
                            $tu["总和大小"][$i] = "大";
                        } else {
                            $tu["总和大小"][$i] = "小";
                        }
                    }
                }
            } else {
                if ($fenlei == 107) {
                    $bname = array("冠军", "亚军", "第三名", "第四名", "第五名", "第六名", "第七名", "第八名", "第九名", "第十名");
                    $ma = array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
                    for ($j = 0; $j < 10; $j++) {
                        foreach ($ma as $k => $v) {
                            $tu['chu'][$bname[$j]][$k] = 0;
                        }
                    }
                    $tu["b"] = $bname;
                    for ($i = 0; $i < $ck; $i++) {
                        $he = $kj[$i]['m1'] + $kj[$i]['m2'];
                        $tu["冠亚和单双"][$i] = danshuang($he);
                        if ($he <= 11) {
                            $tu["冠亚和大小"][$i] = "小";
                        } else {
                            $tu["冠亚和大小"][$i] = "大";
                        }
                        $tu["冠亚和"][$i] = $he;
                        for ($j = 0; $j < 10; $j++) {
                            $tu[$bname[$j]][$bname[$j]][$i] = $kj[$i]['m' . ($j + 1)];
                            $tu[$bname[$j]]['单双'][$i] = danshuang($kj[$i]['m' . ($j + 1)]);
                            $tu[$bname[$j]]['大小'][$i] = daxiao107($kj[$i]['m' . ($j + 1)]);
                            if ($j < 5) {
                                $tu[$bname[$j]]['龙虎'][$i] = longhuhe($kj[$i]['m' . ($j + 1)], $kj[$i]['m' . (10 - $j)]);
                            }
                            foreach ($ma as $k => $v) {
                                if ($kj[$i]['m' . ($j + 1)] == $v) {
                                    $tu['chu'][$bname[$j]][$k]++;
                                }
                            }
                        }
                    }
                    $tu["冠亚和不出"] = getbuz($gid, " and bid=23378805 and ztype=0");
                    for ($j = 0; $j < 10; $j++) {
                        $tu['bc'][$bname[$j]] = getbuz($gid, " and bid=(select bid from `{$tb_bclass}` where gid='{$gid}' and name='" . $bname[$j] . "') and ztype=0");
                    }
                } else {
                    if ($tt > 9) {
                        $name = transb8("name", $tt, $fenlei);
                        $mtype = json_decode(transgame($fenlei, 'mtype'), true);
                        if ($name == "2字和数") {
                            if ($fenlei == 101) {
                                $bname = array("万千", "万百", "万十", "万个", "千百", "千十", "千个", "百十", "百个", "十个");
                                $h = 10;
                            } else {
                                $bname = array("百十", "百个", "十个");
                                $h = 3;
                            }
                        } else {
                            $bname = array("前三", "中三", "后三");
                            $h = 3;
                        }
                        $tu["b"] = $bname;
                        for ($i = 0; $i < $ck; $i++) {
                            for ($j = 0; $j < $h; $j++) {
                                if ($fenlei == 163) {
                                    switch ($bname[$j]) {
                                        case "百十":
                                            $he = $kj[$i]['m1'] + $kj[$i]['m2'];
                                            break;
                                        case "百个":
                                            $he = $kj[$i]['m1'] + $kj[$i]['m3'];
                                            break;
                                        case "十个":
                                            $he = $kj[$i]['m2'] + $kj[$i]['m3'];
                                            break;
                                    }
                                } else {
                                    switch ($bname[$j]) {
                                        case "万千":
                                            $he = $kj[$i]['m1'] + $kj[$i]['m2'];
                                            break;
                                        case "万百":
                                            $he = $kj[$i]['m1'] + $kj[$i]['m3'];
                                            break;
                                        case "万十":
                                            $he = $kj[$i]['m1'] + $kj[$i]['m4'];
                                            break;
                                        case "万个":
                                            $he = $kj[$i]['m1'] + $kj[$i]['m5'];
                                            break;
                                        case "千百":
                                            $he = $kj[$i]['m2'] + $kj[$i]['m3'];
                                            break;
                                        case "千十":
                                            $he = $kj[$i]['m2'] + $kj[$i]['m4'];
                                            break;
                                        case "千个":
                                            $he = $kj[$i]['m2'] + $kj[$i]['m5'];
                                            break;
                                        case "百十":
                                            $he = $kj[$i]['m3'] + $kj[$i]['m4'];
                                            break;
                                        case "百个":
                                            $he = $kj[$i]['m3'] + $kj[$i]['m5'];
                                            break;
                                        case "十个":
                                            $he = $kj[$i]['m4'] + $kj[$i]['m5'];
                                            break;
                                        case "前三":
                                            $he = $kj[$i]['m1'] + $kj[$i]['m2'] + $kj[$i]['m3'];
                                            break;
                                        case "中三":
                                            $he = $kj[$i]['m2'] + $kj[$i]['m3'] + $kj[$i]['m4'];
                                            break;
                                        case "后三":
                                            $he = $kj[$i]['m3'] + $kj[$i]['m4'] + $kj[$i]['m5'];
                                            break;
                                    }
                                }
                                $tu[$bname[$j]]['和单双'][$i] = danshuang($he);
                                if ($name == '3字和数') {
                                    if ($he <= 13) {
                                        $tu[$bname[$j]]['和大小'][$i] = "小";
                                    } else {
                                        $tu[$bname[$j]]['和大小'][$i] = "大";
                                    }
                                }
                                $tu[$bname[$j]]['和尾大小'][$i] = daxiao($he % 10);
                            }
                        }
                    } else {
                        if ($fenlei == 101) {
                            $bname = array("第一球", "第二球", "第三球", "第四球", "第五球");
                            $ma = array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
                            for ($j = 0; $j < 5; $j++) {
                                foreach ($ma as $k => $v) {
                                    $tu['chu'][$bname[$j]][$k] = 0;
                                }
                            }
                            $tu["b"] = $bname;
                            for ($i = 0; $i < $ck; $i++) {
                                $he = $kj[$i]['m1'] + $kj[$i]['m2'] + $kj[$i]['m3'] + $kj[$i]['m4'] + $kj[$i]['m5'];
                                $tu["总和单双"][$i] = danshuang($he);
                                if ($he <= 22) {
                                    $tu["总和大小"][$i] = "小";
                                } else {
                                    $tu["总和大小"][$i] = "大";
                                }
                                $tu["总尾大小"][$i] = daxiao($he % 10);
                                $tu["龙虎和"][$i] = longhuhe($kj[$i]['m1'], $kj[$i]['m5']);
                                for ($j = 0; $j < 5; $j++) {
                                    $tu[$bname[$j]][$bname[$j]][$i] = $kj[$i]['m' . ($j + 1)];
                                    $tu[$bname[$j]]['单双'][$i] = danshuang($kj[$i]['m' . ($j + 1)]);
                                    $tu[$bname[$j]]['大小'][$i] = daxiao($kj[$i]['m' . ($j + 1)]);
                                    foreach ($ma as $k => $v) {
                                        if ($kj[$i]['m' . ($j + 1)] == $v) {
                                            $tu['chu'][$bname[$j]][$k]++;
                                        }
                                    }
                                }
                            }
                            for ($j = 0; $j < 5; $j++) {
                                $tu['bc'][$bname[$j]] = getbuz($gid, " and sid=(select sid from `{$tb_sclass}` where gid='{$gid}' and name='" . $bname[$j] . "') and ztype=0");
                            }
                        } else {
                            if ($fenlei == 163) {
                                $bname = array("第一球", "第二球", "第三球");
                                $ma = array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
                                for ($j = 0; $j < 3; $j++) {
                                    foreach ($ma as $k => $v) {
                                        $tu['chu'][$bname[$j]][$k] = 0;
                                    }
                                }
                                $tu["b"] = $bname;
                                for ($i = 0; $i < $ck; $i++) {
                                    $he = $kj[$i]['m1'] + $kj[$i]['m2'] + $kj[$i]['m3'];
                                    $tu["总和单双"][$i] = danshuang($he);
                                    if ($he <= 13) {
                                        $tu["总和大小"][$i] = "小";
                                    } else {
                                        $tu["总和大小"][$i] = "大";
                                    }
                                    $tu["总和尾大小"][$i] = daxiao($he % 10);
                                    $tu["龙虎和"][$i] = longhuhe($kj[$i]['m1'], $kj[$i]['m3']);
                                    for ($j = 0; $j < 3; $j++) {
                                        $tu[$bname[$j]][$bname[$j]][$i] = $kj[$i]['m' . ($j + 1)];
                                        $tu[$bname[$j]]['单双'][$i] = danshuang($kj[$i]['m' . ($j + 1)]);
                                        $tu[$bname[$j]]['大小'][$i] = daxiao($kj[$i]['m' . ($j + 1)]);
                                        foreach ($ma as $k => $v) {
                                            if ($kj[$i]['m' . ($j + 1)] == $v) {
                                                $tu['chu'][$bname[$j]][$k]++;
                                            }
                                        }
                                    }
                                }
                                $tu["总和不出"] = getbuz($gid, " and bid=23378858 and ztype=0");
                                for ($j = 0; $j < 3; $j++) {
                                    $tu['bc'][$bname[$j]] = getbuz($gid, " and sid=(select sid from `{$tb_sclass}` where gid='{$gid}' and name='" . $bname[$j] . "') and ztype=0");
                                }
                            } else {
                                if ($fenlei == 103) {
                                    $bname = array("第一球", "第二球", "第三球", "第四球", "第五球", "第六球", "第七球", "第八球");
                                    $ma = array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);
                                    for ($j = 0; $j < 8; $j++) {
                                        foreach ($ma as $k => $v) {
                                            $tu['chu'][$bname[$j]][$k] = 0;
                                        }
                                    }
                                    $tu["b"] = $bname;
                                    for ($i = 0; $i < $ck; $i++) {
                                        $he = $kj[$i]['m1'] + $kj[$i]['m2'] + $kj[$i]['m3'] + $kj[$i]['m4'] + $kj[$i]['m5'] + $kj[$i]['m6'] + $kj[$i]['m7'] + $kj[$i]['m8'];
                                        $tu["总和单双"][$i] = danshuang($he);
                                        if ($he < 84) {
                                            $tu["总和大小"][$i] = "小";
                                        } else {
                                            if ($he == 84) {
                                                $tu["总和大小"][$i] = "和";
                                            } else {
                                                $tu["总和大小"][$i] = "大";
                                            }
                                        }
                                        $tu["总尾大小"][$i] = daxiao($he % 10);

                                        for ($j = 0; $j < 8; $j++) {

                                            $tu[$bname[$j]][$bname[$j]][$i] = $kj[$i]['m' . ($j + 1)];
                                            $tu[$bname[$j]]['大小'][$i] = daxiao103($kj[$i]['m' . ($j + 1)]);
                                            $tu[$bname[$j]]['单双'][$i] = danshuang($kj[$i]['m' . ($j + 1)]);
                                            if($j<4){
                                                $tu[$bname[$j]]['龙虎'][$i] = longhuhe($kj[$i]['m' . ($j + 1)],$kj[$i]['m' . (8-$j)]);
                                            }
                                            $tu[$bname[$j]]['尾数大小'][$i] = daxiao($kj[$i]['m' . ($j + 1)] % 10);
                                            $tu[$bname[$j]]['合数单双'][$i] = danshuang(heshu($kj[$i]['m' . ($j + 1)]));

                                            //$tu[$bname[$j]]['方位'][$i] = fangwei($kj[$i]['m' . ($j + 1)]);
                                            //$tu[$bname[$j]]['中发白'][$i] = zhongfabai($kj[$i]['m' . ($j + 1)]);
                                            foreach ($ma as $k => $v) {
                                                if ($kj[$i]['m' . ($j + 1)] == $v) {
                                                    $tu['chu'][$bname[$j]][$k]++;
                                                }
                                            }
                                        }
                                    }
                                    for ($j = 0; $j < 8; $j++) {
                                        $tu['bc'][$bname[$j]] = getbuz($gid, " and bid=(select bid from `{$tb_bclass}` where gid='{$gid}' and name='" . $bname[$j] . "') and ztype=0");
                                    }
                                } else {
                                    if ($fenlei == 121) {
                                        $bname = array("第1球", "第2球", "第3球", "第4球", "第5球");
                                        $ma = array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
                                        for ($j = 0; $j < 5; $j++) {
                                            foreach ($ma as $k => $v) {
                                                $tu['chu'][$bname[$j]][$k] = 0;
                                            }
                                        }
                                        $tu["b"] = $bname;
                                        for ($i = 0; $i < $ck; $i++) {
                                            $he = $kj[$i]['m1'] + $kj[$i]['m2'] + $kj[$i]['m3'] + $kj[$i]['m4'] + $kj[$i]['m5'];
                                            $tu["总和单双"][$i] = danshuang($he);
                                            if ($he < 30) {
                                                $tu["总和大小"][$i] = "小";
                                            } else {
                                                if ($he == 30) {
                                                    $tu["总和大小"][$i] = "和";
                                                } else {
                                                    $tu["总和大小"][$i] = "大";
                                                }
                                            }
                                            $tu["总和尾大小"][$i] = daxiao($he % 10);
                                            $tu["龙虎"][$i] = longhuhe($kj[$i]['m1'], $kj[$i]['m8']);
                                            for ($j = 0; $j < 5; $j++) {
                                                $tu[$bname[$j]][$bname[$j]][$i] = $kj[$i]['m' . ($j + 1)];
                                                $tu[$bname[$j]]['单双'][$i] = danshuang($kj[$i]['m' . ($j + 1)]);
                                                $tu[$bname[$j]]['大小'][$i] = daxiao103($kj[$i]['m' . ($j + 1)]);
                                                foreach ($ma as $k => $v) {
                                                    if ($kj[$i]['m' . ($j + 1)] == $v) {
                                                        $tu['chu'][$bname[$j]][$k]++;
                                                    }
                                                }
                                            }
                                        }
                                        for ($j = 0; $j < 5; $j++) {
                                            $tu['bc'][$bname[$j]] = getbuz($gid, " and bid=(select bid from `{$tb_bclass}` where gid='{$gid}' and name='" . $bname[$j] . "') and ztype=0");
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return $tu;
    }

    public function shengxiaos($ma, $bml)
    {
        $jiazhi = array('甲子', '乙丑', '丙寅', '丁卯', '戊辰', '己巳', '庚午', '辛未', '壬申', '癸酉', '甲戌', '乙亥', '丙子', '丁丑', '戊寅', '己卯', '庚辰', '辛巳', '壬午', '癸未', '甲申', '乙酉', '丙戌', '丁亥', '戊子', '己丑', '庚寅', '辛卯', '壬辰', '癸巳', '甲午', '乙未', '丙申', '丁酉', '戊戌', '己亥', '庚子', '辛丑', '壬寅', '癸卯', '甲辰', '乙巳', '丙午', '丁未', '戊申', '己酉', '庚戌', '辛亥', '壬子', '癸丑', '甲寅', '乙卯', '丙辰', '丁巳', '戊午', '己未', '庚申', '辛酉', '壬戌', '癸亥');
        $index = 0;
        foreach ($jiazhi as $key => $val) {
            if ($val == $bml) {
                $index = $key;
                break;
            }
        }
        $index = $index % 12 + 1;
        $ma = $ma % 12;
        $arr = array('鼠', '牛', '虎', '兔', '龍', '蛇', '馬', '羊', '猴', '雞', '狗', '豬');
        $in= 0 ;
        if ($index >= $ma) {
            $in = $index - $ma;
        } else {
            $in =  $index - $ma + 12;
        }
        if($in>=12) $in -=12;
        return $arr[$in];
    }
}