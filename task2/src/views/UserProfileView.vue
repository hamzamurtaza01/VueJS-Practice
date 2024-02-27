<template>
    <div class="user-profile">
      <UserProfile />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import UserProfile from "@/components/UserProfile.vue"; // @ is an alias to /src
  
  export default defineComponent({
    name: "HomeView",
    components: {
      UserProfile,
    },
  });
  </script>
  