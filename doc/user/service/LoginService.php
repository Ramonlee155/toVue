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

namespace app\user\service;

use app\common\basics\Service;
use app\common\enums\ClientEnum;
use app\common\enums\NoticeEnum;
use app\common\exception\OperateException;
use app\common\model\agent\Agent;
use app\common\model\user\User;
use app\common\service\msg\MsgDriver;
use app\common\service\wechat\WeChatService;
use app\frontend\cache\ScanLoginCache;
use app\frontend\cache\WebEnrollCache;
use app\frontend\widgets\UserWidget;
use Exception;
use think\facade\Cache;
use think\facade\Log;
use think\Model;

/**
 * 登录服务类
 */
class LoginService extends Service
{
    /**
     * 注册账号
     *
     * @param array $post   (参数)
     * @param int $terminal (设备)
     * @throws OperateException
     * @throws Exception
     * @author zero
     */
    public static function register(array $post, int $terminal)
    {
        // 接收参数
        $code     = $post['code'];
        $mobile   = $post['mobile'];
        $account  = $post['account'] ?? '';
        $password = $post['password'] ?? '';
        $modelUser = new User();

        // 手机验证
        if (!$modelUser->where(['mobile'=>trim($mobile)])->findOrEmpty()->isEmpty()) {
            throw new OperateException('手机已被占用!');
        }

        // 账号验证
        if (!$modelUser->where(['account'=>trim($account)])->findOrEmpty()->isEmpty()) {
            throw new OperateException('账号已被占用!');
        }

        // 短信验证
        if (!MsgDriver::checkCode(NoticeEnum::REGISTER, $code)) {
            throw new OperateException('验证码错误!');
        }

        // 创建账号
        $userId = UserWidget::createUser([
            'mobile'   => trim($mobile),
            'account'  => trim($account),
            'password' => trim($password),
            'terminal' => $terminal
        ]);

        // 删验证码
        MsgDriver::useCode(NoticeEnum::REGISTER, $code);

        // 登录账号
        session('userId', $userId);
    }

    /**
     * 账号登录
     *
     * @param $account  (账号)
     * @param $password (密码)
     * @throws OperateException
     * @author zero
     */
    public static function accountLogin(string $account, string $password)
    {
        // 查询账户
        $modelAgent = new Agent();
        $agentInfo = $modelAgent
            ->where(['username'=>$account])
            ->where(['is_delete'=>0])
            ->where(['status'=>1])
            ->findOrEmpty()
            ->toArray();

        // 验证账户
        if (!$agentInfo) {
            throw new OperateException('账号不存在了!');
        }

        // 验证密码
        $password = make_md5_str($password, $agentInfo['salt']);
        if ($agentInfo['userpass'] !== $password) {
            $res = $modelAgent->where(['id' => $agentInfo['id']])->update([
                'error_times'   => $agentInfo["error_times"]+1,
            ]);
            throw new OperateException('账号或密码错误!');
        }else{
            $modelAgent->where(['id' => $agentInfo['id']])->update([
                'login_times'   => $agentInfo["login_times"]+1,
                'last_login_ip'   => request()->ip(),
                'last_login_time' => time()
            ]);
        }

        // 登录账户
        session('agentId', $agentInfo['id']);

        // 账户记录
        unset($agentInfo["userpass"]);
        unset($agentInfo["salt"]);

        session('adminAgent', $agentInfo);
    }

    /**
     * 短信登录
     *
     * @param string $mobile (手机号)
     * @param string $code   (验证码)
     * @throws OperateException
     * @author zero
     */
    public static function mobileLogin(string $mobile, string $code)
    {
        // 短信验证
        if (!MsgDriver::checkCode(NoticeEnum::LOGIN, $code)) {
            throw new OperateException('验证码错误了!');
        }

        // 查询账户
        $modelUser = new User();
        $userInfo = $modelUser
            ->field(['id,mobile,is_disable'])
            ->where(['mobile'=>$mobile])
            ->where(['is_delete'=>0])
            ->findOrEmpty()
            ->toArray();

        // 验证账户
        if (!$userInfo) {
            throw new OperateException('账号不存在了!');
        }

        // 验证状态
        if ($userInfo['is_disable']) {
            throw new OperateException('账号已被禁用!');
        }

        // 删验证码
        MsgDriver::useCode(NoticeEnum::LOGIN, $code);

        // 登录账户
        session('userId', $userInfo['id']);
    }


    /**
     * 重置密码
     *
     * @param array $post (参数)
     * @throws OperateException
     * @author zero
     */
    public static function forgetPwd(array $post): void
    {
        // 接收参数
        $code     = $post['code'];
        $mobile   = $post['mobile'];
        $password = $post['newPassword'];

        // 验证类型
        $field = 'mobile';
        if (!preg_match('/^1[3456789]\d{9}$/', $mobile)) {
            $field = 'email';
        }

        // 编码验证
        if (!MsgDriver::checkCode(NoticeEnum::FORGET_PWD, $code)) {
            throw new OperateException('验证码错误!');
        }

        // 查询账户
        $modelUser = new User();
        $userInfo = $modelUser->field(['id,account,mobile'])
            ->where([$field=>trim($mobile)])
            ->where(['is_delete'=>0])
            ->findOrEmpty()
            ->toArray();

        // 验证账户
        if (!$userInfo) {
            throw new OperateException('账号不存在!');
        }

        // 设置密码
        $salt = make_rand_char(6);
        $password = make_md5_str($password, $salt);
        User::update([
            'salt'        => $salt,
            'password'    => $password,
            'update_time' => time()
        ], ['id'=>$userInfo['id']]);
    }
}