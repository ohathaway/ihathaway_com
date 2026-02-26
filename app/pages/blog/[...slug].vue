<template>
  <div id="blog">
    <BlogIntro />
    <main>
      <BlogPost />
    </main>
  </div>
</template>

<script setup>
var topNavClasses = [
  'row',
  'justify-content-end',
  'm-0',
  'w-100',
  'position-sticky',
  'top-0'
]

const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, async () => {
  const article = await queryCollection('blog').path(path).first()

  const surround = await queryCollectionItemSurroundings('blog', path)

  return {
    article,
    surround
  }
})

const [prev, next] = data.value.surround

/*
  set html metadata
*/
useHead({
  title: data.value.article.title,
  meta: [
    { name: 'description', content: data.value.article.description },
    {
      property: 'og:image',
      content: null
    }
  ]
})

provide('pageData', data)
</script>