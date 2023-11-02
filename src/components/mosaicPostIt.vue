<template>
  <div class="postit-titre postit-container">
    <h1>Vos post-it :</h1>
  </div>
  <PostIt isInputMode />
  <div class="postit-board postit-container">
    <div class="postit-board-row">
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
.postit-titre {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px;
}
.postit-board {
  height: 100%;
  width: 100%;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  padding: 50px;
}

.postit-container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    width: 540px;
  }
  @media (min-width: 768px) {
    width: 720px;
  }
  @media (min-width: 992px) {
    width: 960px;
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
}
.postit-board-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
</style>
