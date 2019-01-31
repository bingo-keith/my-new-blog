<template>
  <header :class="$style.header">
    <div :class="$style.logoBox">
      <SVGLogo height="24" width="24"/>
      <h1 :class="$style.title">科瑞兹曼</h1>
    </div>
    <BaseAvatar :style="{transform: `rotate($(beta)deg)`}">
      {{ user ? user.username : '我' }}
    </BaseAvatar>
    <!-- <UserMenuList v-if="doShowMenuList" /> -->
  </header>
</template>

<script>
import SVGLogo from '@/common/SVG/SVGLogo';
import BaseAvatar from '@/common/BaseAvatar';
import UserMenuList from '@/components/User/UserMenuList';


export default {
  components: {
    SVGLogo,
    BaseAvatar,
    UserMenuList
  },
  data () {
    return {
      beta: '',
      doShowMenuList: true,
      user: {
        username: 'keith'
      }
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
