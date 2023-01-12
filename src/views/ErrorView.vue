<template>
  <Transition>
    <AppLoader v-if="loader"/>
    <div class="errorView" v-else>
      <div class="el-video wow-total animate__fadeInUp">
        <b class="text">4</b>
        <video src="@/assets/video/MVP.mp4"
               class="video"
               loop
               muted
               autoplay
               playsinline
        />
        <b class="text">4</b>
      </div>
      <h2 class="sub-text wow-total animate__fadeInUp">Ooops page not found</h2>
      <router-link to="/" class="btn btn-blue wow-total animate__fadeInUp">Go to main page</router-link>
    </div>
  </Transition>
</template>

<script lang="ts">
  import AppLoader from "@/components/AppLoader.vue";
  import {defineComponent} from "vue";
  export default defineComponent({
    name: "ErrorView",
    components: { AppLoader},
    emits:{
      loaderAction:(trigger: boolean) => trigger,
    },
    props: {
      loader:Boolean
    },
    mounted() {
      this.$emit("loaderAction", true);
      setTimeout(()=> this.$emit("loaderAction", false),1000)
    },
})
</script>

<style lang="scss" scoped>
  .errorView{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 148px);
    padding: 80px 0 50px;
    .el-video{
      width: 520px;
      .video{
        width: 100%;
        z-index: -1;
      }
      .text{
        font-size: 170px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        &:first-child{
          left: 0;
        }
        &:last-child{
          right: 0;
        }
      }
    }
    .sub-text{
      margin: 30px 0 0;
      font-size: 16px;
      line-height: 19px;
    }
    .btn{
      margin: 40px 0 0;
    }
  }
  @media (max-width: 1025px){
    .errorView{
      justify-content: center;
      min-height: calc(100vh - 248px);
      padding: 140px 0 60px;
      .el-video{
        width: 410px;
        .video{}
        .text{
          font-size: 125px;
        }
      }
      .sub-text{}
      .btn{}
    }
  }
  @media (max-width: 660px){
    .errorView{
      min-height: unset;
      padding: 120px 0 100px;
      .el-video{
        width: calc(100% - 120px);
        .video{}
        .text{
          font-size: 19vw;
        }
      }
      .sub-text{}
      .btn{}
    }
  }
</style>
