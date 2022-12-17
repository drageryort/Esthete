<template>
  <div class="mobile-menu" v-if="!isDesktop" :class="{ active: mobileMenuActive }">
    <button class="btn close-menu" @click="$emit('mobileMenu', false)">
      <img src="@/assets/images/svg/close-icon.svg" alt="close icon">
    </button>
    <div class="top-block">
      <menu class="desktop-menu">
        <li class="menu-el" @click="$emit('mobileMenu', false)">
          <router-link to="/webpages-portfolio" class="menu-link">Websites</router-link>
        </li>
        <li class="menu-el" @click="$emit('mobileMenu', false)">
          <router-link to="/apps-portfolio" class="menu-link">Applications</router-link>
        </li>
        <li class="menu-el" @click="$emit('mobileMenu', false)">
          <router-link to="/designs-portfolio" class="menu-link">Design</router-link>
        </li>
      </menu>
      <button class="btn contact-btn" @click="$emit('mobileMenu', false)">Contact us</button>
    </div>
    <ul class="contacts-menu">
      <li class="contacts-el">
        <a href="mailto:company@mail.com" class="contacts-link" >company@mail.com</a>
      </li>
      <li class="contacts-el">
        <a href="tel:+400323094432" class="contacts-link">+400323094432</a>
      </li>
      <li class="contacts-el">
        <a href="tg://resolve?domain=melkonyan_23" class="contacts-link">Telegram</a>
      </li>
      <li class="contacts-el">
        <a href="#" class="contacts-link">Privacy policy</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppMobileMenu",
  props:['mobileMenuActive'],
  data() {
    return {
      isDesktop: window.matchMedia('(min-width: 1110px)').matches
    }
  },
}
</script>

<style lang="scss" scoped>
  .mobile-menu{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 100%;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: 999;
    background: var(--color-white);
    transition: left .4s linear;
    &.active{
      left: 0;
      .top-block{
        .desktop-menu{
          .menu-el{
            left: 0;
            opacity: 1;
            &:nth-child(1){
              transition: 0.4s 0.3s;
            }
            &:nth-child(2){
              transition: 0.4s 0.7s;
            }
            &:nth-child(3){
              transition: 0.4s 1.1s;
            }
            .menu-link{}
          }
        }
        .btn{
          left: 0;
          opacity: 1;
          transition: 0.4s 1.5s;
        }
      }
      .contacts-menu{
        top: 0;
        opacity: 0.5;
        transition: 0.4s 1.9s;
        .contacts-el{
          .contacts-link{}
        }
      }
    }
    .close-menu{
      position: absolute;
      top: 34px;
      right: 34px;
      z-index: 5;
    }
    .top-block{
      padding: 100px 100px 0;
      .desktop-menu{
        display: flex;
        flex-direction: column;
        row-gap: 48px;
        .menu-el{
          left: 80px;
          opacity: 0;
          transition: .4s;
          .menu-link{
            font-weight: 400;
            font-size: 60px;
            line-height: 73px;
            text-decoration: underline from-font;
            font-feature-settings: 'liga' off;
            color: var(--color-black);
          }
        }
      }
      .btn{
        margin: 100px 0 0;
        font-weight: 700;
        font-size: 60px;
        line-height: 73px;
        text-decoration: underline from-font;
        font-feature-settings: 'liga' off;
        color: var(--color-black);
        left: 80px;
        opacity: 0;
      }
    }
    .contacts-menu{
      display: flex;
      justify-content: center;
      column-gap: 40px;
      padding: 0 50px 90px;
      top: 70px;
      opacity: 0;
      .contacts-el{
        .contacts-link{
          font-weight: 600;
          font-size: 16px;
          line-height: 19px;
          color: var(--color-black);
        }
      }
    }
  }
  @media (max-width: 660px){
    .mobile-menu{
      &.active{
        .top-block{
          .desktop-menu{
            .menu-el{
              &:nth-child(1){}
              &:nth-child(2){}
              &:nth-child(3){}
              .menu-link{}
            }
          }
          .btn{}
        }
        .contacts-menu{
          .contacts-el{
            .contacts-link{}
          }
        }
      }
      .close-menu{
        top: 20px;
        right: 20px;
        }
      .top-block{
        padding: 40px 40px 0;
        .desktop-menu{
          row-gap: 24px;
          .menu-el{
            .menu-link{
              font-weight: 400;
              font-size: 30px;
              line-height: 36px;
            }
          }
        }
        .btn{
          margin: 60px 0 0;
          font-weight: 700;
          font-size: 30px;
          line-height: 36px;
        }
      }
      .contacts-menu{
        flex-direction: column;
        row-gap: 16px;
        padding: 0 40px 30px;
        .contacts-el{
          .contacts-link{}
        }
      }
    }
  }
</style>