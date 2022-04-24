import { ref } from 'vue'

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
      try {
        // simulate delayed
        await new Promise(resolve => {
          setTimeout(resolve, 2000)
        })

        let data = await fetch('http://localhost:3000/posts')

        // run this block if the data is not fetched correctly
        if (!data.ok) {
          throw Error('no data available')
        }

        // if it passes as ok, add the data to the post object
        posts.value = await data.json()
        
      }
      catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    return { posts, error, load}
}

export default getPosts