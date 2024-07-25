<template>
  <div class="singlePage dynamic MFlex">
    <h2>This page is a demo for dynamic load OpenAd ads! </h2>
    <div class="openAds"></div>
    <van-button @click="loadJs" type="primary" v-if="domReady">Load Ads</van-button>
    <van-button @click="router.push('/')" type="primary">Go Home</van-button>
  </div>
</template>
<script>
import { Button } from 'vant';
import { defineComponent, onMounted, onUnmounted, nextTick, reactive, ref, getCurrentInstance } from 'vue';
import AsyncScript from '@/utils/AsyncScript';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'SinglePageDynamic',
  components: {
    'van-button': Button,
  },
  setup() {
    const { proxy } = getCurrentInstance();
    const openAds = reactive({
      zoneId: proxy.$AppEnv.zoneId,
      reviveId: proxy.$AppEnv.reviveId,
    });
    const router = useRouter();
    const domReady = ref(false);

    onMounted(() => {
      nextTick(() => {
        domReady.value = true;
      });
    });

    onUnmounted(() => {
      AsyncScript.remove({ id: openAds.reviveId, script: 'reviveAsync' });
    });

    const loadJs = () => {
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
        domReady.value = false;
      });
    };

    return { router, openAds, domReady, loadJs };
  },
});
</script>

<style scoped lang="less">
@import '@/shared/share.less';
</style>
