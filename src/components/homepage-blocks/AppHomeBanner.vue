<template>
  <div class="banner-block-wrapper">
    <div class="container">
      <div class="banner-block">
        <picture class="video image">
          <source srcset="@/assets/images/jpg/mock-video-mobile.jpg" media="(max-width:660px)">
          <img src="@/assets/images/jpg/mock-video.jpg" alt="banner">
        </picture>
        <video class="video"
               v-if="play"
               autoplay
               muted
               playsinline
        >
          <source v-if="isMobile" src="@/assets/video/mobile_banner_video.mp4" type="video/mp4">
          <source v-else src="@/assets/video/desktop_banner_video.mp4" type="video/mp4">
        </video>
        <div class="content" :class="{animation:play}">
          <h1 class="title" v-html="pageData['topBannerTitle']"></h1>
          <p class="text">{{ pageData['topBannerSubTitle'] }}</p>
          <a target="_blank" :href="pageData['topBannerLink']"
             class="btn btn-blue">{{ pageData['topBannerButton'] }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "AppHomeBanner",
  props: {
    pageData: Object,
    play: Boolean
  },
  data() {
    return {
      isMobile: window.matchMedia('(max-width: 660px)').matches
    }
  }
})
</script>

<style lang="scss">
.banner-block-wrapper {
  overflow: hidden;
  .banner-block {
    display: flex;
    height: 100vh;
    align-items: center;
    .content {
      padding: 10px 0 0;
      width: 780px;
      .title {
        font-weight: 300;
        font-size: 64px;
        line-height: 78px;
        font-feature-settings: 'liga' off;

        b, strong {
          background: -moz-linear-gradient(-45deg, rgba(20, 45, 169, 1) 0%, rgba(73, 102, 248, 1) 100%);
          background: -webkit-linear-gradient(-45deg, rgba(20, 45, 169, 1) 0%, rgba(73, 102, 248, 1) 100%);
          background: linear-gradient(135deg, rgba(20, 45, 169, 1) 0%, rgba(73, 102, 248, 1) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      .text {
        margin: 24px 0 0;
        font-weight: 300;
        font-size: 20px;
        line-height: 120%;
      }
      .btn {
        margin: 60px 0 0;
      }
      &.animation {
        .title {
          opacity: 0;
          animation-name: title;
          animation-duration: 9500ms;

          @keyframes title {
            0% {
              opacity: 0;
            }
            60% {
              opacity: 0;
            }
            80% {
              opacity: 1;
            }
            100% {
              opacity: 1;
            }
          }
        }

        .text {
          opacity: 0;
          animation-name: text;
          animation-duration: 9500ms;
          @keyframes text {
            0% {
              opacity: 0;
            }
            70% {
              opacity: 0;
            }
            90% {
              opacity: 1;
            }
            100% {
              opacity: 1;
            }
          }
        }

        .btn {
          opacity: 0;
          animation-name: button;
          animation-duration: 9500ms;

          @keyframes button {
            0% {
              opacity: 0;
            }
            80% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        }
      }
    }
    .video {
      height: 100vh;
      width: max-content;
      position: absolute;
      top: 0;
      left: 200px;
      z-index: 0;
      object-fit: cover;
    }
  }
}

@media (max-width: 1025px) {
  .banner-block-wrapper {
    .banner-block {
      height: auto;
      align-items: center;
      .content {
        padding: 148px 0;
        width: 460px;
        .title {
          font-size: 40px;
          line-height: 49px;

          b, strong {
          }
        }
        .text {
          font-size: 20px;
          line-height: 120%;
        }
        .btn {
          margin: 60px 0 0;
        }
        &.animation {
          .title {
            opacity: 1;
            animation-name: none;
          }

          .text {
            opacity: 1;
            animation-name: none;
          }

          .btn {
            opacity: 1;
            animation-name: none;
          }
        }
      }
      .video {
        left: 240px;
        height: 35vh;
      }
    }
  }
}

@media (max-width: 660px) {
  .banner-block-wrapper {
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
        transform: translateY(11vh);
        .title {
          margin: 0 auto;
          max-width: 300px;
          font-size: 30px;
          line-height: 36px;
          text-align: center;

          b, strong {
          }
        }
        .text {
          margin: 18px auto 0;
          max-width: 300px;
          font-size: 16px;
          line-height: 120%;
          text-align: center;
        }

        .btn {
          margin: 40px auto 0;
        }
        &.animation {
          .title {
            opacity: 0;
            animation-name: title;
            animation-duration: 9500ms;

            @keyframes title {
              0% {
                opacity: 0;
              }
              60% {
                opacity: 0;
              }
              80% {
                opacity: 1;
              }
              100% {
                opacity: 1;
              }
            }
          }

          .text {
            opacity: 0;
            animation-name: text;
            animation-duration: 9500ms;
            @keyframes text {
              0% {
                opacity: 0;
              }
              70% {
                opacity: 0;
              }
              90% {
                opacity: 1;
              }
              100% {
                opacity: 1;
              }
            }
          }

          .btn {
            opacity: 0;
            animation-name: button;
            animation-duration: 9500ms;

            @keyframes button {
              0% {
                opacity: 0;
              }
              80% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }
          }
        }
      }
      .video {
        width: 100vw;
        height: unset;
        right: unset;
        left: unset;
        top: 0;
        transform: unset;
      }
    }
  }
}
</style>
