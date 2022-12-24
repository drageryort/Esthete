<template>
  <div class="container">
    <div class="gallery-block">
      <h2 class="title">Your vision plus our expertise <br/> equals <b>new impulse</b> to your growth.</h2>
      <div class="gallery">
        <AppGalleryEl v-for="(el, index) in galleryData"
                      :key="el.productName"
                      :page="'portfolio-page'"
                      :elementData="el"
                      @click="galleryModal(true, index)"
        />
      </div>
      <button class="btn btn-blue" v-if="galleryData.length > shownData">Show more projects</button>
    </div>
  </div>
  <transition name="slide">
    <AppGalleryModal
        v-if="galleryModalActive"
        @galleryModal="galleryModal"
        :modalData="galleryData[currentIndex]"
    />
  </transition>
</template>

<script lang="ts">
import AppGalleryEl from "@/components/common-blocks/gallery/AppGalleryEl.vue";
import AppGalleryModal from "@/components/common-blocks/galleryModal/AppGalleryModal.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "AppPortfolioPageGallery",
  components: {AppGalleryEl, AppGalleryModal},
  data() {
    return {
      galleryModalActive: false,
      currentIndex: 0,
      shownData: 4,
      galleryData:[
        {
          previewImage: "/images/png/gallery/gallery-mock1.png",
          productType: "Application",
          productName: "NFT Market",
          productBanner:"/images/png/gallery/gallery-mock1.png",
          productDescription: "Product 1 <br/><br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus <br/><br/>eligendi, fugiat nihil omnis quae quasi reiciendis sed suscipit voluptatum?",
          productMedia:[
            {
              imageDesktop:"/images/png/gallery/gallery-mock-el-2.png",
              imageTablet:"",
              imageMobile:"",
              videoDesktop:"",
              videoTablet:"",
              videoMobile:"",
            },
            {
              imageDesktop:"/images/png/gallery/gallery-mock-el-3.png",
              imageTablet:"",
              imageMobile:"",
              videoDesktop:"",
              videoTablet:"",
              videoMobile:"",
            },
            {
              imageDesktop:"",
              imageTablet:"",
              imageMobile:"",
              videoDesktop:"/video/mock.mp4",
              videoTablet:"",
              videoMobile:"",
            }

          ]
        },
        {
          previewImage: "/images/png/gallery/gallery-mock2.png",
          productType: "Website",
          productName: "Sneakers shop",
          productBanner:"/images/png/gallery/gallery-mock-el-4.png",
          productDescription: "Product 2<br/><br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, nobis.",
          productMedia:[
            {
              imageDesktop:"/images/png/gallery/gallery-mock-el-2.png",
              imageTablet:"",
              imageMobile:"",
              videoDesktop:"",
              videoTablet:"",
              videoMobile:"",
            },
            {
              imageDesktop:"/images/png/gallery/gallery-mock-el-5.png",
              imageTablet:"",
              imageMobile:"",
              videoDesktop:"",
              videoTablet:"",
              videoMobile:"",
            },
            {
              imageDesktop:"/images/png/gallery/gallery-mock-el-4.png",
              imageTablet:"",
              imageMobile:"",
              videoDesktop:"",
              videoTablet:"",
              videoMobile:"",
            }
          ]
        },
        {
          previewImage: "/images/png/gallery/gallery-mock3.png",
          productType: "Application",
          productName: "My flights",
          productBanner:"/images/png/gallery/gallery-mock1.png",
          productDescription: "Product 3<br/><br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem iste ratione similique! Amet ducimus mollitia porro similique ut.<br/><br/> Asperiores autem beatae blanditiis cumque eligendi eum facilis iure laudantium perferendis perspiciatis, quae quam quibusdam quo tempore ullam? Deleniti facilis numquam voluptate.",
          productMedia:[
            {
              imageDesktop:"/images/png/gallery/gallery-mock-el-3.png",
              imageTablet:"",
              imageMobile:"",
              videoDesktop:"",
              videoTablet:"",
              videoMobile:"",
            },
            {
              imageDesktop:"/images/png/gallery/gallery-mock-el-2.png",
              imageTablet:"",
              imageMobile:"",
              videoDesktop:"",
              videoTablet:"",
              videoMobile:"",
            }
          ]
        },
        {
          previewImage: "/images/png/gallery/gallery-mock4.png",
          productType: "Design",
          productName: "Dr.Diesel",
          productBanner:"/images/png/gallery/gallery-mock-el-4.png",
          productDescription: "Product 4<br/><br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/><br/> Id incidunt provident repellendus sapiente.<br/><br/> Ab accusantium cupiditate laboriosam molestias odio, perspiciatis quidem ratione!",
          productMedia:[
            {
              imageDesktop:"/images/png/gallery/gallery-mock-el-5.png",
              imageTablet:"",
              imageMobile:"",
              videoDesktop:"",
              videoTablet:"",
              videoMobile:"",
            }
          ]
        }
      ]
    }
  },
  methods: {
    galleryModal(trigger: boolean, cardIndex: number) {
      this.galleryModalActive = trigger;
      this.currentIndex = cardIndex;
      trigger ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto"
    }
  }
})
</script>

<style lang="scss" scoped>
.gallery-block {
  padding: 180px 0 80px;
  .title {
    width: 525px;
    font-weight: 300;
    font-size: 30px;
    line-height: 120%;
  }
  .gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 60px;
    margin: 80px 0 0;
  }
  .btn {
    margin: 60px auto 0;
  }
}

@media (max-width: 1025px) {
  .gallery-block {
    padding: 140px 0 60px;
    .title {
      width: 510px;
      font-size: 26px;
      line-height: 120%;
    }
    .gallery {
      gap: 30px;
      margin: 40px 0 0;
    }
    .btn {
    }
  }
}

@media (max-width: 660px) {
  .gallery-block {
    padding: 110px 0 40px;
    .title {
      max-width: 100%;
      font-size: 20px;
      line-height: 120%;
      text-align: center;
    }
    .gallery {
      display: flex;
      flex-direction: column;
    }
    .btn {
      margin: 30px auto 0;
      .text {
      }
      .circled-blue-arrow {
      }
    }
  }
}
</style>
