<template>
  <svg class="logo-svg" xmlns="http://www.w3.org/2000/svg" width="133" height="36" fill="none">
    <g filter="url(#a)">
      <circle class="circle" cx="19.9254" cy="19.9261" r="12.4378" fill="url(#b)"/>
    </g>
    <g filter="url(#c)">
      <circle class="circle" cx="19.9254" cy="19.9261" r="12.4378" fill="url(#d)"/>
    </g>
    <circle class="circle" cx="19.9254" cy="19.9261" r="11.7523" fill="#000"/>
    <path fill="#fff"
          d="M52.7015 23.7571h-7.1044v-2.5074h6.4676V18.583h-6.4676v-2.5074h7.0447v-2.8259H42.3135V26.583h10.388v-2.8259ZM59.9851 12.9512c-1.5721 0-2.8458.398-3.8209 1.1542-.9751.7562-1.4527 1.7711-1.4527 3.0448 0 2.0298 1.194 3.3234 3.5821 3.8607l2.786.597c.4379.0995.7563.2388.9553.4378.1791.199.2786.4378.2786.7562 0 .398-.1791.7363-.5373.995-.3582.2389-.8359.3782-1.4329.3782-.3184 0-.6766-.0597-1.0348-.1593-.3582-.0995-.6965-.2985-.9751-.6169-.2985-.3184-.4975-.7164-.6169-1.194l-3.3831.6567c.0796.6169.2985 1.1741.6368 1.6916.3184.5174.7562.9353 1.2736 1.2935.5174.3383 1.1145.597 1.7911.7761.6766.1791 1.3731.2786 2.1293.2786.7363 0 1.4329-.0995 2.1095-.2786.6567-.199 1.2338-.4776 1.7512-.8358.5174-.3582.9154-.8159 1.1941-1.3731.2786-.5573.4378-1.1543.4378-1.8309 0-1.0348-.3184-1.8905-.9553-2.5273-.6368-.6369-1.5323-1.0946-2.7064-1.3533l-2.7662-.6169c-.398-.0796-.6766-.2189-.8358-.4179-.1592-.199-.2388-.4179-.2388-.6965 0-.398.1592-.7164.4975-.9752.3184-.2587.7562-.3781 1.2935-.3781.5572 0 1.0547.1592 1.4926.4777.4378.3184.7164.796.8358 1.393l3.2239-.6567c-.2587-1.214-.8757-2.1692-1.8508-2.8458-.995-.6766-2.2089-1.0348-3.6617-1.0348ZM78.3722 16.1154v-2.8657H66.4717v2.8657h4.3185V26.583h3.2636V16.1154h4.3184ZM92.0776 13.2497h-3.2637v5.194H83.202v-5.194h-3.2836V26.583h3.2836v-5.2736h5.6119v5.2736h3.2637V13.2497ZM104.785 23.7571h-7.1046v-2.5074h6.4676V18.583h-6.4676v-2.5074h7.0446v-2.8259H94.3968V26.583h10.3882v-2.8259ZM117.979 16.1154v-2.8657h-11.901v2.8657h4.319V26.583h3.263V16.1154h4.319ZM129.913 23.7571h-7.104v-2.5074h6.467V18.583h-6.467v-2.5074h7.044v-2.8259h-10.328V26.583h10.388v-2.8259Z"/>
    <defs>
      <linearGradient id="b" x1="7.48755" x2="32.3632" y1="16.5575" y2="23.7093" gradientUnits="userSpaceOnUse">
        <stop stop-color="#0F13B3"/>
        <stop offset="1" stop-color="#B3114B"/>
      </linearGradient>
      <linearGradient id="d" x1="7.48755" x2="32.3632" y1="16.5575" y2="23.7093" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2125A9"/>
        <stop offset="1" stop-color="#B23B66"/>
      </linearGradient>
      <filter id="a" width="38.8757" height="38.875" x=".48755" y=".48828" color-interpolation-filters="sRGB"
              filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur result="effect1_foregroundBlur_1339_23931" stdDeviation="3.5"/>
      </filter>
      <filter id="c" width="38.8757" height="38.875" x=".48755" y=".48828" color-interpolation-filters="sRGB"
              filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur result="effect1_foregroundBlur_1339_23931" stdDeviation="3.5"/>
      </filter>
    </defs>
  </svg>
</template>

<script>
export default {
  name: "AppLogo"
}
</script>

<style lang="scss" scoped>
  .logo-svg{
    .circle{
      animation-name: logo;
      animation-duration: 3000ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      transform-box: fill-box;
      transform-origin: center;
      @keyframes logo {
        0% {
          transform: rotate(0);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
</style>
