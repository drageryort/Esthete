<template>
  <div style="min-height: 100vh">
    <Transition
        name="bubble"
        mode="out-in"
    >
      <AppLoader v-if="loader"/>
      <div class="webView" v-else>
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


  export default defineComponent( {
    name: 'WebPortfolioView',
    props: {
      loader:Boolean
    },
    emits:{
      loaderAction:(trigger: boolean) => trigger
    },
    components: { AppLoader, AppPagesBanner, AppPagesWhatWeDo, AppPagesHowWeDo, AppSendRequest, AppGallery},
    data(){
      return {
        pageData: {},
      }
    },
    async mounted() {
      this.$emit("loaderAction", true);
      try {
        this.pageData = (await (await fetch('https://admin.esthete.studio/wp-json/wp/v2/pages/119')).json())['acf'];
      } catch (e){
        console.error(e)
      }
      if(Object.keys(this.pageData).length){
        setTimeout(()=> this.$emit("loaderAction", false),1400)
      }
    },
  })
</script>

<style lang="scss">
  .bubble-enter-active{
    transition: all 0.25s linear;
    &.loader-wrapper{
      transition: all 0.5s linear;
    }
  }
  .bubble-leave-active {
    &.loader-wrapper{
      opacity: 1;
      transition: all 0.5s linear;
    }
  }
  .bubble-enter-from{
    opacity: 0;
    transition: all 0.25s linear;
    &.loader-wrapper{
      opacity: 0;
      transition: all 0.5s linear;
    }
  }
  .bubble-leave-to {
    opacity: 0;
    &.loader-wrapper{
      transition: all 0.5s linear;
      opacity: 0;
    }
  }
</style>
