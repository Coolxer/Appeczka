<script setup lang="ts">
import { ref } from "vue";
import { NSpace, NMenu, NAvatar } from "naive-ui";

import VConfigProvider from "@/components/VConfigProvider.vue";

const menuOptions = [
  {
    label: "Hear the Wind Sing",
    key: "hear-the-wind-sing",
  },
  {
    label: "Pinball 1973",
    key: "pinball-1973",
    disabled: true,
    children: [
      {
        label: "Rat",
        key: "rat",
      },
    ],
  },
  {
    label: "A Wild Sheep Chase",
    key: "a-wild-sheep-chase",
  },
  {
    label: "Dance Dance Dance",
    key: "Dance Dance Dance",
  },
];

const activeKey = ref(null);
</script>

<template>
  <n-space class="menu">
    <n-avatar size="large" src="#/signature.png"></n-avatar>
    <n-menu
      v-model:value="activeKey"
      mode="horizontal"
      :options="menuOptions"
    />
    <VConfigProvider />
  </n-space>
</template>

<style scoped lang="scss">
.menu {
  background-color: #0099ff;
}
</style>
