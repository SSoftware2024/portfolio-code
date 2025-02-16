<template>
    <div>
        <Card title="EXPERIÊNCIAS" class="card-content">
            <div style="margin-bottom: 10px;">
                <!-- <h4>Nível: <span class="primary-color">Pleno</span></h4> -->
                <h4>Experiência: <span class="primary-color">{{ dateCount.years }} anos <span v-if="dateCount.months > 0"> e {{ dateCount.months }} meses/mês </span> </span> </h4>
                <h4>Graduado: <span class="primary-color">Sistemas de Informação</span> </h4>
            </div>
            <div class="company" style="margin-bottom: 15px;">
                <div class="logo">
                    <img :src="logo_vwp" alt="">
                </div>
                <h2>VWP AGÊNCIA DIGITAL, SP</h2>
                <h5 class="info-time">SET de 2021 - ATUALMENTE</h5>
                <div class="content">
                    <ul>
                        <li>Criação e consumo de APIs</li>
                        <li>Criação de CronJobs e eventos em tempo real com uso de filas</li>
                        <li>Configurações em hospedagem compartilhada e VPS</li>
                        <li>Atualização de sistemas legados</li>
                        <li>Criação de sistema desde a modelagem, telas, versionamento a lançamento de versão estável
                        </li>
                        <li>
                            <i style="font-weight: 600;">Em progresso...</i>
                        </li>
                    </ul>
                </div>

            </div>
            <hr />
            <div class="company" style="margin-top: 10px;">
                <div class="logo">
                    <img :src="logo_dc" alt="">
                </div>
                <h2>DC TECNOLOGIA, SP</h2>
                <h5 class="info-time">MAR de 2019 - JUN de 2021</h5>
                <div class="content">
                    <ul>
                        <li>Criação de layouts com responsividade.</li>
                        <li>Operações de CRUD</li>
                        <li>Trabalhar com git em equipe, <span style="font-weight: 600;">gitflow</span></li>
                    </ul>
                </div>

            </div>
        </Card>
    </div>
</template>
<script setup>
//COMPONENTS
import Card from '../components/Card.vue';
import { logo_dc, logo_vwp } from '../js/files.js';

const dateDiff = (date1, date2 = new Date()) => {
    let years = date2.getFullYear() - date1.getFullYear();
    let months = date2.getMonth() - date1.getMonth();
    let days = date2.getDate() - date1.getDate();

    if (days < 0) {
        months--;
        const lastMonthDate = new Date(date2.getFullYear(), date2.getMonth(), 0);
        days += lastMonthDate.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
};

//uso
const dateStart = new Date('2019-03-01');
const dateCount = dateDiff(dateStart);
</script>
<style scoped lang="scss">
div.company {
    position: relative;
    ul {
        margin-left: 30px;
    }

    .info-time {
        color: var(--text-second-color);
    }
    .logo{
        position: absolute;
        right: 0;
        display: flex;
        justify-content: center;
        position: absolute;
        img{
            width: 60px;
        }
    }
    @media (max-width: 410px) {
        .logo{
            display: none;
        }
    }
}
.dark{
    h5.info-time {
        color: var(--text-second-color-dark);
    }
}
</style>