/**
 * Fetches and parses the Substack RSS feed.
 * Returns an array of { title, description, link, pubDate } objects.
 */
export function useSubstack() {
  const posts = ref([])
  const loading = ref(true)
  const error = ref(null)

  const FEED_URL = 'https://owenhathaway.substack.com/feed'

  async function fetchPosts() {
    try {
      // Use allorigins to avoid CORS issues in the browser
      const proxy = `https://api.allorigins.win/get?url=${encodeURIComponent(FEED_URL)}`
      const res = await fetch(proxy)
      const data = await res.json()

      const parser = new DOMParser()
      const xml = parser.parseFromString(data.contents, 'application/xml')
      const items = Array.from(xml.querySelectorAll('item'))

      posts.value = items.map(item => ({
        title: item.querySelector('title')?.textContent ?? '',
        description: item.querySelector('description')?.textContent ?? '',
        link: item.querySelector('link')?.textContent ?? '',
        pubDate: item.querySelector('pubDate')?.textContent ?? '',
      }))
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchPosts)

  return { posts, loading, error }
}
