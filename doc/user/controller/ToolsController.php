<?php

namespace app\user\controller;
set_time_limit(0);
$base_dir = dirname(dirname(__DIR__));
$_SERVER['REMOTE_ADDR'] = '1.1.1.1';
date_default_timezone_set('Asia/Shanghai');
include $base_dir.'/data/config.inc.php';
include $base_dir.'/data/db.php';
include $base_dir.'/data/redis.php';
include $base_dir.'/global/db.inc.php';
include $base_dir.'/func/func.php';
include $base_dir.'/func/common.php';
include $base_dir.'/func/csfunc.php';
include $base_dir.'/func/adminfunc.php';
include $base_dir.'/func/js.php';
include $base_dir.'/func/search.php';
include $base_dir ."/func/self.php";
include $base_dir.'/global/api_168.php';
include($base_dir ."/global/log.class.php");
include($base_dir .'/class/Zpool.php');

class ToolsController{
    public function __construct(){

//$getgameid = changegameid($gid);
//$data168 = (new api_168)->getKj($gid,$getgameid);
//var_dump($data168);
//die;

// 命令行模式 传参数 期数
        $argv_qishu = $argv[1];




        $logHandler= new CLogFileHandler(dirname(dirname(__DIR__)) . '/logs/'.date('Ymd').'/ks_time.log');
        Log::Init($logHandler, 15);
//Log::DEBUG("base {$gid}");
        while (true){

            echo "触发 autos_{$gid}.php \r\n ";
//    shell_exec("/www/server/php/80/bin/php " .__DIR__ . "/autos.php") ;

            $msql->query("select kjip,autoresetpl,autobaoma,editstart,editend,trys from `{$tb_config}` ");
            $msql->next_record();
            $kjip = $msql->f('kjip');
// var_dump($kjip);
            $autoresetpl = $msql->f('autoresetpl');
            $trys = $msql->f('trys');

            $game = $msql->arr("select gid,gname,fast,panstatus,otherstatus,otherclosetime,userclosetime,mnum,fenlei,ifopen,autokj,guanfang,js_reset from `$tb_game` where gid={$gid} and ifopen=1 order by kjtime desc", 1);
            $cg = $game ? count($game) : 0;

            if (date("His") < str_replace(':', '', $msql->f('editstart'))) {
                $dates = date("Y-m-d", time() - 86400);
            } else {
                $dates = date("Y-m-d");
            }

            $his = date("His");
            if ($his>60000 && $his<70000){
                // exit;
            }

            $kjstart = microtime(true);
// sort($game);
            /***********开奖*********/



            for ($k = 0; $k < $cg; $k++) {
                $gid = $game[$k]['gid'];
                $js_reset = $game[$k]['js_reset'];
                $getgameid = changegameid($gid);
                echo "\r\n正在开奖:".$gid."--";
                $kjstart1 = microtime(true);
                $fenlei = $game[$k]['fenlei'];
                $time = time();
                $mnum = $game[$k]['mnum'];
                if ($game[$k]['ifopen'] == 0) {
                    echo $game[$k]["gname"]." 彩种没有开放";
                    continue;
                }
                if ($game[$k]['autokj'] == 0){
                    echo $game[$k]["gname"]." 彩种非自动开奖";
                    continue;
                }
                $timekj = date("Y-m-d H:i:s");
                if (date("Hi") < 601 && date("Hi") >= 600) {
                    $dates = date("Y-m-d", strtotime($dates) - 86400);
                }
                if(!$argv_qishu){

                    $fsql->query("select * from `{$tb_kj}` where  gid='{$gid}' and dates='{$dates}' and kjtime<='{$timekj}' order by kjtime desc limit 1");
                    $fsql->next_record();

                    $m1 = $fsql->f('m1');
                    if ($m1 != '') {
                        $kjstart2 = microtime(true) -$kjstart1;
                        echo " - 最新一期: ".$fsql->f('qishu')." 已开奖 ,开奖时间:".$fsql->f('kjtime').", 开奖用时:".$kjstart2 ."\r\n";
                        sleep(1);
                        continue;
                    }
                    echo "\r\n\r\n 开奖时间：".$timekj ."\r\n\r\n";
                    $qishu = $fsql->f('qishu');
                }else{
                    //判断是否合法
                    $fsql->query("select * from `{$tb_kj}` where  gid='{$gid}' and dates='{$dates}' and kjtime<='{$timekj}' and qishu= '{$argv_qishu}'");
                    $fsql->next_record();
                    $qishu = $argv_qishu ;
                    $m1 = $fsql->f('m1');
                    if ($m1 != '') {
                        $kjstart2 = microtime(true) -$kjstart1;
                        echo " ".$fsql->f('qishu')." 已开奖 ,开奖时间:".$fsql->f('kjtime').", 开奖用时:".$kjstart2 ."\r\n";
                        break ;
                    }
                }


                $qs = formatqs($gid, $qishu);

                //350 新澳门六合彩开奖
                if($gid == 350){
                    echo  "350 新澳门六合彩开奖 \r\n ";
                    $url = "https://macaumarksix.com/api/live2?time=".time();
                    $ch = curl_init();
                    curl_setopt($ch, CURLOPT_URL,$url);
                    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                    $html = curl_exec($ch);
                    curl_close($ch);
                    $content = json_decode($html,1) ;
                    if($content['0']['expect'] ==$qishu ){
                        $num = explode(",",$content['0']['openCode'])  ;
                        kj_seva($gid, $mnum  ,$qishu,$num,$fenlei,$dates);
                        echo  "350 新澳门六合彩开奖 success \r\n ";
                    }else{
                        echo  "350 新澳门六合彩开奖 fail \r\n ";
                    }
                }else {

                    $tsql->query("select cs,fenlei,mtype,ztype from `{$tb_game}` where gid='{$gid}'");
                    $tsql->next_record();
                    $cs = json_decode($tsql->f('cs'), true);
                    $mtype = json_decode($tsql->f('mtype'), true);
                    $ztype = json_decode($tsql->f('ztype'), true);


                    # 开奖设置控奖 查询 下单信息
                    $lib = $tsql->arr("select count(*) as count from `$tb_lib` where  qishu='{$qishu}' and dates='{$dates}' and gid='{$gid}'", 1);


                    //    $lib[0]['count'] = 1 ; // todo  测试临时数据
                    //    $js_reset = 1 ;  // todo  测试临时数据
                    # 没有下注信息 或者 设置改奖 false
                    if ($lib[0]['count'] == 0 || $js_reset == 0) {
                        echo "没有下注信息 或者 设置改奖：false \r\n ";
                        writeLog("gid-" . $gid . "qishu-{$qishu} 没有下注信息 或者 设置改奖：false \r\n ");
                        $data168 = (new api_168)->getKj($gid, $getgameid);

                        if ($data168["code"] == 1) {
                            //168接口获取开奖信息成功
                            if ($data168["data"]) {
                                echo "gid-" . $gid . ",qishu-{$data168["data"]['qishu']} 168开奖结果：\r\n " . var_export($data168["data"]['num'], 1);
                                writeLog("gid-" . $gid . ",qishu-{$data168["data"]['qishu']} 168开奖结果：\r\n " . var_export($data168["data"]['num'], 1));
                                kj_seva($gid, $mnum, $data168["data"]['qishu'], $data168["data"]['num'], $fenlei, $dates);
                                echo "开奖成功 \r\n";
                            } else {
                                # 168接口获取开奖失败，本地开奖  -------
                                #根据gid 获取game 配置信息
                                $ms = suiji($fenlei, $gid, $qishu);
                                echo "gid-" . $gid . ",qishu-{$qishu} 168接口获取开奖失败，本地开奖：\r\n ";
                                writeLog("gid-" . $gid . "qishu-{$qishu} 168接口获取开奖失败，本地开奖：\r\n ");
                                kj_seva($gid, $mnum, $qishu, $ms, $fenlei, $dates);
                                echo "开奖成功 \r\n";
                            }
                        } else {
                            # 168接口获取开奖失败，本地开奖  -------
                            #根据gid 获取game 配置信息
                            $ms = suiji($fenlei, $gid, $qishu);
                            echo "gid-" . $gid . ",qishu-{$qishu} 168接口获取开奖失败，本地开奖：\r\n ";
                            writeLog("gid-" . $gid . "qishu-{$qishu} 168接口获取开奖失败，本地开奖：\r\n ");
                            kj_seva($gid, $mnum, $qishu, $ms, $fenlei, $dates);
                            echo "开奖成功 \r\n";
                        }
                    } else {


                        //私奖判断奖池是否开启
                        if ($zpool['status'] == 1) {
                            $ms = calc_zpool($zpool, $fenlei, $gid, $cs, $qishu, $ztype, $mtype);
                            kj_seva($gid, $mnum, $qishu, $ms, $fenlei, $dates);

//                        echo "私奖判断奖池是否开启 ----\r\n\r\n\r\n" ;
                        } else {
                            $cs["xtmode"] = 2; # 开启改奖 ，强制 庄家赢最多 模式
                            $mtype = json_decode($tsql->f('mtype'), true);
                            $ztype = json_decode($tsql->f('ztype'), true);
                            $ms = calcmoni($fenlei, $gid, $cs, $qishu, $mnum, $ztype, $mtype);

                            $ma[0]['m'] = $ms;
                            if (!is_array($ma[0]['m'])) {
                                $ma[0]['m'] = explode(',', $ma[0]['m']);
                            }
                            if (!is_numeric($ma[0]['m'][0]) || !is_numeric($ma[0]['m'][$mnum - 1])) {
                                $kjstart2 = microtime(true) - $kjstart1;
                                echo " gid-" . $gid . ",qishu-{$qishu}  开奖用时:" . $kjstart2 . "\r\n";
                                continue;
                            }
                            kj_seva($gid, $mnum, $qishu, $ms, $fenlei, $dates);
                        }

                        echo " gid-" . $gid . ",qishu-{$qishu}  系统开奖成功";
                    }

                }
                $repl = 1;
                $jsqishu = $qishu;
                searchqishu($gid, 100, 1);
                attpeilv($gid);


                if ($autoresetpl == 1 && ($gid == 100 || $gid == 200) && $repl == 1) {
                    $psql->query("update `{$tb_play}` set peilv1=mp1,peilv2=mp2,pl=mpl,ystart=0,yautocs=0,start=0,autocs=0 where gid='{$gid}'");
                    $psql->query("update `{$tb_play_user}` set peilv1=mp1,peilv2=mp2,pl=mpl,ystart=0,yautocs=0,start=0,autocs=0 where gid='{$gid}'");
                }

                $kjstart2 = microtime(true) -$kjstart1;
                echo " \r\n\r\n  开奖用时:".$kjstart2 ."\r\n\r\n";
                echo " \r\n\r\n  开奖结束时间:".date("Y-m-d H:i:s") ."\r\n\r\n ";

                writeLog($res ."\r\n ");
                // echo "处理结束\r\n";
                // echo "--------------------------------\r\n";
            }
            /***********开奖*********/
            $kjend = microtime(true) - $kjstart;
            echo "\r\n开奖用时:".$kjend;


        }
    }



