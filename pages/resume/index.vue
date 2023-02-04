<template>
  <div id="resume" class="m-0 p-0">
    <ResumeHeader />
    <ResumeColumns />
  </div>
</template>

<style lang="scss">
#resume {
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
