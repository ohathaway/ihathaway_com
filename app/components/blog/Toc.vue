<template>
</template>

<script setup>
import { flattenDeep } from 'lodash'

const props = defineProps(['links'])

const flatLinks = flattenDeep(props.links).map( link => {
  console.debug('link: ', link)
  let _link = [link]
  if (link.children) {
    console.debug(`${link.id} has ${link.children.length} children`)
    const flattened =  flattenDeep(link.children)
    _link = [link, ...flattened]
  }
  return _link
}).flat(1)
</script>
