<template>
  <Transition>
    <AppLoader v-if="loader"/>
    <div class="portfolioView" v-else>
      <AppPortfolioPageGallery :pageData="pageData"/>
      <AppSendRequest :pageData="pageData"/>
    </div>
  </Transition>
</template>

<script lang="ts">
  import {defineComponent} from "vue";
  import AppLoader from "@/components/AppLoader.vue";
  import AppSendRequest from "@/components/common-blocks/AppSendRequest.vue";
  import AppPortfolioPageGallery from "@/components/portfoliopage-blocks/AppPortfolioPageGallery.vue";

  export default defineComponent({
    name: "PortfolioView",
    props: {
      loader:Boolean
    },
    emits:{
      loaderAction:(trigger: boolean) => trigger,
      readyData:(trigger: boolean) => trigger
    },
    components: {AppLoader, AppPortfolioPageGallery, AppSendRequest},
    data(){
      return {
        pageData: {},
      }
    },
    async mounted() {
      this.$emit("loaderAction", true);
      this.pageData = (await (await fetch('https://admin.esthete.studio/wp-json/wp/v2/pages/249')).json())['acf'];
      this.$emit("readyData", true);
      if(Object.keys(this.pageData).length){
        setTimeout(()=> this.$emit("loaderAction", false),1000)
      }
    }
  })
</script>

<style lang="scss" scoped>

</style>
