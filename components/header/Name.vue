<template>
  <div id="myName" :class="`col-${props.cols} text-center mb-0 text-blue-900`">
    <h1 class="m-0">Owen Hathaway</h1>
    <p id="subtitle" class="m-0">
      attorney &bull; technologist &bull; problem solver &bull; husband
    </p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const props = defineProps(['cols', 'background'])

onMounted(() => {
  if (props.background === 'gray') {
    document.getElementById('myName').classList.add('bg-gray')
  }
})
</script>

<style lang="scss">
#myName {
  padding: 3rem 0;

  &>* {
    transition: 0.5s;
  }
}
</style>
