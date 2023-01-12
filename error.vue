<template>
  <div class="p-8 mx-auto">
    <div class="row align-items-center justify-content-center">
      <div class="col-5">
        <h1>{{ error.statusCode }}</h1>
        <h2>{{ error.message }}</h2>
      </div>
      <div class="col-7">
        <p>Meanwhile, please enjoy the following Internet cat video.</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fEs6O2NGdrs?autoplay=1"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <button class="btn btn-secondary" @click="handleError">
          or go Home
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object // eslint-disable-line vue/require-default-prop
})

console.error('error: ', props.error)
const handleError = () => clearError({ redirect: '/' }) // eslint-disable-line no-undef
</script>

<style lang="scss">
@import '~/assets/styles/global.scss';

body {
  background: $gainsboro;
}

h1 {
  font-family: TrajanPro;
}

h2,
p {
  font-family: Optima;
}

p {
  font-size: 140%;
}
</style>
