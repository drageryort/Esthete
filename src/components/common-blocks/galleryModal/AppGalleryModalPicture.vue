<template>
  <picture class="image">
    <source :srcset="mediaData['galleryListProductModalGalleryMobileImage'] ? mediaData['galleryListProductModalGalleryMobileImage'] : ''" media="(max-width:660px)">
    <source :srcset="mediaData['galleryListProductModalGalleryTabletImage'] ? mediaData['galleryListProductModalGalleryTabletImage'] : ''" media="(max-width:1025px)">
    <img :src="mediaData['galleryListProductModalGalleryDesktopImage']" alt="banner">
  </picture>
</template>

<script lang="ts">
  import {defineComponent} from "vue";

  export default defineComponent({
    name: "AppGalleryModalPicture",
    props: {
      mediaData: Object
    }
  })
</script>

<style lang="scss" scoped>
  .image{
    width: 100%;
    height: auto;
  }
  @media (max-width: 1025px){
    .image{}
  }
  @media (max-width: 660px){
    .image{}
  }
</style>
