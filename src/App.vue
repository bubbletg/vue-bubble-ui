<template>
  <div>
    <bg-container>
      <bg-header>Header</bg-header>
      <bg-main>Main</bg-main>
    </bg-container>

    <bg-container>
      <bg-header>Header</bg-header>
      <bg-main>Main</bg-main>
      <bg-footer>Footer</bg-footer>
    </bg-container>

    <bg-container>
      <bg-aside width="200px">Aside</bg-aside>
      <bg-main>Main</bg-main>
    </bg-container>

    <bg-container>
      <bg-header>Header</bg-header>
      <bg-container>
        <bg-aside width="200px">Aside</bg-aside>
        <bg-main>Main</bg-main>
      </bg-container>
    </bg-container>

    <bg-container>
      <bg-header>Header</bg-header>
      <bg-container>
        <bg-aside width="200px">Aside</bg-aside>
        <bg-container>
          <bg-main>Main</bg-main>
          <bg-footer>Footer</bg-footer>
        </bg-container>
      </bg-container>
    </bg-container>

    <bg-container>
      <bg-aside width="200px">Aside</bg-aside>
      <bg-container>
        <bg-header>Header</bg-header>
        <bg-main>Main</bg-main>
      </bg-container>
    </bg-container>

    <bg-container>
      <bg-aside width="200px">Aside</bg-aside>
      <bg-container>
        <bg-header>Header</bg-header>
        <bg-main>Main</bg-main>
        <bg-footer>Footer</bg-footer>
      </bg-container>
    </bg-container>
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

<style>
.bg-header,
.bg-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.bg-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.bg-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .bg-container {
  margin-bottom: 40px;
}

.bg-container:nth-child(5) .bg-aside,
.bg-container:nth-child(6) .bg-aside {
  line-height: 260px;
}

.bg-container:nth-child(7) .bg-aside {
  line-height: 320px;
}
</style>
