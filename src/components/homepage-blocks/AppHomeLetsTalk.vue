<template>
  <div class="container">
    <div class="letsTalk-block">
      <div class="content-wrapper">
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
      &:before{
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
        z-index: -1;
        animation-name: rotation;
        animation-duration: 15s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
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
</style>