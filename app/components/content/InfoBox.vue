<template>
  <div class="info-box rounded p-3" :class="[type]">
    <details>
      <summary>
        <font-awesome-icon
          icon="fa-solid fa-triangle-exclamation"
          v-if="type === 'warning'"
        />
        <font-awesome-icon
          icon="fa-solid fa-ban"
          v-else-if="type === 'error'"
        />
        <font-awesome-icon
          icon="fa-solid fa-circle-info"
          v-else
        />
        <slot />
      </summary>
      <div class="details pt-2">
        <slot name="details" />
      </div>
    </details>
  </div>
</template>

<script setup>
const props = defineProps(['type'])
</script>

<style scoped>
.info-box {
  border: 1px solid;
  &.error {
    color: var(--red-700);
    border-color: var(--danger);
    background: var(--red-200);
  }
  &.warning {
    color: var(--yellow-700);
    border-color: var(--warning);
    background: var(--yellow-200);
  }

  summary::marker {
    display: none;
    content: "";
  }

  summary svg {
    float: left;
    padding-right: 1.6rem;
  }
}
</style>
