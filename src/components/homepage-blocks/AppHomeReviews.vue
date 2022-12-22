<template>
  <div class="container">
    <div class="reviews-block">
      <h2 class="title">
        Transparent relationships yield the <b>Best Results</b>
      </h2>
      <div class="reviews-slider">
        <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="50"
            :loop=true
            :pagination="{clickable: true, el:pagination}"
            :navigation="{prevEl:prev,nextEl:next}"
            :creativeEffect="{
              prev: {
                shadow: true,
                translate: ['-120%', 0, -500],
              },
              next: {
                shadow: true,
                translate: ['120%', 0, -500],
              },
            }"
            effect="creative"
        >
          <swiper-slide>
            <div class="slide">
              <div class="desktop" v-if="isDesktop">
                <div class="review-content">
                  <p class="review-text">
                    1)Lorem ipsum dolor sit amet consectetur. Gravida lectus viverra pharetra metus posuere. Ornare neque
                    neque in egestas nisl venenatis. Nunc augue convallis enim nulla sapien neque accumsan pharetra non.
                    Malesuada quis morbi porttitor id aliquam fames viverra.
                  </p>
                  <h3 class="review-author">
                    <b>John Doe</b>
                    <span>Company Name - CEO</span>
                  </h3>
                </div>
                <picture class="review-picture">
                  <img src="@/assets/images/png/reviewer-mock.png" alt="reviewer photo">
                </picture>
              </div>
              <div class="tablet-mobile" v-else>
                <div class="review-title">
                  <picture class="review-picture">
                    <img src="@/assets/images/png/reviewer-mobile-mock.png" alt="">
                  </picture>
                  <h3 class="review-author">
                    <b>John Doe</b>
                    <span>Company Name - CEO</span>
                  </h3>
                </div>
                <p class="review-content">
                  1)Lorem ipsum dolor sit amet consectetur. Gravida lectus viverra pharetra metus posuere. Ornare neque
                  neque in egestas nisl venenatis. Nunc augue convallis enim nulla sapien neque accumsan pharetra non.
                  Malesuada quis morbi porttitor id aliquam fames viverra.
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide">
              <div class="desktop" v-if="isDesktop">
                <div class="review-content">
                  <p class="review-text">
                    1)Lorem ipsum dolor sit amet consectetur. Gravida lectus viverra pharetra metus posuere. Ornare neque
                    neque in egestas nisl venenatis. Nunc augue convallis enim nulla sapien neque accumsan pharetra non.
                    Malesuada quis morbi porttitor id aliquam fames viverra.
                  </p>
                  <h3 class="review-author">
                    <b>John Doe</b>
                    <span>Company Name - CEO</span>
                  </h3>
                </div>
                <picture class="review-picture">
                  <img src="@/assets/images/png/reviewer-mock.png" alt="reviewer photo">
                </picture>
              </div>
              <div class="tablet-mobile" v-else>
                <div class="review-title">
                  <picture class="review-picture">
                    <img src="@/assets/images/png/reviewer-mobile-mock.png" alt="">
                  </picture>
                  <h3 class="review-author">
                    <b>John Doe</b>
                    <span>Company Name - CEO</span>
                  </h3>
                </div>
                <p class="review-content">
                  1)Lorem ipsum dolor sit amet consectetur. Gravida lectus viverra pharetra metus posuere. Ornare neque
                  neque in egestas nisl venenatis. Nunc augue convallis enim nulla sapien neque accumsan pharetra non.
                  Malesuada quis morbi porttitor id aliquam fames viverra.
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide">
              <div class="desktop" v-if="isDesktop">
                <div class="review-content">
                  <p class="review-text">
                    1)Lorem ipsum dolor sit amet consectetur. Gravida lectus viverra pharetra metus posuere. Ornare neque
                    neque in egestas nisl venenatis. Nunc augue convallis enim nulla sapien neque accumsan pharetra non.
                    Malesuada quis morbi porttitor id aliquam fames viverra.
                  </p>
                  <h3 class="review-author">
                    <b>John Doe</b>
                    <span>Company Name - CEO</span>
                  </h3>
                </div>
                <picture class="review-picture">
                  <img src="@/assets/images/png/reviewer-mock.png" alt="reviewer photo">
                </picture>
              </div>
              <div class="tablet-mobile" v-else>
                <div class="review-title">
                  <picture class="review-picture">
                    <img src="@/assets/images/png/reviewer-mobile-mock.png" alt="">
                  </picture>
                  <h3 class="review-author">
                    <b>John Doe</b>
                    <span>Company Name - CEO</span>
                  </h3>
                </div>
                <p class="review-content">
                  1)Lorem ipsum dolor sit amet consectetur. Gravida lectus viverra pharetra metus posuere. Ornare neque
                  neque in egestas nisl venenatis. Nunc augue convallis enim nulla sapien neque accumsan pharetra non.
                  Malesuada quis morbi porttitor id aliquam fames viverra.
                </p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="review-slider-navigation" v-if="isDesktop">
          <button ref="prev" class="btn swiper-button prev">
            <img class="icon" src="@/assets/images/svg/arrow-white-icon.svg" alt="prev slide arrow">
          </button>
          <button ref="next" class="btn swiper-button next">
            <img class="icon" src="@/assets/images/svg/arrow-white-icon.svg" alt="next slide arrow">
          </button>
        </div>
        <div ref="pagination" class="pagination" v-else></div>
      </div>
      <div class="rate-list">
        <div class="rate-el">
          <picture class="rate-logo">
            <img class="image" src="@/assets/images/svg/google-logo.svg" alt="rate logo">
          </picture>
          <div class="rate-description">
            <span class="rate-text">Our rate 5 of 5</span>
            <div class="rate-stars">
              <img class="rate-star" src="@/assets/images/svg/star-icon.svg" alt="star in rate">
              <img class="rate-star" src="@/assets/images/svg/star-icon.svg" alt="star in rate">
              <img class="rate-star" src="@/assets/images/svg/star-icon.svg" alt="star in rate">
              <img class="rate-star" src="@/assets/images/svg/star-icon.svg" alt="star in rate">
              <img class="rate-star" src="@/assets/images/svg/star-icon.svg" alt="star in rate">
            </div>
          </div>
        </div>
        <div class="rate-el">
          <picture class="rate-logo">
            <img src="@/assets/images/svg/clutch-logo.svg" alt="rate logo">
          </picture>
          <div class="rate-description">
            <span class="rate-text">Our rate 4 of 5</span>
            <div class="rate-stars">
              <img class="rate-star" src="@/assets/images/svg/star-icon.svg" alt="star in rate">
              <img class="rate-star" src="@/assets/images/svg/star-icon.svg" alt="star in rate">
              <img class="rate-star" src="@/assets/images/svg/star-icon.svg" alt="star in rate">
              <img class="rate-star" src="@/assets/images/svg/star-icon.svg" alt="star in rate">
            </div>
          </div>
        </div>
        <div class="rate-el">
          <picture class="rate-logo">
            <img src="@/assets/images/svg/upwork-logo.svg" alt="rate logo">
          </picture>
          <div class="rate-description">
            <span class="rate-text">Our rate 3 of 5</span>
            <div class="rate-stars">
              <img class="rate-star" src="@/assets/images/svg/star-icon.svg" alt="star in rate">
              <img class="rate-star" src="@/assets/images/svg/star-icon.svg" alt="star in rate">
              <img class="rate-star" src="@/assets/images/svg/star-icon.svg" alt="star in rate">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// Import Swiper Vue.js components
