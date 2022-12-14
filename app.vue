<template>
  <TheIntro />
  <div id="learn-more">
    <TheAttorney />
    <ContactInfo />
  </div>
</template>

<style lang="scss">
* {
  font-family: Optima;
  a {
    color: $gainsboro;
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
}
</style>
