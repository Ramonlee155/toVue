<template>
    <div>
        <Header></Header>
            <!-- 主体 -->
            <div class="layout-global-user">
                <div class="container">
                    <div class="left-sidebar">
                        <div class="member">
                            <div class="avatar">
                                <img src="{$userInfo.avatar}" alt="avatar">
                            </div>
                            <div class="name">{$userInfo.nickname}</div>
                            <div class="sign"><p>{$userInfo.sign ? $userInfo.sign : '这家伙很懒什么也没有留下~'}</p></div>
                            <div class="nums">
                                <p>
                                    <span class="num">0</span>
                                    <span class="item">余额</span>
                                </p>
                                <p>
                                    <span class="num">339</span>
                                    <span class="item">收藏</span>
                                </p>
                                <div class="clear"></div>
                            </div>
                        </div>
                        <ul class="menu">
                            <li class="{:active_url('index')}">
                                <a href="{:route('user/index')}">
                                    <i class="layui-icon layui-icon-username"></i>
                                    <span>主页</span>
                                </a>
                            </li>
                            <li class="{:active_url('collect')}">
                                <a href="{:route('user/collect')}">
                                    <i class="layui-icon layui-icon-rate"></i>
                                    <span>收藏</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="right-iframe">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        <Footer></Footer>
    </div>
    </template>
      <script src="@/assets/common/library/check.min.js"></script>
     <script src="@/assets/frontend/js/utils.min.js"></script>
    <script>
    import { Header,Footer} from "./components/index";
    export default {
      name: 'layoutUser',
      components: {
        Header,
        Footer
      },
      computed: {
        is404 () {
          if (this.$route.name === '404') {
            return false
          } else {
            return true
          }
        }
      }
    }
    </script>