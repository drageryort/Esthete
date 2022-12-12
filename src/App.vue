<template>
  <AppHeader/>
  <router-view/>
  <appFooter/>
</template>

<script>
  import AppFooter from "@/components/AppFooter";
  import AppHeader from "@/components/AppHeader";
  export default {
    components: {AppHeader, AppFooter}
  }
</script>

<style lang="scss">
  @import "./assets/styles/common/fonts/font.min.css";
  @import "./assets/styles/common/global/global.min.css";
</style>