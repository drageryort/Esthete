<template>
  <AppHomeBanner/>
  <AppGallery/>
  <AppHomeLetsTalk/>
  <AppHomeReviews/>
  <AppDevConcepts/>
  <AppSendRequest/>
<!--    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHomeBanner from "@/components/homepage-blocks/AppHomeBanner.vue";
import AppGallery from "@/components/common-blocks/AppGallery.vue";
import AppHomeLetsTalk from "@/components/homepage-blocks/AppHomeLetsTalk.vue";
import AppSendRequest from "@/components/common-blocks/AppSendRequest.vue";
import AppDevConcepts from "@/components/homepage-blocks/AppDevConcepts.vue";
import AppHomeReviews from "@/components/homepage-blocks/AppHomeReviews.vue";

export default defineComponent({
  name: 'HomeView',
  components: {
    AppHomeReviews,
    AppDevConcepts,
    AppSendRequest,
    AppHomeLetsTalk,
    AppGallery,
    AppHomeBanner,
  },
});
</script>

<style lang="scss" scoped>

</style>
