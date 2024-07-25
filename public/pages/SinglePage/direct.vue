<template>
  <div class="singlePage direct MFlex">
    <h2>This page is a demo for direct load OpenAd ads! </h2>
    <div class="openAds">
      <ins :data-revive-zoneid="openAds.zoneId" :data-revive-id="openAds.reviveId" />
    </div>
    <van-button @click="router.push('/')" type="primary">Go Home</van-button>
  </div>
</template>
<script>
import { Button } from 'vant';
import { defineComponent, onMounted, onUnmounted, nextTick, reactive, getCurrentInstance } from 'vue';
import AsyncScript from '@/utils/AsyncScript';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'SinglePageDirect',
  components: {
    'van-button': Button,
  },
  setup(){
    const { proxy } = getCurrentInstance();
    const openAds = reactive({
      zoneId: proxy.$AppEnv.zoneId,
      reviveId: proxy.$AppEnv.reviveId,
    });
    const router = useRouter();

    onMounted(() => {
      nextTick(() => {
        AsyncScript.load({
          name: 'openAdJs',
          version: new Date().valueOf(),
          url: 'https://alpha.openad.network/www/delivery/asyncjs.php',
          noCache: true,
          id: openAds.reviveId,
        },() => {
          // DO YOUR CODES
        });
      });
    });

    onUnmounted(() => {
      AsyncScript.remove({ id: openAds.reviveId, script: 'reviveAsync' });
    });

    return { router, openAds }
  },
});
</script>

<style scoped lang="less">
@import '@/shared/share.less';
</style>
