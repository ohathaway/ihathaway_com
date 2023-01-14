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
        <ContentSlot :use="$slots.details" unwrap="p"></ContentSlot>
      </div>
    </details>
  </div>
</template>

<script setup>
const props = defineProps(['type'])
</script>

<style scoped lang="scss">
.info-box {
  border: 1px solid;
  &.error {
    color: $red-700;
    border-color: $danger;
    background: $red-200;
  }
  &.warning {
    color: $yellow-700;
    border-color: $warning;
    background: $yellow-200;
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
