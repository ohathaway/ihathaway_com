<template>
  <div id="topSpacer" class="row w-100">
    <div class="col-3 bg-gray h-25 p-4 d-none d-md-block" />
    <div class="col-9" />
  </div>
  <header id="topNav" :class="topNavClasses">
    <div class="col-md-3 bg-gray ps-5">
      <ul id="contact-items" class="fs-5 m-0">
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
        <li v-if="route.name === 'resume'" class="contact-item my-4">
          <a href="./assets/images/resume.pdf">
            <span class="fa-layers fa-fw">
              <font-awesome-icon icon="fa-regular fa-file" />
              <font-awesome-icon
                icon="fa-solid fa-user-tie"
                transform="shrink-10 down-1 left-0.3"
              />
            </span>
            <span class="contact-text">PDF of my resume</span>
          </a>
        </li>
        <li v-else class="contact-item my-3">
          <NuxtLink to="/">
            <span class="fa-layers fa-fw">
              <font-awesome-icon
                icon="fa-solid fa-house-chimney-user"
                transform="left-2"
              />
            </span>
            <span class="contact-text">home</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div id="myName" class="col-md-9 text-center mb-0 bg-gray text-blue-900">
      <h1 class="m-0">Owen Hathaway</h1>
      <p id="subtitle" class="fs-5 m-0">
        attorney &bull; technologist &bull; problem solver &bull; husband
      </p>
    </div>
  </header>
</template>

<script setup>
import { onMounted } from 'vue'
import { forEach } from 'lodash'
import { useRoute } from 'vue-router'
import { isEmpty } from 'lodash'

const route = useRoute()

const topNavClasses = [
  'row',
  'justify-content-end',
  'm-0',
  'w-100',
  'position-sticky',
  'top-0'
]
const articleRegex = new RegExp('/blog/[a-z,A-Z,0-9].*')
const isArticle = articleRegex.test(route.path)

/* eslint-disable @typescript-eslint/no-unused-vars, no-unused-vars */
const setBarSize = () => {
  if (isArticle) {
    document.getElementById('topSpacer').classList.add('d-none')
  }
  if (document.body.scrollTop > 48 ||
      document.documentElement.scrollTop > 48 ||
      isArticle
    ) {
    document.getElementById('myName').firstChild.style.fontSize = '32px'
    document.getElementById('myName').style.padding = '0.8rem'
    // document.getElementById('subtitle').style.display = 'none'
    document.getElementById('contact-items').style.padding = '1rem'

    const horizontal = ['list-group', 'list-group-horizontal'].map( htmlClass => {
      document.getElementById('contact-items').classList.add(htmlClass)
    })
    forEach( document.getElementsByClassName('contact-item'), item => {
      item.classList.remove('my-4')
      item.classList.add('flex-fill')
    })
    forEach( document.getElementsByClassName('contact-text'), item => {
      item.classList.add('d-none')
    })
  } else {
    document.getElementById('myName').firstChild.style.fontSize = '40px'
    document.getElementById('myName').style.padding = '3rem'
    document.getElementById('subtitle').style.display = 'block'

    const horizontal = ['list-group', 'list-group-horizontal'].map( htmlClass => {
      document.getElementById('contact-items').classList.remove(htmlClass)
    })
    forEach( document.getElementsByClassName('contact-item'), item => {
      item.classList.add('my-4')
      item.classList.remove('flex-fill')
    })
    forEach( document.getElementsByClassName('contact-text'), item => {
      item.classList.remove('d-none')
    })
  }
}
/* eslint-enable @typescript-eslint/no-unused-vars, no-unused-vars */

onMounted( () => {
  setBarSize()
  window.onscroll = () => setBarSize()
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

#myName {
  padding: 3rem 0;
  & > * {
    transition: 0.5s;
  }
}
</style>
