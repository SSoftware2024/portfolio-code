<template>
    <div>
        <Card title="PROJETOS" class="card-content">
            <div class="row-project">

                <div class="container-project">
                    <div class="logo">
                        <img :src="projects.todoList" alt="">
                    </div>
                    <h3 style="text-align: center;">TODO LISTA</h3>
                    <div class="description">
                        <p>
                            CRUD de lista com login
                        </p>
                    </div>
                    <div class="technologies">
                        <div>
                            <ul>
                                <li>REACT</li>
                                <li>MAETERIAL UI</li>
                                <li>PHP</li>
                            </ul>
                        </div>
                    </div>
                    <div class="links">
                        <Button class="black" @click="openLink('https://github.com/SSoftware2024/todoList')">
                            GITHUB
                        </Button>
                        <Button class="red" @click="openLink('https://www.youtube.com/watch?v=J6kNsvGzdFI')">
                            YOUTUBE
                        </Button>
                    </div>
                </div>
                <div class="container-project">
                    <div class="logo">
                        <img :src="projects.portfolio" alt="">
                    </div>
                    <h3 style="text-align: center;">PORTFOLIO</h3>
                    <div class="description">
                        <p>
                            Projeto portfolio, meu currículo online
                        </p>
                    </div>
                    <div class="technologies">
                        <div>
                            <ul>
                                <li>VITE</li>
                                <li>VUE</li>
                                <li>SASS</li>
                            </ul>
                        </div>
                    </div>
                    <div class="links">
                        <Button class="black" @click="openLink('https://github.com/SSoftware2024/portfolio-code')">
                            GITHUB
                        </Button>
                    </div>
                </div>

            </div>
        </Card>


    </div>
</template>
<script setup>
//COMPONENTS
import Card from '../components/Card.vue';
import Button from '../components/Button.vue';
import { projects } from '../js/files.js';
function openLink(link) {
    window.open(link);
}
</script>
<style scoped lang="scss">


div.row-project {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
    max-height: 540px;
    overflow-y: auto;

    div.container-project {
        box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
        border-radius: 5px;
        width: 270px;
        padding: 10px;
        margin: 5px 0 5px 3px;
        display: flex;
        flex-direction: column;

        .description p {
            text-align: center;
            margin: 5px 0;
        }

        .technologies {
            display: flex;
            justify-content: flex-start;
            flex-grow: 1;

            div {
                margin-left: 20px;
                margin-right: 20px;
            }
        }

        .logo {
            display: flex;
            justify-content: center;
            margin-bottom: 5px;

            img {
                width: 80px;
            }
        }

        .links {
            display: flex;
            justify-content: flex-end;
            margin-top: 10px;
            align-self: flex-end;

            button {
                margin: 0 3px;
            }
        }
    }
}

.dark {
    .row-project {
        .container-project {
            box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
        }
    }
}
</style>