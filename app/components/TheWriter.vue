<template>
  <section id="writer">
    <div class="flex flex-wrap role-odd role-info py-6 px-4 lg:p-28">
      <header class="role-odd role-name lg:w-3/12 lg:order-1">
        <h1>
          <div class="fa-layers fa-fw lg:hidden pr-4">
            <font-awesome-icon icon="fa-solid fa-circle" transform="grow-12" />
            <font-awesome-icon icon="fa-solid fa-pen-nib" inverse transform="shrink-4" />
          </div>
          Writer
        </h1>
      </header>
      <div class="role-odd role-icon text-left hidden lg:block w-1/12 lg:order-2">
        <h1>
          <span class="fa-layers fa-fw lg:ml-12">
            <font-awesome-icon icon="fa-solid fa-circle" transform="grow-12" />
            <font-awesome-icon icon="fa-solid fa-pen-nib" inverse transform="shrink-4" />
          </span>
        </h1>
      </div>
      <div class="role-odd role-description w-full lg:w-7/12 lg:order-3 lg:ml-[8.333%]">
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

        <ul v-else class="substack-posts list-none mt-6">
          <li v-for="post in posts" :key="post.link" class="post-item mb-6">
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
          class="substack-link mt-4 inline-block"
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
  background: var(--color-gainsboro);
  color: var(--color-dark);

  .role-odd.role-name h1 {
    color: var(--color-primary);
  }

  a {
    color: var(--color-dark);

    &:hover {
      color: var(--color-dark-cornflower-blue);
      text-decoration: underline;
    }
  }

  .substack-posts {
    border-top: 1px solid var(--color-light-slate-gray);
    padding-top: 1.5rem;
  }

  .post-item {
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(115, 133, 151, 0.3);
  }

  .post-title {
    font-family: TrajanPro;
    font-size: 110%;
    color: var(--color-primary);
    display: block;
    margin-bottom: 0.25rem;

    &:hover {
      color: var(--color-dark-cornflower-blue);
    }
  }

  .post-description {
    font-family: Optima;
    color: var(--color-light-slate-gray);
    font-size: 90%;
  }

  .post-date {
    font-family: Optima;
    font-size: 80%;
    color: var(--color-light-slate-gray);
  }

  .substack-link {
    font-family: TrajanPro;
    font-size: 90%;
    color: var(--color-primary);

    &:hover {
      color: var(--color-dark-cornflower-blue);
    }
  }
}
</style>
