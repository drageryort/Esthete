<template>
  <div class="video">
    <video
        class="video-el-main"
        ref="videoMain"
        controls
    >
      <source :src="media.videoMobile" media="(max-width:660px)">
      <source :src="media.videoTablet" media="(max-width:1025px)">
      <source :src="media.videoDesktop">
    </video>
    <video class="video-el-poster"
           ref="videoPoster"
           muted
           autoplay
    >
      <source :src="media.videoMobile" media="(max-width:660px)">
      <source :src="media.videoTablet" media="(max-width:1025px)">
      <source :src="media.videoDesktop">
    </video>
    <button class="btn play-button" @click="start" ref="playButton">
      <img class="image" src="@/assets/images/svg/play-button-icon.svg" alt="play-icon">
    </button>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from "vue";

  export default defineComponent({
    name: "AppGalleryModalVideo",
    props:['media'],
    methods: {
      start(){
        (this.$refs.videoMain as HTMLVideoElement).play();
        (this.$refs.videoPoster as HTMLElement).remove();
        (this.$refs.playButton as HTMLElement).remove();
      }
    }
  })
</script>

<style lang="scss" scoped>
  .video{
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    height: auto;
    .video-el-main{
      width: 100%;
      border-radius: 20px;
      overflow: hidden;
    }
    .video-el-poster{
      width: 100%;
      border-radius: 20px;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
    }
    .play-button{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      transition: linear .25s ;
      .image{}
      &:hover{
        transform: translate(-50%, -50%) scale(1.3);
      }
    }
  }
  @media (max-width: 1025px){}
  @media (max-width: 660px){}
</style>