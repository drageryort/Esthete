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

<script lang="ts">
  import {defineComponent} from "vue";
  import AppFooter from "@/components/AppFooter.vue";
  import AppMobileMenu from "@/components/AppMobileMenu.vue";
  import AppHeader from "@/components/AppHeader.vue";
  export default defineComponent({
    components: {AppHeader, AppMobileMenu, AppFooter},
    data() {
      return {
        mobileMenuActive: false
      }
    },
    methods: {
      mobileMenu(trigger:boolean) {
        this.mobileMenuActive = trigger
        trigger ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto"
      }
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