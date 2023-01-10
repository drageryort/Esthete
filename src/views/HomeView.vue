<template>
  <div class="homeView">
    <AppHomeBanner :pageData="pageData" :play="waitPreview"/>
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
      waitPreview: Boolean,
    },
    data(){
      return{
        pageData: {},
        previewState: true,
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
    },
    mounted() {
      if(this.waitPreview && !window.matchMedia('(min-width: 660px) and (max-width: 1025px)').matches){
        document.body.style.overflowY = "hidden";
        this.previewState = true;
        this.$emit('updatePreviewState', this.previewState)
        setTimeout(() => {
          document.body.style.overflowY = "auto"
          this.previewState = false;
          this.$emit('updatePreviewState', this.previewState)
        }, 9500)
      }
    },
    unmounted() {
      this.previewState = false;
      this.$emit('updatePreviewState', this.previewState)
    }
  });
</script>

<style lang="scss" scoped></style>
