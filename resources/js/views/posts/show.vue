<template>
    <div>
        <h1 class="text-center display-4 my-8">{{ post.title }}</h1>
        
        <v-img :src="post.cover"></v-img>

        <p class="mt-8">{{ post.content }}</p>
        
    </div>
</template>

<script>
    export default {
        props: ['postId'],

        data: () => ({
            post: []
        }),

        mounted(){
            this.$http.get('/api/posts/' + this.postId).then(response => {
                this.post = response.data;
            });
        }
    }
</script>