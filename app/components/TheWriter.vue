<template>
  <section id="writer">
    <div class="row role-odd role-info py-4 px-3 p-lg-8">
      <header class="role-odd role-name col-lg-3 order-lg-1">
        <h1>
          <div class="fa-layers fa-fw d-lg-none pe-3">
            <font-awesome-icon icon="fa-solid fa-circle" inverse transform="grow-12" />
            <font-awesome-icon icon="fa-solid fa-pen-nib" inverse transform="shrink-4" />
          </div>
          Writer
        </h1>
      </header>
      <div class="role-odd role-icon text-start d-none d-lg-block col-1 order-lg-2">
        <h1>
          <span class="fa-layers fa-fw ms-lg-5">
            <font-awesome-icon icon="fa-solid fa-circle" inverse transform="grow-12" />
            <font-awesome-icon icon="fa-solid fa-pen-nib" inverse transform="shrink-4" />
          </span>
        </h1>
      </div>
      <div class="role-odd role-description col-12 col-lg-7 order-lg-3 offset-lg-1">
        <p>
          Writing is thinking made visible. I publish on
          <a href="https://owenhathaway.substack.com" target="_blank" rel="noopener">Substack</a>
          — no particular theme, no editorial calendar. Just things worth working out in public.
        </p>

        <div v-if="loading" class="posts-loading">
          Loading recent posts&hellip;
        </div>

        <div v-else-if="error" class="posts-error">
          <a href="https://owenhathaway.substack.com" target="_blank" rel="noopener">
            Read on Substack &rarr;
          </a>
        </div>

        <ul v-else class="substack-posts list-unstyled mt-4">
          <li v-for="post in posts" :key="post.link" class="post-item mb-4">
            <a :href="post.link" target="_blank" rel="noopener" class="post-title">
              {{ post.title }}
            </a>
            <p class="post-description mb-1">{{ post.description }}</p>
            <span class="post-date">{{ formatDate(post.pubDate) }}</span>
          </li>
        </ul>

        <a
          href="https://owenhathaway.substack.com"
          target="_blank"
          rel="noopener"
          class="substack-link mt-3 d-inline-block"
        >
          Subscribe on Substack &rarr;
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const { posts, loading, error } = useSubstack()

function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<style>
#writer {
  background: var(--gainsboro);
  color: var(--dark);

  .role-odd.role-name h1 {
    color: var(--primary);
  }

  a {
    color: var(--dark);

    &:hover {
      color: var(--dark-cornflower-blue);
      text-decoration: underline;
    }
  }

  .substack-posts {
    border-top: 1px solid var(--light-slate-gray);
    padding-top: 1.5rem;
  }

  .post-item {
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(115, 133, 151, 0.3);
  }

  .post-title {
    font-family: TrajanPro;
    font-size: 110%;
    color: var(--primary);
    display: block;
    margin-bottom: 0.25rem;

    &:hover {
      color: var(--dark-cornflower-blue);
    }
  }

  .post-description {
    font-family: Optima;
    color: var(--light-slate-gray);
    font-size: 90%;
  }

  .post-date {
    font-family: Optima;
    font-size: 80%;
    color: var(--light-slate-gray);
  }

  .substack-link {
    font-family: TrajanPro;
    font-size: 90%;
    color: var(--primary);

    &:hover {
      color: var(--dark-cornflower-blue);
    }
  }
}
</style>
