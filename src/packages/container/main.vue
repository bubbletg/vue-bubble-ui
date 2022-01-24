<template>
    <main class="bg-main">
        <slot></slot>
    </main>
</template>
<script>
export default {
    name:'bg-main'
}
</script>

<style lang="scss">
.bg-main{
    flex:1;
    padding:20px;
}
</style>