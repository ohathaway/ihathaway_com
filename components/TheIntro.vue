<template>
  <section id="intro" class="row">
    <header class="row">
      <div class="intro-name col-sm-12">
        <h1 class="my-name">Owen Hathaway</h1>
        <h2 class="my-roles">
          <a href="#attorney">attorney</a> &bull;
          <a href="#technologist">technologist</a> &bull;
          <a href="#problem-solver">problem solver</a> &bull;
          <a href="#husband">husband</a>
        </h2>
      </div>
    </header>
    <div class="row">
      <div class="intro-arrow col-sm-1 col-sm-offset-11">
        <a href="#bellybutton">
          <span class="fa-stack fa-2x">
            <font-awesome-icon icon="fa-solid fa-circle" class="fa-stack-2x" />
            <font-awesome-icon icon="fa-solid fa-arrow-down" class="fa-stack-1x fa-inverse" />
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#intro {
  background: $gainsboro;
  height: 100vh;
  padding: 10rem 0 0 0;
  width: 100%;
  div {
    padding: 0 4.7rem;
    width: 100%;
    .my-name {
      font-size: 64px;
    }
    .my-roles {
      color: $dark;
      font-family: Optima;
      font-size: 140%;
      a {
        color: $dark;
        text-decoration: none;
        &:hover { text-decoration: underline; }
      }
    }
  }
  .intro-arrow {
    text-align: right;
    a {
      color: $dark;
      text-decoration: none;
      &:hover { color: $light-slate-gray; }
    }
  }
}
</style>
