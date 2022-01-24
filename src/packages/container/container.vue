<template>
  <section class="bg-container" :class="{isVertical}">
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: "bg-container",
  data() {
    return { isVertical: true };
  },
  mounted() {
    this.isVertical = this.$children.some(child =>
      ["bg-footer", "bg-header"].includes(child.$options.name)
    );
  }
};
</script>
<style lang="scss">
.bg-container {
  display: flex;
  flex-direction: row;
  flex:1
}
.bg-container.isVertical {
  flex-direction: column;
}
</style>