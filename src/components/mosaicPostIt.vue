<template class="mosaic">
  <div class="mosaic__titre mosaic__container">
    <h1>Vos post-it :</h1>
  </div>
  <PostIt isInputMode />
  <div class="mosaic__board mosaic__container">
    <div class="mosaic__board-row">
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

<style lang="scss" scoped>
.mosaic {
  &__titre,
  &__board {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 50px;
  }

  &__board {
    background-color: whitesmoke;
  }

  &__container {
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

  &__board-row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
}
</style>
