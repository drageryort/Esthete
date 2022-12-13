<template>
  <div class="container">
    <div class="whatWeDo-block">
      <h2 class="title" v-html="whatWeDoData.title"></h2>
      <div class="list">
        <div class="list-el" v-for="listEl in whatWeDoData.list" :key="listEl.title">
          <h3 class="list-el-title" v-html="listEl.listElTitle"></h3>
          <p class="list-el-text" v-html="listEl.listElText"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppPagesWhatWeDo",
  props: {
    whatWeDoData: Object
  }
}
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
</style>