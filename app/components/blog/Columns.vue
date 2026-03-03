<template>
  <div id="blog-cols" class="flex flex-wrap">
    <div class="md:w-3/12 m-0 pl-6 pr-0 bg-gray min-h-screen">
      <BlogLeftCol />
    </div>
    <div class="md:w-9/12 m-0 pl-12">
      <BlogRightCol />
    </div>
  </div>
</template>

<script setup>
const pageData = inject('pageData')
</script>

<style>
#blog-cols h2 {
  font-size: 200%;
}
#blog-cols h3 {
  font-size: 120%;
}
#blog-cols h4 {
  font-size: 100%;
}
</style>
