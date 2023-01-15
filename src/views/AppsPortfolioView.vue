<template>
  <div style="min-height: 100vh">
    <Transition
        name="bubble"
        mode="out-in"
    >
      <AppLoader v-if="loader"/>
      <div class="appsView" v-else>
        <AppPagesBanner :pageData="pageData"/>
        <AppGallery :pageData="pageData"/>
        <AppPagesWhatWeDo :pageData="pageData"/>
        <AppPagesHowWeDo :pageData="pageData"/>
        <AppSendRequest :pageData="pageData"/>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from "vue";
  import AppLoader from "@/components/AppLoader.vue";
  import AppGallery from "@/components/common-blocks/gallery/AppGallery.vue";
  import AppSendRequest from "@/components/common-blocks/AppSendRequest.vue";
  import AppPagesBanner from "@/components/servicespage-blocks/AppServicesPageBanner.vue";
  import AppPagesWhatWeDo from "@/components/servicespage-blocks/AppServicesPageWhatWeDo.vue";
  import AppPagesHowWeDo from "@/components/servicespage-blocks/AppServicesPageHowWeDo.vue";

  export default defineComponent({
    name: 'AppsPortfolioView',
    props: {
      loader:Boolean
    },
    emits:{
      loaderAction:(trigger: boolean) => trigger
    },
    components: {AppLoader, AppPagesHowWeDo, AppPagesWhatWeDo, AppPagesBanner, AppSendRequest, AppGallery},
    data(){
      return {
        pageData: {},
      }
    },
    async mounted() {
      this.$emit("loaderAction", true);
      try{
        this.pageData = (await (await fetch('https://admin.esthete.studio/wp-json/wp/v2/pages/125')).json())['acf'];
      } catch (e){
        console.error(e)
      }
      if(Object.keys(this.pageData).length){
        setTimeout(()=> this.$emit("loaderAction", false),1000)
      }
    }
  })
</script>


<style lang="scss"></style>
