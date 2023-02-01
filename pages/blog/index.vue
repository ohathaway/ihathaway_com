<template>
  <div id="blog">
    <ResumeHeader />
    <main class="min-vh-100">
      <h2>The Belly Button Principal</h2>
      <h5>A collection of random things I write about</h5>
      <p>
I write a lot. Unfortunately, most of what I write is not for consumption by ordinary humans. In fact, much of what I write isn't intended for humans at all. Because I basically write for a living, I do a lot of thinking about the things I write. I also do a lot of thinking even when I'm not working. These thoughts I have rarely written about in the past.
</p><p>
Here I write about those other things I think about. Things about humans... about law, especially US Constitutional issues... IT stuff... but always for humans.
</p><p>
Since everyone has one, and much of my thinking revolves around the concept I've named after it. I call this place, <strong>The Belly Button Principal.</strong>
      </p>
      <ContentList v-slot="{ list }">
        <div v-for="post in list" :key="post._path">
          <NuxtLink :to="post._path">
            <h3>{{ post.title }}</h3>
            <p>{{ post.description }}</p>
          </NuxtLink>
        </div>
      </ContentList>
    </main>
  </div>
</template>

<script setup>
const postsQuery = queryContent()
postsQuery.find().then(posts => console.debug('posts: ', posts))
</script>
<style lang="scss">
#blog {
  font-family: Optima;
  font-size: 120%;
  h2 {
    font-size: 200%;
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
    padding: 5rem 10rem;
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