<template class="mosaic">
  <div class="mosaic__board mosaic__container">
    <h1>Vos post-it :</h1>
  </div>
  <slot name="postItInput"></slot>
  <div class="mosaic__board mosaic__container">
    <div class="mosaic__board__row">
      <slot name="postItItems"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin respond-to($breakpoint) {
  @if $breakpoint == sm {
    @media (min-width: 576px) {
      @content;
    }
  } @else if $breakpoint == md {
    @media (min-width: 768px) {
      @content;
    }
  } @else if $breakpoint == lg {
    @media (min-width: 992px) {
      @content;
    }
  } @else if $breakpoint == xl {
    @media (min-width: 1200px) {
      @content;
    }
  }
}

@mixin flex-center {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px;
}

.mosaic {
  &__board {
    @include flex-center;
  }

  &__board {
    background-color: whitesmoke;
    &__row {
      display: flex;
      flex-wrap: wrap;
      margin-right: -15px;
      margin-left: -15px;
    }
  }

  &__container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @include respond-to(sm) {
      width: 540px;
    }
    @include respond-to(md) {
      width: 720px;
    }
    @include respond-to(lg) {
      width: 960px;
    }
    @include respond-to(xl) {
      width: 1140px;
    }
  }
}
</style>
