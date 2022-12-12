<template>
  <footer>
    <div class="container">
      <div class="footer">
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
            <button class="btn menu-link contact-btn">Contact us</button>
          </li>
        </menu>
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
        <p class="subtext">
          © 2022 Company name. All Rights Reserved. Privacy Policy
        </p>
        <p class="subtext">
          If you are in California, we can meet with you offline.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter"
}
</script>

<style lang="scss" scoped>
  .footer{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 40px;
    column-gap: 40px;
    padding: 0 0 60px;
    .menu{
      display: flex;
      align-items: center;
      column-gap: 40px;
      width: max-content;
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
      width: max-content;
      max-width: calc((100% - 40px) / 2);
      .contacts-el{
        .contacts-link{
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
        }
      }
    }
    .subtext{
      width: max-content;
      max-width: calc((100% - 40px) / 2);
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: var(--color-opacity-white);
    }
  }
</style>