<template>
  <div class="container">
    <div class="howWeDo-block">
      <h2 class="title" v-html="howWeDoData.title"></h2>
      <div class="list">
        <div class="list-el" v-for="(listEl, listElIndex) in howWeDoData.list" :key="listEl.title">
          <span class="list-el-index">{{listElIndex + 1}}</span>
          <div class="list-el-content">
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
  name: "AppPagesHowWeDo",
  props: {
    howWeDoData: Object
  }
}
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
        width: 40px;
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
</style>