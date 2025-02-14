<template>
    <Modal :show="showModal" :close="() => showModal = false" title="HABILIDADES++">
        <div class="row-habilitis">
            <div class="three-habilits">
                <div>
                    <h4>BACK-END</h4>
                    <ul>
                        <li>TESTES UNITÁRIOS</li>
                        <li>API RESTFULL</li>
                    </ul>
                </div>
                <div>
                    <h4>LARAVEL</h4>
                    <ul>
                        <li>INERTIA</li>
                        <li>LIVEWIRE</li>
                        <li>BREEZE</li>
                        <li>JETSTREAM</li>
                        <li>FORTIFY</li>
                        <li>SANCTUM</li>
                        <li>PASSPORT</li>
                        <li>WEBSOCKETS</li>
                        <li>QUEQUE</li>
                        <li>HORIZON</li>
                        <li>LARAVEL UI - <i style="text-decoration: underline;">Legado</i> </li>
                        <li>LARADOCK </li>
                        <li style="font-weight: bold; color:#00BCFF;"> <i>ETC...</i> </li>
                    </ul>
                </div>
                <div>
                    <h4>FRAMEWORK CSS</h4>
                    <ul>
                        <li>BOOTSTRAP</li>
                        <li>TAILWIND</li>
                        <li>FOUNDATION</li>
                        <li style="font-weight: bold;color:#00BCFF;"> <i>ETC...</i> </li>
                    </ul>
                </div>
            </div>
            <div class="three-habilits" style="position: relative;">
                <div>
                    <h4>VUE</h4>
                    <ul>
                        <li>VUETIFY</li>
                        <li>PRIMEVUE</li>
                        <li>NUXT</li>
                        <li>QUASAR</li>
                        <li style="font-weight: bold;color:#00BCFF;"> <i>ETC...</i> </li>
                    </ul>
                </div>
                <div>
                    <h4>REACT</h4>
                    <ul>
                        <li>MARTERIAL UI</li>
                        <li>NEXT.JS</li>
                        <li>SEMANTIC UI</li>
                        <li>CHACKRA UI</li>
                        <li style="font-weight: bold;color:#00BCFF;"> <i>ETC...</i> </li>
                    </ul>
                </div>
                <div>
                    <h4>BANCO</h4>
                    <ul>
                        <li>MYSQL</li>
                        <li>POSTGRES SQL</li>
                        <li>SQL SERVER</li>
                        <li>SQLITE</li>
                        <li>MONGO DB</li>
                    </ul>
                </div>
                <div>
                    <h4>OUTROS</h4>
                    <ul>
                        <li>BITBUCKET</li>
                        <li>CI / CD - <i style="text-decoration: underline;">Aprofundando</i></li>
                    </ul>
                </div>
            </div>
        </div>
    </Modal>
    <div>
        <Card title="HABILIDADES" class="card-content">
            <div class="row-habilitis">
                <div class="three-habilits">
                    <div>
                        <h4>BACK-END</h4>
                        <ul>
                            <li>PHP / LARAVEL</li>
                            <li>C#(sharp)</li>
                        </ul>
                    </div>
                    <div>
                        <h4>FRONT-END</h4>
                        <ul>
                            <li>VUE</li>
                            <li>REACT</li>
                            <li>VITE</li>
                            <li>JQUERY</li>
                        </ul>
                    </div>
                    <div>
                        <h4>BANCO</h4>
                        <ul>
                            <li>SQL</li>
                            <li>NO-SQL</li>
                        </ul>
                    </div>
                </div>
                <div class="three-habilits" style="position: relative; left: 60px;">
                    <div>
                        <h4>MÓVEL</h4>
                        <ul>
                            <li>REACT NATIVE </li>
                            <li>FLUTTER - <i style="text-decoration: underline;">Aprofundando</i></li>
                            <li>MOBX - <i>Pacote</i></li>
                        </ul>
                    </div>
                    <div>
                        <h4>DEVOPS</h4>
                        <ul>
                            <li>DOCKER - <i style="text-decoration: underline;">Aprofundando</i></li>
                            <li>HOSPEDAGEM</li>
                            <li>VPS</li>
                        </ul>
                    </div>
                    <div>
                        <h4>OUTROS</h4>
                        <ul>
                            <li>GITFLOW</li>
                            <li>GITHUB ACTIONS</li>
                            <li>JSON / XML</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style="display: flex; justify-content: center; margin-top: 10px;">
                <Button @click="() => showModal = true" class="primary">
                    LER MAIS
                </Button>
            </div>
        </Card>
    </div>
</template>
<script setup>
import {ref} from 'vue';
//COMPONENTS
import Card from '../components/Card.vue';
import Button from '../components/Button.vue';
import Modal from '../components/Modal.vue';

const showModal = ref(false);

function readMore() {
    
}

</script>
<style scoped lang="scss">
div.row-habilitis {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 10px;

    // margin-left: 40px;
    div.three-habilits {
        display: flex;
        flex-direction: column;

        ul {
            list-style-type: none;

            li {
                font-size: 15px;
            }
        }

        div {
            margin-top: 10px;
        }
    }
}
.dark{
    
}
</style>