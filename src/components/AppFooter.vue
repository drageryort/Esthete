<template>
  <footer>
    <div class="container">
      <div class="footer">
        <div class="lists-block wow animate__fadeInUp">
          <menu class="menu">
            <li class="menu-el">
              <router-link to="/webpages-portfolio" class="menu-link">Websites</router-link>
            </li>
            <li class="menu-el">
              <router-link to="/apps-portfolio" class="menu-link">Applications</router-link>
            </li>
            <li class="menu-el">
              <router-link to="/designs-portfolio" class="menu-link">Design</router-link>
            </li>
            <li class="menu-el">
              <a target="_blank" :href="commonData['commonContactUs']" class="btn menu-link contact-btn">Contact us</a>
            </li>
          </menu>
          <ul class="contacts-menu">
            <li class="contacts-el">
              <a target="_blank" :href="`tel:${commonData['commonPhone']}`" class="contacts-link">{{commonData['commonPhone']}}</a>
            </li>
            <li class="contacts-el">
              <a target="_blank" :href="`mailto:${commonData['commonEmail']}`" class="contacts-link">{{commonData['commonEmail']}}</a>
            </li>
            <li class="contacts-el">
              <a target="_blank" :href="commonData['commonTelegram']" class="contacts-link">Telegram</a>
            </li>
          </ul>
        </div>
        <p class="copyrights wow animate__fadeInUp">
          © {{new Date().getFullYear()}} {{commonData['commonCopyrights']}}
          <a target="_blank" :href="commonData['commonPrivatePolicy']" class="link">Privacy Policy</a>
        </p>
        <p class="subtext c">{{commonData['commonText']}}</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "AppFooter",
  props: ['commonData']
})
</script>

<style lang="scss" scoped>
  .footer{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 40px;
    column-gap: 40px;
    padding: 0 0 60px;
    .lists-block{
      display: flex;
      justify-content: space-between;
      column-gap: 40px;
      width: 100%;
      .menu{
        display: flex;
        align-items: center;
        column-gap: 40px;
        max-width: calc((100% - 40px) / 2);
        .menu-el{
          .menu-link{
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
          }
        }
      }
      .contacts-menu{
        display: flex;
        align-items: center;
        column-gap: 40px;
        max-width: calc((100% - 40px) / 2);
        .contacts-el{
          .contacts-link{
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
          }
        }
      }
    }
    .subtext, .copyrights{
      max-width: calc((100% - 40px) / 2);
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: var(--color-opacity-white);
      .link{
        text-decoration: underline;
      }
    }
  }
  @media (max-width: 1025px){
    .footer{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      row-gap: 40px;
      column-gap: 40px;
      padding: 0 0 40px;
      .lists-block{
        width: max-content;
        .menu{
          width: 150px;
          flex-direction: column;
          align-items: flex-start;
          column-gap: 30px;
          row-gap: 16px;
          max-width: unset;
          .menu-el{
            .menu-link{}
          }
        }
        .contacts-menu{
          width: 180px;
          flex-direction: column;
          align-items: flex-start;
          column-gap: 30px;
          row-gap: 16px;
          max-width: unset;
          .contacts-el{
            .contacts-link{}
          }
        }
      }
      .subtext{
        max-width: calc(100% - 360px - 90px);
      }
      .copyrights{
        order: 1;
        max-width: 100%;
      }
    }
  }
  @media (max-width: 660px){
    .footer{
      flex-direction: column;
      padding: 20px 0 40px;
      .lists-block{
        width: 100%;
        flex-direction: column;
        row-gap: 40px;
        .menu{
          width: 100%;
          flex-direction: column;
          align-items: center;
          row-gap: 10px;
          .menu-el{
            .menu-link{}
          }
        }
        .contacts-menu{
          width: 100%;
          flex-direction: column;
          align-items: center;
          row-gap: 10px;
          .contacts-el{
            .contacts-link{}
          }
        }
      }
      .subtext{
        text-align: center;
        max-width: 100%;
      }
      .copyrights{
        order: 1;
        max-width: 100%;
        text-align: center;
      }
    }
  }
</style>
