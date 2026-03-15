<template>
  <div>
    <Card title="PROJETOS" class="card-content">
      <div class="row-project">
        <CardProject
          :img_url="projects.uninta"
          title="UNINTA (processo - aprovado)"
          :list_technologies="['LARAVEL', 'BOOTSTRAP', 'LARAVEL SANCTUM', 'VUE', 'PINIA','VITE']"
          :links="{
            github: 'https://github.com/SSoftware2024/UNINTA_AVALIACAO',
          }"
        >
          <p>
            Lista de tarefas com app vue separado conetacdo via API com laravel sanctum.
          </p>
        </CardProject>
        <CardProject
          :img_url="projects.todoList"
          title="TODO LISTA"
          :list_technologies="['PHP', 'REACT', 'MAETERIAL UI']"
          :links="{
            github: 'https://github.com/SSoftware2024/todoList',
            youtube: 'https://www.youtube.com/watch?v=J6kNsvGzdFI'
          }"
        >
          <p>CRUD de lista com login</p>
        </CardProject>

        <CardProject
          :img_url="projects.portfolio"
          title="PORTFOLIO"
          :list_technologies="['VITE', 'VUE', 'SASS']"
          :links="{
            github: 'https://github.com/SSoftware2024/portfolio-code'
          }"
        >
          <p>Projeto portfolio, meu currículo online</p>
        </CardProject>
      </div>
    </Card>
  </div>
</template>
<script setup>
//COMPONENTS
import Card from "../components/Card.vue";
import Button from "../components/Button.vue";
import CardProject from "../components/CardProject.vue";
import { projects } from "../js/files.js";
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
}

.dark {
  .row-project {
    .container-project {
      box-shadow:
        rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
        rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
        rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    }
  }
}
</style>
