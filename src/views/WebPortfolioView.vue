<template>
  <div>
    <AppPagesBanner :pageData="pageData"/>
    <AppGallery :pageData="pageData"/>
    <AppPagesWhatWeDo :pageData="pageData"/>
    <AppPagesHowWeDo :pageData="pageData"/>
    <AppSendRequest :pageData="pageData"/>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from "vue";
  import AppGallery from "@/components/common-blocks/gallery/AppGallery.vue";
  import AppSendRequest from "@/components/common-blocks/AppSendRequest.vue";
  import AppPagesBanner from "@/components/servicespage-blocks/AppServicesPageBanner.vue";
  import AppPagesWhatWeDo from "@/components/servicespage-blocks/AppServicesPageWhatWeDo.vue";
  import AppPagesHowWeDo from "@/components/servicespage-blocks/AppServicesPageHowWeDo.vue";


  export default defineComponent( {
    name: 'WebPortfolioView',
    components: { AppPagesBanner, AppPagesWhatWeDo, AppPagesHowWeDo, AppSendRequest, AppGallery},
    data(){
      return {
        pageData: {}
      }
    },
    async beforeCreate() {
      this.pageData = (await (await fetch('https://admin.esthete.studio/wp-json/wp/v2/pages/119')).json())['acf'];
      this.$emit("readyData");
    },
  })
</script>

<style lang="scss"></style>
