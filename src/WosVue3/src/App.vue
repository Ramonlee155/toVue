<template>
  <el-config-provider :locale="locale">
    <router-view :key="router.path"/>
  </el-config-provider>
</template>
<script setup>
// 导入 Element Plus 中英文语言包
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";
import { useRouter } from "vue-router";
const router = useRouter();
let locale = zhCn;
</script>