    //if(!function_exists("changegameid")) {
    function changegameid($gid)
    {
        if ($gid == 100) return 10048;
        if ($gid == 108) return 10036;
        if ($gid == 109) return 10010;
        if ($gid == 110) return 10059;
        if ($gid == 131) return 10011;
        if ($gid == 162) return 10013;
        if ($gid == 163) return 10074;
        if ($gid == 170) return 10035;
        if ($gid == 172) return 10037;
        if ($gid == 175) return 10012;
        if ($gid == 177) return 10058;
        if ($gid == 191) return 10057;
        if ($gid == 200) return 10051;
        if ($gid == 225) return 10064;
        if ($gid == 251) return 10052;
        if ($gid == 253) return 10053;
        if ($gid == 255) return 10076;
    }
    //}

    /**
     * 保存开奖结果
     * @param $data
     * @param $qishu
     * @param $kjnum 开奖号码
     */
    //if(!function_exists("kj_seva")){
    function kj_seva($gid, $mnum ,$qishu ,$kjnum,$fenlei ,$dates=null){
        global  $tsql, $tb_kj ,$tb_lib  ;
        $sql = "update `{$tb_kj}` set ";
        for ($i = 1; $i <= $mnum; $i++) {
            if ($i > 1) {
                $sql .= ',';
            }
            $sql .= 'm' . $i . '=\'' . $kjnum[$i - 1] . '\'';
        }
        $sql .= " where  gid='{$gid}' and qishu='{$qishu}' ";
        $tsql->query($sql);
        echo "保存开奖结果 ------------ \r\n" ;
        $lib =$tsql->arr("select count(*) as count from `$tb_lib` where  qishu='{$qishu}' and dates='{$dates}' and gid='{$gid}'",1);
        if($lib[0]["count"]>0){
            updateLib($gid, $mnum,$qishu,$fenlei);
        }

        return 1 ;
    }
    //}

    /**
     * 修改下注单中奖情况
     */
    function updateLib($gid, $mnum,$qishu,$fenlei){
        global  $tsql, $tb_game   ;
        $tsql->query("select cs,fenlei,mtype,ztype from `{$tb_game}` where gid='" . $gid . "'");
        $tsql->next_record();
        $cs = json_decode($tsql->f('cs'), true);
        $mtype = json_decode($tsql->f('mtype'), true);
        $ztype = json_decode($tsql->f('ztype'), true);
        echo "修改下注单中奖情况 ---------------- \r\n" ;
        calc($fenlei, $gid, $cs, $qishu, $mnum, $ztype, $mtype);

        Log::DEBUG( "start->gid::{$gid},time:".date("Y-m-d H:i:s"));

        jiaozhengedu_redis();
        Log::DEBUG( "end->gid::{$gid},time:".date("Y-m-d H:i:s"));
        return 1;
    }

}