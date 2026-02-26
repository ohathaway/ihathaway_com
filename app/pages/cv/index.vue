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
  background: var(--gainsboro);
  a {
    color: var(--dark);
    text-decoration: none;
    &:hover {
      color: var(--dark-cornflower-blue);
      text-decoration: underline;
    }
  }
}
</style>
