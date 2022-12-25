<template>
  <div class="portfolioView">
    <AppPortfolioPageGallery :pageData="pageData"/>
    <AppSendRequest :pageData="pageData"/>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from "vue";
  import AppSendRequest from "@/components/common-blocks/AppSendRequest.vue";
  import AppPortfolioPageGallery from "@/components/portfoliopage-blocks/AppPortfolioPageGallery.vue";

  export default defineComponent({
    name: "PortfolioView",
    components: {AppPortfolioPageGallery, AppSendRequest},
    data(){
      return {
        pageData: {}
      }
    },
    async beforeCreate() {
      this.pageData = (await (await fetch('https://admin.esthete.studio/wp-json/wp/v2/pages/249')).json())['acf']
    }
  })
</script>

<style lang="scss" scoped>

</style>
