<template>
  <div>
    <div>
      <bg-input v-model="input" placeholder="请输入内容"></bg-input>
    </div>
    <div>
      <bg-input placeholder="请输入内容" v-model="input" :disabled="true"> </bg-input>
    </div>
    <div>
      <bg-input placeholder="请输入内容" v-model="input" clearable> </bg-input>
    </div>
    <div>
      <bg-input placeholder="请输入密码" v-model="input" show-password></bg-input>
    </div>
    <div>
      <bg-input placeholder="请选择日期" suffix-icon="sousuo" v-model="input1"> </bg-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      input: '',
    };
  },
  methods: {},
};
</script>
