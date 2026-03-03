<template>
  <div
    id="myName"
    :class="[
      colClass,
      'text-center mb-0 text-blue-900',
      props.background === 'gray' ? 'bg-gray' : ''
    ]"
  >
    <h1 class="m-0">Owen Hathaway</h1>
    <p id="subtitle" class="m-0">
      attorney &bull; technologist &bull; problem solver &bull; husband
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(['cols', 'background'])

const colsMap = {
  '3': 'w-3/12',
  '9': 'w-9/12',
  '12': 'w-full',
}

const colClass = computed(() => colsMap[props.cols] || 'w-full')
</script>

<style>
#myName {
  padding: 3rem 0;

  &>* {
    transition: 0.5s;
  }
}
</style>
