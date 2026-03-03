<template>
  <div
    id="contact-items-wrapper"
    class="grow pl-6"
    :class="{ 'bg-gray': props.background === 'gray' }"
  >
    <ul
      id="contact-items"
      :class="[
        'text-xl list-none',
        props.orientation === 'horizontal'
          ? 'p-4 flex flex-row'
          : ''
      ]"
    >
      <li
        :class="[
          'contact-item',
          props.orientation === 'horizontal' ? 'grow' : 'my-3'
        ]"
      >
        <a href="mailto:owen@ohlawcolorado.com">
          <font-awesome-icon icon="fa-solid fa-envelope" />
          <span
            class="contact-text"
            :class="{ 'hidden': props.orientation === 'horizontal' }"
          >owen@ohlawcolorado.com</span>
        </a>
      </li>
      <li
        :class="[
          'contact-item',
          props.orientation === 'horizontal' ? 'grow' : 'my-3'
        ]"
      >
        <a href="https://linkedin.com/in/attorneyowen/">
          <font-awesome-icon icon="fa-brands fa-linkedin" />
          <span
            class="contact-text"
            :class="{ 'hidden': props.orientation === 'horizontal' }"
          >link with me</span>
        </a>
      </li>
      <li
        v-if="route.name === 'resume'"
        :class="[
          'contact-item',
          props.orientation === 'horizontal' ? 'grow' : 'my-3'
        ]"
      >
        <a href="./resume.pdf">
          <span class="fa-layers fa-fw">
            <font-awesome-icon icon="fa-regular fa-file" />
            <font-awesome-icon icon="fa-solid fa-user-tie" transform="shrink-10 down-1 left-0.3" />
          </span>
          <span
            class="contact-text"
            :class="{ 'hidden': props.orientation === 'horizontal' }"
            style="position: relative; right: 0.8rem;"
          >
            PDF of my resume
          </span>
        </a>
      </li>
      <li
        v-else
        :class="[
          'contact-item',
          props.orientation === 'horizontal' ? 'grow' : 'my-3'
        ]"
      >
        <NuxtLink to="/">
          <font-awesome-icon icon="fa-solid fa-house-chimney-user" transform="left-2" />
          <span
            class="contact-text"
            :class="{ 'hidden': props.orientation === 'horizontal' }"
            style="position: relative; right: 0.3rem;"
          >home</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const props = defineProps(['orientation', 'background'])
</script>

<style>
ul {
  list-style-type: none;
}

.text-blue-900 {
  color: var(--color-blue-900);
}

.contact-text {
  margin-left: 1.8rem;
}
</style>
