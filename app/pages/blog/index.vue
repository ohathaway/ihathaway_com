<template>
  <div id="blog">
    <main class="min-h-screen">
      <BlogIntro />
      <div class="flex flex-wrap blog-posts px-12 lg:px-40 py-12">
        <BlogMyContent />
        <div class="lg:w-4/12">
          <HeaderName cols="12"/>
          <HeaderContact />
        </div>
      </div>
    </main>
  </div>
</template>

<style>
#blog {
  font-family: Optima, Candara, "Segoe UI", "Gill Sans", sans-serif;
  h2 {
    color: var(--color-dark-cornflower-blue);
    font-size: 180%;
  }
  h5 {
    font-family: Optima, Candara, "Segoe UI", "Gill Sans", sans-serif;
    font-style: italic;
  }
  a {
    color: var(--color-dark);

    &:hover {
      color: var(--color-dark-cornflower-blue);
    }
  }
  main {
    background-image: linear-gradient(135deg, var(--color-gainsboro), white);
  }

  #myName {
    h1 {
      font-size: 200%;
    }
  }

  #contact-items a {
    color: var(--color-dark);
    &:hover {
      color: var(--color-light-slate-gray);
    }
  }
  .blog-intro {
    background: var(--color-glaucous);
    p {
      text-align: left;
    }
  }
  .blog-posts {
    background: var(--color-light);
  }
}

.bg-gray {
  background: var(--color-gainsboro);

  a {
    color: var(--color-dark);

    &:hover {
      color: var(--color-dark-cornflower-blue);
    }
  }
}
</style>
