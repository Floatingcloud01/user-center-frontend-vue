<template>
  <div id="basicLayout">
    <a-layout>
      <a-layout-header :style="headerStyle" class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content :style="contentStyle" class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer :style="footerStyle" class="footer">
        <a href="https://github.com"> 编程导航</a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup>
import router from "@/router";
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>

<style scoped>
#basicLayout .footer {
  background: #001529;
  text-align: center;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 16px;
}
#basicLayout .content {
  padding: 20px;
  margin-bottom: 20px;
  background-color: linear-gradient(to right, #f0f0f0, #d9d9d9);
}
#basicLayout .header {
  background-color: #f0f0f0;
  margin-bottom: 16px;
  color: unset;
  padding-inline: 20px;
}
</style>
