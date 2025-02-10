<template>
    <div class="container-menu">
        <div>
            <ul>
                <li><a href="" class="active">SOBRE</a></li>
                <li><a href="">HABILIADES</a></li>
                <li><a href="">EXPERIÊNCIA</a></li>
                <li><a href="">PROJETOS</a></li>
                <li><a href="">CONTATO</a></li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
.container-menu{
    display: flex;
    border: 2px solid #d8d8d8;
    border-radius: 5px;
    padding: 10px;
    background-color: var(--gray-color);
    
}
.container-menu ul{
    display: flex;
    list-style-type: none;
}
.container-menu ul li{
    margin: 0 3px;
}
.container-menu ul li a{
    color: black;
}
.container-menu ul li a.active{
    color: var(--primary-color);
    font-weight: bold;
}
</style>