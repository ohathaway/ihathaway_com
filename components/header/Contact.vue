<template>
  <div id="contact-items-wrapper" class="col ps-4">
    <ul id="contact-items" class="fs-5">
      <li class="contact-item my-3">
        <a href="mailto:owen@ohlawcolorado.com">
          <font-awesome-icon icon="fa-solid fa-envelope" />
          <span class="contact-text">owen@ohlawcolorado.com</span>
        </a>
      </li>
      <li class="contact-item my-3">
        <a href="https://linkedin.com/in/attorneyowen/">
          <font-awesome-icon icon="fa-brands fa-linkedin" />
          <span class="contact-text">link with me</span>
        </a>
      </li>
      <li v-if="route.name === 'resume'" class="contact-item my-3">
        <a href="./resume.pdf">
          <span class="fa-layers fa-fw">
            <font-awesome-icon icon="fa-regular fa-file" />
            <font-awesome-icon icon="fa-solid fa-user-tie" transform="shrink-10 down-1 left-0.3" />
          </span>
          <span class="contact-text"
                style="position: relative; right: 0.8rem;"
          >
            PDF of my resume
          </span>
        </a>
      </li>
      <li v-else class="contact-item my-3">
        <NuxtLink to="/">
          <font-awesome-icon icon="fa-solid fa-house-chimney-user" transform="left-2" />
          <span class="contact-text" style="position: relative; right: 0.3rem;">home</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { forEach } from 'lodash'

const route = useRoute()

const props = defineProps(['orientation', 'background'])

onMounted(() => {
  if (props.orientation === 'horizontal') {
    document.getElementById('contact-items').style.padding = '1rem'
    const horizontal = ['list-group', 'list-group-horizontal'].map(htmlClass => {
      document.getElementById('contact-items').classList.add(htmlClass)
    })
    forEach(document.getElementsByClassName('contact-item'), item => {
      item.classList.remove('my-4')
      item.classList.add('flex-fill')
    })
    forEach(document.getElementsByClassName('contact-text'), item => {
      item.classList.add('d-none')
    })
  } 
  if (props.background === 'gray') {
    document.getElementById('contact-items-wrapper').classList.add('bg-gray')
  }
})

</script>

<style lang="scss">
ul {
  list-style-type: none;
}

.text-blue-900 {
  color: $blue-900;
}

.contact-text {
  margin-left: 1.8rem;
}
</style>