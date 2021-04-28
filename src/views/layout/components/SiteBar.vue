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
          <a-breadcrumb-item>主页</a-breadcrumb-item>
          <a-breadcrumb-item><a href="">商品列表</a></a-breadcrumb-item>
        </a-breadcrumb>
      </div>
    </div>
    <ul class="user-info">
      <li>
        欢迎sdjlasjdlajs
        <a-icon type="down" />
      </li>
      <li>退出</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('setCollapsedAction');
    },
  },
};
</script>

<style>
</style>
