<template>
  <div id="app">
    <bg-button>这是按钮</bg-button>
    <bg-button type="primary" icon="sousuo" icon-position="left">这是按钮</bg-button>
    <bg-button type="primary" icon="sousuo" icon-position="right" @click="click">000101</bg-button>
    <bg-button type="warning">这是按钮</bg-button>
    <bg-button-group>
      <bg-button type="danger">0202</bg-button>
      <bg-button type="danger">0303</bg-button>
    </bg-button-group>
    <bg-button type="info1">info1</bg-button>
    <bg-button type="info" icon="loading">info1</bg-button>
    <bg-icon icon="sousuo"></bg-icon>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    click() {
      console.log(1111111);
    },
  },
};
</script>

<style lang="scss"></style>
