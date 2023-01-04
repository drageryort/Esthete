<template>
  <div class="homeView">
    <AppHomeBanner :pageData="pageData" :firstLook="firstLook"/>
    <AppGallery :pageData="pageData"/>
    <AppHomeLetsTalk :pageData="pageData"/>
    <AppHomeReviews :pageData="pageData"/>
    <AppDevConcepts :pageData="pageData"/>
    <AppSendRequest :pageData="pageData"/>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import AppHomeBanner from "@/components/homepage-blocks/AppHomeBanner.vue";
  import AppGallery from "@/components/common-blocks/gallery/AppGallery.vue";
  import AppHomeLetsTalk from "@/components/homepage-blocks/AppHomeLetsTalk.vue";
  import AppSendRequest from "@/components/common-blocks/AppSendRequest.vue";
  import AppDevConcepts from "@/components/homepage-blocks/AppHomeDevConcepts.vue";
  import AppHomeReviews from "@/components/homepage-blocks/AppHomeReviews.vue";

  export default defineComponent({
    name: 'HomeView',
    props:{
      firstLook: Boolean
    },
    data(){
      return{
        pageData: {}
      }
    },
    components: {
      AppHomeReviews,
      AppDevConcepts,
      AppSendRequest,
      AppHomeLetsTalk,
      AppGallery,
      AppHomeBanner,
    },
    async beforeCreate() {
      this.pageData = (await (await fetch('https://admin.esthete.studio/wp-json/wp/v2/pages/11')).json())['acf'];
      this.$emit("readyData");
    }
  });
</script>

<style lang="scss" scoped>

</style>
