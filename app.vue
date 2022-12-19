<template>
  <TheIntro />
  <div id="learn-more">
    <TheBellyButton />
    <TheAttorney />
    <TheTechnologist />
    <TheProblemSolver />
    <TheHusband />
  </div>
  <ContactInfo />
</template>

<style lang="scss">
body {
  font-family: Optima;
  a {
    color: $gainsboro;
    font-family: Optima;
    &:hover {
      color: $light-steel-blue;
    }
  }
  h1, h2, h3, h4, h5 {
    font-family: TrajanPro;
    color: $primary;
  }
  h2 {
    font-size: 140%;
  }
  .row {
    margin: 0;
  }
  .role-odd {
    // &.role-info { padding: 5rem 10rem; }
  }
  .role-even {
    &.role-info { padding: 5rem 10rem; }
    &.role-icon { text-align: right; }

  }
}
</style>
