<template>
  <div class="loader-wrapper">
    <div class="loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "AppFooter",
})
</script>

<style lang="scss" scoped>
  .loader-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-height: 100%;
    width: 100%;
    min-width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-black);
    z-index: 999;
    .loader {
      position: relative;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background: linear-gradient(#142DA9, #AD0303);
      animation: animate 1.2s linear infinite;
    }

    @keyframes animate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    .loader span {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: linear-gradient(#142DA9, #D52E5E);
    }

    .loader span:nth-child(1) {
      filter: blur(5px);
    }

    .loader span:nth-child(2) {
      filter: blur(10px);
    }

    .loader span:nth-child(3) {
      filter: blur(25px);
    }

    .loader span:nth-child(4) {
      filter: blur(50px);
    }

    .loader:after {
      content: '';
      position: absolute;
      top: 10px;
      left: 10px;
      right: 10px;
      bottom: 10px;
      background: var(--color-black);
      border: solid var(--color-black) 10px;
      border-radius: 50%;
    }
  }

  @media (max-width: 1025px){
    .loader-wrapper{
      .loader{
        width: 240px;
        height: 240px;
      }
    }
  }
  @media (max-width: 660px){
    .loader-wrapper{
      .loader{
        width: 134px;
        height: 134px;
      }
    }
  }
</style>
