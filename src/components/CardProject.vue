<template>
  <div class="container-project">
    <div class="logo">
      <img :src="img_url" alt="" />
    </div>
    <h3 style="text-align: center">{{ title }}</h3>
    <div class="description">
      <slot></slot>
    </div>
    <div class="technologies">
      <div v-if="list_technologies">
        <ul>
          <li v-for="value in list_technologies">{{ value }}</li>
        </ul>
      </div>
    </div>
    <div class="links">
      <Button class="black" v-if="links.github" @click="openLink(links.github)">
        GITHUB
      </Button>
      <Button class="red" v-if="links.youtube" @click="openLink(links.youtube)">
        YOUTUBE
      </Button>
      <Button class="green" v-if="links.online" @click="openLink(links.online)">
        ONLINE
      </Button>
    </div>
  </div>
</template>
<script setup>
import Button from "./Button.vue";
defineProps({
  img_url: String,
  title: String,
  list_technologies: {
    type: Array,
    default: () => [],
  },
  links: {
    type: Object,
    default: () => ({
      youtube: "",
      github: "",
      online: "",
    }),
  },
});

function openLink(link) {
  window.open(link);
}
</script>
<style scoped lang="scss">
div.container-project {
  box-shadow:
    rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
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
</style>
