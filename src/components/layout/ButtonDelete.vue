<template>
  <button @click="deleteSelf" class="btn btn-danger btn-sm ml-2">X</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: { index: Number },
  methods: {
    deleteSelf() {
      this.$emit("delete", this.index);
    },
  },
});
</script>
