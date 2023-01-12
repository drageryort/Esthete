<template>
  <Transition>
    <AppLoader v-if="loader"/>
    <div class="homeView" v-else>
      <AppHomeBanner :pageData="pageData" :preview="preview" @previewActionHomeBanner="previewAction"/>
      <AppGallery :pageData="pageData"/>
      <AppHomeLetsTalk :pageData="pageData"/>
      <AppHomeReviews :pageData="pageData"/>
      <AppDevConcepts :pageData="pageData"/>
      <AppSendRequest :pageData="pageData"/>
    </div>
  </Transition>
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
      readyData:(trigger: boolean) => trigger,
      previewAction:(trigger: boolean) => trigger
    },
    data(){
      return{
        pageData: {},
        previewState: true,
      }
    },
    components: {AppLoader, AppHomeReviews, AppDevConcepts, AppSendRequest, AppHomeLetsTalk, AppGallery, AppHomeBanner},
    methods: {
      previewAction(trigger:boolean){
        this.$emit('previewAction', trigger)
      }
    },
    async mounted() {
      this.$emit("loaderAction", true);
      this.pageData = (await (await fetch('https://admin.esthete.studio/wp-json/wp/v2/pages/11')).json())['acf'];
      this.$emit("readyData", true);
      if(Object.keys(this.pageData).length){
        setTimeout(()=> this.$emit("loaderAction", false),1000)
      }
    }
  });
</script>

<style lang="scss" scoped></style>
