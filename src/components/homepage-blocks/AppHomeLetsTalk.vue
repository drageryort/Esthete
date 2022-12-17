<template>
  <div class="container">
    <div class="letsTalk-block">
      <div class="content-wrapper">
        <div class="border-animation"></div>
        <div class="safari-fix"></div>
        <div class="content">
          <h2 class="title">Have a project in mind?</h2>
          <button class="btn btn-blue btn-letsTalk">Let’s Talk</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHomeLetsTalk"
}
</script>

<style lang="scss" scoped>
  .letsTalk-block{
    padding: 60px 0 80px;
    .content-wrapper{
      padding: 4px;
      border-radius: 23px;
      overflow: hidden;
      .border-animation{
        content: '';
        width: 1200px;
        height: 1200px;
        overflow: hidden;
        background: rgb(198,180,16);
        background: -moz-linear-gradient(90deg, rgba(198,180,16,1) 0%, rgba(9,9,121,1) 25%, rgba(198,55,16,1) 50%, rgba(9,9,121,1) 75%, rgba(198,180,16,1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(198,180,16,1) 0%, rgba(9,9,121,1) 25%, rgba(198,55,16,1) 50%, rgba(9,9,121,1) 75%, rgba(198,180,16,1) 100%);
        background: linear-gradient(90deg, rgba(198,180,16,1) 0%, rgba(9,9,121,1) 25%, rgba(198,55,16,1) 50%, rgba(9,9,121,1) 75%, rgba(198,180,16,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#c6b410",endColorstr="#c6b410",GradientType=1);
        background-size: cover;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation-name: rotation;
        animation-duration: 15s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }
      .safari-fix{
        width: calc(100% + 20px);
        height: calc(100% + 20px);
        border-radius: 31px;
        border: 10px solid var(--color-black);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 40px;
        padding: 60px;
        background: var(--color-black);
        border-radius: 20px;
        .title{
          font-weight: 500;
          font-size: 40px;
          line-height: 49px;
          text-align: center;
        }
        .btn{}
      }
      @keyframes rotation {
        from {transform: translate(-50%, -50%) rotate(0deg);}
        to {transform: translate(-50%, -50%) rotate(360deg);}
      }
    }

  }
  @media (max-width: 1000px){
    .letsTalk-block{
      padding: 20px 0 60px;
      .content-wrapper{
        .border-animation{
          width: 800px;
          height: 800px;
        }
        .safari-fix{}
        .content{
          row-gap: 28px;
          padding: 46px;
          .title{
            font-size: 26px;
            line-height: 32px;
          }
          .btn{}
        }
      }
    }
  }
  @media (max-width: 660px){
    .letsTalk-block{
      padding: 20px 0 40px;
      .content-wrapper{
        .border-animation{
          width: calc(100vw + 20px);
          height: calc(100vw + 20px);
        }
        .safari-fix{}
        .content{
          row-gap: 24px;
          padding: 46px 10px;
          .title{
            font-size: 20px;
            line-height: 24px;
          }
          .btn{}
        }
      }
    }
  }
</style>