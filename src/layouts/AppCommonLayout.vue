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
    name: "AppCommonLayout",
    props:{
      commonData: Object
    },
    components: {AppHeader, AppMobileMenu, AppFooter},
    data() {
      return {
        mobileMenuActive: false,
        headerPreview: false,
        preview: true,
        loader: true
      }
    },
    mounted() {
      const body = document.querySelector('body') as HTMLBodyElement
      body.style.background = "black"
      body.style.color = "white"
    },
    methods: {
      mobileMenu(trigger:boolean) {
        this.mobileMenuActive = trigger;
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
  })
</script>
<style lang="scss"></style>