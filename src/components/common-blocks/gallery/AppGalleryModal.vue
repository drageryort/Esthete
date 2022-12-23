<template>
  <div class="gallery-modal">
    <div class="gallery-modal-wrapper" @click="$emit('galleryModal', false, 0)"></div>
    <div class="gallery-modal-block">
      <div class="gallery-modal-content">
        <button class="btn close-modal" @click="$emit('galleryModal', false, 0)">
        <span class="circle">
          <img src="@/assets/images/svg/close-icon.svg" alt="close icon">
        </span>
        </button>
        <h2 class="pre-title">{{modalData.productType}}</h2>
        <h1 class="title">{{modalData.productName}}</h1>
        <picture class="main-banner">
          <img src="../../../../public/images/png/gallery/mock-gallery-el-banner.png" alt="banner">
        </picture>
        <h3 class="text-title">About project</h3>
        <p class="text" v-html="modalData.productDescription"></p>
        <div class="media" v-for="media in modalData.productMedia" :key="media.imageDesktop || media.videoDesktop">
          <AppGalleryModalVideo  v-if="media.videoDesktop" :media="media"/>
          <AppGalleryModalPicture v-else :media="media"/>
        </div>
      </div>
      <AppSendRequest
          :variant="'modal'"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import AppSendRequest from "@/components/common-blocks/AppSendRequest.vue";
import AppGalleryModalVideo from "@/components/common-blocks/gallery/AppGalleryModalVideo.vue";
import AppGalleryModalPicture from "@/components/common-blocks/gallery/AppGalleryModalPicture.vue";
export default defineComponent({
  name: "AppGalleryModal",
  components: {AppGalleryModalPicture, AppGalleryModalVideo, AppSendRequest},
  props: ['modalData'],
})
</script>

<style scoped lang="scss">
  .gallery-modal{
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 5;
    *{
      color: var(--color-black);
    }
    .gallery-modal-wrapper{
      width: 100%;
      height: 100%;
      background: var(--color-black);
      position: absolute;
      opacity: .6;
    }
    .gallery-modal-block{
      height: 100%;
      width: 1024px;
      background: var(--color-white);
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      z-index: 10;
      overflow-y: auto;
      .gallery-modal-content{
        padding: 40px 67px 60px;
        .close-modal{
          position: fixed;
          top: 40px;
          right: 40px;
          z-index: 5;
          .circle{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 48px;
            height: 48px;
            padding: 11px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 60px;
            overflow: hidden;
          }
        }
        .pre-title{
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          opacity: .5;
        }
        .title{
          margin: 8px 0 0;
          font-weight: 700;
          font-size: 30px;
          line-height: 36px;
        }
        .main-banner{
          margin: 40px 0 0;
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
        }
        .text-title{
          margin: 40px 0 0;
          font-weight: 700;
          font-size: 30px;
          line-height: 36px;
        }
        .text{
          margin: 24px 0 60px;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
        }
        .media{
          margin: 30px 0 0;
          border-radius: 20px;
          overflow: hidden;
        }
      }
    }
  }
  @media (max-width: 1000px){
    .gallery-modal{
      .gallery-modal-wrapper{}
      .gallery-modal-block{
        width: 680px;
        .gallery-modal-content{
          padding: 40px 35px 60px;
          .close-modal{
            top: 30px;
            right: 30px;
            .circle{}
          }
          .pre-title{}
          .title{}
          .main-banner{}
          .text-title{}
          .text{}
          .media{
            .image{}
            .video{}
          }
        }
      }
    }
  }
  @media (max-width: 660px){
    .gallery-modal{
      .gallery-modal-wrapper{
        display: none;
      }
      .gallery-modal-block{
        width: 100%;
        left: 0;
        .gallery-modal-content{
          padding: 24px 25px 40px;
          @media (max-width: 400px){
            padding: 24px 20px 40px;
          }
          @media (max-width: 360px){
            padding: 24px 15px 40px;
          }
          @media (max-width: 330px){
            padding: 24px 10px 40px;
          }
          .close-modal{
            top: 10px;
            right: 10px;
            .circle{}
          }
          .pre-title{
            font-size: 14px;
            line-height: 18px;
          }
          .title{
            margin: 6px 0 0;
            font-size: 20px;
            line-height: 24px;
          }
          .main-banner{
            margin: 30px 0 0;
          }
          .text-title{
            margin: 30px 0 0;
            font-size: 20px;
            line-height: 24px;
          }
          .text{
            margin: 20px 0 40px;
          }
          .media{
            margin: 30px 0 0;
            .image{}
            .video{}
          }
        }
      }
    }
  }
</style>
