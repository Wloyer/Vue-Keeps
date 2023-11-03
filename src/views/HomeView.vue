<template>
  <MosaicPostIt>
    <template v-slot:postItInput>
      <PostIt :is-input-mode="true" />
    </template>

    <template v-slot:postItItems>
      <div
        v-for="(postItsContent, index) in postItList"
        :key="index"
        class="col-md-4"
      >
        <PostIt :content="postItsContent" :index="index" />
      </div>
    </template>
  </MosaicPostIt>
</template>

<script setup lang="ts">
import MosaicPostIt from "../components/mosaicPostIt.vue";
import PostIt from "../components/layout/PostIt.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const postItList = computed(() => store.getters.GetPostIt);
</script>
