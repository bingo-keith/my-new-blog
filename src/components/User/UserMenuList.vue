<template>
  <BaseFullScreen :class="$style.screen">
    <ul :class="$style.list">
      <li :class="$style.item">主页</li>
      <li :class="$style.item">书桌</li>
      <li :class="$style.item">搜索</li>
      <li :class="$style.item">筛选</li>
      <li :class="$style.item">刷新</li>
      <li :class="$style.item">退出</li>
    </ul>
  </BaseFullScreen>
</template>

<script>
import BaseFullScreen from '@/common/BaseFullScreen';
export default {
  components: {
    BaseFullScreen
  }
};
</script>

<style module lang="postcss">
  @keyframes move {
    100% { transform: translateY(0); }
  }

  @keyframes opacity {
    100% { opacity: 1; }
  }

  .screen {
    z-index: 2;
    max-width: 1200px;
  }

  .mask {
    opacity: 0;
    animation: opacity linear both .2s;
  }

  .list {
    position: absolute;
    width: 100%;
    padding: 10px;
    color: rgba(0, 0, 0, .8);
    background: #fff;
    transform: translateY(-100%);
    animation: move forwards .2s;
  }

  .item {
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;

    & > svg {
      margin-right: 16px;
    }
  }
</style>
