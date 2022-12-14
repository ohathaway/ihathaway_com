<template>
  <section id="intro" class="row">
    <header class="row">
      <div class="intro-name col-sm-12">
        <h1 class="my-name">Owen Hathaway</h1>
        <h2 class="my-roles">
          attorney &bull; technologist &bull; problem solver &bull; husband
        </h2>
      </div>
    </header>
    <div class="row">
      <div class="intro-arrow col-sm-1 col-sm-offset-11">
        <span class="fa-stack fa-2x">
          <font-awesome-icon icon="fa-solid fa-circle" class="fa-stack-2x" />
          <font-awesome-icon icon="fa-solid fa-arrow-down" class="fa-stack-1x fa-inverse" />
        </span>
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
    }
  }
  .intro-arrow {
    color: $dark;
    text-align: right;
  }
}
</style>
