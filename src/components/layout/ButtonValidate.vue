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
import { defineComponent } from "vue";
export default defineComponent({
  methods: {
    validateAction() {
      this.$emit("validate");
    },
  },
});
</script>
