<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { useI18n } from "vue-i18n";
import {
  NGlobalStyle,
  NConfigProvider,
  NGrid,
  NGridItem,
  darkTheme,
  NSelect,
  NButton,
  NSwitch,
} from "naive-ui";

import { regions } from "@/data/regions";
import { useTheme } from "@/stores/theme";

const { locale } = useI18n({ useScope: "global" });
const store = useTheme();

const lightTheme = ref(false);

const currentTheme = computed(() => {
  return lightTheme.value ? darkTheme : null;
});

const region = reactive({
  name: regions[0]["value"],
  language: regions[0]["language"],
  date: regions[0]["date"],
});

const handleUpdateRegion = (
  selectedRegion: String,
  objectData: Object
): void => {
  region.language = objectData["language"];
  region.date = objectData["date"];
  locale.value = selectedRegion;
};

const handleUpdateTheme = (lightTheme: boolean): void => {
  store.changeTheme();
};
</script>

<template>
  <n-config-provider
    :locale="region.language"
    :date-locale="region.date"
    :theme="currentTheme"
    class="config-provider"
  >
    <!--<n-global-style />-->
    <n-grid :cols="4">
      <n-grid-item class="region">
        {{ $t("region") }}
      </n-grid-item>
      <n-grid-item>
        <n-select
          v-model:value="region.name"
          size="large"
          :options="regions"
          @update:value="handleUpdateRegion"
          disabled
        />
      </n-grid-item>
      <n-grid-item class="theme">
        {{ $t("theme") }}
      </n-grid-item>
      <n-grid-item class="theme-switcher">
        <n-switch
          v-model:value="lightTheme"
          @update:value="handleUpdateTheme"
        />
      </n-grid-item>
    </n-grid>
  </n-config-provider>
</template>

<style scoped lang="scss">
.region,
.theme {
  display: inline-grid;
  place-items: center;
}

.theme-switcher {
  display: grid;
  place-items: center;
}
</style>
