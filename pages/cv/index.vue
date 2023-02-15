<template>
  <div id="cv" class="m-0 p-0">
    <CvHeader />
    <CvColumns />
  </div>
</template>

<style lang="scss">
#cv {
}
.bg-gray {
  background: $gainsboro;
  a {
    color: $dark;
    text-decoration: none;
    &:hover {
      color: $dark-cornflower-blue;
      text-decoration: underline;
    }
  }
}
</style>
