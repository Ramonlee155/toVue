<template>
<!--  顶部内容 -->
<MemberHeader></MemberHeader>
<div id="main">
        <!-- 左侧列表-->
        <MemberSideLeft></MemberSideLeft>
    <div class="frame">
        <!-- 主体内容  -->
        <iframe id="frame" name="frame" frameborder="0"></iframe>
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
<script setup>
    import { reactive, ref,onMounted,getCurrentInstance } from 'vue'
    let { proxy } = getCurrentInstance()
    import {MemberHeader,MemberSideLeft,MemberFooter} from "./components/index";
</script>