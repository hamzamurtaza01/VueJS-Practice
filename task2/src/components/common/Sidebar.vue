<template>
  <a-layout-sider class="sidebar">
    <router-link v-for="item in sideBarItems" :key="item.title" :to="item.route">
      <div
        :class="[
          'primary-sidebar',
          'sidebar-menu-item',
          isCurrentRouteActive(item.route) && 'active-route',
        ]"
      >
        <span>{{ item.title }}</span>
      </div>
    </router-link>
  </a-layout-sider>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const sideBarItems = [
  {
    title: "User Profile",
    route: "/user-profile",
  },
  {
    title: "About",
    route: "/about",
  },
];

export default defineComponent({
  name: "side-bar",

  props: {
    currentRoutePath: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      sideBarItems,
    };
  },

  methods: {
    isCurrentRouteActive(route: string) {
      return route === this.currentRoutePath?.slice(0, route.length);
    },
  },
});
</script>

<style scoped>

.sidebar {
  background-color: #13151b;
  height: calc(100% - 24px - 24px);
  padding: 24px 8px;
}
.primary-sidebar {
  display: flex;
  flex-direction: column;
  /* background-color: #13151b; */
  padding: 12px;
}

/* .logo {
  padding: calc(1.2vh + 0.65rem) 24px 1.2vh
    24px;
  text-align: left;
  height: calc(2.5rem + 1px + 2 * 1.2vh);
}

.logo img {
  height: calc(1.5175 * 1.2rem);
} */

.sidebar-menu-item {
  display: flex;
  justify-content: start; 
  /* align-items: center; */
}

.sidebar-menu-item span {
  color: #a3abb9;
  font-size: 14px;
}

.last-menu-item {
  margin-bottom: 0 !important;
}

.sidebar-menu-item:hover span {
  color: #fd8535;
  fill: #fd8535;
}

/* .lower-portion-sidebar {
  position: absolute;
  bottom: calc(1.2vh + 0.65rem);
} */

.active-route {
  border-left: 4px solid #fc7010 !important;
}

.active-route span {
    color: #f3f4f6;
    font-size: 14px;
  }
</style>
