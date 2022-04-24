import { ref } from 'vue'

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
      try {
        // simulate delayed
        await new Promise(resolve => {
          setTimeout(resolve, 2000)
        })

        let data = await fetch('http://localhost:3000/posts/' + id)

        // run this block if the data is not fetched correctly
        if (!data.ok) {
          throw Error('that post does not exist')
        }

        // if it passes as ok, add the data to the post object
        post.value = await data.json()
        
      }
      catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    return { post, error, load}
}

export default getPost