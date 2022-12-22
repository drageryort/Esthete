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

  export default defineComponent( {
    name: 'WebPortfolioView',
    components: {AppPagesHowWeDo, AppPagesBanner, AppSendRequest, AppGallery, AppPagesWhatWeDo},
    data(){
      return {
        bannerData: {
          preTitle: "We are a full-cycle digital production company.",
          title: "We present your business in the digital world. <b>We make websites</b>",
          subTitle: "<b>Our</b> approach",
          subText: "",
          list:[
            {
              listElTitle: "Your website should help you achieve your goals.",
              listElText: "What should your customers think, feel, and do after visiting your website? These answers define what your website will be like.",
            },
            {
              listElTitle: "Your website should have mind-blowing visuals.",
              listElText: "People judge by looks. So we will make your website look “wow.”",
            },
            {
              listElTitle: "You should be a part of the creative process.",
              listElText: "We strongly believe in co-creation. You know what is right and wrong for your brand. We bring our expertise in creative design and development.",
            }
          ]
        },
        whatWeDoData: {
          title: "What <b>we can do</b> for you We make websites",
          list:[
            {
              listElTitle: "Corporate website",
              listElText: "Be it 5 pages or 50, a corporate website has to get people to know your business and services and potentially get you new connections —customers, partners, or employees.",
            },
            {
              listElTitle: "Promotional Wow website",
              listElText: "We work with an established product to capture customer feedback as well as your ideas and implement them iteratively.",
            },
            {
              listElTitle: "Landing page",
              listElText: "A short and meaty presentation of your product or service that converts traffic into leads for you.",
            },
            {
              listElTitle: "Startup website",
              listElText: "A smaller website that highlights the value your startup offers and how your team will bring it to life.",
            }
          ]
        },
        howWeDoData: {
          title: "How we <b>do it</b>",
          list:[
            {
              listElTitle: "Client Value Definition",
              listElText: "Our R&D Lab conducts thorough market research and business analysis before we map out a web development strategy.",
            },
            {
              listElTitle: "Product Discovery Phase",
              listElText: "During the product discovery phase, we conduct detailed project analysis, user research, and market exploration, allowing us to define the scope of work and your project’s goals and restrictions. We also develop a solution vision.",
            },
            {
              listElTitle: "Product Design Phase",
              listElText: "We create product interfaces that help end users effortlessly meet their needs and help you easily achieve your goals and grow your business.",
            },
            {
              listElTitle: "Product Engineering Phase",
              listElText: "We develop custom software based on your individual needs, requirements, and business specifications as determined during the product discovery phase.",
            },
            {
              listElTitle: "Quality Assurance",
              listElText: "Our comprehensive quality management process embraces a range of tests to ensure we ship top-performing software.",
            },
            {
              listElTitle: "Software Deployment",
              listElText: "We can help you create a website and launch your product in a live environment to ensure its robustness, stability, and fitness for purpose.",
            },
            {
              listElTitle: "Maintenance and Support",
              listElText: "We offer continuous software maintenance and enhancements to keep your online presence in line with modern trends and industry demands.",
            }
          ]
        },
      }
    }
  })
</script>

<style lang="scss"></style>
