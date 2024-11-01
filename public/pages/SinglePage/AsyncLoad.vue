<template>
  <div class="singlePage AsyncLoad MFlex">
    <h2>This page is a demo for asynchronous mode to load OpenAd ad! </h2>
    <div class="openADJsSDKBanner TGAD" v-if="TGAD.banner.resource_url && TGAD.banner.width && TGAD.banner.height">
      <a href="javascript:void(0)" class="Flex" @click="CallBackClickInfo(TGAD.adInfo)">
        <img
          :src="TGAD.banner.resource_url"
          style="max-width: 100%;max-height: 100%;object-fit: contain;"
        >
      </a>
    </div>
    <div class="openADJsSDKBanner WEBAD" v-if="WEBAD.banner.resource_url && WEBAD.banner.width && WEBAD.banner.height">
      <a href="javascript:void(0)" class="Flex" @click="CallBackClickInfo(WEBAD.adInfo)">
        <img
          :src="WEBAD.banner.resource_url"
          style="max-width: 100%;max-height: 100%;object-fit: contain;"
        >
      </a>
    </div>
    <van-button @click="router.push('/')" type="primary">
      Go Home
    </van-button>
  </div>
</template>
<script>
import { Button } from 'vant';
import { defineComponent, getCurrentInstance, onMounted, reactive, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import PromiseLoadScript from '@/utils/PromiseLoadScript';

export default defineComponent({
  name: 'SinglePageAsyncLoad',
  components: {
    'van-button': Button,
  },
  setup(){
    const router = useRouter();
    const { proxy } = getCurrentInstance();
    /** If your web application is a TMA (Telegram Mini App), please use the following code. **/
    const TGAD = reactive({
      adInfo: {
        zoneId: 95, // int,  This is an example zoneId, please get your own code parameters
        publisherId: 69, // int, This is an example publisherId, please get your own code parameters
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
      banner: {
        'width': null,
        'type': 'banner',
        'height': null,
        'resource_id': null,
        'resource_url': '',
        'resource_text': '',
        'resource_desc': '',
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
      banner: {
        'width': null,
        'type': 'banner',
        'height': null,
        'resource_id': null,
        'resource_url': '',
        'resource_text': '',
        'resource_desc': '',
      },
    });

    onMounted( async () => {
      // If you want to load our SDK through asynchronous methods
      // #step1 open https://protocol.openad.network/sdkloader.js
      // #step2 find window.openADSdkLoader.version = version,
      //             window.openADSdkLoader.sdkURL = url,
      //             window.openADSdkLoader.sdkName = name;
      // #step3 every time, before release your app, please check the three keys above.
      let res = await PromiseLoadScript({
        name: 'openADJsSDK',
        version: '3.0.4',
        url: 'https://bf2055756e.node.openad.network/js/sdk.v3.js',
        noCache: true,
      });
      if(res){
        // eslint-disable-next-line no-use-before-define
        await getTGAD();
        // eslint-disable-next-line no-use-before-define
        await getWEBAD();

      }
    });

    const getTGAD = async () => {
      let res = await window.openADJsSDK.bridge.get({ adInfo: TGAD.adInfo, adParams: TGAD.adParams });
      console.log('getTGAD', JSON.stringify(res));
      if(res.code === 0){
        TGAD.banner = res.data;
        // eslint-disable-next-line no-use-before-define
        await CallBackLogInfo(TGAD.adInfo);
      }
      /**
       * code: 0, data: {  } // openAD.banner object and values
       * code: -1, msg: 'load extend js error!'
       * code: -2, msg: 'get openAD ads error!'
       **/
    }

    const getWEBAD = async () => {
      let res = await window.openADJsSDK.bridge.get({ adInfo: WEBAD.adInfo, adParams: WEBAD.adParams, userInfo: WEBAD.userInfo });
      console.log('getWEBAD', JSON.stringify(res));
      if(res.code === 0){
        WEBAD.banner = res.data;
        // eslint-disable-next-line no-use-before-define
        await CallBackLogInfo(WEBAD.adInfo);
      }
      /**
       * code: 0, data: {  } // openAD.banner object and values
       * code: -1, msg: 'load extend js error!'
       * code: -2, msg: 'get openAD ads error!'
       **/
    }

    const CallBackLogInfo = (adInfo) => {
      nextTick(async() => {
        let res = await window.openADJsSDK.bridge.log(adInfo);
        if(res.code === 0){
          console.log(res.msg);
        }else{
          console.log(res.msg);
        }
        /**
         * code: 0, msg: 'send log info successfully'
         * code: -1, msg: 'can not find resource'
         * code: -2, msg: 'send log info failed'
         **/
      });
    }

    const CallBackClickInfo = (adInfo) => {
      window.openADJsSDK.bridge.click(adInfo);
      // no callbacks
      // if you want to do something, you can write here.
    }

    return { router, TGAD, WEBAD, CallBackClickInfo }
  },
});
</script>

<style scoped lang="less">
@import '@/shared/share.less';
</style>
