<template>
  <div id="blog">
    <ResumeHeader />
    <main>
      <BlogColumns />
    </main>
  </div>
</template>

<script setup>
var topNavClasses = [
  'row',
  'justify-content-end',
  'm-0',
  'w-100',
  'position-sticky',
  'top-0'
]
</script>

<style lang="scss">
#blog {
  font-family: Optima;
  font-size: 90%;
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
