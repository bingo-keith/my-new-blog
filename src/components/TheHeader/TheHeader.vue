<template>
  <header :class="$style.header">
    <div :class="$style.logoBox">
      <h1 :class="$style.title">科瑞兹曼</h1>
    </div>
    <BaseAvatar>
      我是是1
    </BaseAvatar>
  </header>
</template>

<script>
import BaseAvatar from '@/common/BaseAvatar';

export default {
  components: {
    BaseAvatar
  },
  data () {
    return {
      beta: '',
      doShowMenuList: false
    };
  },
  methods: {

  }
};
</script>

<style module lang="postcss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
}

.logoBox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.title {
  display: inline-block;
  margin-left: 4px;
  font-size: 1.1em;
  background-image: linear-gradient(160deg, #7fdbff, #0074d9);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
</style>
