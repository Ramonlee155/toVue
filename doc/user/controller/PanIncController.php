<?php

namespace app\user\controller;

use think\facade\Db;

class PanIncController{

    public array $garr = [
        100,101,103,107,108,109,110,111,112,113,115,116,117,118,119,121,123,125,127,129,131,132,133,135,136,151,152,153,
        155,157,161,162, 163,170,171,172,173,175,177,174,179,200,114,211,212,213,215,221,222,223,225,231,232,233,235,227,
        191,158,214,215,224,234,300,350, 400,500,253,229,251,254,157,159,216,218,217,225,226,227,228,601,602,603,604,255
    ];

    public function index(){
        if (isset($_REQUEST['gids']) && $_REQUEST['gids'] && is_numeric($_REQUEST['gids']) && strlen($_REQUEST['gids'])==3) {
            $gids = $_REQUEST['gids'];
        }else{
            $gids = 200;
        }

        $xConfig = Db::name("x_config")->order("id asc")->find();
        $xConfig['maxmoney']   = 1000000000;
        $xConfig['kmaxmoney']  = 1000000000;
        $xConfig['maxren']     = 100000;
        $xConfig['namelength'] = 8;
        $xConfig['upass']      = "puhh8kik";

        $xWeb = Db::name("x_web")->where("wid",100)->find();
        $xWeb['layer'] = json_decode($xWeb['layer'], true);
        $pattNum = $xWeb["patt"];
        $times = json_decode($xWeb['times'], true);

        if ($gids) {
            $xGame = Db::name("x_game")->where("gid",$gids)->find();
        }else{
            $xGame = Db::name("x_game")->where("gid",107)->find();
        }

        $xGame['cs']     = json_decode($xGame['cs'], true);
        $xGame['ftype']  = json_decode($xGame['ftype'], true);
        $keyNum          = "patt".$pattNum;
        $xGame['patt']   = json_decode($xGame[$keyNum], true);
        $xGame['pan']    = json_decode($xGame['pan'], true);
        $_SESSION['gid'] = $xGame['gid'];

        $config_pref = array_merge($xConfig,$xWeb);
        $config = array_merge($config_pref,$xGame);

        foreach ($times as $v) {
            if ($v['gid'] == $_SESSION['gid']) {
                unset($config['times']);
                $config['times']['o']  = $v['o'];
                $config['times']['c']  = $v['c'];
                $config['times']['io'] = $v['io'];
                if ($v['io'] == 0) {
                    $config['panstatus']   = 0;
                    $config['otherstatus'] = 0;
                }
            }
        }

        $times = null;
        return $config;
    }
}