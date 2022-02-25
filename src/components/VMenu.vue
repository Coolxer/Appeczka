<script setup lang="ts">
import { NGrid, NGridItem } from "naive-ui";
</script>

<template>
  <n-grid :cols="5" class="menu">
    <n-grid-item class="menu-item">{{ $t("navbar.menu.home") }}</n-grid-item>
    <n-grid-item class="menu-item">{{ $t("navbar.menu.about") }}</n-grid-item>
    <n-grid-item class="menu-item">{{ $t("navbar.menu.offer") }}</n-grid-item>
    <n-grid-item class="menu-item">{{
      $t("navbar.menu.bid_request")
    }}</n-grid-item>
    <n-grid-item class="menu-item">{{ $t("navbar.menu.contact") }}</n-grid-item>
  </n-grid>
</template>

<style scoped lang="scss">
.menu {
  height: 100%;
  &-item {
    display: grid;
    place-items: center;
    color: #ffffff;

    -webkit-transition: font-size opacity 0.2s ease;
    -moz-transition: font-size opacity 0.2s ease;
    -o-transition: font-size opacity 0.2s ease;
    transition: font-size opacity 0.2s ease;

    &:hover {
      font-size: 2rem;
      cursor: pointer;
    }
  }
}
</style>
