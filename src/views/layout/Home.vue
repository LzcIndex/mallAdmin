<template>
  <div class="home-container">
    <div class="menu-list">
      <LeftMenu  :currentRoute="currentRoute"/>
    </div>
    <div class="main-app" :class="{ 'menu-unfold': $store.state.collapsed }">
      <div class="main-header">
        <SiteBar :currentRoute="currentRoute"/>
      </div>
      <router-view></router-view>
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
    return {
      currentRoute: this.$router.currentRoute.matched,
    };
  },
  watch: {
    $route() {
      console.log(this.$router.currentRoute.matched);
      this.currentRoute = this.$router.currentRoute.matched;
    },
  },
};
</script>
<style lang="less">
@import url("~@/assets/css/home.less");
</style>
