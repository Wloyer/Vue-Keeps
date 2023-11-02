<template>
  <header class="header">
    <nav class="header__nav">
      <h1 class="header__nav__h1">
        <router-link class="header__nav__h1__a" to="/">View Keeps</router-link>
      </h1>
      <ul class="header__nav__ul">
        <li class="header__nav__ul__li">
          <router-link class="header__nav__ul__li__a" to="/"
            >Somthing</router-link
          >
        </li>
        <li class="header__nav__ul__li">
          <router-link class="header__nav__ul__li__a" to="/"
            >Somthing else</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 5rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #000;
  &__nav {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__h1 {
      &__a {
        text-decoration: none;
        color: black;
        display: inline-block;
        padding: 0.75rem 1.5rem;
        border: 1px solid transparent;

        &:hover,
        &:active,
        &.router-link-active {
          border-color: transparent;
        }
      }
    }

    &__ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      &__li {
        margin: 0 0.5rem;

        &__a {
          text-decoration: none;
          color: black;
          display: inline-block;
          padding: 0.75rem 1.5rem;
          border: 1px solid transparent;

          &:active,
          &:hover,
          &.router-link-active {
            border: 1px solid gray;
          }
        }
      }
    }
  }
}
</style>
