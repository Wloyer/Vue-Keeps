<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<template>
  <form >
  <div class="d-flex justify-content-center align-items-center">
    <textarea type="text" v-model="Input" class="post-it" placeholder="Nouveau Post-It" />
  </div>
  <div class="d-flex justify-content-center align-items-center">
    <button
      type="button"
      class="btn btn-warning btnCustom"
      @click="actionPostIt"
    >
      Ajouter
    </button>
  </div>
  </form>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
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
<style scoped>
.post-it {
  width: 250px;
  height: 250px;
  background-color: #ffeb3b;
  border: none;
  padding: 20px;
  font-size: 18px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  margin: 10px;
}
.btnCustom {
  margin: 10px;
}
</style>
