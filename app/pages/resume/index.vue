<template>
  <div id="resume" class="m-0 p-0">
    <ResumeHeader />
    <ResumeColumns />
  </div>
</template>

<style>
#resume {
}
.bg-gray {
  background: var(--color-gainsboro);
  a {
    color: var(--color-dark);
    text-decoration: none;
    &:hover {
      color: var(--color-dark-cornflower-blue);
      text-decoration: underline;
    }
  }
}
</style>
