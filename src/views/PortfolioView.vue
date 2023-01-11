<template>
  <AppLoader v-if="loader"/>
  <div class="portfolioView" v-else>
    <AppPortfolioPageGallery :pageData="pageData"/>
    <AppSendRequest :pageData="pageData"/>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from "vue";
  import AppLoader from "@/components/AppLoader.vue";
  import AppSendRequest from "@/components/common-blocks/AppSendRequest.vue";
  import AppPortfolioPageGallery from "@/components/portfoliopage-blocks/AppPortfolioPageGallery.vue";

  export default defineComponent({
    name: "PortfolioView",
    components: {AppLoader, AppPortfolioPageGallery, AppSendRequest},
    data(){
      return {
        pageData: {},
        loader: true,
      }
    },
    async mounted() {
      this.pageData = (await (await fetch('https://admin.esthete.studio/wp-json/wp/v2/pages/249')).json())['acf'];
      this.$emit("readyData");
      this.loader = false;
    }
  })
</script>

<style lang="scss" scoped>

</style>
