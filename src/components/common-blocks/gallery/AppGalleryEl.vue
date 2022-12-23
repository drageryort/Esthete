<template>
  <div class="gallery-el" :class="page">
    <picture class="picture">
      <img :src="elementData.previewImage" alt="gallery element photo" class="img">
    </picture>
    <p class="gallery-el-type">{{elementData.productType}}</p>
    <h3 class="gallery-el-name">{{elementData.productName}}</h3>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "AppGalleryEl",
  props: ['elementData','page']
})
</script>

<style lang="scss" scoped>
  .gallery-el{
    cursor: pointer;
    &.portfolio-page{
      .picture{
        height: 400px !important;
        width: 525px !important;
      }
    }
    &:nth-child(4n-3){
      grid-area: 1 / 1 / 2 / 2;
      .picture{
        height: 347px;
      }
    }
    &:nth-child(4n-2){
      grid-area: 1 / 2 / 3 / 3;
      .picture{
        height: 538px;
      }
    }
    &:nth-child(4n-1){
      grid-area: 2 / 1 / 4 / 2;
      .picture{
        height: 610px;
      }
    }
    &:nth-child(4n){
      grid-area: 3 / 2 / 4 / 3;
      .picture{
        height: 419px;
      }
    }
    .picture{
      border-radius: 20px;
      overflow: hidden;
      .img{}
    }
    .gallery-el-type{
      margin: 20px 0 0;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: var(--color-opacity-white);
    }
    .gallery-el-name{
      margin: 8px 0 0;
      font-weight: 700;
      font-size: 30px;
      line-height: 36px;
    }
  }
  @media (max-width: 1000px){
    .gallery-el{
      &.portfolio-page{
        .picture{
          height: 260px !important;
          width: 326px !important;
        }
      }
      &:nth-child(4n-3){
        .picture{
          height: 216px;
        }
      }
      &:nth-child(4n-2){
        .picture{
          height: 335px;
        }
      }
      &:nth-child(4n-1){
        .picture{
          height: 379px;
        }
      }
      &:nth-child(4n){
        .picture{
          height: 260px;
        }
      }
      .picture{
        .img{}
      }
      .gallery-el-type{
        font-size: 14px;
        line-height: 18px;
      }
      .gallery-el-name{
        font-size: 24px;
        line-height: 29px;
      }
    }
  }
  @media (max-width: 660px){
    .gallery-el{
      &:nth-child(n){
        .picture{
          height: 230px !important;
          width: 100% !important;
        }
      }
      .gallery-el-type{
        margin: 14px 0 0;
        text-align: center;
        font-size: 14px;
        line-height: 18px;
      }
      .gallery-el-name{
        margin: 6px 0 0;
        text-align: center;
        font-size: 20px;
        line-height: 24px;
      }
    }
  }
</style>
