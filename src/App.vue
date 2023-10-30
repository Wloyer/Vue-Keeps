<template>
  <The-header></The-header>
  <router-view></router-view>
</template>

<script lang="ts">
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>
