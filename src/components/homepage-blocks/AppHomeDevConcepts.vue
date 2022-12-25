<template>
  <div class="container">
    <div class="devConcept-block">
      <h2 class="title" v-html="pageData['devConceptTitle']"></h2>
      <div class="difference-list">
        <div class="difference-el"
             v-for="el in pageData['devConceptEls']"
             :key="el['devConceptElsVideoText']">
          <div class="difference-el-video">
            <video :src="el['devConceptElsVideo']"
                   class="video"
                   loop
                   muted
                   autoplay
            />
            <h3 class="video-title">{{el['devConceptElsVideoText']}}</h3>
          </div>
          <h4 class="difference-el-title">{{el['devConceptElsTitle']}}</h4>
          <p class="difference-el-text" v-html="el['devConceptElsText']"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from "vue";

  export default defineComponent({
    name: "AppHomeDevConcepts",
    props: ['pageData']
  })
</script>

<style lang="scss" scoped>
  .devConcept-block{
    padding: 80px 0 60px;
    .title{
      width: 320px;
      font-weight: 300;
      font-size: 30px;
      line-height: 120%;
    }
    .difference-list{
      display: flex;
      justify-content: space-between;
      column-gap: 60px;
      margin: 80px 0 0;
      .difference-el{
        width: calc((100% - 60px)/2);
        .difference-el-video{
          display: flex;
          justify-content: center;
          align-items: center;
          height: 290px;
          border-radius: 20px;
          overflow: hidden;
          background: linear-gradient(106.76deg, rgba(34, 9, 112, 0.43) 1.15%, rgba(34, 9, 112, 0) 50.57%, rgba(34, 9, 112, 0.29) 100%);
          .video{
            height: 100%;
            width: auto;
            z-index: -1;
          }
          .video-title{
            font-weight: 700;
            font-size: 48px;
            line-height: 58px;
            letter-spacing: 0.02em;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
        .difference-el-title{
          margin: 30px 0 0;
          font-weight: 700;
          font-size: 30px;
          line-height: 36px;
        }
        .difference-el-text{
          margin: 20px 0 0;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
        }
      }
    }
  }
  @media (max-width: 1025px){
    .devConcept-block{
      padding: 20px 0 60px;
      .title{
        width: 100%;
        font-size: 26px;
        line-height: 120%;
      }
      .difference-list{
        column-gap: 40px;
        margin: 80px 0 0;
        .difference-el{
          width: 325px;
          .difference-el-video{
            height: 180px;
            .video{}
            .video-title{
              font-size: 36px;
              line-height: 44px;
            }
          }
          .difference-el-title{
            font-size: 24px;
            line-height: 29px;
          }
          .difference-el-text{}
        }
      }
    }
  }
  @media (max-width: 660px){
    .devConcept-block{
      padding: 20px 0 40px;
      .title{
        margin: 0 auto;
        max-width: 300px;
        font-weight: 300;
        font-size: 20px;
        line-height: 120%;
        text-align: center;
      }
      .difference-list{
        flex-direction: column;
        row-gap: 40px;
        margin: 40px 0 0;
        .difference-el{
          width: 100%;
          .difference-el-video{
            height: 170px;
            .video{}
            .video-title{}
          }
          .difference-el-title{
            font-size: 20px;
            line-height: 120%;
          }
          .difference-el-text{}
        }
      }
    }
  }
</style>
