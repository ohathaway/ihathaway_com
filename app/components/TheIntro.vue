<template>
  <section id="intro" class="flex flex-wrap">
    <header class="flex flex-wrap">
      <div class="intro-name sm:w-full">
        <h1 class="my-name hidden lg:block">
          Owen Hathaway
        </h1>
        <h1 class="my-name lg:hidden text-4xl">
          Owen Hathaway
        </h1>
        <span class="my-roles">
          <a href="#attorney">attorney</a> &bull;
          <a href="#technologist">technologist</a> &bull;
          <a href="#problem-solver">problem solver</a> &bull;
          <a href="#writer">writer</a> &bull;
          <a href="#husband">husband</a>
        </span>
      </div>
    </header>
    <div class="flex flex-wrap">
      <div class="intro-arrow sm:w-1/12 sm:ml-[91.666%]">
        <a href="#bellybutton" title="The Belly Button">
          <span class="fa-stack fa-2x">
            <font-awesome-icon
              icon="fa-solid fa-circle"
              class="fa-stack"
              transform="shrink-5"
            />
            <font-awesome-icon
              icon="fa-solid fa-arrow-down"
              class="fa-stack-1x fa-inverse"
              transform="shrink-4"
            />
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<style>
#intro {
  background: var(--color-gainsboro);
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
      color: var(--color-dark);
      font-family: Optima, Candara, "Segoe UI", "Gill Sans", sans-serif;
      a {
        color: var(--color-dark);
      }
    }
  }
  .intro-arrow {
    text-align: right;
    a {
      color: var(--color-dark);
      &:hover {
        color: var(--color-light-slate-gray);
      }
    }
  }
}
</style>
