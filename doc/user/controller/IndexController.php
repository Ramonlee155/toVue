<?php
// +----------------------------------------------------------------------
// | WaitAdmin快速开发后台管理系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习程序代码,建议反馈是我们前进的动力
// | 程序完全开源可支持商用,允许去除界面版权信息
// | gitee:   https://gitee.com/wafts/WaitAdmin
// | github:  https://github.com/topwait/waitadmin
// | 官方网站: https://www.waitadmin.cn
// | WaitAdmin团队版权所有并拥有最终解释权
// +----------------------------------------------------------------------
// | Author: WaitAdmin Team <2474369941@qq.com>
// +----------------------------------------------------------------------
declare (strict_types = 1);

namespace app\user\controller;

use app\common\basics\User;
use app\common\exception\OperateException;
use app\common\service\msg\MsgDriver;
use app\common\utils\AjaxUtils;
use app\common\utils\ConfigUtils;
use app\frontend\service\ArticleService;
use app\frontend\service\IndexService;
use app\user\controller\FuncController;
use app\user\controller\order\OrderController;
use app\user\controller\PanIncController;
use think\db\exception\DataNotFoundException;
use think\db\exception\DbException;
use think\db\exception\ModelNotFoundException;
use think\facade\Cookie;
use think\facade\Db;
use think\response\Json;
use think\response\View;

/**
 * 主页管理
 */
class IndexController extends User
{
    protected array $notNeedLogin = ['index', 'check','test', 'index', 'protocol', 'sendSms', 'sendEmail'];
    protected array $notNeedPower = ['logout'];

    /**
     * 首页
     *
     * @return View
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     * @method [GET]
     * @author zero
     */
    public function index(): View
    {
        if (!session('adminAgent')) {
            $this->redirect(route('login/index'), 302);
        }

        $entrance = config('project.backend_entrance');

        //查询用户信息
        $agentConfig = (new PanIncController())->index();
        $userId = session('agentId');
        $topData = (new TopController())->index($userId);

        return view('', ['entrance'=>$entrance,"agentConfig"=>$agentConfig,"topData"=>$topData]);
    }


    /**
     * 六合彩下注页
     *
     * @return View
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     * @method [GET]
     * @author zero
     */
    public function makes_lhc(): View
    {
        if (!session('adminAgent')) {
            $this->redirect(route('login/index'), 302);
        }

        //查询用户信息
        $userId = session('agentId');
        $makeData = (new MakeController())->index();

        return view('', ["makeData"=>$makeData,"smarty"=>[]]);
    }


    /**
     * 获取玩法JS
     */
    public function getWanfaJS(){
        if ($_POST['sf'] != '') {
            $xWeb = Db::name("x_web")->where("wid",100)->find();
            //$jsUrl ="./lhc/js/default/jsuxj/topuser.js";
            $jsUrl = "./static/lhc/js/" . $xWeb['skins'] . '/js' . $xWeb['udi'] . "/" . $_POST['sf'] . "user.js";
            echo file_get_contents($jsUrl);
            exit;
        }
    }

}