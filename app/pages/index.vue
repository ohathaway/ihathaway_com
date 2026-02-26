<template>
  <div class="home-wrapper">
    <TheIntro />
    <div id="learn-more">
      <TheBellyButton />
      <TheAttorney />
      <TheTechnologist />
      <TheProblemSolver />
      <TheHusband />
    </div>
    <ContactInfo />
  </div>
</template>

<style>
body {
  .home-wrapper {
    font-size: 140%;
  }
  .role-odd {
    .role-description {
      padding-right: 2rem;
    }
  }
  .role-even {
    &.role-info {
      padding: 5rem 10rem;
    }
    &.role-icon {
      text-align: right;
    }
  }
}
</style>
