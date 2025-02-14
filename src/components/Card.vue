<template>
    <div class="container-card">

        <div>
            <h2 v-if="title">{{ title }}</h2>
            <slot></slot>
        </div>
    </div>
</template>
<script setup>
defineProps({
    title:'',
});
</script>
<style scoped lang="scss">
.container-card{
    width: 100%;
    background-color: var(--gray-color);
    border-radius: 5px;
    border: 2px solid #d8d8d8;
    h2{
        text-align: center;
    }
    p{
        text-align: justify;
    }
}
.dark{
    .container-card{
        background-color: var(--gray-color-dark);
        border: 2px solid #222d3c;
    }
    
}
</style>