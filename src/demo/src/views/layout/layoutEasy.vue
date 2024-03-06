<template>
    <div>
        <router-view></router-view>
    </div>
    </template>
    <script src="./static/common/library/check.min.js"></script>
    <script src="./static/frontend/js/utils.min.js"></script>
    <script>
    export default {
      name: 'layoutEasy',
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