<template>
  <div class="site-bar-container">
    <div class="left">
      <a-button
        type="primary"
        style="margin-bottom: 16px"
        @click="toggleCollapsed"
      >
        <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
      </a-button>
      <div class="breadcrumb">
        <a-breadcrumb>
          <a-breadcrumb-item>
            {{ currentRoute[0] ? currentRoute[0].meta.title : "" }}
          </a-breadcrumb-item>
          <a-breadcrumb-item
            ><a href="">
              {{ currentRoute[1] ? currentRoute[1].meta.title : "" }}
            </a></a-breadcrumb-item
          >
        </a-breadcrumb>
      </div>
    </div>
    <ul class="user-info">
      <li>
        欢迎{{ $store.state.user.username }}
        <a-icon type="down" />
      </li>
      <li @click="logOut">退出</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['currentRoute'],
  data() {
    return {};
  },
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('setCollapsedAction');
    },
    logOut() {
      this.$store.dispatch('logout');
      this.$router.push({ name: 'Login' });
    },
  },

};
</script>

<style>
</style>
