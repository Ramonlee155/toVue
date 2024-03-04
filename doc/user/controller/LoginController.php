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
use app\common\utils\AjaxUtils;
use app\frontend\service\LoginService;
use app\frontend\validate\LoginValidate;
use Exception;
use think\response\Json;
use think\response\View;

/**
 * 登录管理
 */
class LoginController extends User
{
    protected array $notNeedLogin = ['index', 'login', 'register', 'oaLogin', 'ticketByUser', 'forgetPwd'];

    /**
     * 弹出页面
     *
     * @return View
     * @method [GET]
     * @author zero
     */
    public function index(): View
    {
        if (session('adminAgent')) {
            $this->redirect(route('index/index'), 302);
        }

        $entrance = config('project.backend_entrance');
        return view('', ['entrance'=>$entrance]);
    }

    /**
     * 注册账号
     *
     * @return Json|View
     * @throws OperateException
     * @method [POST]
     * @author zero
     */
    public function register(): View|Json
    {
        if ($this->isAjaxPost()) {
            (new LoginValidate())->goCheck('register');

            LoginService::register($this->request->post(), $this->terminal);
            return AjaxUtils::success('注册成功');
        }

        return view();
    }

    /**
     * 登录系统
     *
     * @return Json|View
     * @throws OperateException
     * @throws Exception
     * @method [POST]
     * @author zero
     */
    public function login(): View|Json
    {
        if ($this->isAjaxPost()) {
            \app\user\service\LoginService::accountLogin($this->request->post("username"),$this->request->post("password"));
            return AjaxUtils::success('登录成功');
        }

        return view();
    }

    /**
     * 退出登录
     *
     * @method [GET]
     * @author zero
     */
    public function logout()
    {
        session('agentId', null);
        session('adminAgent', null);
        $this->redirect(route('login/index'), 302);
    }

}