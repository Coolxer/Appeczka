<script setup lang="ts">
import { ref } from "vue";
import { NConfigProvider, enUS, dateEnUS, darkTheme } from "naive-ui";
import { BuiltInGlobalTheme } from "naive-ui/lib/themes/interface";

import { NGrid, NGridItem, NCard, NSpace, NButton } from "naive-ui";

const theme = ref<BuiltInGlobalTheme>(darkTheme); // null means light theme
</script>

<template>
  <n-config-provider :locale="enUS" :date-locale="dateEnUS" :theme="theme">
    <n-grid :x-gap="12" :cols="1">
      <n-grid-item>
        <n-card>
          <n-space>
            <n-button @click="theme = darkTheme">Dark</n-button>
            <n-button @click="theme = null">Light</n-button>
          </n-space>
        </n-card>
      </n-grid-item>
    </n-grid>
  </n-config-provider>
</template>

<style scoped lang="scss">
#app {
  width: 100%;
  min-height: 100vh;
  background-color: #262626;
}
</style>
