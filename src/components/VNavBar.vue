<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { NGrid, NGridItem, NAvatar } from "naive-ui";

import VMenu from "@/components/VMenu.vue";
import VConfigProvider from "@/components/VConfigProvider.vue";

import logo from "@/assets/img/signature.png";

let isAppScrolled = ref(false);

const handleScroll = (event: Object): void => {
  isAppScrolled.value = window.scrollY >= 200;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <n-grid
    :cols="8"
    class="navbar"
    :class="{
      'highlighted-navbar': isAppScrolled,
    }"
  >
    <n-grid-item span="1" class="brand">
      <n-grid :cols="2">
        <n-grid-item class="brand-logo"
          ><n-avatar size="large" :src="logo"></n-avatar
        ></n-grid-item>
        <n-grid-item class="brand-name">APPECZKA</n-grid-item>
      </n-grid>
    </n-grid-item>
    <n-grid-item span="1"></n-grid-item>
    <n-grid-item span="3">
      <VMenu />
    </n-grid-item>
    <n-grid-item span="1"></n-grid-item>
    <n-grid-item span="2" class="v-config-provider">
      <VConfigProvider />
    </n-grid-item>
  </n-grid>
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Audiowide&display=swap");

.navbar {
  align-self: start;
  position: fixed;
  top: 0;
  z-index: 9;
  transition: background-color 0.5s ease;

  .brand {
    display: grid;
    justify-content: center;
    padding: 10px;
    .brand-logo {
    }

    .brand-name {
      display: grid;
      place-items: center;
      color: #41b883;

      font-size: 1.5rem;
      font-family: "Audiowide", cursive;
    }
  }
  .v-config-provider {
    display: grid;
    align-items: center;
    color: #ffffff;
  }
}

.highlighted-navbar {
  //background-color: #34495e;
  background-color: #41b883;

  .brand-name {
    color: #ffffff;
  }
}
</style>
