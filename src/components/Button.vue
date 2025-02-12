<template>
    <button type="button">
        <slot></slot>
    </button>
</template>
<script setup>

</script>
<style scoped lang="scss">
button{
    padding: 10px;
    cursor: pointer;
    $color: var(--primary-color);
    &.primary{
        background-color: $color;
        color: white;
        border: none;
        border-radius: 5px;
        transition: .3s;
        &:hover{
            background-color: rgb(206, 35, 117);
            transition: .3s;
        }
    }
}
</style>