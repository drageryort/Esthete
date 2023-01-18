<template>
  <div class="container">
    <div class="gallery-block">
      <h2 class="title" v-html="pageData['galleryTitle']"></h2>
      <div class="gallery">
        <AppGalleryEl v-for="(el, index) in iteratedList"
                      :key="el['ID']"
                      :page="'portfolio-page'"
                      :elementData="el['acf']"
                      @click="galleryModal(true, index, el['acf']['galleryListProductHash'])"
        />
      </div>

      <button class="btn btn-blue"
              v-if="iteratedListLength > shownLimit"
              @click="this.shownLimit+=10">
        {{ pageData['galleryButtonText'] }}
      </button>
      <h3 v-else class="text-info">And much <b>more</b>...</h3>
    </div>
  </div>
  <transition name="slide">
    <AppGalleryModal
        v-if="galleryModalActive"
        @galleryModal="galleryModal"
        :modalData="iteratedList[currentIndex]['acf']"
        :pageData="pageData"
    />
  </transition>
</template>

<script lang="ts">
import AppGalleryEl from "@/components/common-blocks/gallery/AppGalleryEl.vue";
import AppGalleryModal from "@/components/common-blocks/galleryModal/AppGalleryModal.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "AppPortfolioPageGallery",
  props: {
    pageData: Object
  },
  components: {AppGalleryEl, AppGalleryModal},
  data() {
    return {
      galleryModalActive: false,
      currentIndex: 0,
      shownLimit: 10,
      modalChecked: false
    }
  },
  computed: {
    iteratedList() {
      if (typeof this.pageData === "object") {
        return this.pageData['galleryList'].slice(0, this.shownLimit)
      }
      return []
    },
    iteratedListLength() {
      if (typeof this.pageData === "object") {
        return this.pageData['galleryList'].length
      }
      return 10
    },
    routeHash() {
      return this.$route['hash'];
    },
    routePath() {
      return this.$route['path'];
    },
    routeName() {
      return this.$route['name'];
    },
    galleryList() {
      if (typeof this.pageData === "object") {
        return this.pageData['galleryList']
      }
      return []
    }
  },
  methods: {
    galleryModal(trigger: boolean, cardIndex: number, hashName: string) {
      this.galleryModalActive = trigger;
      this.currentIndex = cardIndex;
      trigger ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto"
      if (trigger && !window.location.hash && this.routeName !== "home") {
        location.hash = hashName
      } else if (!trigger) {
        history.replaceState(undefined, '', this.routePath)
      }
    },
    galleryModalHash(galleryData: number[]) {
      if (
          !this.modalChecked &&
          this.routeName != "home" &&
          this.routeHash
      ) {
        let index = galleryData.findIndex((elem: object | any) => {
          return elem['acf']['galleryListProductHash'] === this.routeHash
        })
        if (index >= 0) {
          this.galleryModal(true, index, '')
          this.modalChecked = true
        }
      }
    }
  },
  mounted() {
    this.galleryModalHash(this.galleryList)
  },
  watch: {
    galleryList(newData) {
      this.galleryModalHash(newData)
    }
  }
})
</script>

<style lang="scss">
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

  .text-info {
    text-align: center;
    font-weight: 300;
    font-size: 30px;
    line-height: 120%;
    margin: 60px 0 0;
  }
}

@media (max-width: 1025px) {
  .gallery-block {
    padding: 140px 0 60px;

    .title {
      width: 510px;
      font-size: 26px;
    }

    .gallery {
      gap: 30px;
      margin: 40px 0 0;
    }

    .btn {
    }

    .text-info {
      margin: 40px 0 0;
      font-size: 26px;
    }
  }
}

@media (max-width: 660px) {
  .gallery-block {
    padding: 110px 0 40px;

    .title {
      max-width: 100%;
      font-size: 20px;
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

    .text-info {
      margin: 30px 0 0;
      font-size: 20px;
    }
  }
}
</style>
