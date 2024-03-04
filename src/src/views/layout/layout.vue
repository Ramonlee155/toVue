<template>
    <div>
        <router-view></router-view>
    </div>
    </template>
    <script src="@/assets/user/user/js/sortable.min.js"></script>
    <script src="@/assets/user/js/config.min.js"></script>
    <script src="@/assets/user/js/utils.min.js"></script>
    <script>
    export default {
      name: 'layout',
      components: {

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
    <style src="@/assets/common/icons/iconfont.scss" lang="scss"></style>
    <style src="@/assets/user/css/theme.scss" lang="scss"></style>
    <style src="@/assets/user/css/app.scss" lang="scss"></style>