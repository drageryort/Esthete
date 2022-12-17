<template>
  <AppHeader
      @mobileMenu="mobileMenu"
      :mobileMenuActive="mobileMenuActive"
  />
  <AppMobileMenu
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
      <component :is="Component" />
    </transition>
  </router-view>
  <appFooter/>
</template>

<script>
  import AppFooter from "@/components/AppFooter";
  import AppMobileMenu from "@/components/AppMobileMenu";
  import AppHeader from "@/components/AppHeader";
  export default {
    components: {AppHeader, AppMobileMenu, AppFooter},
    data() {
      return {
        mobileMenuActive: false
      }
    },
    methods: {
      mobileMenu(trigger) {
        this.mobileMenuActive = trigger
        trigger ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto"
      }
    }
  }
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