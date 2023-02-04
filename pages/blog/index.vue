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

<style lang="scss">
#blog {
  font-family: Optima;
  // font-size: 90%;
  h2 {
    color: $dark-cornflower-blue;
    font-size: 180%;
  }
  h5 {
    font-family: Optima;
    font-style: italic;
  }
  a {
    color: $dark;

    &:hover {
      color: $dark-cornflower-blue;
    }
  }
  main {
    background-image: linear-gradient(135deg, $gainsboro, $white);
    // padding: 5rem 10rem;
  }

  #myName {
    h1 {
      font-size: 200%;
    }
  }

  #contact-items a {
    color: $dark;
    &:hover {
      color: $light-slate-gray;
    }
  }
  .blog-intro {
    background: $glaucous;
    p {
      text-align: left;
    }
    // color: $light;
  }
  .blog-posts {
    background: $light;
  }
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