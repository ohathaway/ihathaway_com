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
  font-size: 150%;
  a {
    color: $gainsboro;
    font-family: Optima;
    text-decoration: none;
    &:hover {
      color: $light-steel-blue;
      text-decoration: underline;
    }
  }
  h1, h2, h3, h4, h5 {
    font-family: TrajanPro;
    color: $primary;
  }
  h2 {
    font-size: 140%;
  }
  .w-60 {
    width: 60%;
  }
  .row {
    margin: 0;
  }
  .role-odd {
    .role-description { padding-right: 2rem; }
  }
  .role-even {
    &.role-info { padding: 5rem 10rem; }
    &.role-icon { text-align: right; }

  }
}
</style>
