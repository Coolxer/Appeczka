<script setup lang="ts">
import VNavBar from "@/components/VNavBar.vue";
import VMain from "@/components/VMain.vue";
import VFooter from "@/components/VFooter.vue";

import { useTheme } from "@/stores/theme";

const themeStore = useTheme();

console.log(localStorage.getItem("theme-color"));
</script>

<template>
  <div class="container" :class="themeStore.themeClass">
    {{ themeStore.themeClass }}
    <VNavBar />
    <VMain />
    <VFooter />
    januszek
  </div>
</template>

<style lang="scss">
// here cannot be scoped because #app is in .html file

@import "@/assets/style/style.scss";
@import "@/assets/style/themes.scss";

#app {
}

.container {
  display: grid;
  grid-template-rows: 1fr 8fr 1fr;

  place-items: center;
  font-size: 1.6rem;

  background-color: getColor(background--color);
  color: getColor(text--color);
}
</style>
