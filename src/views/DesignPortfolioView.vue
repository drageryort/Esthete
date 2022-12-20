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
  import AppGallery from "@/components/common-blocks/AppGallery.vue";
  import AppSendRequest from "@/components/common-blocks/AppSendRequest.vue";
  import AppPagesBanner from "@/components/pages-blocks/AppPagesBanner.vue";
  import AppPagesWhatWeDo from "@/components/pages-blocks/AppPagesWhatWeDo.vue";
  import AppPagesHowWeDo from "@/components/pages-blocks/AppPagesHowWeDo.vue";
  export default defineComponent({
    name: 'DesignPortfolioView',
    components: {AppPagesHowWeDo, AppPagesWhatWeDo, AppPagesBanner, AppSendRequest, AppGallery},
    data(){
      return {
        bannerData: {
          preTitle: "Empowering products with functional aesthetics",
          title: "<b>Mobile</b> And <b>Web</b> Product Design Solutions",
          subTitle: "",
          subText: "Aesthetically pleasing design is the key to the hearts of people. We offer mobile and web design services that will make your idea and a final product user-friendly as well as visually appealing.",
          list:[]
        },
        whatWeDoData: {
          title: "What <b>we can do</b> for you We make websites",
          list:[
            {
              listElTitle: "Product Design.",
              listElText: "Product design is not just a beautiful “picture”, but a complex problem-solving. In other words, product design is a functional physical form of the idea.",
            },
            {
              listElTitle: "Web & Mobile Design.",
              listElText: "Websites and mobile applications must have satisfying interface to ensure their frequent usage. Rely on our experience and creativity to enjoy the view of your website or application.",
            },
            {
              listElTitle: "Prototype Development.",
              listElText: "We create interactive prototypes to lay down product architecture and navigation, get early feedback, validate and even sell an idea.",
            },
            {
              listElTitle: "Branding & Identity.",
              listElText: "We express your business personality via clear brand strategy, logo design and visual identity to rise above the competition.",
            }
          ]
        },
        howWeDoData: {
          title: "How we <b>do it</b>",
          list:[
            {
              listElTitle: "Discuss",
              listElText: "We'll be talking. A lot. Listening even more. You see, for us it's crucial to understand how you see your brand and how you want people to see it.",
            },
            {
              listElTitle: "Research",
              listElText: "Why is this stage so important? Because what you think or what we think about a product does not always conform to how customers think.",
            },
            {
              listElTitle: "Wireframes & Prototype",
              listElText: "With the design in mind, our design time begins by putting together wireframes and prototypes of your vision. We involve our developers at this stage to give them an advance look at the project with an eye toward technical aspects of the design.",
            },
            {
              listElTitle: "Design Process",
              listElText: "We’re now ready to enter the painstaking process of bringing the selected designs to life. A winning design must balance style and function – and we are committed to finding that balance in the finished product.",
            },
            {
              listElTitle: "Testing",
              listElText: "In our early-stage testing we employ design wireframes to help identify any potential design flaws. Prior to launch, our Q&A team performs a final comprehensive test to insure positive user experience.",
            }
          ]
        },
      }
    }
  })
</script>

<style lang="scss"></style>