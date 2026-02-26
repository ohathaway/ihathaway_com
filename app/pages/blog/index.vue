<template>
  <div id="blog">
    <main class="min-vh-100">
      <BlogIntro />
      <div class="row blog-posts px-5 px-lg-9 py-5">
        <BlogMyContent />
        <div class="col-lg-4">
          <HeaderName cols="12"/>
          <HeaderContact />
        </div>
      </div>
    </main>
  </div>
</template>

<style>
#blog {
  font-family: Optima;
  h2 {
    color: var(--dark-cornflower-blue);
    font-size: 180%;
  }
  h5 {
    font-family: Optima;
    font-style: italic;
  }
  a {
    color: var(--dark);

    &:hover {
      color: var(--dark-cornflower-blue);
    }
  }
  main {
    background-image: linear-gradient(135deg, var(--gainsboro), white);
  }

  #myName {
    h1 {
      font-size: 200%;
    }
  }

  #contact-items a {
    color: var(--dark);
    &:hover {
      color: var(--light-slate-gray);
    }
  }
  .blog-intro {
    background: var(--glaucous);
    p {
      text-align: left;
    }
  }
  .blog-posts {
    background: var(--light);
  }
}

.bg-gray {
  background: var(--gainsboro);

  a {
    color: var(--dark);

    &:hover {
      color: var(--dark-cornflower-blue);
    }
  }
}
</style>