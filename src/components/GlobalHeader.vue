<template>
  <div id="globalHeader">
    <a-row wrap="false">
      <a-col flex="200px"
        ><div class="title-bar">
          <img src="@/assets/logo.png" alt="logo" class="logo" />
          <span class="title">User Center</span>
        </div></a-col
      >
      <a-col flex="auto"
        ><a-menu
          v-model:selectedKeys="current"
          mode="horizontal"
          :items="items"
          @click="doMenuclick"
      /></a-col>
      <a-col flex="80px"
        ><div class="user-login-status">
          <a-button type="primary" href="/user/login">Primary Button</a-button>
        </div></a-col
      >
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import { h, ref } from "vue";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from "@ant-design/icons-vue";
import { MenuProps } from "ant-design-vue";
import { useRouter } from "vue-router";

const router = useRouter();
// 点击菜单路由跳转
const doMenuclick = ({ key }: { key: string }) => {
  router.push({ path: key });
};

const current = ref<string[]>(["mail"]);

router.afterEach((to) => {
  current.value = [to.path];
});

const items = ref<MenuProps["items"]>([
  {
    key: "/",
    icon: () => h(MailOutlined),
    label: "Navigation One",
    title: "Navigation",
  },
  {
    key: "/user/login",
    icon: () => h(AppstoreOutlined),
    label: "Navigation Two",
    title: "Navigation Two",
  },
  {
    key: "/user/register",
    icon: () => h(SettingOutlined),
    label: "Navigation Three - Submenu",
    title: "Navigation Three - Submenu",
  },
  {
    key: "/user/manage",
    label: h("a", { href: "https://antdv.com", target: "_blank" }, "Navigation Four - Link"),
    title: "Navigation Four - Link",
  },
]);
</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}
.title {
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
  color: black;
}
.logo {
  width: 32px;
  height: 32px;
}
</style>
