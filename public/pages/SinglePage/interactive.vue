<template>
  <div class="singlePage interactive MFlex">
    <h2>This page is a demo for interactive mode to load OpenAd ads! </h2>
    <van-button @click="Render" type="primary" v-if="openADInteractive.hasAD">
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
  name: 'SinglePageInteractive',
  components: {
    'van-button': Button,
  },
  setup() {
    const router = useRouter();
    /** If your web application is a TMA (Telegram Mini App), please use the following code. **/
    const openADInteractive = reactive({
      adInfo: {
        zoneId: 129, // int,  This is an example zoneId, please get your own code parameters
        publisherId: 63, // int, This is an example publisherId, please get your own code parameters
      },
      adParams: {
        version: 'v3', //your app version , If there is no data, please leave it blank
        TG: {
          type: 'noSDK',
          FN: window.Telegram,
        },
        /**If you've loaded `https://telegram.org/js/telegram-web-app.js` in your TMA**/
        //TG = { type: 'telegram', FN: window.Telegram };
        /**If you're using `@telegram-apps/sdk` in your TMA**/
        //import { initUtils, retrieveLaunchParams } from "@telegram-apps/sdk";
        //TG: { type: '@telegram-apps/sdk', FN: { initUtils, retrieveLaunchParams } };
        /**If you haven't loaded any Telegram SDK**/
        //TG = { type: 'noSDK', FN: null }
      },
      hasAD: false, // 通过方法获取
    });

    onMounted(() => {
      nextTick(() => {
        window.openADJsSDK.interactive.init({ ...openADInteractive }).then(res => {
          openADInteractive.hasAD = res.code === 0;
          // hasAD = true, you can callback Render function, user can load an interactive ad;
          // hasAD = false, you can't callback Render function, user can't load an interactive ad;
        });
      });
    });

    // normal steps is [1,2,3,5,6,7], click steps is [1,2,3,6,7,5,4]
    const cb = {
      // indicates load ad resource from OpenAD platform, false will be returned if there is no resource to be loaded for the publisher slot/zone
      // 表示从OpenAD平台加载广告资源，如果发布者槽位/区域没有要加载的资源，将返回false
      adResourceLoad: (e) => {
        console.log('step1 adResourceLoad', e);  // e = ture / false
      },
      // indicates the interactive ad is opening
      // 表示互动广告正在打开
      adOpening: (e) => {
        console.log('step2 adOpening', e); // e = ture / false
      },
      // indicates the interactive ad is opened,
      // 表示互动广告已打开
      adOpened: (e) => {
        console.log('step3 adOpened', e);  // e = ture / false
      },
      // indicates the interactive ad task is finished, the task is defined by advertiser
      // 表示互动广告任务完成，该任务由广告商定义
      adTaskFinished: (e) => {
        console.log('step5 adTaskFinished', e);  // e = viewAD / click
      },
      // indicates the interactive ad is closing
      // 表示互动广告正在关闭
      adClosing: (e) => {
        console.log('step6 adClosing', e);  // e = viewAD / click
      },
      // indicates the interactive ad is closed
      // 表示互动广告已关闭
      adClosed: (e) => {
        console.log('step7 adClosed', e);   // e = viewAD / click, if you want to do something through different types, you can write here.
      },
      // indicates clicked and jumps
      // 表示已点击，并跳转
      adClick: (e) => {
        console.log('step4 adClick', e);  // e = ture / false
      },
    };

    const Render = () => {
      window.openADJsSDK.interactive.getRender({ adInfo: openADInteractive.adInfo, cb });
    }

    return { router, Render, openADInteractive };
  },
});
</script>

<style scoped lang="less">
@import '@/shared/share.less';
</style>
