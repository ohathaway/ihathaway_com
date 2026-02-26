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
