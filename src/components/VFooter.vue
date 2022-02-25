<script setup lang="ts">
import { NGrid, NGridItem, NDivider } from "naive-ui";
</script>

<template>
  <n-grid :cols="1" class="footer">
    <n-grid-item class="data">
      <n-grid :cols="3">
        <n-grid-item>
          <n-grid :cols="2">
            <n-grid-item>logo</n-grid-item>
            <n-grid-item>LookUS</n-grid-item>
          </n-grid>
        </n-grid-item>
        <n-grid-item>
          <span class="links-label">Links</span>
          <n-divider />
          <n-grid :cols="1">
            <n-grid-item>Home</n-grid-item>
            <n-grid-item>About</n-grid-item>
            <n-grid-item>Offer</n-grid-item>
            <n-grid-item>Bid request</n-grid-item>
            <n-grid-item>Contact</n-grid-item>
          </n-grid>
        </n-grid-item>
        <n-grid-item
          ><span class="contact-label">Contact</span>
          <n-divider />
          <n-grid :cols="1">
            <n-grid-item>e-mail: lukasz.milos@int.pl</n-grid-item>
            <n-grid-item>
              <n-grid :cols="3">
                <n-grid-item>in</n-grid-item>
                <n-grid-item>gh</n-grid-item>
                <n-grid-item>tw</n-grid-item>
              </n-grid>
            </n-grid-item>
          </n-grid>
        </n-grid-item>
      </n-grid>
    </n-grid-item>
    <n-grid-item class="copyright">
      Copyright &copy; {{ new Date().getFullYear() }} <b>LookUS</b>. All Rights
      Reserved.
    </n-grid-item>
  </n-grid>
</template>

<style scoped lang="scss">
.footer {
  place-items: center;

  color: #ffffff;
  background-color: #1a1a1a;

  box-shadow: 1px 1px 2px 2px #0d0d0d;

  .data {
    width: 60%;
    padding: 10px;

    .links-label,
    .contact-label {
      font-weight: bold;
      font-size: 20px;
    }
  }
  .copyright {
    text-align: center;
    width: 100%;
    padding: 20px 0;
    background-color: #0d0d0d;
  }
}
</style>
