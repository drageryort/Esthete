<template>
  <AppHeader
      v-if="!loader"
      :playPreview="headerPreview"
      :commonData="commonData"
      @mobileMenu="mobileMenu"
  />
  <AppMobileMenu
      :commonData="commonData"
      @mobileMenu="mobileMenu"
      :mobileMenuActive="mobileMenuActive"
  />
  <router-view v-slot="{ Component }">
      <component
          :is="Component"
          :preview="preview"
          @previewAction="previewState"
          :loader="loader"
          @loaderAction="showLoader"
      />
  </router-view>
  <appFooter
      v-if="!loader"
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
        headerPreview: false,
        preview: true,
        loader: true
      }
    },
    methods: {
      mobileMenu(trigger:boolean) {
        this.mobileMenuActive = trigger
        trigger ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto"
      },
      showLoader(trigger:boolean){
        this.loader = trigger;
        if(!trigger){
          const wow = new WOW({
            boxClass: 'wow-total',
            animateClass:'animated-total',
          })
          wow.init()
        }
      },
      previewState(trigger:boolean){
        this.preview = trigger;
        this.headerPreview = trigger;
      }
    },
    async beforeCreate() {
      try {
        this.commonData = (await (await fetch('https://admin.esthete.studio//wp-json/acf/v2/options/')).json())['acf'];
      } catch (e){
        console.error(e)
      }
    }
  })
</script>

<style lang="scss">
  @import "./assets/styles/common/fonts/font.min.css";
  @import "./assets/styles/common/global/global.min.css";

  //.scale-enter-active,
  //.scale-leave-active {
  //  transition: all 0.5s ease;
  //}
  //.scale-enter-from,
  //.scale-leave-to {
  //  opacity: 0;
  //  transform: scale(0.9);
  //}

</style>
