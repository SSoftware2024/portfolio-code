<template>
    <div class="main-container">

        <div class="container-responsive">
            <!-- PROFILE -->
            <div class="image-profile">
                <img :src="files.profile" alt="">
            </div>
            <div class="theme-toggle">
                <!-- <PhSun :size="32" class="icon-button sun"/> -->
                <PhMoon :size="32" class="icon-button moon" weight="fill" />
            </div>
            <div style="margin-top: 10px;">
                <h3 id="typewriter" style="text-align: center;">Tiago Alves</h3>
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
                    <a href="https://t.me/TiagoDevelop" target="_blank" class="icon-telegram">
                        <PhTelegramLogo :size="32" />
                    </a>
                </Tooltip>
                <Tooltip title="WHATSAPP">
                    <a href="https://wa.link/1yl95p" target="_blank" class="icon-whatsapp">
                        <PhWhatsappLogo :size="32" />
                    </a>
                </Tooltip>
                <Tooltip title="LINKEDIN">
                    <a href="https://www.linkedin.com/in/tiago-alves-dos-santos-de-oliveira-96699a189/" target="_blank" class="icon-linkedin">
                        <PhLinkedinLogo :size="32" />
                    </a>
                </Tooltip>
                <Tooltip title="GITHUB">
                    <a href="https://github.com/SSoftware2024" target="_blank" class="icon-github">
                        <PhGithubLogo :size="32" />
                    </a>
                </Tooltip>
                <Tooltip title="CURRÍCULO">
                    <a :href="files.curriculo" download class="icon-pdf">
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
    </div>

</template>
<script setup>
import { Tooltip } from '@programic/vue3-tooltip';
import { ref, onMounted } from 'vue';
import * as files from '../js/files.js';
import { PhTelegramLogo, PhWhatsappLogo, PhLinkedinLogo, PhFilePdf, PhGithubLogo, PhSun, PhMoon } from "@phosphor-icons/vue";
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
    width: 100%;
    display: flex;
    justify-content: center;
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
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    img {
        width: 140px;
        border-radius: 100%;
        border: 5px solid var(--primary-color);
    }
}

div.theme-toggle {
    position: absolute;
    top: 0;
    right: 0px;

    .icon-button {
        cursor: pointer;

        &.moon {
            color: #3b82f6;
        }

        &.sun {
            color: #eab308;
        }
    }
}
</style>
