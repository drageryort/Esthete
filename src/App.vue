<template>
  <AppHeader
      :playPreview="playPreview"
      :commonData="commonData"
      @mobileMenu="mobileMenu"
  />
  <AppMobileMenu
      :commonData="commonData"
      @mobileMenu="mobileMenu"
      :mobileMenuActive="mobileMenuActive"
  />

  <router-view v-slot="{ Component }"  @readyData="animation">
    <transition
        name="scale"
        mode="out-in"
    >
      <component
          :is="Component"
          :waitPreview="waitPreview"
          :playPreview="playPreview"
          @updatePreviewState="updateWaitPreview"

      />
    </transition>
  </router-view>
  <appFooter
      :commonData="commonData"
  />
</template>

<script lang="ts">
  import {defineComponent} from "vue";
  import AppFooter from "@/components/AppFooter.vue";
  import AppMobileMenu from "@/components/AppMobileMenu.vue";
  import AppHeader from "@/components/AppHeader.vue";

  // eslint-disable-next-line
  //@ts-ignore
  import WOW from "wow.js"

  export default defineComponent({
    components: {AppHeader, AppMobileMenu, AppFooter},
    data() {
      return {
        commonData: {},
        mobileMenuActive: false,
        waitPreview: true,
        playPreview: false
      }
    },
    methods: {
      mobileMenu(trigger:boolean) {
        this.mobileMenuActive = trigger
        trigger ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto"
      },
      animation() {
        new WOW({
          boxClass: 'wow-total',
          animateClass:'animated-total',
        }).init();
      },
      updateWaitPreview(previewState:boolean){
        this.waitPreview = previewState;
        this.playPreview = previewState;
      }
    },
    async beforeCreate() {
      this.commonData = (await (await fetch('https://admin.esthete.studio//wp-json/acf/v2/options/')).json())['acf'];
    }
  })
</script>

<style lang="scss">
  @import "./assets/styles/common/fonts/font.min.css";
  @import "./assets/styles/common/global/global.min.css";

  .scale-enter-active,
  .scale-leave-active {
    transition: all 0.5s ease;
  }
  .scale-enter-from,
  .scale-leave-to {
    opacity: 0;
    transform: scale(0.9);
  }

</style>