<template>
  <header class="header">
    <div class="left-col">
      <router-link to="/" class="logo">
        <picture class="picture">
          <img src="@/assets/images/svg/logo-mock.svg" alt="logo">
        </picture>
      </router-link>
      <menu class="desktop-menu" v-if="isDesktop">
        <li class="menu-el">
          <router-link to="/webpages-portfolio" class="menu-link">Websites</router-link>
        </li>
        <li class="menu-el">
          <router-link to="/apps-portfolio" class="menu-link">Applications</router-link>
        </li>
        <li class="menu-el">
          <router-link to="/designs-portfolio" class="menu-link">Design</router-link>
        </li>
      </menu>
    </div>
    <div class="right-col">
      <button class="btn contact-btn" v-if="isDesktop">Contact us</button>
      <button class="btn burger-btn" v-else @click="$emit('mobileMenu', true)">
        <img src="@/assets/images/svg/burger-icon.svg" alt="burger icon">
      </button>
    </div>
  </header>
</template>

<script>
  export default {
    name: "AppHeader",
    data() {
      return {
        isDesktop: window.matchMedia('(min-width: 1110px)').matches
      }
    },
  }
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
    .left-col {
      display: flex;
      column-gap: 60px;
      align-items: center;

      .logo {
        .picture {
          width: 96px;
          height: 40px;

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
  @media (max-width: 1000px){
    .header {
      padding: 27px 30px;
      width: 768px;
      .left-col {
        .logo {
          .picture {
            width: 72px;
            height: 18px;
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
      .left-col {
        .logo {
          .picture {
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