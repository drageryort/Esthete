<template>
  <div class="container">
    <div class="reviews-block">
      <h2 class="title">
        Transparent relationships yield the <br><b>Best Results</b>
      </h2>
      <div class="reviews-slider">
        <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="50"
            :loop=true
            :navigation="{
              prevEl: prev,
              nextEl: next,
            }"
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
              <div class="content">
                <p class="review-text">
                  1)Lorem ipsum dolor sit amet consectetur. Gravida lectus viverra pharetra metus posuere. Ornare neque
                  neque in egestas nisl venenatis. Nunc augue convallis enim nulla sapien neque accumsan pharetra non.
                  Malesuada quis morbi porttitor id aliquam fames viverra.
                </p>
                <p class="review-author">
                  <b>John Doe</b>
                  <span>Company Name - CEO</span>
                </p>
              </div>
              <picture class="picture">
                <img src="@/assets/images/png/reviewer-mock.png" alt="reviewer photo">
              </picture>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide">
              <div class="content">
                <p class="review-text">
                  2)Lorem ipsum dolor sit amet consectetur. Gravida lectus viverra pharetra metus posuere. Ornare neque
                  neque in egestas nisl venenatis. Nunc augue convallis enim nulla sapien neque accumsan pharetra non.
                  Malesuada quis morbi porttitor id aliquam fames viverra.
                </p>
                <p class="review-author">
                  <b>John Doe</b>
                  <span>Company Name - CEO</span>
                </p>
              </div>
              <picture class="picture">
                <img src="@/assets/images/png/reviewer-mock.png" alt="reviewer photo">
              </picture>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide">
              <div class="content">
                <p class="review-text">
                  3)Lorem ipsum dolor sit amet consectetur. Gravida lectus viverra pharetra metus posuere. Ornare neque
                  neque in egestas nisl venenatis. Nunc augue convallis enim nulla sapien neque accumsan pharetra non.
                  Malesuada quis morbi porttitor id aliquam fames viverra.
                </p>
                <p class="review-author">
                  <b>John Doe</b>
                  <span>Company Name - CEO</span>
                </p>
              </div>
              <picture class="picture">
                <img src="@/assets/images/png/reviewer-mock.png" alt="reviewer photo">
              </picture>
            </div>
          </swiper-slide>
        </swiper>
        <div class="review-slider-navigation">
          <button ref="prev" class="btn swiper-button prev">
            <img class="icon" src="@/assets/images/svg/arrow-white-icon.svg" alt="prev slide arrow">
          </button>
          <button ref="next" class="btn swiper-button next">
            <img class="icon" src="@/assets/images/svg/arrow-white-icon.svg" alt="next slide arrow">
          </button>
        </div>
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

<script>
// Import Swiper Vue.js components
  import { ref } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { EffectCreative, Navigation } from 'swiper';

  // Import Swiper styles
  import 'swiper/css';
  import "swiper/css/effect-creative";
  import 'swiper/css/navigation';

  export default {
    name: "AppHomeReviews",
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const prev = ref(null);
      const next = ref(null);
      return {
        modules: [Navigation, EffectCreative ],
        prev,
        next,
      };
    },
  }
</script>

<style lang="scss" scoped>
  .reviews-block{
    padding: 60px 0 80px;
    .title{
      font-weight: 300;
      font-size: 30px;
      line-height: 120%;
    }
    .reviews-slider{
      margin: 50px 0 0;
      .slide{
        .picture{
          width: 300px;
          height: 348px;
        }
        .content{
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          padding: 40px;
          width: 100%;
          background: #0B0323;
          border: 4px solid #142DA9;
          border-radius: 20px;
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
          height: 100%;
          img{
            max-height: 35px;
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
</style>