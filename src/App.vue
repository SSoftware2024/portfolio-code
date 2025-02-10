<script setup>
import { ref, onMounted } from 'vue';
import * as images from './js/images.js';
import Menu from './components/Menu.vue';
import MenuMobile from './components/MenuMobile.vue';

const menuViewDesktop = ref(true)
const isViewDesktop = () => {
  return window.innerWidth > 600;
}
onMounted(() => {
  menuViewDesktop.value = isViewDesktop();
  window.addEventListener('resize', function () {
    menuViewDesktop.value = isViewDesktop();
  })
})
</script>

<template>

  <div class="main-container">
    <!-- PROFILE -->
    <div class="image-profile">
      <img :src="images.profile" alt="">
      <h3>Tiago Alves</h3>
    </div>
    <!-- END PROFILE -->
    <!-- MENU -->
    <Menu v-if="menuViewDesktop"></Menu>
    <MenuMobile v-else></MenuMobile>
    <!-- END MENU -->

  </div>

</template>

<style scoped>
.main-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.image-profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 140px;
}

.image-profile img {
  border-radius: 100%;
  border: 5px solid var(--primary-color);
}

.image-profile h3 {}
</style>
