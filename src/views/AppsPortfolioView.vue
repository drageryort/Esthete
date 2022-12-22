<template>
  <div>
    <AppPagesBanner :bannerData="bannerData"/>
    <AppGallery/>
    <AppPagesWhatWeDo :whatWeDoData="whatWeDoData"/>
    <AppPagesHowWeDo :howWeDoData="howWeDoData"/>
    <AppSendRequest/>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from "vue";
  import AppGallery from "@/components/common-blocks/gallery/AppGallery.vue";
  import AppSendRequest from "@/components/common-blocks/AppSendRequest.vue";
  import AppPagesBanner from "@/components/servicespage-blocks/AppServicesPageBanner.vue";
  import AppPagesWhatWeDo from "@/components/servicespage-blocks/AppServicesPageWhatWeDo.vue";
  import AppPagesHowWeDo from "@/components/servicespage-blocks/AppServicesPageHowWeDo.vue";
  export default defineComponent({
    name: 'AppsPortfolioView',
    components: {AppPagesHowWeDo, AppPagesWhatWeDo, AppPagesBanner, AppSendRequest, AppGallery},
    data(){
      return {
        bannerData: {
          preTitle: "Leading full-cycle custom application development service",
          title: "We engineer digital products that <b>change</b> the game",
          subTitle: "<b>Our</b> approach",
          subText: "",
          list:[
            {
              listElTitle: "Your idea. Our implementation.",
              listElText: "Our job is to understand your business needs, your idea, and your vision. We help you to formalize these into product requirements, which we implement with your best interests at heart.",
            },
            {
              listElTitle: "Design-driven approach.",
              listElText: "Great usability and visuals are must-haves for any product. We have a design background, and we believe that the best products are built with a design-driven approach.",
            },
            {
              listElTitle: "Flawless tech and fast implementation.",
              listElText: "Our development team delivers stable, secure, and bugless solutions whatever the complexity, from simple B2C applications to complex enterprise-level systems.",
            }
          ]
        },
        whatWeDoData: {
          title: "What <b>we can do</b> for you We make websites",
          list:[
            {
              listElTitle: "MVP or proof of concept.",
              listElText: "We get your idea off the ground in a fast and cost-effective way.",
            },
            {
              listElTitle: "Iterative product improvement.",
              listElText: "A mind-blowing mix of outstanding visuals and interactive elements that gets your customers excited to buy, try, or get involved with you in some way.",
            },
            {
              listElTitle: "Mobile and multi-platform applications.",
              listElText: "We can create an omnichannel experience for your customers by building seamlessly connected mobile and web front ends.",
            },
            {
              listElTitle: "Solution design",
              listElText: "We create system design and architecture which addresses the business needs.",
            }
          ]
        },
        howWeDoData: {
          title: "How we <b>do it</b>",
          list:[
            {
              listElTitle: "Requirements",
              listElText: "Analysis of requirements, business idea, and clarified formulation of goals.",
            },
            {
              listElTitle: "Development",
              listElText: "Design and development of iOS, Android and Cross-platform applications.",
            },
            {
              listElTitle: "Software testing",
              listElText: "We apply automated and manual testing for all kinds of products developed to provide the proper product quality.",
            },
            {
              listElTitle: "Publishing apps",
              listElText: "As cross platform development company we help with the purchase of accounts for the publication of apps in the markets and conduct releases.",
            },
            {
              listElTitle: "Maintenance and Support",
              listElText: "Infrastructure maintenance. Problems response and troubleshooting if the client reports any bugs.",
            }
          ]
        },
      }
    }
  })
</script>


<style lang="scss"></style>
