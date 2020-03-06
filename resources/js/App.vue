<template>
    <v-app>
        <navigation></navigation>  

        <v-content>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import Navigation from './components/navigation.vue'

    export default {
        beforeMount(){
            this.$store.dispatch('auth/recaptcha');
        },

        components: {
            Navigation
        }
    }
</script>