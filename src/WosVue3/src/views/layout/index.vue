<template>
<!--  顶部内容 -->
<MemberHeader></MemberHeader>
<!-- <div id="main"> -->
<div class="content">
        <!-- 左侧列表-->
        <MemberSideLeft></MemberSideLeft>
        <div class="side-right">
            <!-- 主体内容  -->
            <!-- <iframe id="frame" name="frame" frameborder="0"></iframe> -->
            <router-view></router-view>
        </div>
</div>
<!-- 底部信息 -->
<MemberFooter></MemberFooter>
<div class="gamecontainer moregames">
    <div style="height: 20px;"></div>
    <div class="gamebox clearfix" style="display:block">
        <div class="itemmg">
            <a href="javascript:void(0)" gid="177">
                <span>SG飞艇</span>
            </a>
         </div>
    </div>
</div>
</template>
<!-- <script language="javascript" src="/js/jquery-1.8.3.min.js"></script> -->
<!-- <script language="javascript" src="@/assets/js/public.js"></script>
<script language="javascript" src="@/assets/js/jquery.cookie.js"></script>
<script language="javascript" src="@/assets/js/default/jsuxj/makeuser.js?v=1.19"></script>
<script language="javascript" src="@/assets/js/default/jsuxj/lhcuser.js?v=1.19"></script> -->
<script setup>
    import $ from 'jquery'
    import { loadJs } from "@/utils/wmtools"
    import { reactive, ref,onMounted,getCurrentInstance } from 'vue'
    let { proxy } = getCurrentInstance()
    import {MemberHeader,MemberSideLeft,MemberFooter} from "./components/index";
    onMounted(() => {
        // loadJs('/static/js/jquery-1.8.3.min.js')
        // loadJs('/static/js/public.js')
        // loadJs('/static/js/jquery-ui.min.js')
        // loadJs('/static/js/jquery.cookie.js')
        
        // loadJs('/static/js/default/jsuxj/makeuser.js?v=1.19')
        // loadJs('/static/js/default/jsuxj/lhcuser.js?v=1.19')
    })
</script>
<!-- <link href="/css/default/jquery-ui.css" rel="stylesheet" type="text/css"> -->


<!-- 先注释
<style src="@/assets/css/index/main.scss" lang="scss"></style>
<style src="@/assets/css/default/balls.scss" lang="scss"></style>
<style src="@/assets/css/index/notice_popup.scss" lang="scss"></style>
<style src="@/assets/css/index/loading.scss" lang="scss"></style>
<style src="@/assets/css/index/sweetalert.scss" lang="scss"></style>
先注释 -->



<!-- <style src="@/assets/css/index/lhc.scss" lang="scss"></style> -->
<!-- <style src="@/assets/css/index/bet.scss" lang="scss"></style>
<style src="@/assets/css/default/100.scss" lang="scss"></style>
<style src="@/assets/css/betft.scss" lang="scss"></style>
<style src="@/assets/css/index/lhc.scss" lang="scss"></style> -->

<style type="scss" scoped>
.content{
    display: flex;
    margin-top: 25px;
}
.side-right {
    flex: 1;
}
</style>