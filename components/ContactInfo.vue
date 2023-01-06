<template>
  <section id="contact" class="row text-light py-4 py-lg-7 px-lg-9">
    <header class="col-12 col-lg-3 offset-lg-1 pe-lg-5 text-center text-lg-end">
      <h1>Contact</h1>
    </header>
    <div id="info" class="col-12 col-lg-7 ps-lg-5">
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
        <span class="fa-layers fa-fw">
          <font-awesome-icon icon="fa-regular fa-file" />
          <font-awesome-icon
            icon="fa-solid fa-user-tie"
            transform="shrink-10 down-1 left-0.3"
          />
        </span>
        &nbsp;&nbsp;&nbsp; my resume
        <a href="./assets/images/resume.pdf">[PDF]</a> &bull;
        <NuxtLink to="/resume">[HTML]</NuxtLink>
      </p>
    </div>
  </section>
</template>

<style lang="scss">
#contact {
  background: $dark;
  h1 {
    color: #f9f9f9;
  }
  header {
    // margin-left: 5rem;
    // padding-right: 6rem;
    // text-align: right;
  }
  #info {
    border-left: 1px solid $gainsboro;
    // padding-left: 3rem;
    font-size: 200%;
    @media (max-width: 992px) {
      font-size: 150%;
    }
  }
}
</style>
