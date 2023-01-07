<template>
  <picture class="image">
    <source :srcset="media['galleryListProductModalGalleryMobileImage'] ? media['galleryListProductModalGalleryMobileImage'] : ''" media="(max-width:660px)">
    <source :srcset="media['galleryListProductModalGalleryTabletImage'] ? media['galleryListProductModalGalleryTabletImage'] : ''" media="(max-width:1025px)">
    <img :src="media['galleryListProductModalGalleryDesktopImage']" alt="banner">
  </picture>
</template>

<script lang="ts">
  import {defineComponent} from "vue";

  export default defineComponent({
    name: "AppGalleryModalPicture",
    props:['media'],
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