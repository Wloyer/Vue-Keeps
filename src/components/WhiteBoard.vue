<!-- eslint-disable vue/no-textarea-mustache -->
<template>
  <div class="board container">
    <h1>Vos post-it :</h1>
  </div>
  <div class="board container mt-5">
    <div class="row">
      <div v-for="(postIts, index) in postIt" :key="index" class="col-md-4">
        <div class="d-flex justify-content-center align-items-center">
          <textarea type="text" class="post-it">{{ postIts }}</textarea>
          <button
            @click="deletePostIt(index)"
            class="btn btn-danger btn-sm ml-2"
          >
            X
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  computed: {
    postIt() {
      return this.$store.getters.NewPostIt;
    },
  },
  methods: {
    deletePostIt(index: any) {
      this.$store.commit("removePostIt", index);
    },
  },
};
</script>
<style scoped>
.board {
  height: 100%;
  width: 100%;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  padding: 50px;
}
.post-it {
  width: 250px;
  height: 250px;
  background-color: #ffeb3b;
  border: none;
  font-size: 18px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  margin: 30px;
  border-top-right-radius: 60px 10px;
}
</style>
