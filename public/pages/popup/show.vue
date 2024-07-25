<template>
  <div class="singlePage popup MFlex">
    <h2>This page is a demo for popup show load OpenAd ads! </h2>
    <van-button @click="loadJs" type="primary" v-if="popup.ready">open popup</van-button>
    <van-button @click="router.push('/')" type="primary">Go Home</van-button>
  </div>

  <van-popup v-model:show="popup.show" @close="removeJs">
    <div class="openAds"></div>
  </van-popup>
</template>
<script>
import { Button, Popup } from 'vant';
import { defineComponent, onMounted, nextTick, reactive, getCurrentInstance } from 'vue';
import AsyncScript from '@/utils/AsyncScript';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'PopupShow',
  components: {
    'van-button': Button,
    'van-popup': Popup,
  },
  setup() {
    const { proxy } = getCurrentInstance();
    const openAds = reactive({
      zoneId: proxy.$AppEnv.zoneId,
      reviveId: proxy.$AppEnv.reviveId,
    });
    const router = useRouter();
    const popup = reactive({
      ready: false,
      show: false,
    });

    onMounted(() => {
      nextTick(() => {
        popup.ready = true;
      });
    });

    const removeJs = () => {
      AsyncScript.remove({ id: openAds.reviveId, script: 'reviveAsync' });
    };

    const loadJs = () => {
      popup.show = true;
      nextTick(() => {
        document.querySelector('.openAds').innerHTML = `
      <ins data-revive-zoneid="${openAds.zoneId}" data-revive-id="${openAds.reviveId}" />`;
        AsyncScript.load({
          name: 'openAdJs',
          version: new Date().valueOf(),
          url: 'https://alpha.openad.network/www/delivery/asyncjs.php',
          noCache: true,
          id: openAds.reviveId,
        }, () => {
          // DO YOUR CODES
        });
      });
    };

    return { router, openAds, popup, loadJs, removeJs };
  },
});
</script>

<style scoped lang="less">
@import '@/shared/share.less';
</style>
