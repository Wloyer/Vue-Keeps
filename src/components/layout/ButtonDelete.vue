<template>
  <button @click="deleteSelf" class="btn btn-danger btn-sm ml-2">X</button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  index: Number,
});
const emit = defineEmits(["delete"]);
const deleteSelf = () => {
  emit("delete", props.index);
};
</script>
