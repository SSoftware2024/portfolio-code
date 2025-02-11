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
<style scoped>
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
</style>