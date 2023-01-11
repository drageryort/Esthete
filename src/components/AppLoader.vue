<template>
  <div class="loader-wrapper">
    <div class="loader" style="--t: 2s">
      <div class="particle" style="--dt: -1.58s"></div>
      <div class="particle"></div>
      <div class="particle" style="--dt: -1.14s"></div>
      <div class="particle"></div>
      <div class="particle" style="--dt: -0.99s"></div>
      <div class="particle"></div>
      <div class="particle" style="--dt: -1.45s"></div>
      <div class="particle"></div>
      <div class="particle" style="--dt: -1.11s"></div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "AppFooter",
  props: ['commonData']
})
</script>

<style lang="scss" scoped>
  $r: 1.5em;

  .loader-wrapper {
    display: grid;
    place-content: center;
    margin: 0;
    min-height: calc(100vh - 148px);
    height: calc(100vh - 148px);
    background: #000;

    &:before {
      grid-column: 1;
      grid-row: 1;
      transform: scale(.8);
      background: linear-gradient(90deg, #fde6bd, #a1c5ab, #f4dd51, #d11e48, #632f53);
      content: ''
    }
    .loader {
      grid-column: 1;
      grid-row: 1;
      display: flex;
      align-items: center;
      padding: 6em;
      background: inherit;
      filter: blur(9px) contrast(18);
      mix-blend-mode: multiply;
      .particle {
        width: 0;
        padding: $r;
        border-radius: 50%;
        background: #fff;

        &:first-child, &:last-child { padding: .5*$r }

        &:nth-child(odd) {
          animation: pulse var(--t) ease-in-out var(--dt) infinite
        }

        &:nth-child(2n) {
          transform: rotate(0deg) translate(2*$r);
          animation: spin var(--t) linear infinite
        }

        &:nth-child(4n) {
          animation-direction: reverse;
          animation-duration: calc(1.2*var(--t))
        }
      }
    }
  }
  @keyframes pulse {
    50% { transform: scale(1.8) }
    70% { transform: scale(.6) }
  }
  @keyframes spin {
    to { transform: rotate(1turn) translate(2*$r) }
  }

  @media (max-width: 1025px){
    .loader-wrapper{
      min-height: calc(100vh - 248px);
      height: calc(100vh - 248px);
      font-size: 14px;
    }
  }
  @media (max-width: 660px){
    .loader-wrapper{
      min-height: calc(100vh - 90px - 148px);
      height: calc(100vh - 90px - 148px);
      font-size: 12px;
    }
  }
</style>
