<template>
  <div v-if="isInputMode">
    <form @submit.prevent="actionPostIt">
      <div class="postit__centeredDiv">
        <textarea
          type="text"
          v-model="Input"
          class="postit__centeredDiv__textArea"
          placeholder="Nouveau Post-It"
        />
      </div>
      <div class="postit__centeredDiv">
        <ButtonValidate @validate="actionPostIt"></ButtonValidate>
      </div>
    </form>
  </div>
  <div v-else class="postit__centeredDiv">
    <textarea
      type="text"
      readonly
      class="postit__centeredDiv__textArea"
      :value="content"
    />
    <ButtonDelete @delete="deleteSelf" :index="index"></ButtonDelete>
  </div>
</template>

<script setup lang="ts">
import { ref, withDefaults } from "vue";
import { useStore } from "vuex";
import ButtonValidate from "./ButtonValidate.vue";
import ButtonDelete from "./ButtonDelete.vue";

// Props
const props = withDefaults(
  // eslint-disable-next-line no-undef
  defineProps<{
    content?: string;
    isInputMode?: boolean;
    index?: number;
  }>(),
  {
    content: "",
    isInputMode: false,
  }
);

const store = useStore();
const Input = ref("");

const actionPostIt = () => {
  store.commit("addPostIt", Input.value);
  Input.value = "";
};

const deleteSelf = () => {
  store.commit("deletePostIt", props.content);
};
</script>

<!-- <script lang="ts">
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
    deleteSelf() {
      this.$store.commit("deletePostIt", this.content);
    },
  },
  components: {
    ButtonValidate,
    ButtonDelete,
  },
});
</script> -->

<style lang="scss" scoped>
.postit__centeredDiv {
  display: flex;
  justify-content: center;
  align-items: center;

  &__textArea {
    width: 250px;
    height: 250px;
    background-color: #ffeb3b;
    border: none;
    padding: 20px;
    font-size: 18px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    margin: 10px;
  }
}
</style>
