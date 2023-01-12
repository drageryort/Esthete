<template>
  <header class="header" :class="{animation:playPreview}" ref="header">
    <div class="left-col">
      <router-link to="/" class="logo">
        <picture class="picture">
          <img src="@/assets/images/svg/logo_white.svg" alt="logo">
        </picture>
      </router-link>
      <menu class="desktop-menu" v-if="isDesktop">
        <li class="menu-el">
          <router-link to="/web" class="menu-link">Websites</router-link>
        </li>
        <li class="menu-el">
          <router-link to="/applications" class="menu-link">Applications</router-link>
        </li>
        <li class="menu-el">
          <router-link to="/design" class="menu-link">Design</router-link>
        </li>
      </menu>
    </div>
    <div class="right-col">
      <a target="_blank" :href="commonData['commonContactUs']" class="btn contact-btn" v-if="isDesktop">Contact us</a>
      <button class="btn burger-btn" v-else @click="$emit('mobileMenu', true)">
        <img src="@/assets/images/svg/burger-icon.svg" alt="burger icon">
      </button>
    </div>
  </header>
</template>

<script lang="ts">
  import {defineComponent} from "vue";

  export default defineComponent({
    name: "AppHeader",
    props: {
      commonData: Object,
      playPreview: Boolean
    },
    emits:{
      mobileMenu:(trigger: boolean) => trigger
    },
    data() {
      return {
        isDesktop: window.matchMedia('(min-width: 1110px)').matches
      }
    },
  })
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 27px 60px;
    max-width: 1440px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;
    opacity: 1;
    pointer-events: auto;
    &.animation{
      opacity: 0;
      pointer-events: none;
      animation-name: header;
      animation-duration: 9500ms;
      @keyframes header {
        0% {
          opacity: 0;
          pointer-events: none;
        }
        80% {
          opacity: 0;
          pointer-events: none;
        }
        90% {
          pointer-events: auto;
        }
        100% {
          opacity: 1;
          pointer-events: auto;
        }
      }
    }
    .left-col {
      display: flex;
      column-gap: 60px;
      align-items: center;

      .logo {
        .picture {
          width: 150px;
          height: 36px;

          img {
            object-fit: contain;
            object-position: center;
          }
        }
      }

      .desktop-menu {
        display: flex;
        column-gap: 40px;
        align-items: center;

        .menu-el {
          .menu-link {
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            font-feature-settings: 'liga' off;
          }
        }
      }
    }

    .right-col {
    .contact-btn {
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      font-feature-settings: 'liga' off;
    }
  }
  }
  @media (max-width: 1025px){
    .header {
      padding: 27px 30px;
      width: 768px;
      &.animation{
        opacity: 1;
        animation-name: none;
      }
      .left-col {
        .logo {
          .picture {
            width: 126px;
            height: 30px;
            img {}
          }
        }
      }
      .right-col {
        .burger-btn{
          width: 26px;
          height: 26px;
        }
      }
    }
  }
  @media (max-width: 660px){
    .header {
      width: 100%;
      padding: 12px;
      &.animation{
        opacity: 0;
        animation-name: header;
        animation-duration: 9500ms;

        @keyframes header {
          0% {
            opacity: 0;
          }
          80% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      }
      .left-col {
        .logo {
          .picture {
            width: 100px;
            height: 24px;
            img {}
          }
        }
      }
      .right-col {
        .burger-btn{}
      }
    }
  }
</style>
