<template>
  <ConfirmedMeetingView :commonData="commonData"/>
</template>

<script lang="ts">
  import {defineComponent} from "vue";
  import ConfirmedMeetingView from "@/views/ConfirmedMeetingView.vue"

  export default defineComponent({
    name: "emptyLayout",
    props: {
      commonData: Object
    },
    components: {
      ConfirmedMeetingView
    },
    mounted() {
      const body = document.querySelector('body') as HTMLBodyElement
      body.style.background = "white"
      body.style.color = "black"
    },
  })
</script>

<style lang="scss"></style>