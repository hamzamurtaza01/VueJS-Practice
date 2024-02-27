<template>
  <a-row class="content-layout">
    <a-col :span="4" style="height: 100vh; max-height: 100vh;">
      <sidebar current-route-path="/about" />
    </a-col>
    <a-col :span="20" style="height: 100vh; max-height: 100%; width: 100%; overflow-y: scroll;">
      <router-view />
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "@/components/common/Sidebar.vue";

export default defineComponent({
  name: "App",

  components: {
    Sidebar
  },
});
</script>

<style>
body {
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.content-layout {
  display: flex;
  height: 100vh;
  /* height: calc(100vh - 12px - 12px) subtracting top and bottom padding */
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
