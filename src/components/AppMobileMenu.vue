<template>
  <div class="mobile-menu" v-if="!isDesktop">
    <button class="btn close-menu">
      <img src="@/assets/images/svg/close-icon.svg" alt="close icon">
    </button>
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
    <button class="btn contact-btn">Contact us</button>

    <div>
      <p>Would you like to schedule a meeting?</p>
      <button class="btn calendar-btn">Schedule a meeting</button>
    </div>

    <ul class="contacts-menu">
      <li class="contacts-el">
        <a href="tel:+400323094432" class="contacts-link">+400323094432</a>
      </li>
      <li class="contacts-el">
        <a href="mailto:company@mail.com" class="contacts-link">company@mail.com</a>
      </li>
      <li class="contacts-el">
        <a href="tg://resolve?domain=melkonyan_23" class="contacts-link">Telegram</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppMobileMenu",
  data() {
    return {
      isDesktop: window.matchMedia('(min-width: 1110px)').matches
    }
  },
}
</script>

<style lang="scss" scoped>
  .mobile-menu{
    padding: 23px 0;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    z-index: 999;
    background: var(--color-white);
    .close-menu{
      position: absolute;
      top: 34px;
      right: 34px;
    }
  }
</style>