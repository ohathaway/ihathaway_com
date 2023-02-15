<template>
  <section id="capabilities">
    <h2>Consulting Capabilities</h2>
    <ContentList :query="queryCapabilities">
      <template v-slot="{ list }">
        <div v-for="post in list" :key="post._path" class="ps-4 pe-7">
          <h3>{{ post.title }}</h3>
          <p>{{ post.description }}</p>
        </div>
      </template>
      <template #not-found>
        <h2>No Consulting Capabilities Found</h2>
      </template>
    </ContentList>
  </section>
  <section id="projects">
    <h2>Project Highlights</h2>
    <ContentList :query="queryProjects">
      <template v-slot="{ list }">
        <div v-for="post in list" :key="post._path" class="ps-4 pe-7">
          <NuxtLink :to="post._path">
            <h3>{{ post.title }}</h3>
          </NuxtLink>
          <p>{{ post.description }}</p>
        </div>
      </template>
      <template #not-found>
        <h3>No Project Highlights Found</h3>
      </template> 
    </ContentList>
  </section>
</template>

<script setup>
import { find } from 'lodash'

const queryCapabilities = {
  path: '/cv',
  where: { type: 'capability' },
}

const queryProjects = {
  path: '/cv',
  where: { type: 'project' },
}

const getMeta = (post, metaName, metaValue) => {
  console.debug('post: ', post)
  const match = find(post.head.meta, meta => {
    console.debug('meta.name from find: ', meta.name)
    return meta.name === 'metaName' && meta.content === metaValue
  })
  console.debug('match? ', match)
  return match
}
</script>

<style lang="scss">
</style>
