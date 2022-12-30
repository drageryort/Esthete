<template>
  <AppHeader
      :firstLook="firstLook"
      :commonData="commonData"
      @mobileMenu="mobileMenu"
  />
  <AppMobileMenu
      :commonData="commonData"
      @mobileMenu="mobileMenu"
      :mobileMenuActive="mobileMenuActive"
  />
  <router-view
      v-slot="{ Component }"
  >
    <transition
        name="scale"
        mode="out-in"
    >
      <component :is="Component" :firstLook="firstLook" />
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
  export default defineComponent({
    components: {AppHeader, AppMobileMenu, AppFooter},
    data() {
      return {
        commonData: {},
        mobileMenuActive: false,
        firstLook: true,
      }
    },
    methods: {
      mobileMenu(trigger:boolean) {
        this.mobileMenuActive = trigger
        trigger ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto"
      }
    },
    async beforeCreate() {
      this.commonData = (await (await fetch('https://admin.esthete.studio//wp-json/acf/v2/options/')).json())['acf'];
    },
    mounted() {
      setTimeout(()=> {
        if(this.firstLook && this.$route.name === "home" && !window.matchMedia('(min-width: 660px) and (max-width: 1025px)').matches){
          document.body.style.overflowY = "hidden";
        } else {
          document.body.style.overflowY = "auto";
        }
      },0)
      setTimeout(() => {
        this.firstLook = false;
        document.body.style.overflowY = "auto"
      }, 9500)
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