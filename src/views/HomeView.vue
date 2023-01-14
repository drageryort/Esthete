<template>
  <div class="home-view-wrapper">
    <AppLoader v-show="loader"/>
    <div class="homeView" v-show="!loader">
      <AppHomeBanner
          :pageData="pageData"
          :preview="preview"
          @previewActionHomeBanner="previewAction"
          @videoBannerAction="videoAction"
      />
      <AppGallery :pageData="pageData"/>
      <AppHomeLetsTalk :pageData="pageData"/>
      <AppHomeReviews :pageData="pageData"/>
      <AppDevConcepts :pageData="pageData"/>
      <AppSendRequest :pageData="pageData"/>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import AppLoader from "@/components/AppLoader.vue";
  import AppHomeBanner from "@/components/homepage-blocks/AppHomeBanner.vue";
  import AppGallery from "@/components/common-blocks/gallery/AppGallery.vue";
  import AppHomeLetsTalk from "@/components/homepage-blocks/AppHomeLetsTalk.vue";
  import AppSendRequest from "@/components/common-blocks/AppSendRequest.vue";
  import AppDevConcepts from "@/components/homepage-blocks/AppHomeDevConcepts.vue";
  import AppHomeReviews from "@/components/homepage-blocks/AppHomeReviews.vue";

  export default defineComponent({
    name: 'HomeView',
    props: {
      preview: Boolean,
      loader: Boolean,
    },
    emits:{
      loaderAction:(trigger: boolean) => trigger,
      previewAction:(trigger: boolean) => trigger
    },
    data(){
      return{
        pageData: {}
      }
    },
    components: {
      AppLoader, AppHomeReviews, AppDevConcepts, AppSendRequest, AppHomeLetsTalk, AppGallery, AppHomeBanner},
    methods: {
      previewAction(trigger:boolean){
        this.$emit('previewAction', trigger)
      },
      videoAction(trigger:boolean){
        this.$emit("loaderAction", trigger)
      }
    },
    async mounted() {
      this.$emit("loaderAction", true);
      try {
        this.pageData = (await (await fetch('https://admin.esthete.studio/wp-json/wp/v2/pages/11')).json())['acf'];
      } catch (e){
       console.error(e)
      }
      if(Object.keys(this.pageData).length && !this.preview){
        setTimeout(()=> this.$emit("loaderAction", false),1000)
      }
    }
  });
</script>

<style lang="scss" scoped></style>
