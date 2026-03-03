<template>
</template>

<script setup>
const props = defineProps(['links'])

const flatLinks = (props.links || []).flat(Infinity).map(link => {
  console.debug('link: ', link)
  let _link = [link]
  if (link.children) {
    console.debug(`${link.id} has ${link.children.length} children`)
    const flattened = link.children.flat(Infinity)
    _link = [link, ...flattened]
  }
  return _link
}).flat(1)
</script>
