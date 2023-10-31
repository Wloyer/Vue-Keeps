<template>
  <div v-if="isInputMode">
    <form @submit.prevent="actionPostIt">
      <div class="postit-centeredDiv">
        <textarea
          type="text"
          v-model="Input"
          class="postit-post-it"
          placeholder="Nouveau Post-It"
        />
      </div>
      <div class="postit-centeredDiv">
        <ButtonValidate @validate="actionPostIt"></ButtonValidate>
      </div>
    </form>
  </div>
  <div v-else class="postit-centeredDiv">
    <textarea type="text" readonly class="postit-post-it" :value="content" />
    <ButtonDelete @delete="deletePostIt" :index="index"></ButtonDelete>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonValidate from "./ButtonValidate.vue";
import ButtonDelete from "./ButtonDelete.vue";
export default defineComponent({
  props: {
    content: {
      type: String,
      default: "",
    },
    isInputMode: {
      type: Boolean,
      default: false,
    },
    index: Number,
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
    deletePostIt(index: number) {
      this.$store.commit("removePostIt", index);
    },
  },
  components: {
    ButtonValidate,
    ButtonDelete,
  },
});
</script>

<style lang="scss" scoped>
.postit-centeredDiv {
  display: flex;
  justify-content: center;
  align-items: center;
}
.postit-post-it {
  width: 250px;
  height: 250px;
  background-color: #ffeb3b;
  border: none;
  padding: 20px;
  font-size: 18px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  margin: 10px;
}
</style>
