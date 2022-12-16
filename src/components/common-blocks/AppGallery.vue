<template>
  <div class="container">
    <div class="gallery-block">
      <h2 class="title">Your vision plus our expertise <br/> equals <b>new impulse</b> to your growth.</h2>
      <div class="gallery">
        <div class="gallery-el">
          <picture class="picture">
            <img src="@/assets/images/png/gallery-mock1.png" alt="gallery element photo" class="img">
          </picture>
          <p class="gallery-el-type">Application</p>
          <h3 class="gallery-el-name">NFT Market</h3>
        </div>
        <div class="gallery-el">
          <picture class="picture">
            <img src="@/assets/images/png/gallery-mock2.png" alt="gallery element photo" class="img">
          </picture>
          <p class="gallery-el-type">Website</p>
          <h3 class="gallery-el-name">Sneakers shop</h3>
        </div>
        <div class="gallery-el">
          <picture class="picture">
            <img src="@/assets/images/png/gallery-mock3.png" alt="gallery element photo" class="img">
          </picture>
          <p class="gallery-el-type">Application</p>
          <h3 class="gallery-el-name">My flights</h3>
        </div>
        <div class="gallery-el">
          <picture class="picture">
            <img src="@/assets/images/png/gallery-mock4.png" alt="gallery element photo" class="img">
          </picture>
          <p class="gallery-el-type">Design</p>
          <h3 class="gallery-el-name">Dr.Diesel</h3>
        </div>
      </div>
      <button class="btn show-more-casese">
        <span class="text">View more cases</span>
        <img class="circled-blue-arrow" src="@/assets/images/svg/arrow-right-circle-blue-icon.svg" alt="show more icon">
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppGallery"
}
</script>

<style lang="scss" scoped>
  .gallery-block{
    padding: 60px 0 80px;
    .title{
      width: 525px;
      font-weight: 300;
      font-size: 30px;
      line-height: 120%;
    }
    .gallery{
      display: grid;
      grid-template-columns: 525px 525px;
      gap: 60px;
      margin: 80px 0 0;
      .gallery-el{
        &:nth-child(1){
          grid-area: 1 / 1 / 2 / 2;
          .picture{
            height: 347px;
          }
        }
        &:nth-child(2){
          grid-area: 1 / 2 / 3 / 3;
          .picture{
            height: 538px;
          }
        }
        &:nth-child(3){
          grid-area: 2 / 1 / 4 / 2;
          .picture{
            height: 610px;
          }
        }
        &:nth-child(4){
          grid-area: 3 / 2 / 4 / 3;
          .picture{
            height: 419px;
          }
        }
        .picture{
          border-radius: 20px;
          .img{}
        }
        .gallery-el-type{
          margin: 20px 0 0;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          color: var(--color-opacity-white);
        }
        .gallery-el-name{
          margin: 8px 0 0;
          font-weight: 700;
          font-size: 30px;
          line-height: 36px;
        }
      }
    }
    .btn{
      display: flex;
      align-items: center;
      column-gap: 10px;
      margin: 80px 0 0;
      .text{
        font-weight: 500;
        font-size: 20px;
        line-height: 20px;
      }
      .circled-blue-arrow{
        width: 30px;
        height: 30px;
      }
    }
    
  }
  @media (max-width: 1000px){
    .gallery-block{
      padding: 20px 0 60px;
      .title{
        width: 510px;
        font-size: 26px;
        line-height: 120%;
      }
      .gallery{
        display: grid;
        grid-template-columns: 326px 326px;
        gap: 30px;
        margin: 40px 0 0;
        .gallery-el{
          &:nth-child(1){
            .picture{
              height: 216px;
            }
          }
          &:nth-child(2){
            .picture{
              height: 335px;
            }
          }
          &:nth-child(3){
            grid-area: 2 / 1 / 4 / 2;
            .picture{
              height: 379px;
            }
          }
          &:nth-child(4){
            grid-area: 3 / 2 / 4 / 3;
            .picture{
              height: 260px;
            }
          }
          .picture{
            border-radius: 20px;
            .img{}
          }
          .gallery-el-type{
            font-size: 14px;
            line-height: 18px;
          }
          .gallery-el-name{
            font-size: 24px;
            line-height: 29px;
          }
        }
      }
      .btn{
        margin: 40px 0 0;
        .text{
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
        }
        .circled-blue-arrow{
          width: 26px;
          height: 26px;
        }
      }

    }
  }
</style>