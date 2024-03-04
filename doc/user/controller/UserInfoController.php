<?php
 
namespace app\user\controller;

use think\facade\Db;
use think\facade\View;

/*include('../data/comm.inc.php');
include('../data/uservar.php');
include('../func/func.php');
include('../func/csfunc.php');
include('../func/userfunc.php');
include('../include.php');
include('./checklogin.php');;*/
/**
 * Make主页
 */
class UserInfoController{

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
        switch ($xType) {
            case 'show':
                View::assign('name', $xUser["name"]);
                View::assign('status', $func->transstatus($xUser["status"]));
                View::assign('username', strtolower($xUser["username"]));
                View::assign('money', $func->p1($xUser["money"]));
                View::assign('maxmoney', $func->p1($xUser["maxmoney"]));
                View::assign('kmoney', $func->p1($xUser["kmoney"]));
                View::assign('kmaxmoney', $func->p1($xUser["kmaxmoney"]));
                View::assign('fudong', $xUser["fudong"]);
                View::assign('defaultpan', $xUser["defaultpan"]);
                $pan = json_decode($xUser['pan'], true);
                $cps = $pan ? count($pan) : 0;
                for ($k = 0; $k < $cps; $k++) {
                    if ($k > 0) {
                        $str .= ',';
                    }
                    $str .= strtolower($pan[$k]);
                }
                View::assign('pan', $pan);
                View::assign('panstr', implode(",",$pan));

                $gamecs = getgamecs($userid);
                foreach ($gamecs as $v) {
                    $gamearr[] = $v['gid'];
                }
                $gamearr = implode(',', $gamearr);

                $xGameArr = Db::name("x_game")->whereIn("gid",$gamearr)->order("xsort")->select();

                $i = 0;
                $game = array();
                foreach ($xGameArr as $gv) {
                    $game[$i]['gid'] = $gv["gid"];
                    $tgid = $gv['gid'];
                    $game[$i]['gname'] = $gv['gname'];
                    $game[$i]['panstatus'] = $gv['panstatus'];
                    $game[$i]['fast'] = $gv['fast'];
                    $game[$i]['pan'] = json_decode($gv['pan'], true);
                    $game[$i]['dftype'] = json_decode($gv['dftype'], true);
                    $cp = count($game[$i]['pan']);
                    for ($j = 0; $j < $cp; $j++) {
                        $tclass = $game[$i]['pan'][$j]['class'];
                        $cs = getjes8($tclass, $userid, $tgid);
                        $game[$i]['pan'][$j]['name'] = $game[$i]['dftype'][$tclass];
                        $game[$i]['pan'][$j]['cmaxje'] = $cs['cmaxje'];
                        $game[$i]['pan'][$j]['maxje'] = $cs['maxje'];
                        $game[$i]['pan'][$j]['minje'] = $cs['minje'];
                        if ($game[$i]['pan'][$j]['abcd'] == 1) {
                            if ($game[$i]['pan'][$j]['ab'] == 1) {
                                $xPoints = Db::name("x_points")->where(["userid"=>$userid,"gid"=>$tgid,"class"=>$tclass,"ab"=>"A"])->find();
                                for ($k = 0; $k < $cps; $k++) {
                                    $tmp = strtolower($pan[$k]);
                                    $game[$i]['pan'][$j]['points' . $tmp . 'a'] = $func->pr2($xPoints[$tmp]);
                                }

                                $xPoints = Db::name("x_points")->where(["userid"=>$userid,"gid"=>$tgid,"class"=>$tclass,"ab"=>"B"])->field($str)->find();
                                for ($k = 0; $k < $cps; $k++) {
                                    $tmp = strtolower($pan[$k]);
                                    $game[$i]['pan'][$j]['points' . $tmp . 'b'] = $func->pr2($xPoints[$tmp]);
                                }
                            } else {
                                $xPoints = Db::name("x_points")->where(["userid"=>$userid,"gid"=>$tgid,"class"=>$tclass,"ab"=>"0"])->field($str)->find();
                                for ($k = 0; $k < $cps; $k++) {
                                    $tmp = strtolower($pan[$k]);
                                    $game[$i]['pan'][$j]['points' . $tmp . '0'] = $func->pr2($xPoints[$tmp]);
                                }
                            }
                        } else {
                            $xPoints = Db::name("x_points")->where(["userid"=>$userid,"gid"=>$tgid,"class"=>$tclass,"ab"=>"0"])->field("a")->find();
                            $game[$i]['pan'][$j]['pointsa0'] = $func->pr2($xPoints["a"]);
                        }
                    }
                    $i++;
                }

                View::assign('game', $game);
                View::assign('gid', $gid);
                View::assign('moneytype', $xConfig['moneytype']);

                return view('index/userinfo');
                break;
            case "setdefaultpan":
                $pan = $_POST['pan'];
                $pans  = ['A','B','C','D'];
                if(!in_array($pan,$pans)){
                    exit;
                }
                $_SESSION['abcd']=$pan;
                Db::name("x_user")->where("userid",$userid)->update(["defaultpan"=>$pan]);
                echo 1;
                break;
            case 'edit':
                View::assign('name', $xUser["name"]);
                View::assign('username', $xUser["username"]);
                View::assign('status', $xUser["status"]);
                View::assign('money', $xUser["money"]);
                View::assign('maxmoney', $xUser["maxmoney"]);
                View::assign('kmoney', $xUser["kmoney"]);
                View::assign('kmaxmoney', $xUser["kmaxmoney"]);
                View::assign('fmoney', $xUser["fmoney"]);
                View::assign('fmaxmoney', $xUser["fmaxmoney"]);
                View::assign('fastje', $xUser["fastje"]);
                View::assign('plwarn', $xUser["plwarn"]);
                View::assign('bank', $xUser["bank"]);
                View::assign('banknum', $xUser["banknum"]);
                View::assign('bankname', $xUser["bankname"]);
                View::assign('moneytype', $xWeb["moneytype"]);
                View::assign('userid', $userid);
                View::assign('pan', json_decode($xUser["pan"],true));
                View::assign('defaultpan', $xUser["defaultpan"]);
                View::assign('morengid', $xUser["gid"]);
                View::assign('usertype', "会员");

                $pan = json_decode($xUser["pan"], true);
                $cps = $pan ? count($pan) : 0;
                $gamecs = $func->getgamecs($userid);
                $gamecs = $func->getgamename($gamecs);
                View::assign('gamecs', $gamecs);
                View::assign('span', $pan);
                View::assign('gid', $gid);

                $xFastje = Db::name("x_fastje")->where("userid",$userid)->order("je")->select();
                $je = array();
                if($xFastje){
                    $i = 0;
                    foreach ($xFastje as $fv){
                        $je[$i] = $fv["je"];
                        $i++;
                    }
                }
                View::assign('je', $je);

                $username = $xUser["username"];

                $ct = array();
                $xUserEdit = Db::name("x_user_edit")
                    ->where("userid", $userid)
                    ->where("action", "not in", ["修改资料", "修改状态"])
                    ->field("moditime, action")
                    ->select();
                if($xUserEdit){
                    $i = 0;
                    foreach ($xUserEdit as $ev){
                        $ct[$i]['time'] = $ev["moditime"];
                        $ct[$i]['action'] = $ev["action"];
                        $i++;
                    }
                }

                $l = array();
                $xUserLogin = Db::name("x_user_login")
                    ->where("username", $username)
                    ->where("xtype", 2)
                    ->order("time desc")
                    ->limit(20)
                    ->field("ip as ip,addr,time,ifok")
                    ->select();


                $ifok = array('<label class=red>失败</label>', '<label class=green>成功</label>');
                if($xUserLogin){
                    $i = 0;
                    foreach ($xUserLogin as $lv){
                        $l[$i]['ip'] = $lv["ip"];
                        $l[$i]['addr'] = $lv["addr"];
                        $l[$i]['time'] = substr($lv["time"],5);
                        $l[$i]['ifok'] = $ifok[$lv["ifok"]];
                        $i++;
                    }
                }

                View::assign('ct', $ct);
                View::assign('l', $l);

                return view('index/user_edit');
                break;
            case 'editsend':
                if ($_POST['pass1'] != '' & $_POST['pass0'] != '') {
                    $pass1 = md5($_POST['pass1'] . $agentConfig['upass']);
                    $pass0 = md5($_POST['pass0'] . $agentConfig['upass']);
                    $xUserArr = Db::name("agent")->where(["userpass"=>$pass0,"userid"=>$userid])->select();
                    foreach ($xUserArr as $uv){
                        if($uv["id"] == ""){
                            echo 1;exit;
                        }
                    }

                    $updateRes = Db::name("agent")->where("userid",$userid)->update(["userpass"=>$pass1]);
                    if($updateRes){
                        $func->userchange('更改密码', $userid);
                        $func->sessiondelu();
                        echo 2;
                        die;
                    }
                }
                $morengid = $_POST['morengid'];
                $fastje = $_POST['fastje'];
                $plwarn = $_POST['plwarn'];
                $pan = $_POST['pan'];

                $xGamecs = Db::name("x_gamecs")->where(["gid"=>$morengid,"ifok"=>1])->find();
                if($xGamecs){
                    $updateData["gid"] = $morengid;
                }

                $updateData["fastje"] = $fastje;
                $updateData["plwarn"] = $plwarn;
                $updateData["defaultpan"] = $pan;
                Db::name("x_user")->where("userid",$userid)->update($updateData);

                $arr = str_replace("\\", '', $_POST['je']);
                $arr = json_decode($arr, true);

                if (($arr ? count($arr) : 0) > 0){
                    Db::name("x_fastje")->where("userid",$userid)->delete();

                    foreach ($arr as $key => $val) {
                        Db::name("x_fastje")->insert(["je"=>$val,"xsort"=>$key,"userid"=>$userid]);
                    }
                }
                $func->userchange('更改资料', $userid);
                echo 3;
                break;
            case 'changepassword2':
                if ($xUser['passtime'] == 0) {
                    $first = 1;
                }
                View::assign('first', $first??0);
                View::assign('passtime', $xUser['passtime']);
                View::assign('username', $xUser['username']);
                return view('index/changepassword2');
                break;
            case 'getnewsall':
                $xNews = Db::name("x_news")->whereIn("wid",$xWeb['wid'])->whereIn("agent",[0,2])
                    ->where("ifok",1)->order("time desc")->select();
                $i = 0;
                $news = [];
                if($xNews){
                    foreach ($xNews as $nv){
                        $news[$i]['id'] = $i + 1;
                        if($nv['cs']==1){
                            $arr[0] = $gameDetail['thisqishu'];
                            $arr[1] = $xWeb['webname'];

                            $xKj = Db::name("x_kj")->where(["qishu"=>$gameDetail['thisqishu'],"gid"=>$gid])
                                ->field("opentime,closetime,kjtime")->find();
                            $xKjOpentime = isset($xKj['opentime'])?strtotime($xKj['opentime']):0;
                            $xKjClosetime = isset($xKj['closetime'])?strtotime($xKj['closetime']):0;
                            $xKjKjtime = isset($xKj['kjtime'])?strtotime($xKj['kjtime']):0;

                            $arr[2] = date("Y-m-d H:i:s", $xKjOpentime + $xWeb['times']['o']);
                            $arr[3] = date("Y-m-d H:i:s", $xKjClosetime - $xWeb['times']['c']-$gameDetail['userclosetime']);
                            $arr[4] = $xKjKjtime;
                            $news[$i]['content'] = $func->messreplace($nv['content'],$arr);
                        }else{
                            $news[$i]['content'] = $nv['content'];
                        }
                        $news[$i]['content'] = htmlspecialchars_decode($news[$i]['content']);
                        $news[$i]['time'] = $nv['time'];
                        $i++;
                    }
                }

                View::assign('news', $news);
                return view('index/news');
                break;
            case "getnews":
                $xNews = Db::name("x_news")->whereIn("wid",$xWeb['wid'])->whereIn("agent",[0,2])
                    ->where("ifok",1)->order("time desc")->select();
                $i = 0;
                $news=[];
                if($xNews){
                    foreach ($xNews as $nv){
                        $news[$i]['id'] = $i;
                        if($nv['cs']==1){
                            $arr[0] = $gameDetail['thisqishu'];
                            $arr[1] = $xWeb['webname'];

                            $xKj = Db::name("x_kj")->where(["qishu"=>$gameDetail['thisqishu'],"gid"=>$gid])
                                ->field("opentime,closetime,kjtime")->find();
                            $xKjOpentime = isset($xKj['opentime'])?strtotime($xKj['opentime']):0;
                            $xKjClosetime = isset($xKj['closetime'])?strtotime($xKj['closetime']):0;
                            $xKjKjtime = isset($xKj['kjtime'])?strtotime($xKj['kjtime']):0;

                            $arr[2] = date("Y-m-d H:i:s", $xKjOpentime + $xWeb['times']['o']);
                            $arr[3] = date("Y-m-d H:i:s", $xKjClosetime - $xWeb['times']['c']-$gameDetail['userclosetime']);
                            $arr[4] = $xKjKjtime;
                            $news[$i]['content'] = $func->messreplace($nv['content'],$arr);
                        }else{
                            $news[$i]['content'] = $nv['content'];
                        }
                        $news[$i]['content'] = htmlspecialchars_decode($news[$i]['content']);
                        $news[$i]['time'] = $nv['time'];
                        $i++;
                    }
                }
                echo json_encode($news);
                unset($news);
                break;
            case "getusermoney":
                $arr[0] = $func->p1($xUser["maxmoney"]);
                $arr[1] = $func->p1($xUser["money"]);
                $arr[2] = $func->p1($xUser["maxmoney"]) - $func->p1($xUser["money"]);
                $arr[3] = $func->p1($xUser["kmaxmoney"]);
                $arr[4] = $func->p1($xUser["kmoney"]);

                $sumje = Db::name("x_lib")->where(["userid"=>$userid,"z"=>9])
                    ->field("sum(je) as sumje")->find();
                $arr[5] = $sumje["sumje"];
                $arr[6] = $gameDetail['thisqishu'];
                $arr[7] = $func->p1($xUser["sy"]);

                echo json_encode($arr);
                break;
            case "setgid":
                $garr = json_decode(str_replace("\\","",$_POST['garr']),true);
                if(is_array($garr)){
                    $garrs = json_encode($garr);

                    Db::name("x_user")->where("userid",$userid)->update(["garr"=>$garrs]);

                    $gamecs = $func->getgamecs($userid);
                    $gamecs = $func->getgamename($gamecs);
                    $tmp=[];
                    foreach ($gamecs as $key => $value) {
                        $gamecs[$key]['px'] = $garr["g".$value['gid']];
                        $tmp[]= $garr["g".$value['gid']];
                        $gamecs[$key]['ifok'] = $garr["ok".$value['gid']];
                        if($garr["ok".$value['gid']]==1){
                            $vgame++;
                        }
                    }
                    array_multisort($tmp,SORT_ASC,SORT_NUMERIC,$gamecs);
                    echo json_encode($gamecs, JSON_UNESCAPED_UNICODE);
                }

                break;
        }
    }


    public function getuserid(){
        $xUser = Db::name("x_user")->where("username",$_SESSION['uusername'])->find();
        if($xUser["userid"] != "" || $xUser["ifson"] == 0 ||$xUser["ifagent"] == 0){
            return $xUser["userid"];
        }
        return 0;
    }

    public function getlibje($gid, $qs) {
        $rs = Db::name("x_lib")->where(["gid"=>$gid,"qishu"=>$qs,"xtype"=>["<>",2]])
            ->field("count(id) as counid,sum(je) as sumje,sum(je*zc0/100) as sumjezc")->select();
        $r2 = Db::name("x_lib")->where(["gid"=>$gid,"qishu"=>$qs,"userid"=>99999999])
            ->field("count(id) as counid,sum(je) as sumje")->select();

        return array(
            $this->pr0($rs[0]["counid"]),
            $this->pr0($rs[0]["sumje"]),
            $this->pr0($rs[0]["sumjezc"]),
            $this->pr0($r2[0]["counid"]),
            $this->pr0($r2[0]["sumje"])
        );
    }

    public function pr0($v){
        if ($v == 'null'){
            return 0;
        } else{
            return round($v, 0);
        }
    }
}