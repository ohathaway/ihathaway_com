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
  const article = queryContent().where({ _path: path }).findOne()

  const surround = queryContent()
    .only(['_path', 'title', 'description'])
    .sort({ date: 1 })
    .findSurround(path)

  return {
    article: await article,
    surround: await surround
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
      hid: 'og:image',
      property: 'og:image',
      content: null
    }
  ]
})

provide('pageData', data)
</script>