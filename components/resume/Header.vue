<template>
  <div class="row w-100" >
    <div class="col-3 bg-gray h-25 p-4 d-none d-md-block"></div>
    <div class="col-9"></div>
  </div>
  <header id="topNav"
          :class="topNavClasses"
  >
    <div class="col-md-3 bg-gray ps-5"><p>
        <font-awesome-icon icon="fa-solid fa-envelope" />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="mailto:owen@ohlawcolorado.com">owen@ohlawcolorado.com</a>
      </p>
      <p>
        <font-awesome-icon icon="fa-brands fa-linkedin" />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://linkedin.com/in/attorneyowen/">link with me</a>
      </p>
      <p>
        <span class="fa-layers fa-fw">
          <font-awesome-icon icon="fa-regular fa-file" />
          <font-awesome-icon icon="fa-solid fa-user-tie" transform="shrink-10 down-1 left-0.3"/>
        </span>
        &nbsp;&nbsp;&nbsp;

        <a href="./assets/images/resume.pdf">PDF of my resume</a>
      </p>
    </div>
    <div class="col-md-9 text-center mb-0 py-5 bg-gray text-blue-900">
      <h1>Owen Hathaway</h1>
    </div>
  </header>
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

const setBarSize = () => {
  if (document.body.scrollTop > 48 || document.documentElement.scrollTop > 48) {
    console.debug('click')
    document.getElementById('topNav').style.background = "black"
  } else {
    document.getElementById('topNav').style.background = "green"
  }
}

// window.onscroll = () => setBarSize()
</script>

<style lang="scss">
.text-blue-900 { color: $blue-900; }
</style>
