<template>
    <Card class="container-menu">
        <ul>
            <li><a @click="router.push({ name: 'about' })" :class="{ 'active': route.name == 'about' }">SOBRE</a> -
            </li>
            <li><a @click="router.push({ name: 'skills' })" :class="{ 'active': route.name == 'skills' }">HABILIADES</a>
                -
            </li>
            <li><a @click="router.push({ name: 'experiences' })"
                    :class="{ 'active': route.name == 'experiences' }">EXPERIÊNCIA</a> - </li>
            <li><a @click="router.push({ name: 'projects' })"
                    :class="{ 'active': route.name == 'projects' }">PROJETOS</a>
            </li>
        </ul>
    </Card>
</template>
<script setup>
//COMPONENTS
import Card from '../components/Card.vue';
//js
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

</script>
<style scoped lang="scss">
.container-menu {
    display: flex;
    justify-content: center;
    padding: 10px;

    ul {
        display: flex;
        list-style-type: none;

        li {
            margin: 0 3px;
            cursor: pointer;

            a {
                color: var(--text-color);
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

.dark {
    .container-menu {

        a {
            color: var(--text-color-dark);
        }

    }
}
</style>