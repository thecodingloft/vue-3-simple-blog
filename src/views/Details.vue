<template>
    <div v-if="error">
        {{error}}
    </div>
    <div v-if="post" class="post">
        <h3> {{ post.title }}</h3>
        <p class="pre"> {{ post.body }}</p>
    </div>
    <div v-else>
        <Spinner />
    </div>
</template>
<script>
import getPost from '../composables/getPost'
import Spinner from '../components/Spinner.vue'

export default {
    props: ['id'],
    components: { Spinner },
    setup(props) {
        const { post, error, load } = getPost(props.id)

        load()

        return { post, error }
    }

}
</script>
<style>

.post {
    /* width: 720px; */
    max-width: 720px;
    background: white;
    box-shadow: 0 0 15px 0 rgba(10,10,10,0.1);
    border-radius: 10px;
    padding: 40px 60px;
    margin: 20px 40px;
}

.post h3 {
    color: #e57b0b;
    margin: 30px 0;
}

.post p {
    line-height: 1.5
}

</style>