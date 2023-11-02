<template>
  <div class="postit-titre container">
    <h1>Vos post-it :</h1>
  </div>
  <PostIt isInputMode />
  <div class="postit-board container mt-5">
    <div class="row">
      <div
        v-for="(postItsContent, index) in postItList"
        :key="index"
        class="col-md-4"
      >
        <PostIt :content="postItsContent" :index="index" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import PostIt from "./layout/PostIt.vue";

import { defineComponent } from "vue";
export default defineComponent({
  components: {
    PostIt,
  },
  computed: {
    postItList() {
      return this.$store.getters.GetPostIt;
    },
  },
});
</script>
<style scoped>
.postit-board {
  height: 100%;
  width: 100%;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  padding: 50px;
}
.postit-titre {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px;
}
</style>
