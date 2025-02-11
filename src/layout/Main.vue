<template>

    <div class="main-container">
        <!-- PROFILE -->
        <div class="image-profile">
            <img :src="images.profile" alt="">
        </div>
        <div style="margin-top: 10px;">
            <h3 id="typewriter">Tiago Alves</h3>
        </div>
        <!-- END PROFILE -->
        <!-- MENU -->
        <div style="margin-top: 10px;">
            <Menu v-if="menuViewDesktop"></Menu>
            <MenuMobile v-else></MenuMobile>
        </div>

        <!-- END MENU -->

        <!-- SOCIAL NETWORK  -->
        <div class="social-network">
            <Tooltip title="TELEGRAM">
                <a href="" class="icon-telegram">
                    <PhTelegramLogo :size="32" />
                </a>
            </Tooltip>
            <Tooltip title="WHATSAPP">
                <a href="" class="icon-whatsapp">
                    <PhWhatsappLogo :size="32" />
                </a>
            </Tooltip>
            <Tooltip title="LINKEDIN">
                <a href="" class="icon-linkedin">
                    <PhLinkedinLogo :size="32" />
                </a>
            </Tooltip>
            <Tooltip title="GITHUB">
                <a href="" class="icon-github">
                    <PhGithubLogo :size="32" />
                </a>
            </Tooltip>
            <Tooltip title="PDF">
                <a href="" class="icon-pdf">
                    <PhFilePdf :size="32" />
                </a>
            </Tooltip>

        </div>
        <!-- END SOCIAL NETWORK -->

        <!-- CARD CONTENT -->
        <div style="margin-top: 10px;">
            <router-view></router-view>
        </div>
        <!-- END CARD CONTENT -->

    </div>

</template>
<script setup>
import { Tooltip } from '@programic/vue3-tooltip';
import { ref, onMounted } from 'vue';
import * as images from '../js/images.js';
import { PhTelegramLogo, PhWhatsappLogo, PhLinkedinLogo, PhFilePdf, PhGithubLogo } from "@phosphor-icons/vue";
//COMPONENTS
import Menu from '../components/Menu.vue';
import MenuMobile from '../components/MenuMobile.vue';
//PACKPAGE JS
import Typewriter from 'typewriter-effect/dist/core';

const menuViewDesktop = ref(true)
const isViewDesktop = () => {
    return window.innerWidth > 600;
}
onMounted(() => {
    menuViewDesktop.value = isViewDesktop();
    window.addEventListener('resize', function () {
        menuViewDesktop.value = isViewDesktop();
    })

    function typewriter(params) {
        new Typewriter('#typewriter', {
            strings: ['Olá, me chamo Tiago!', 'Seja bem vindo!'],
            autoStart: true,
            delay: 50,
            loop: true,
        });
    }
    typewriter();
})
</script>
<style scoped lang="scss">
.main-container {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    $social-network: (
        telegram: #0176bb,
        whatsapp: #0fcc08,
        pdf: #f51313,
        linkedin: #0077b5,
        github: #24292e
    );

.social-network {
    margin-top: 10px;
    a {
        color: var(--text-color);
    }

    @each $theme, $color in $social-network {
        a.icon-#{$theme}:hover {
            color: $color;
        }
    }
}
}

.image-profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 140px;

    img {
        width: 100%;
        border-radius: 100%;
        border: 5px solid var(--primary-color);
    }
}
</style>
