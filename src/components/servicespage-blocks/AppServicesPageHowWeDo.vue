<template>
  <div class="container">
    <div class="howWeDo-block">
      <h2 class="title wow-total animate__fadeInUp" v-html="pageData['howWeDoTitle']"></h2>
      <div class="list">
        <div class="list-el wow-total animate__fadeInUp" v-for="(listEl, listElIndex) in pageData['howWeDoTitlePoints']" :key="listEl['howWeDoTitlePointsTitle']">
          <span class="list-el-index">{{listElIndex + 1}}</span>
          <div class="list-el-content">
            <h3 class="list-el-title">{{listEl['howWeDoTitlePointsTitle']}}</h3>
            <p class="list-el-text" v-html="listEl['howWeDoTitlePointsText']"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "AppServicesPageHowWeDo",
  props: {
    pageData: Object
  }
})
</script>

<style lang="scss" scoped>
  .howWeDo-block{
    padding: 60px 0 80px;
    .title{
      font-weight: 300;
      font-size: 30px;
      line-height: 120%;
    }
    .list{
    display: flex;
    flex-wrap: wrap;
    gap: 60px;
    margin: 80px 0 0;
    .list-el{
      display: flex;
      width: calc((100% - 60px) / 2);
      column-gap: 30px;
      .list-el-index{
        min-width: 40px;
        font-weight: 700;
        font-size: 64px;
        line-height: 120%;
        text-align: center;
        background: linear-gradient(160.54deg, #142DA9 24.26%, #4966F8 85.61%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .list-el-content{
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
  }
  @media (max-width: 1025px){
    .howWeDo-block{
      padding: 20px 0 60px;
      .title{
        font-size: 30px;
        line-height: 120%;
      }
      .list{
        gap: 40px;
        margin: 60px 0 0;
        flex-direction: column;
        .list-el{
          width: 100%;
          column-gap: 40px;
          .list-el-index{}
          .list-el-content{
            .list-el-title{}
            .list-el-text{}
          }
        }
      }
    }
}
  @media (max-width: 660px){
    .howWeDo-block{
      padding: 20px 0 40px;
      .title{
        font-size: 20px;
      }
      .list{
        gap: 30px;
        margin: 40px 0 0;
        flex-direction: column;
        .list-el{
          column-gap: 20px;
          .list-el-index{
            font-size: 46px;
            line-height: 120%;
            text-align: center;
          }
          .list-el-content{
            .list-el-title{
              font-weight: 700;
              font-size: 20px;
              line-height: 120%;
            }
            .list-el-text{
              margin: 10px 0 0;
              font-weight: 400;
              font-size: 16px;
              line-height: 24px;
            }
          }
        }
      }
    }
}
</style>
