<template>
  <div class="col-lg-8">
    <ContentList v-slot="{ list }">
      <div v-for="post in list" :key="post._path">
        <NuxtLink :to="post._path">
          <h3>{{ post.title }}</h3>
          <p>{{ post.description }}</p>
        </NuxtLink>
      </div>
    </ContentList>
  </div>
</template>

<script setup>
const postsQuery = queryContent('/blog')
postsQuery.find().then(posts => console.debug('posts: ', posts))
</script>