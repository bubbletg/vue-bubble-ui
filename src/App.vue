<template>
  <div id="app">
    <bg-row>
      <bg-col :span="12">
        <div style="background: red">
          <bg-button type="success">这是按钮</bg-button>
        </div>
      </bg-col>
      <bg-col :span="12">
        <div style="background: blue">
          <bg-button type="success">这是按钮</bg-button>
        </div>
      </bg-col>
    </bg-row>
    <bg-row :gutter="60">
      <bg-col :span="6">
        <div style="background: red">
          <bg-button type="success">这是按钮</bg-button>
        </div>
      </bg-col>
      <bg-col :span="6">
        <div style="background: blue">
          <bg-button type="success">这是按钮</bg-button>
        </div>
      </bg-col>
      <bg-col :span="6" >
        <div style="background: red">
          <bg-button type="success">这是按钮</bg-button>
        </div>
      </bg-col>
      <bg-col :span="6">
        <div style="background: blue">
          <bg-button type="success">这是按钮</bg-button>
        </div>
      </bg-col>
    </bg-row>
    <bg-row>
      <bg-col :span="4">
        <div style="background: red">
          <bg-button type="success">这是按钮</bg-button>
        </div>
      </bg-col>
      <bg-col :span="4" :offset="2">
        <div style="background: blue">
          <bg-button type="success">这是按钮</bg-button>
        </div>
      </bg-col>
      <bg-col :span="6" >
        <div style="background: red">
          <bg-button type="success">这是按钮</bg-button>
        </div>
      </bg-col>
      <bg-col :span="6">
        <div style="background: blue">
          <bg-button type="success">这是按钮</bg-button>
        </div>
      </bg-col>
    </bg-row>
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
