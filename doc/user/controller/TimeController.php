<?php

namespace app\user\controller;

use think\facade\Db;
use think\facade\View;

class TimeController{
    public function index(){

        $pacInc = (new PanIncController())->index();
        $xKj = Db::name("x_kj")->where(["qishu"=>$pacInc['thisqishu'],"gid"=>$_SESSION['gid']])->field("opentime,closetime,kjtime")->find();

        $opentime = isset($xKj["opentime"]) && $xKj["opentime"] ? strtotime($xKj["opentime"]) : 0;
        $closetime = isset($xKj["closetime"]) && $xKj["closetime"] ? strtotime($xKj["closetime"]) : 0;
        $kjtime = isset($xKj["kjtime"]) && $xKj["kjtime"] ? strtotime($xKj["kjtime"]) : 0;

        $time = time();

        if ($pacInc['panstatus'] == 1 & (($time - $opentime - $pacInc['times']['o'])>0 | $pacInc['autoopenpan']==0)) {
            $pantime = $closetime - $time - $pacInc['userclosetime'] - $pacInc['times']['c'];
        } else {
            $pacInc['panstatus'] = 0;
            $pantime = $time - $opentime-$pacInc['times']['o'];
            if ($pantime > 0)
                $pantime = 3;
        }
        if ($pacInc['otherstatus'] == 1 & ($pacInc['autoopenpan']==0 | ($time - $opentime - $pacInc['times']['o'])>0)) {
            $othertime = $closetime - $time - $pacInc['userclosetime'] - $pacInc['otherclosetime'] - $pacInc['times']['c'];
        } else {
            $pacInc['otherstatus'] = 0;
            $othertime = $time - $opentime - $pacInc['times']['o'];
            if ($othertime > 0)
                $othertime = 3;
        }
        if ($pacInc['autoopenpan'] == 0 | $pacInc['times']['io']==0) {
            $pantime = 9999;
            $othertime = 9999;
        }
        $kjtime = $kjtime - $time;

        //include('../func/userfunc.php');

        $check = session('agentId') !== null ? 1 : 0;

        if(!$check | $pacInc['ifopen']==0){
            $this->unsetSession();
        }

        echo $pantime . '|' . abs($othertime).'|'.$pacInc['thisqishu'].'|'.$pacInc['panstatus'].'|'.$pacInc['otherstatus'].'|'.date("Hi").'|'.$check.'|'.$kjtime;

    }

    public function unsetSession(){
        unset($_SESSION['uuid']);
        unset($_SESSION['upasscode']);
        unset($_SESSION['ucheck']);
        //unset($_SESSION['wid']);
        unset($_SESSION['gid']);
        unset($_SESSION['sv']);
        unset($_SESSION['guest']);
    }
}