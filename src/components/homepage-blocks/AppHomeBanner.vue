<template>
  <div class="container">
    <div class="banner-block">
      <div class="content">
        <h1 class="title">
          The <b>Web</b> & <b>App</b> Development
          Studio
        </h1>
        <p class="text">
          We strive to create a success story with you
        </p>
        <button class="btn btn-blue">Let’s Talk</button>
      </div>
      <video
          class="video"
          src="@/assets/video/home-banner-video.mp4"
          autoplay
          muted
          loop
      />
    </div>
  </div>
</template>

<script>
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
    }
}
</style>