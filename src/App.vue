<template>
  <AppEmptyLayout :commonData="commonData" v-if='layout'/>
  <AppCommonLayout :commonData="commonData" v-else/>
</template>

<script lang="ts">
  import {defineComponent} from "vue";
  import AppCommonLayout from "@/layouts/AppCommonLayout.vue";
  import AppEmptyLayout from "@/layouts/AppEmptyLayout.vue";
  export default defineComponent({
    components: {AppCommonLayout, AppEmptyLayout},
    data () {
      return{
        commonData: {}
      }
    },
    computed: {
      layout(){
        return this.$route.name === "confirmed meeting"
      }
    },
    async beforeCreate() {
      try {
        this.commonData = (await (await fetch('https://admin.esthete.studio//wp-json/acf/v2/options/')).json())['acf'];
      } catch (e){
        console.error(e)
      }
    }
  })
</script>

<style lang="scss">
  @import "./assets/styles/common/fonts/font.min.css";
  @import "./assets/styles/common/global/global.min.css";
</style>
