<template>
  <section id="contact" class="flex flex-wrap text-light py-6 lg:py-20 lg:px-40">
    <header class="w-full lg:w-3/12 lg:ml-[8.333%] lg:pr-12 text-center lg:text-right">
      <h1>Contact</h1>
    </header>
    <div id="info" class="w-full lg:w-7/12 lg:pl-12">
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
        <a href="./resume.pdf" target="_blank">[PDF]</a> &bull;
        <NuxtLink to="/resume">
          [HTML]
        </NuxtLink>
      </p>
    </div>
  </section>
</template>

<style>
#contact {
  background: var(--color-dark);
  h1 {
    color: #f9f9f9;
  }
  #info {
    border-left: 1px solid var(--color-gainsboro);
    @media (max-width: 992px) {
      font-size: 150%;
    }
  }
}
</style>
