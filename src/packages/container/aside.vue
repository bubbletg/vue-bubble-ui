<template>
    <aside class="bg-aside" :style="{width}">
        <slot>
            
        </slot>
    </aside>
</template>

<script>
export default {
    name:'bg-aside',
    props:{
        width:{
            type:String,
            default:'300px'
        }
    }
}
</script>