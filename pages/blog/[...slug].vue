<template>
  <div id="blog">
    <div class="row w-100">
      <div class="col-3 bg-gray h-25 p-4 d-none d-md-block"></div>
      <div class="col-9"></div>
    </div>
    <header id="topNav" :class="topNavClasses">
      <div class="col-md-3 bg-gray ps-5">
        <p>
          <font-awesome-icon icon="fa-solid fa-envelope" />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="mailto:owen@ohlawcolorado.com">owen@ohlawcolorado.com</a>
        </p>
        <p>
          <font-awesome-icon icon="fa-brands fa-linkedin" />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://linkedin.com/in/attorneyowen/">link with me</a>
        </p>
        <p>
          <font-awesome-icon icon="fa-solid fa-house-chimney-user" />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <NuxtLink to="/">Home</NuxtLink>
        </p>
      </div>
      <div class="col-md-9 text-center mb-0 py-5 bg-gray text-blue-900">
        <h1>Owen Hathaway</h1>
      </div>
    </header>
    <main>
      <BlogColumns>
        <ContentDoc />
      </BlogColumns>
    </main>
  </div>
</template>

<script setup>
var topNavClasses = [
  "row",
  "justify-content-end",
  "m-0",
  "w-100",
  "position-sticky",
  "top-0",
];
</script>

<style lang="scss">
#blog {
  font-family: Optima;
  font-size: 90%;
}
.bg-gray {
  background: $gainsboro;
  a {
    color: $dark;
    &:hover {
      color: $dark-cornflower-blue;
    }
  }
}
</style>
