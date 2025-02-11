<template>
    <div class="container-card">

        <div>
            <h2>Título</h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
            </p>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
.container-card{
    width: 600px;
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