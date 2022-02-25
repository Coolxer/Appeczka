<script setup lang="ts">
import { NGrid, NGridItem, NH1, NH2, NH5, NButton } from "naive-ui";
</script>

<template>
  <n-grid :cols="1" class="main">
    <n-grid-item>
      <n-grid :cols="1" class="encouraging-header">
        ><n-grid-item
          ><n-h1 class="header"
            >APLIKACJE I POMOC IT DOSTĘPNE CENOWO DLA KAŻDEGO!</n-h1
          ></n-grid-item
        ><n-grid-item
          ><n-h2 class="subheader"
            >CELEM PROSTOTA I FUNKCJONALNOŚĆ ZAPEWNIAJĄCA NISKIE KOSZTY</n-h2
          ></n-grid-item
        ><n-grid-item
          ><n-h5 class="paragraph"
            >Oferta przeznaczona głównie dla indywidualnych użytkowników o
            prostych i konkretnych celach</n-h5
          ></n-grid-item
        >
        <n-grid-item
          ><n-button type="primary">
            Złóż zapytanie ofertowe
          </n-button></n-grid-item
        >
      </n-grid>
    </n-grid-item>
    <!--
    <n-grid-item>
      <n-grid :cols="2">
        <n-grid-item>img</n-grid-item>
        <n-grid-item>desc</n-grid-item>
      </n-grid>
    </n-grid-item>
    <n-grid-item>
      <n-grid :cols="2">
        <n-grid-item>desc</n-grid-item>
        <n-grid-item>img</n-grid-item>
      </n-grid>
    </n-grid-item>
    <n-grid-item>
      <n-grid :cols="2">
        <n-grid-item>img</n-grid-item>
        <n-grid-item>desc</n-grid-item>
      </n-grid>
    </n-grid-item>
    -->
  </n-grid>
</template>

<style scoped lang="scss">
.main {
  padding-top: 100px;
  place-items: center;
  min-height: 100vh;
  max-height: 100vh;

  .encouraging-header {
    display: grid;
    align-items: center;

    .header {
      color: #ffffff;
    }
    .subheader {
      color: #41b883;
    }
    .paragraph {
      color: #8c8c8c;
    }
  }
}
</style>
