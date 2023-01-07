<template>
  <div class="container" :class="variant">
    <div class="sendRequest-block"
         :class="{
            'modal':variant,
            'wow-total animate__fadeInUp': !variant,
          }"
    >
      <div class="content-wrapper">
        <h2 class="title"
            v-html="pageData['blueBannerTitle']"></h2>
        <a target="_blank"
           :href="pageData['blueBannerButtonLink']"
           class="btn btn-white btn-sendRequest"
        >{{pageData['blueBannerButtonText']}}</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "AppSendRequest",
  props:['variant','pageData'],
})
</script>

<style lang="scss" scoped>
  .sendRequest-block{
    padding: 60px 0 80px;
    &.modal{
      padding: 0;
      .content-wrapper{
        border-radius: 0;
        overflow: hidden;
        .title{
          max-width: 520px;
        }
      }
    }
    .content-wrapper{
      display: flex;
      padding: 86px 100px;
      align-items: center;
      justify-content: center;
      column-gap: 100px;
      background-image: linear-gradient(97.57deg, #1732C1 27.39%, #D52E5E 70.5%);
      background-position: 0 0;
      background-size: 400% 400%;
      border-radius: 20px;
      overflow: hidden;
      animation: gradient-background 15s ease infinite;
      .title{
        max-width: 620px;
        font-weight: 400;
        font-size: 40px;
        line-height: 49px;
      }
      .btn-sendRequest{

      }
    }
    @keyframes gradient-background {
      0% {
        background-position: 0 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0 50%;
      }
    }
  }
  @media (max-width: 1025px){
    .sendRequest-block{
      padding: 20px 0 60px;
      &.modal{
        .content-wrapper{
          column-gap: 60px;
          .title{
            max-width: 350px;
          }
        }
      }
      .content-wrapper{
        padding: 60px;
        column-gap: 75px;
        .title{
          max-width: 340px;
          font-size: 24px;
          line-height: 29px;
        }
        .btn-sendRequest{}
      }
    }
  }
  @media (max-width: 660px){
    .sendRequest-block{
      padding: 20px 0 40px;
      &.modal{
        .content-wrapper{
          .title{}
        }
      }
      .content-wrapper{
        flex-direction: column;
        padding: 40px 20px 45px;
        row-gap: 30px;
        .title{
          max-width: 100%;
          font-size: 20px;
          line-height: 24px;
          text-align: center;
        }
        .btn-sendRequest{}
      }
    }
  }
</style>
