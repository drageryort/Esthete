<template>
  <div class="portfolioView">
    <AppPortfolioPageGallery />
    <AppSendRequest />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import AppSendRequest from "@/components/common-blocks/AppSendRequest.vue";
import AppPortfolioPageGallery from "@/components/portfoliopage-blocks/AppPortfolioPageGallery.vue";

export default defineComponent({
  name: "PortfolioView",
  components: {AppPortfolioPageGallery, AppSendRequest}
})
</script>

<style lang="scss" scoped>

</style>
