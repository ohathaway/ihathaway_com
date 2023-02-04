<template>
  <main id="main" class="article-main pt-3">
    <header v-if="pageData.article" class="article-header">
      <div class="img-cont">
        <img :src="`/${pageData.article.img}`"
             :alt="pageData.article.title"
             class="rounded-2" />
      </div>
      <h1 class="article-heading">{{ pageData.article.title }}</h1>
      <p class="supporting">{{ pageData.article.description }}</p>
      <ul class="tags list-group list-group-horizontal">
        <li class="tag list-group-item border border-0" v-for="(tag, n) in pageData.article.tags" :key="n">
          {{ tag }}
        </li>
      </ul>
    </header>
    <hr />
    <section class="article-section">
      <aside class="asside">
        <BlogToc :links="pageData.article.body.toc.links" />
      </aside>
      <article class="article">
        <ContentRenderer :value="pageData.article">
          <ContentRendererMarkdown :value="pageData.article" />
          <template #empty>
            <p>
              No content found
            </p>
          </template>
        </ContentRenderer>
      </article>
    </section>
    <!-- Prev/Next component -->
  </main>
</template>

<script setup>
const { page } = useContent()
const pageData = inject('pageData')
const head = useContentHead(page)
console.debug('pageData: ', pageData)
console.debug('page: ', page)
console.debug('head: ', head)
</script>

<style lang="scss">
.img-cont {
  height: 14rem;
  & img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
}

</style>