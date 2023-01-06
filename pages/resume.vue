<template>
  <div id="resume" class="m-0 p-0">
    <ResumeHeader />
    <ResumeColumns />
  </div>
</template>

<style lang="scss">
#resume {
  font-family: Optima;
  font-size: 120%;
}
.bg-gray {
  background: $gainsboro;
  a {
    color: $dark;
    &:hover {
      color: $dark-cornflower-blue;
    }
  }
}
</style>
