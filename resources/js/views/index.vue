<template>
    <div>
        <h1 class="text-center display-4 my-8">The Internet We Deserve</h1>

        <v-divider class="my-6"></v-divider>

        <div class="text-center">
            <v-btn x-large block color="warning" :to="{ name: 'posts' }" dark>Новости</v-btn>
            <v-btn x-large block color="primary" class="mt-4" :to="{ name: 'help' }" dark>Помощь</v-btn>

            <v-divider class="my-6"></v-divider>
        
            <v-btn x-large block color="success" v-if="authUser" :to="{ name: 'profile' }" exact dark>Профиль пользователя</v-btn>
            <v-btn x-large block color="success" v-else :to="{ name: 'login' }"  dark>Войти в систему</v-btn>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    
    export default {
        data: () => ({

        }),

        computed: {
            ...mapGetters('auth', ['authUser'])
        },

        methods: {
            logout() {
                this.$store.dispatch('auth/logout');
                this.$router.push({ name: 'main'});
            }
        }
    }
</script>