<template>
  <button type="button" class="btn btn-warning" @click="validateAction">
    Ajouter
  </button>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";

const emit = defineEmits(["validate"]);

const validateAction = () => {
  emit("validate");
};
</script>
