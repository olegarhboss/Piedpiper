<template>
    <div>
        <v-app-bar app color="dark" dark>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

            <v-toolbar-title>Piedpiper</v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" fixed temporary>
            <v-list nav dense>
                <v-list-item-group>

                    <!-- Для авторизированных пользователей показываем миниатюру профиля -->
                    <v-list-item v-if="authUser" :to="{ name: 'profile' }" exact two-line>
                        <v-list-item-avatar>
                            <img :src="authUser.photos.simple_min" :srcset="authUser.photos.simple_min + ' 1x,' + authUser.photos.retina_min + ' 2x'">
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>{{ authUser.name }}</v-list-item-title>
                            <v-list-item-subtitle>{{ authUser.email }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <!-- Итерирум массив с навигацией -->
                    <v-list-item v-for="nav in navs" :key="nav.route" :to="{ name: nav.route }" exact>
                        <v-list-item-icon>
                            <v-icon>{{ nav.icon }}</v-icon>
                        </v-list-item-icon>
                    
                        <v-list-item-title>{{ nav.title }}</v-list-item-title>
                    </v-list-item>

                    <!-- Неавторизированным пользователям показываем кнопку входа -->
                    <v-list-item v-if="!authUser" :to="{ name: 'login' }" exact>
                        <v-list-item-icon>
                            <v-icon>mdi-login</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Вход</v-list-item-title>
                    </v-list-item>

                </v-list-item-group>
            </v-list>

            <!-- Авторизированным пользователям показываем кнопку выхода -->
            <template v-if="authUser" v-slot:append>
                <div class="pa-2">
                    <v-btn block color="primary" @click="logout">Выйти</v-btn>
                </div>
            </template>
        </v-navigation-drawer>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    
    export default {
        
        data: () => ({
            drawer: null,
            navs: [
                { title: 'На главную', icon: 'mdi-home', route: 'main' },
                { title: 'Новости', icon: 'mdi-newspaper', route: 'posts' },
                { title: 'О нас', icon: 'mdi-map-legend', route: 'about' },
                { title: 'Помощь', icon: 'mdi-help', route: 'help' },
                { title: 'Настройки', icon: 'mdi-settings', route: 'settings' },
            ]
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
    };
</script>