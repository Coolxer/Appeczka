<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { useI18n } from 'vue-i18n'
import { NConfigProvider, darkTheme, NSpace, NSelect, NButton, NSwitch } from "naive-ui";

import { regions } from "@/data/regions";
import i18n from "../i18n";

const { locale } = useI18n({ useScope: 'global' })  

const lightTheme = ref(false);

const currentTheme = computed(() => {
  return lightTheme.value ? darkTheme : null;
})

const region = reactive ({
  name: regions[0]["value"],
  language: regions[0]["language"],
  date: regions[0]["date"]
});

const handleUpdateRegion = (selectedRegion: String, objectData: Object): void => {
  region.language = objectData["language"];
  region.date = objectData["date"];
  locale.value = selectedRegion;
};

</script>

<template>
  <n-config-provider :locale="region.language" :date-locale="region.date" :theme="currentTheme">
    <n-space justify="space-around" size="large">
      <span>{{$t("region")}}</span>
      <n-select
        v-model:value="region.name"
        size="large"
        :options="regions"
        @update:value="handleUpdateRegion"
        disabled
      />
      <span>{{$t("theme")}}</span>
      <n-switch v-model:value="lightTheme"/>
    </n-space>
  </n-config-provider>
</template>

<style scoped lang="scss"></style>
