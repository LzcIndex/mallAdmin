<template>
  <div class="home-container">
    <div class="menu-list">
      <LeftMenu />
    </div>
    <div class="main-app" :class="{ 'menu-unfold': $store.state.collapsed }">
      <div class="main-header">
        <SiteBar />
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenu from './components/LeftMenu.vue';
import SiteBar from './components/SiteBar.vue';

export default {
  components: {
    LeftMenu,
    SiteBar,
  },
  data() {
    return {};
  },
};
</script>
<style lang="less">
@import url("~@/assets/css/home.less");
</style>
