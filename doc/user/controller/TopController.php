<?php
 
namespace app\user\controller;

use think\facade\Db;

/**
 * Top主页
 */
class TopController{

    public function index($userid){
        $xUser = Db::name("agent")->where("id",$userid)->find();
        if(!$xUser){
            return [];
        }

        $res["username"] = strtolower($xUser['username'])."(".$xUser['defaultpan']."盘)";

        $func = new FuncController();
        $res["kmaxmoney"] =  $func->p1($xUser["kmaxmoney"]);
        $res["kmoney"] =  $func->p1($xUser["kmoney"]);

        if($res["kmaxmoney"]==0){
            $res["kmoneyuse"] = $xUser["sy"] - $xUser["jzkmoney"] - $xUser["kmoney"];
        }else{
            $res["kmoneyuse"] = $xUser["kmaxmoney"] + $xUser["sy"] - $xUser["jzkmoney"] - $xUser["kmoney"];
        }
        $res["maxmoney"] =  $func->p1($xUser["maxmoney"]);
        $res["money"] =  $func->p1($xUser["money"]);
        $res["sy"] =  $func->p1($xUser["sy"]);
        $res["moneyuse"] =  $func->p1($xUser["maxmoney"]) - $func->p1($xUser["money"]);
        $res["layer"] =  $func->p1($xUser["layer"]);

        $gamecs = $func->getgamecs($userid);
        $gamecs = $func->getgamename($gamecs);
        $garr = json_decode($xUser['garr'],true);

        if(is_numeric($_SESSION['gid']) && $_SESSION['gid']!=''){
            $gid = $_SESSION['gid'];
            $fGamecs = Db::name("x_gamecs")->where(["gid"=>$gid,"userid"=>$userid])->field("ifok")->find();
            if($fGamecs && $fGamecs["ifok"] != 1){
                $fGamecs = Db::name("x_gamecs")->where(["ifok"=>1,"userid"=>$userid])->field("gid")->find();
                $gid = $fGamecs["gid"];
                Db::name("x_user")->where("userid",$userid)->update(["gid"=>$gid]);
            }
        }else if(is_array($garr)){
            $gid= $garr[0]['gid'];
        }else{
            $gid = $gamecs[0]['gid'];
        }
        $_SESSION['gid'] = $gid;
        $vgame=0;
        if(is_array($garr) && count($garr)>0){
            $tmp=[];
            foreach ($gamecs as $key => $value) {
                $gamecs[$key]['px'] = $garr["g".$value['gid']] ?? "";
                $tmp[]= $garr["g".$value['gid']] ?? "";
                $gamecs[$key]['ifok'] = $garr["ok".$value['gid']] ?? "";
                if($gamecs[$key]['ifok']==1){
                    $vgame++;
                }
            }
            array_multisort($tmp,SORT_ASC,SORT_NUMERIC,$gamecs);
        }

        if($vgame==0){
            $vgame=8;
        }

        $res["vgame"] = $vgame;
        $res["gamecs"] = $gamecs;
        $res["cg"] = $gamecs ? count($gamecs) : 0;
        $res["gid"] = $gid;
        $res["pan"] = json_decode($xUser["pan"],true);
        $res["cpan"] = $res["pan"] ? count($res["pan"]) : 0;


        if(isset($_SESSION['abcd']) &&$_SESSION['abcd']=='A' | $_SESSION['abcd']=='B'  | $_SESSION['abcd']=='C'  | $_SESSION['abcd']=='D' ){
            $res["defaultpan"] = $_SESSION['abcd'];
        }else{
            $res["defaultpan"] = $xUser['defaultpan'];
        }


        $res["title"] = "";
        $xWeb = Db::name("x_web")->where("wid",100)->find();
        $res["webname"] = $xWeb['webname'];
        $res["moneytype"] = $xWeb['moneytype'];
        $res["maxlayer"] = $xWeb['maxlayer'];
        $xConfig = Db::name("x_config")->order("id asc")->find();
        $res["kfurl"] = $xConfig['kfurl'];
        $agentConfig = (new PanIncController())->index();
        $res["gname"] = $agentConfig['gname'];
        $res["class"] = $agentConfig['class'];
        $res["kjurl"] = $agentConfig['kjurl'];

        $xNews = Db::name("x_news")->whereIn("wid",$_SESSION['wid']??0)
            ->whereIn("agent",[0,2])->where(["alert"=>1,"ifok"=>1])
            ->order("time")->select();

        $news=[];
        foreach ($xNews as $nv) {
            $newsDetail = [];
            if($nv["cs"] == 1){
                $arr[0] = $agentConfig['thisqishu'];
                $arr[1] = $xWeb['webname'];
                $kjData = Db::name("x_kj")->where(["gid"=>$gid,"qishu"=>$agentConfig['thisqishu']])
                    ->field("opentime,closetime,kjtime")->find();
                $arr[2] = isset($kjData['opentime']) ? date("Y-m-d H:i:s", strtotime($kjData['opentime']) + ($agentConfig['times']['o']??0)) : "";
                $arr[3] = isset($kjData['closetime']) ? date("Y-m-d H:i:s", strtotime($kjData['closetime']) - ($agentConfig['times']['c']??0) - $agentConfig['userclosetime']) : "";
                $arr[4] = $kjData['kjtime'] ?? 0;
                $newsDetail['content'] = $func->messreplace($kjData['content'] ?? "", $arr);
            }else{
                $newsDetail['content'] = $nv['content'];
            }
            $newsDetail['content'] = htmlspecialchars_decode($newsDetail['content']);
            $newsDetail['time']    = $nv['time'];
            $news[] = $newsDetail;
        }

        $res["news"] = $news;
        $res["cnews"] = count($news);


        $gid = isset($_GET['gids'])?$_GET['gids']:$gid;

        if(in_array($gid, [100,200,300,350])){
            $_SESSION['skin'] = "skin_lhc skin_blue";
            $res["issixLhcgid"] = 1;
            $res["ma"] = json_decode($xConfig['ma'],true);
            $res["toWeb"] = "top_lhc.html";
        }else{
            $res["toWeb"] = "top.html";
        }
        return $res;
    }
}