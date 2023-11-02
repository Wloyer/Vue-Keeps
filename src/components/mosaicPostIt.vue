<template class="mosaic">
  <div class="mosaic__titre mosaic__container">
    <h1>Vos post-it :</h1>
  </div>
  <slot name="postItInput"></slot>
  <div class="mosaic__board mosaic__container">
    <div class="mosaic__board-row">
      <slot name="postItItems"></slot>
    </div>
  </div>
</template>

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
