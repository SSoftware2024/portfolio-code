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
    &.primary{
        background-color: var(--primary-color);
        color: white;
        border: none;
        border-radius: 5px;
        transition: .3s;
        &:hover{
            background-color: rgb(206, 35, 117);
            transition: .3s;
        }
    }
    &.black{
        background-color: var(--black-color);
        color: white;
        border: none;
        border-radius: 5px;
        transition: .3s;
        &:hover{
            background-color: #2c333e;
            transition: .3s;
        }
    }
    &.green{
        background-color: var(--green-color);
        color: white;
        border: none;
        border-radius: 5px;
        transition: .3s;
        &:hover{
            background-color: #92a946;
            transition: .3s;
        }
    }
    &.red{
        background-color: var(--red-color);
        color: white;
        border: none;
        border-radius: 5px;
        transition: .3s;
        &:hover{
            background-color: rgb(183, 72, 64);
            transition: .3s;
        }
    }
}
</style>