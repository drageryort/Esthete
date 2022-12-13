<template>
  <div class="pagesBanner-block-wrapper">
    <div class="container">
      <div class="pagesBanner-block">
        <p class="pre-title" v-html="bannerData.preTitle"></p>
        <h1 class="title" v-html="bannerData.title"></h1>
        <h2 class="sub-title" v-if="!!bannerData.subTitle" v-html="bannerData.subTitle"></h2>
        <p class="sub-text" v-if="!!bannerData.subText" v-html="bannerData.subText"></p>
        <div class="list" v-if="bannerData.list.length">
          <div class="list-el" v-for="listEl in bannerData.list" :key="listEl.listElTitle">
            <h3 class="list-el-title" v-html="listEl.listElTitle"></h3>
            <p class="list-el-text" v-html="listEl.listElText"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppPagesBanner",
  props: {
    bannerData: Object,
  },
}
</script>

<style lang="scss">
  .pagesBanner-block-wrapper{
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
  }
</style>