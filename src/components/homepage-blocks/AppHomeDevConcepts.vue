<template>
  <div class="container">
    <div class="devConcept-block">
      <h2 class="title">MVP vs. POC: What is <br> the <b>Difference?</b></h2>
      <div class="difference-list">
        <div class="difference-el">
          <div class="difference-el-video">
            <video src="@/assets/video/difference-mvp-video.mp4"
                   class="video"
                   loop
                   muted
                   autoplay
            />
            <h3 class="video-title">MVP</h3>
          </div>
          <h4 class="difference-el-title">Minimum Viable Product</h4>
          <p class="difference-el-text">
            Lorem ipsum dolor sit amet consectetur. Tempor quam eleifend integer nibh turpis. Vitae orci nunc mauris
            cras et sit nunc scelerisque. Arcu ac in nunc pretium pretium et. Condimentum viverra mattis adipiscing
            vitae. Egestas ultrices elit ut venenatis convallis leo.<br/><br/>
            Vitae orci nunc mauris cras et sit nunc scelerisque. Arcu ac in nunc pretium pretium et. Condimentum
            viverra mattis adipiscing vitae. Egestas ultrices elit ut venenatis convallis leo.
          </p>
        </div>
        <div class="difference-el">
          <div class="difference-el-video">
            <video src="@/assets/video/difference-poc-video.mp4"
                   class="video"
                   loop
                   muted
                   autoplay
            />
            <h3 class="video-title">POC</h3>
          </div>
          <h4 class="difference-el-title">Proof of Concept</h4>
          <p class="difference-el-text">
            Lorem ipsum dolor sit amet consectetur. Tempor quam eleifend integer nibh turpis. Vitae orci nunc mauris
            cras et sit nunc scelerisque. Arcu ac in nunc pretium pretium et. Condimentum viverra mattis adipiscing
            vitae. Egestas ultrices elit ut venenatis convallis leo.<br/><br/>
            Vitae orci nunc mauris cras et sit nunc scelerisque. Arcu ac in nunc pretium pretium et. Condimentum
            viverra mattis adipiscing vitae. Egestas ultrices elit ut venenatis convallis leo.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHomeDevConcepts"
}
</script>

<style lang="scss" scoped>
  .devConcept-block{
    padding: 80px 0 60px;
    .title{
      font-weight: 300;
      font-size: 30px;
      line-height: 120%;
    }
    .difference-list{
      display: flex;
      justify-content: space-between;
      column-gap: 60px;
      margin: 80px 0 0;
      .difference-el{
        width: calc((100% - 60px)/2);
        .difference-el-video{
          display: flex;
          justify-content: center;
          align-items: center;
          height: 290px;
          background: linear-gradient(106.76deg, rgba(34, 9, 112, 0.43) 1.15%, rgba(34, 9, 112, 0) 50.57%, rgba(34, 9, 112, 0.29) 100%);
          .video{
            height: 100%;
            width: auto;
          }
          .video-title{
            font-weight: 700;
            font-size: 48px;
            line-height: 58px;
            letter-spacing: 0.02em;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
        .difference-el-title{
          margin: 30px 0 0;
          font-weight: 700;
          font-size: 30px;
          line-height: 36px;
        }
        .difference-el-text{
          margin: 20px 0 0;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
        }
      }
    }
  }
  @media (max-width: 1000px){
    .devConcept-block{
      padding: 20px 0 60px;
      .title{
        font-size: 26px;
        line-height: 120%;
      }
      .difference-list{
        column-gap: 40px;
        margin: 80px 0 0;
        .difference-el{
          width: 325px;
          .difference-el-video{
            height: 180px;
            .video{}
            .video-title{
              font-size: 36px;
              line-height: 44px;
            }
          }
          .difference-el-title{
            font-size: 24px;
            line-height: 29px;
          }
          .difference-el-text{}
        }
      }
    }
  }
</style>