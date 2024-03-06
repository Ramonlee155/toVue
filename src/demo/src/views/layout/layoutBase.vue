<template>
  <div>
      <Header></Header>
      <router-view></router-view>
      <Footer></Footer>
  </div>
  </template>
  <script src="@/assets/common/library/check.min.js"></script>
  <script src="@/assets/common/library/prism/prism.min.js"></script>
  <script src="@/assets/frontend/js/utils.min.js"></script>
  <script>
  import { Header,Footer} from "./components/index";
  export default {
    name: 'layoutBase',
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