import {defineComponent, ref} from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { EffectCreative, Navigation, Pagination } from 'swiper';

  // Import Swiper styles
  import 'swiper/css';
  import "swiper/css/effect-creative";

  export default defineComponent({
    name: "AppHomeReviews",
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        isDesktop: window.matchMedia('(min-width: 1110px)').matches
      }
    },
    setup() {
      const prev = ref(null);
      const next = ref(null);
      const pagination = ref(null);
      return {
        modules: [Navigation, Pagination, EffectCreative ],
        prev,
        next,
        pagination
      };
    },
  })
</script>

<style lang="scss">
  .reviews-block{
    padding: 60px 0 80px;
    .title{
      width: 448px;
      font-weight: 300;
      font-size: 30px;
      line-height: 120%;
    }
    .reviews-slider{
      margin: 50px 0 0;
      .slide{
        .desktop{
          .review-picture{
            width: 300px;
            height: 348px;
          }
          .review-content{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            padding: 40px;
            width: 100%;
            background: #0B0323;
            border: 4px solid #142DA9;
            border-radius: 20px;
            overflow: hidden;
            position: absolute;
            bottom: 0;
            left: 0;
            .review-text{
              width: 700px;
              font-weight: 400;
              font-size: 20px;
              line-height: 28px;
            }
            .review-author{
              display: flex;
              flex-direction: column;
              width: 700px;
              margin: 50px 0 0;
              font-size: 20px;
              line-height: 120%;
              span{
                font-size: 16px;
                line-height: 24px;
              }
            }
          }
        }
      }
      .review-slider-navigation{
        display: flex;
        column-gap: 24px;
        position: absolute;
        bottom: 40px;
        right: 40px;
        z-index: 1;
        .swiper-button{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 46px;
          height: 46px;
          border: 2px solid var(--color-white);
          border-radius: 50%;
          overflow: hidden;
          &.next{
            transform: rotate(180deg);
          }
          .icon{
            width: 24px;
            height: 24px;
          }
        }
      }
    }
    .rate-list{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      column-gap: 60px;
      margin: 60px 0 0;
      .rate-el{
        display: flex;
        align-items: center;
        height: 45px;
        .rate-logo{
          display: flex;
          align-items: center;
          padding: 0 13px 0 0;
          img{
            max-height: 35px;
            max-width: 120px;
          }
        }
        .rate-description{
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 0 0 13px;
          height: 100%;
          border-left: 1px solid var(--color-white);
          .rate-text{
            font-size: 14px;
            line-height: 17px;
          }
          .rate-stars{
            display: flex;

            .rate-star{
              width: 24px;
              height: 24px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 1000px){
    .reviews-block{
      padding: 20px 0 60px;
      .title{
        width: 330px;
        font-size: 26px;
        line-height: 120%;
      }
      .reviews-slider{
        margin: 40px 0 0;
        .slide{
          .tablet-mobile{
            padding: 25px;
            min-height: 230px;
            background: #0B0323;
            border: 4px solid #142DA9;
            border-radius: 20px;
            .review-title{
              display: flex;
              align-items: center;
              column-gap: 10px;
              .review-picture{
                width: 48px;
                height: 48px;
              }
              .review-author{
                display: flex;
                flex-direction: column;
                font-size: 20px;
                line-height: 120%;
                span{
                  font-size: 16px;
                  line-height: 120%;
                }
              }
            }
            .review-content{
              margin: 26px 0 0;
              font-weight: 400;
              font-size: 16px;
              line-height: 20px;
            }
          }
        }
        .pagination{
          display: flex;
          margin: 16px auto 0;
          justify-content: center;
          column-gap: 6px;
          .swiper-pagination-bullet{
            width: 8px;
            height: 8px;
            background: var(--color-white);
            opacity: 0.3;
            border-radius: 50%;
            cursor: pointer;
            &.swiper-pagination-bullet-active{
              opacity: 1;
            }
          }
        }
      }
      .rate-list{
        column-gap: 30px;
        margin: 40px 0 0;
        .rate-el{
          height: 36px;
          .rate-logo{
            display: flex;
            align-items: center;
            padding: 0 10px 0 0;
            img{
              max-height: 25px;
              max-width: 85px;
            }
          }
          .rate-description{
            padding: 0 0 0 10px;
            .rate-text{
              font-size: 10px;
              line-height: 12px;
            }
            .rate-stars{
              .rate-star{
                width: 18px;
                height: 18px;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 660px){
    .reviews-block{
      padding: 20px 0 40px;
      .title{
        max-width: 300px;
        margin: 0 auto;
        text-align: center;
        font-size: 20px;
        line-height: 120%;
      }
      .reviews-slider{
        margin: 40px 0 0;
        .slide{
          .tablet-mobile{
            min-height: 340px;
            padding: 24px;
            .review-title{
              .review-picture{}
              .review-author{
                span{}
              }
            }
            .review-content{}
          }
        }
        .pagination{
          .swiper-pagination-bullet{
            &.swiper-pagination-bullet-active{}
          }
        }
      }
      .rate-list{
        flex-direction: column;
        row-gap: 15px;
        margin: 40px 0 0;
        .rate-el{
          .rate-logo{
            width: 85px;
            img{}
          }
          .rate-description{
            width: 95px;
            .rate-text{}
            .rate-stars{
              .rate-star{}
            }
          }
        }
      }
    }
  }
</style>
