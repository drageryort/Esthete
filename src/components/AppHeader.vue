<template>
  <header class="header">
    <div class="left-col">
      <router-link to="/" class="logo">
        <picture class="picture">
          <img src="@/assets/images/svg/logo-mock.svg" alt="logo">
        </picture>
      </router-link>
      <menu class="desktop-menu">
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
      <button class="btn contact-btn">Contact us</button>
    </div>
  </header>
</template>

<script>
  export default {
    name: "AppHeader"
  }
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 27px 60px;
    max-width: 1440px;
    min-width: 1110px;
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
</style>