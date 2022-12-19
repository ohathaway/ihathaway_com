<template>
  <section id="contact" class="row text-light">
    <header class="col-sm-3">
      <h1>Contact</h1>
    </header>
    <div id="info" class="col-sm-8">
      <p class="fs-1">
        <font-awesome-icon icon="fa-solid fa-envelope" />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="mailto:owen@ohlawcolorado.com">owen@ohlawcolorado.com</a>
      </p>
      <p class="fs-1">
        <font-awesome-icon icon="fa-brands fa-linkedin" />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://linkedin.com/in/attorneyowen/">link with me</a>
      </p>
    </div>
  </section>
</template>

<style lang="scss">
#contact {
  background: $dark;
  padding: 3rem 10rem;
  width: 100%;
  h1 {
    color: #f9f9f9;
    margin: 0;
  }
  header {
    margin-left: 5rem;
    padding-right: 6rem;
    text-align: right;
  }
  #info {
    border-left: 1px solid $gainsboro;
    padding-left: 3rem;
  }
}
</style>
