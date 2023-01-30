<template>
  <div class="pagesBanner-block-wrapper">
    <span class="first magic"></span>
    <span class="second magic"></span>
    <span class="third magic"></span>
    <div class="container">
      <div class="pagesBanner-block">
        <p class="pre-title">{{pageData['topBannerPreTitle']}}</p>
        <h1 class="title" v-html="pageData['topBannerTitle']"></h1>
        <h2 class="sub-title" v-if="!!pageData['topBannerSubTitle']" v-html="pageData['topBannerSubTitle']"></h2>
        <h3 class="sub-text" v-if="!!pageData['topBannerText']" v-html="pageData['topBannerText']"></h3>
        <div class="list" v-if="!!pageData['topBannerPoints']">
          <div class="list-el" v-for="listEl in pageData['topBannerPoints']" :key="listEl.listElTitle">
            <h3 class="list-el-title">{{listEl['topBannerPointsTitle']}}</h3>
            <p class="list-el-text" v-html="listEl['topBannerPointsText']"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from "vue";

  export default defineComponent({
    name: "AppServicesPageBanner",
    props: {
      pageData: Object
    }
  })
</script>

<style lang="scss">
  .pagesBanner-block-wrapper{
    .magic{
      background: radial-gradient(50% 50% at 50% 50%, #160156 0%, rgba(22, 1, 86, 0) 100%);
      position: absolute;
      z-index: 0;
      &.first{
        width: 53.82vw;
        height: 53.82vw;
        top: 15px;
        right: 31px;
        opacity: 0.5;
        animation: magic-blink-1 3s linear infinite;
      }
      &.second{
        width: 31.6vw;
        height: 31.6vw;
        top: 82px;
        left: 50%;
        opacity: 0;
        transform: translateX(-50%);
        animation: magic-blink-2 4s linear 2s infinite;
      }
      &.third {
        width: 41.67vw;
        height: 41.67vw;
        top: 185px;
        left: 0;
        opacity: 0;
        animation: magic-blink-3 5s linear infinite;
      }

    }
    .pagesBanner-block{
      padding: 285px 0 80px;
      .pre-title{
        margin: 0 0 24px;
        font-weight: 300;
        font-size: 20px;
        line-height: 120%;
      }
      .title{
        font-weight: 300;
        font-size: 64px;
        line-height: 78px;
        font-feature-settings: 'liga' off;
        b,strong{
          background: -moz-linear-gradient(-45deg, rgba(20,45,169,1) 0%, rgba(73,102,248,1) 100%);
          background: -webkit-linear-gradient(-45deg, rgba(20,45,169,1) 0%,rgba(73,102,248,1) 100%);
          background: linear-gradient(135deg, rgba(20,45,169,1) 0%,rgba(73,102,248,1) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      .sub-title{
        font-weight: 300;
        margin: 120px 0 0;
        font-size: 30px;
        line-height: 120%;
      }
      .sub-text{
        margin: 120px 0 0;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
      }
      .list{
        display: flex;
        flex-wrap: wrap;
        column-gap: 30px;
        row-gap: 50px;
        margin: 60px 0 0;
        .list-el{
          width: calc((100% - 30px *2) / 3);
          .list-el-title{
            font-weight: 700;
            font-size: 24px;
            line-height: 120%;
          }
          .list-el-text{
            margin: 16px 0 0;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
          }
        }
      }
    }
    @keyframes magic-blink-1 {
      0% {
        opacity: 0.5;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0.5;
      }
    }
    @keyframes magic-blink-2 {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 0.8;
      }
      100% {
        opacity: 0;
      }
    }
    @keyframes magic-blink-3 {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
  @media (max-width: 1025px){
    .pagesBanner-block-wrapper{
      .pagesBanner-block{
        padding: 203px 0 80px;
        .pre-title{
          font-size: 16px;
        }
        .title{
          font-size: 40px;
          line-height: 49px;
          b,strong{}
        }
        .sub-title{
          margin: 80px 0 0;
        }
        .sub-text{
          margin: 80px 0 0;
        }
        .list{
          row-gap: 30px;
          flex-direction: column;
          .list-el{
            width: 100%;
            .list-el-title{}
            .list-el-text{}
          }
        }
      }
    }
  }
  @media (max-width: 660px){
    .pagesBanner-block-wrapper{
      .pagesBanner-block{
        padding: 110px 0 60px;
        .pre-title{}
        .title{
          font-size: 30px;
          line-height: 36px;
          b,strong{}
        }
        .sub-title{
          font-size: 20px;
          line-height: 120%;
        }
        .sub-text{
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
        }
        .list{
          margin: 40px 0 0;
          .list-el{
            width: 100%;
            .list-el-title{
              font-size: 20px;
              line-height: 120%;
            }
            .list-el-text{}
          }
        }
      }
    }
  }
</style>
