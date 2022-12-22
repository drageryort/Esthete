<template>
  <div class="homeView">
    <AppHomeBanner/>
    <AppGallery/>
    <AppHomeLetsTalk/>
    <AppHomeReviews/>
    <AppDevConcepts/>
    <AppSendRequest/>
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
