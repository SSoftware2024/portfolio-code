<template>
    <div class="container-card">

        <div>
            <h2>{{ title }}</h2>
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
    /* background-color: rgb(66, 233, 214); */
    padding: 5px 10px 10px 10px;
    border-radius: 5px;
    /* box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1); */
    border: 2px solid #d8d8d8;
    h2{
        text-align: center;
    }
    p{
        text-align: justify;
    }
}
</style>