<template>
  <div class="col-lg-8">
    <div v-for="post in posts" :key="post.path">
      <NuxtLink :to="post.path">
        <h3>{{ post.title }}</h3>
        <p>{{ post.description }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { data: posts } = await useAsyncData('blog-list', () =>
  queryCollection('blog').all()
)
</script>
