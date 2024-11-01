<template>
  <div class="singlePage normal MFlex">
    <h2>This page is a demo for normal mode to load OpenAd ads! </h2>
    <div class="openADJsSDKBanner TGAD" :zoneId="TGAD.adInfo.zoneId" :publisherId="TGAD.adInfo.publisherId" />
    <div class="openADJsSDKBanner WEBAD" :zoneId="WEBAD.adInfo.zoneId" :publisherId="WEBAD.adInfo.publisherId" />
    <van-button @click="router.push('/')" type="primary">
      Go Home
    </van-button>
  </div>
</template>
<script>
import { Button } from 'vant';
import { defineComponent, reactive, onMounted, nextTick, getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'SinglePageNormal',
  components: {
    'van-button': Button,
  },
  setup() {
    const { proxy } = getCurrentInstance();
    const router = useRouter();
    /** If your web application is a TMA (Telegram Mini App), please use the following code. **/
    const TGAD = reactive({
      adInfo: {
        zoneId: 114, // int,  This is an example zoneId, please get your own code parameters
        publisherId: 91, // int, This is an example publisherId, please get your own code parameters
      },
      adParams: {
        version: 'v3', //your app version , If there is no data, please leave it blank
        TG: {
          type: 'noSDK',
          FN: null,
        },
        /**If you've loaded `https://telegram.org/js/telegram-web-app.js` in your TMA**/
        //TG = { type: 'telegram', FN: window.Telegram };
        /**If you're using `@telegram-apps/sdk` in your TMA**/
        //import { initUtils, retrieveLaunchParams } from "@telegram-apps/sdk";
        //TG: { type: '@telegram-apps/sdk', FN: { initUtils, retrieveLaunchParams } };
        /**If you haven't loaded any Telegram SDK**/
        //TG = { type: 'noSDK', FN: null }
      },
    });
    /** If your web application is not TMA, please use the following code. **/
    const WEBAD = reactive({
      adInfo: {
        zoneId: proxy.$AppEnv.zoneId, // int, This is an example zoneId, please get your own code parameters
        publisherId: proxy.$AppEnv.publisherId, // int, This is an example publisherId, please get your own code parameters
      },
      userInfo: {
        userId: 'userId', // user ID , If there is no data, please leave it blank
        firstName: 'firstName', // firstName or userId , If there is no data, please leave it blank
        lastName: 'lastName', // lastName or userId , If there is no data, please leave it blank
        username: 'username', // username or userId , If there is no data, please leave it blank
      },
      adParams: {
        version: 'v3', //your app version , If there is no data, please leave it blank
      },
    });

    onMounted(() => {
      nextTick(() => {
        window.openADJsSDK.bridge.init({ ...TGAD });
        window.openADJsSDK.bridge.init({ ...WEBAD });
      });
    });

    return { router, WEBAD, TGAD };
  },
});
</script>

<style scoped lang="less">
@import '@/shared/share.less';
</style>
