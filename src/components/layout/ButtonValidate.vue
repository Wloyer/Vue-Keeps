<template>
  <button
    type="button"
    class="btn btn-warning btnCustom"
    @click="validateAction"
  >
    Ajouter
  </button>
</template>

<script lang="ts">
export default {
  methods: {
    validateAction() {
      this.$emit("validate");
    },
  },
};
</script>
