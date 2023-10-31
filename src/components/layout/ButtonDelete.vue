<template>
  <button @click="deleteSelf" class="btn btn-danger btn-sm ml-2">X</button>
</template>

<script lang="ts">
export default {
  props: { index: Number },
  methods: {
    deleteSelf() {
      this.$emit("delete", this.index);
    },
  },
};
</script>
