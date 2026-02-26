<template>
  <section id="capabilities">
    <h2>Consulting Capabilities</h2>
    <template v-if="capabilities?.length">
      <div v-for="post in capabilities" :key="post.path" class="ps-4 pe-7">
        <h3>{{ post.title }}</h3>
        <p>{{ post.description }}</p>
      </div>
    </template>
    <template v-else>
      <h2>No Consulting Capabilities Found</h2>
    </template>
  </section>
  <section id="projects">
    <h2>Project Highlights</h2>
    <template v-if="projects?.length">
      <div v-for="post in projects" :key="post.path" class="ps-4 pe-7">
        <NuxtLink :to="post.path">
          <h3>{{ post.title }}</h3>
        </NuxtLink>
        <p>{{ post.description }}</p>
      </div>
    </template>
    <template v-else>
      <h3>No Project Highlights Found</h3>
    </template>
  </section>
</template>

<script setup>
const { data: capabilities } = await useAsyncData('cv-capabilities', () =>
  queryCollection('cvCapabilities').all()
)

const { data: projects } = await useAsyncData('cv-projects', () =>
  queryCollection('cvProjects').all()
)
</script>

<style>
</style>
