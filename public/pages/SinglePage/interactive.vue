<template>
  <div class="singlePage ajax MFlex">
    <h2>This page is a demo for interactive mode to load OpenAd ads! </h2>
    <van-button @click="Render" type="primary">
      Render
    </van-button>
    <van-button @click="router.push('/')" type="primary">
      Go Home
    </van-button>
  </div>
</template>
<script>
import { Button } from 'vant';
import { defineComponent, reactive, onMounted, nextTick } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'SinglePageJsSDK',
  components: {
    'van-button': Button,
  },
  setup() {
    const router = useRouter();
    /** If your web application is a TMA (Telegram Mini App), please use the following code. **/
    const TGAD = reactive({
      adInfo: {
        zoneId: 79, // int,  This is an example zoneId, please get your own code parameters
        publisherId: 56, // int, This is an example publisherId, please get your own code parameters
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

    onMounted(() => {
      nextTick(() => {
        window.openADJsSDK.interactive.init({ ...TGAD.adInfo });
      });
    });

    const Render = () => {
      window.openADJsSDK.interactive.getRender({ ...TGAD });
    }

    return { router, Render };
  },
});
</script>

<style scoped lang="less">
@import '@/shared/share.less';
</style>
