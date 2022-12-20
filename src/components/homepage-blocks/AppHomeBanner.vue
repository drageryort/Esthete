<template>
  <div class="container">
    <div class="banner-block">
      <video
          class="video"
          src="@/assets/video/home-banner-video.mp4"
          autoplay
          muted
          loop
      />
      <div class="content">
        <h1 class="title">
          The <b>Web</b> & <b>App</b> <br> Development
          Studio
        </h1>
        <p class="text">
          We strive to create a success story with you
        </p>
        <button class="btn btn-blue">Let’s Talk</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "AppHomeBanner"
}
</script>

<style lang="scss" scoped>
  .banner-block {
    display: flex;
    height: 100vh;
    align-items: center;
    .content {
      padding: 10px 0 0;
      width: 780px;
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
      .text{
        margin: 24px 0 0;
        font-weight: 300;
        font-size: 20px;
        line-height: 120%;
      }
      .btn{
        margin: 60px 0 0;
      }
    }
    .video {
      width: 500px;
      height: 500px;
      position: absolute;
      right: -40px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 0;
    }
}
  @media (max-width: 1000px){
    .banner-block {
      height: auto;
      align-items: center;
      .content {
        padding: 148px 0;
        width: 460px;
        .title{
          font-size: 40px;
          line-height: 49px;
          b,strong{}
        }
        .text{
          font-size: 20px;
          line-height: 120%;
        }
        .btn{
          margin: 60px 0 0;
        }
      }
      .video {
        width: 270px;
        height: 270px;
        right: 0;
      }
    }
  }
  @media (max-width: 660px){
    .banner-block {
      height: 100vh;
      flex-direction: column;
      justify-content: center;
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
        width: 100%;
        .title{
          margin: 0 auto;
          max-width: 300px;
          font-size: 30px;
          line-height: 36px;
          text-align: center;
          b,strong{}
        }
        .text{
          margin: 18px auto 0;
          max-width: 300px;
          font-size: 16px;
          line-height: 120%;
          text-align: center;
        }
        .btn{
          margin: 40px auto 0;
        }
      }
      .video {
        position: static;
        width: 165px;
        height: 165px;
        right: unset;
        left: unset;
        top: unset;
        transform: unset;
      }
    }
  }
</style>