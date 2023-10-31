<template>
  <mosaicPostIt></mosaicPostIt>
</template>

<script lang="ts">
import mosaicPostIt from "../components/mosaicPostIt.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    mosaicPostIt,
  },
  data() {
    return {
      Input: "",
    };
  },
  methods: {
    actionPostIt() {
      this.$store.commit("addPostIt", this.Input);
      this.Input = "";
    },
  },
});
</script>
