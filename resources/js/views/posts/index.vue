<template>
    <div>
        <h1 class="text-center display-4 my-8">Новости</h1>
        
        <post-card v-for="post in posts" :key="post.slug" v-bind:post="post"></post-card>

        <div class="text-center">
            <v-container>
                <v-row justify="center">
                    <v-col cols="8">
                        <v-container class="max-width">
                            <v-pagination v-model="current_page" @input="getPage" :next="5" class="my-4"  :length="last_page" :total-visible="7"></v-pagination>
                        </v-container>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script>
    import PostCard from '../../components/post.vue'
    
    export default {
        data: () => ({
            current_page: 1,
            posts: [],
            last_page: null,
            next_page: null,
            prev_page: null
        }),

        methods: {
            getPage(page){
                this.$http.get('/api/posts?page=' + page).then(response => {
                    this.posts = response.data.data,
                    this.curent_page = response.data.meta.curent_page;
                    this.next_page = response.data.links.next_page;
                    this.prev_page = response.data.links.prev_page;
                    this.last_page = response.data.meta.last_page;
                });
                window.scrollTo(0, 0);
            },
        },

        components: {
            PostCard
        },

        mounted(){
            this.getPage(1)
        }
    }
</script>