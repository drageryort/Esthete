<template>
  <div class="container">
    <div class="gallery-block">
      <h2 class="title wow animate__fadeInUp" v-html="pageData['galleryTitle']"></h2>
      <div class="gallery">
        <AppGalleryEl v-for="(el, index) in pageData['galleryList']"
                      :key="el['galleryListProductName']"
                      :elementData="el"
                      @click="galleryModal(true, index)"
        />
      </div>
      <div class="wow animate__fadeInUp">
        <router-link to="/portfolio" class="btn show-more-cases">
          <span class="text">{{ pageData['galleryButtonText'] }}</span>
          <img class="circled-blue-arrow" src="@/assets/images/svg/arrow-right-circle-blue-icon.svg" alt="show more icon">
        </router-link>
      </div>
    </div>
  </div>
  <transition name="slide">
    <AppGalleryModal
      v-if="galleryModalActive"
      @galleryModal="galleryModal"
      :modalData="pageData['galleryList'][currentIndex]"
      :pageData="pageData"
    />
  </transition>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import AppGalleryModal from "@/components/common-blocks/galleryModal/AppGalleryModal.vue";
import AppGalleryEl from "@/components/common-blocks/gallery/AppGalleryEl.vue";
export default defineComponent({
  name: "AppGallery",
  props: ['pageData'],
  components: {AppGalleryEl, AppGalleryModal},
  data() {
    return{
      galleryModalActive: false,
      currentIndex: 0,
    }
  },
  methods: {
    galleryModal(trigger:boolean, cardIndex:number) {
      this.galleryModalActive = trigger;
      this.currentIndex = cardIndex;
      trigger ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto"
    }
  }
})
</script>

<style lang="scss" scoped>
  .gallery-block{
    padding: 60px 0 80px;
    .title{
      width: 525px;
      font-weight: 300;
      font-size: 30px;
      line-height: 120%;
    }
    .gallery{
      display: grid;
      grid-template-columns: 525px 525px;
      gap: 60px;
      margin: 80px 0 0;
    }
    .btn{
      display: flex;
      align-items: center;
      column-gap: 10px;
      margin: 80px 0 0;
      .text{
        font-weight: 500;
        font-size: 20px;
        line-height: 20px;
      }
      .circled-blue-arrow{
        width: 30px;
        height: 30px;
      }
    }
    
  }
  @media (max-width: 1025px){
    .gallery-block{
      padding: 20px 0 60px;
      .title{
        width: 510px;
        font-size: 26px;
        line-height: 120%;
      }
      .gallery{
        display: grid;
        grid-template-columns: 326px 326px;
        gap: 30px;
        margin: 40px 0 0;
      }
      .btn{
        margin: 40px 0 0;
        .text{
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
        }
        .circled-blue-arrow{
          width: 26px;
          height: 26px;
        }
      }

    }
  }
  @media (max-width: 660px){
    .gallery-block{
      padding: 20px 0 40px;
      .title{
        max-width: 100%;
        font-size: 20px;
        line-height: 120%;
        text-align: center;
      }
      .gallery{
        display: flex;
        flex-direction: column;
      }
      .btn{
        margin: 40px auto 0;
        .text{}
        .circled-blue-arrow{}
      }

    }
  }
</style>
