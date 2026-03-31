<template>
  <div class="p-28 mx-auto">
    <div class="flex flex-wrap items-center justify-center">
      <div class="w-5/12">
        <h1>{{ error.statusCode }}</h1>
        <h2>{{ error.message }}</h2>
      </div>
      <div class="w-7/12">
        <p>Meanwhile, please enjoy the following Internet cat video.</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fEs6O2NGdrs?autoplay=1"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full">
        <button
          class="px-4 py-2 bg-secondary text-dark rounded-md hover:opacity-90 cursor-pointer"
          @click="handleError"
        >
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

<style>
body {
  background: var(--color-gainsboro);
}

h1 {
  font-family: TrajanPro;
}

h2,
p {
  font-family: Optima, Candara, "Segoe UI", "Gill Sans", sans-serif;
}

p {
  font-size: 140%;
}
</style>
