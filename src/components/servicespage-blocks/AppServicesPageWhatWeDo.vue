<template>
  <div class="container">
    <div class="whatWeDo-block">
      <h2 class="title" v-html="pageData['whatWeDoTitle']"></h2>
      <div class="list">
        <div class="list-el wow animate__fadeInUp" v-for="listEl in pageData['whatWeDoPoints']" :key="listEl['whatWeDoPointsTitle']">
          <h3 class="list-el-title">{{listEl['whatWeDoPointsTitle']}}</h3>
          <p class="list-el-text" v-html="listEl['whatWeDoPointsText']"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "AppServicesPageWhatWeDo",
  props: {
    pageData: Object
  }
})
</script>

<style lang="scss" scoped>
  .whatWeDo-block{
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
        padding: 40px;
        width: calc((100% - 60px) / 2);
        background: #0B0323;
        border: 4px solid #142DA9;
        border-radius: 20px;
        overflow: hidden;
        .list-el-title{
          font-weight: 700;
          font-size: 24px;
          line-height: 120%;
        }
        .list-el-text{
          margin: 24px 0 0;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
        }
      }
    }
  }
  @media (max-width: 1025px){
    .whatWeDo-block{
      padding: 20px 0 60px;
      .title{
        font-weight: 400;
        font-size: 26px;
        line-height: 120%;
      }
      .list{
        flex-direction: column;
        gap: 30px;
        margin: 40px 0 0;
        .list-el{
          min-height: 205px;
          width: 100%;
          .list-el-title{}
          .list-el-text{}
        }
      }
    }
  }
  @media (max-width: 660px){
    .whatWeDo-block{
      padding: 20px 0 40px;
      .title{
        font-size: 20px;
      }
      .list{
        .list-el{
          min-height: unset;
          padding: 26px;
          .list-el-title{
            font-size: 20px;
            line-height: 120%;
          }
          .list-el-text{
            margin: 10px 0 0;
            font-size: 16px;
            line-height: 24px;
          }
        }
      }
    }
  }
</style>
