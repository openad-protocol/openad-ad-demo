<template>
  <!---->
  <div class="Home MFlex">
    <ul>
      <li v-for="(item,index) in paths" :key="index">
        <van-button type="primary" @click="router.push(item.path)">
          {{ item.desc }}
        </van-button>
      </li>
    </ul>
  </div>
  <!---->
</template>

<script>
import { defineComponent, ref } from 'vue';
import { Button } from 'vant';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'HomeIndex',
  components: {
    'van-button': Button,
  },
  setup(){
    const paths = ref([{ path: '/SinglePage/direct', desc: 'single page with direct loading...' },
      { path: '/SinglePage/async', desc: 'single page with asynchronous loading...' },
      { path: '/SinglePage/dynamic', desc: 'single page with dynamic loading...' },
      { path: '/popup/show', desc: 'single page with popup show loading...' }]);

    const router = useRouter();

    return { router, paths };
  },
});
</script>
<style scoped lang="less">
@import "index.less";
</style>
