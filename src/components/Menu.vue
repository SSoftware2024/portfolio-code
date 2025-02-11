<template>
    <div class="container-menu">
        <div>
            <ul>
                <li><a @click="router.push({name:'about'})" :class="{'active':route.name == 'about'}">SOBRE</a> - </li>
                <li><a @click="router.push({name:'skills'})" :class="{'active':route.name == 'skills'}">HABILIADES</a> - </li>
                <li><a @click="router.push({name:'experiences'})" :class="{'active':route.name == 'experiences'}">EXPERIÊNCIA</a> - </li>
                <li><a @click="router.push({name:'projects'})" :class="{'active':route.name == 'projects'}">PROJETOS</a> - </li>
                <li><a @click="router.push({name:'contatc'})" :class="{'active':route.name == 'contatc'}">CONTATO</a></li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

onMounted(() => {

})
</script>
<style scoped lang="scss">
.container-menu {
    display: flex;
    border: 2px solid #d8d8d8;
    border-radius: 5px;
    padding: 10px;
    background-color: var(--gray-color);

    ul {
        display: flex;
        list-style-type: none;

        li {
            margin: 0 3px;
            cursor: pointer;
            a {
                color: #4A4A51;
                cursor: pointer;

                &.active {
                    color: var(--primary-color);
                    font-weight: bold;
                }

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

}
</style>