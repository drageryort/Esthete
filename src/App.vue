<template>
  <nav>
    <router-link to="/webpages-portfolio">webpages</router-link>
    <router-link to="/apps-portfolio">apps</router-link>
    <router-link to="/designs-portfolio">designs</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
  @import "./assets/styles/common/fonts/font.min.css";
  @import "./assets/styles/common/global/global.min.css";
</style>
