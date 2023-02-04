<template>
  <div id="topSpacer" class="row w-100">
    <div class="col-3 bg-gray h-25 p-4 d-none d-md-block" />
    <div class="col-9" />
  </div>
  <header id="topNav" :class="topNavClasses">
    <HeaderContact background="gray" />
    <HeaderName cols="9" background="gray" />    
  </header>
</template>

<script setup>
const topNavClasses = [
  'row',
  'justify-content-end',
  'm-0',
  'w-100',
  'position-sticky',
  'top-0'
]
/* eslint-disable @typescript-eslint/no-unused-vars, no-unused-vars */
/*
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
*/
/* eslint-enable @typescript-eslint/no-unused-vars, no-unused-vars */

/*
onMounted( () => {
  setBarSize()
  window.onscroll = () => setBarSize()
})
*/
</script>
