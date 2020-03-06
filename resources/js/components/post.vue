<template>
    <v-card :elevation="24" class="my-8 mx-auto" max-width="640">
        <v-img class="white--text align-end" height="200px" :src="post.cover">
            <v-card-title class="display-2 font-weight-bold">{{ post.title }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">{{ post.publishedAt }}</v-card-subtitle>

        <v-card-text class="text--primary">
            <div>{{ post.description }}</div>
        </v-card-text>

        <v-card-actions>
            <v-btn block text color="orange" :to="{ name: 'post' , params: { postId: post.id } }">Подробней</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        props: ['post'],
    }
</script>