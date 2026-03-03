<template>
  <div id="cv" class="m-0 p-0">
    <CvHeader />
    <CvColumns />
  </div>
</template>

<style>
#cv {
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
