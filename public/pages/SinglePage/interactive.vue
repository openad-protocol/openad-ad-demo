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
        zoneId: 159, // int, This is an example zoneId, please get your own code parameters
        publisherId: 49, // int, This is an example publisherId, please get your own code parameters
      },
      adParams: {
        version: 'v3', //your app version , If there is no data, please leave it blank
        TG: true, // If your app is TMA, TG = false; If your app is webApp, TG = false
      },
    });

    onMounted(() => {
      nextTick(() => {
        window.openADJsSDK.interactive.init({ ...openADInteractive }).then(res => {
          if(res.code === 0){
            // eslint-disable-next-line no-use-before-define
            Render();
          }
          // res.code = 0, you can call back Render function, user can load an interactive ad;
          // res.code != 0, you can't call back Render function, user can't load an interactive ad;
        });
      });
    });

    const cb = {
      // indicates load ad resource from OpenAD platform, false will be returned if there is no resource to be loaded for the publisher slot/zone
      adResourceLoad: (e) => {
        console.log('adResourceLoad', e);  // e = ture / false
      },
      // indicates the interactive ad is opening
      adOpening: (e) => {
        console.log('adOpening', e); // e = ture / false
      },
      // indicates the interactive ad is opened,
      adOpened: (e) => {
        console.log('adOpened', e);  // e = ture / false
      },
      // indicates the interactive ad task is finished, the task is defined by advertiser, return task status
      // judgment of issuing rewards, use this to return
      adTaskFinished: (e) => {
        console.log('adTaskFinished', e);  // e = ture / false
      },
      // indicates the interactive ad is closing
      adClosing: (e) => {
        console.log('adClosing', e);  // e = viewAD / click / close,
      },
      // indicates the interactive ad is closed
      adClosed: (e) => {
        console.log('adClosed', e);  // e = viewAD / click / close
        // viewAD: viewed Ad completed, not clicked, not manually closed ads; client side needs to issue rewards level 1.
        // click: click Ad completed, include viewed Ad, not manually closed ads; client side needs to issue rewards level 2.
        // close: user manually closed ads. client side can not get any rewards.
      },
      // indicates clicked and jumps
      adClick: (e) => {
        console.log('adClick', e);  // e = ture / false
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
