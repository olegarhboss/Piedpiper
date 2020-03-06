<template>
    <v-card class="mx-auto my-12" max-width="400">
        <v-card-text>
            <div>Авторизация</div>
            
            <v-form ref="form" v-model="valid" @submit.prevent="validate">
                <!-- Всё по классике, E-mail в зачестве логина -->
                <v-text-field v-model="email" :rules="[rules.email]" prepend-icon="mdi-email-outline" label="E-mail" required></v-text-field>
                
                <!-- Ввод пароля с возможностью подсмотреть содержимое ввода -->
                <v-text-field
                    autocomplete="current-password"
                    v-model="password"
                    prepend-icon="mdi-key-variant"
                    label="Пароль"
                    :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="() => (value = !value)"
                    :type="value ? 'password' : 'text'"
                    :rules="[rules.password]"
                ></v-text-field>

                <!-- Тут показываем ошибки авторизации если таковые тмеются -->
                <v-alert v-if="error" type="error">{{ error }}</v-alert>
                
                <!-- Великая и могучя рекапча, если снизошла то вызывает заданный метод  (в данном случае метод login) и передаёт в него загадочный гуглотокен -->
                <vue-recaptcha ref="recaptcha" size="invisible" :sitekey="captchaKey" @verify="login" @expired="onCaptchaExpired"/>

                <!-- Не самая изящьная реализация визуализации процесса загрузки Прямо в кнопке Карл! -->
                <v-btn :disabled="(!valid || loading)" :loading="loading" block color="success" class="mt-4" type="submit">Войти</v-btn>
            </v-form>
        </v-card-text>
        
        <v-card-actions>
            <!-- Можно предложить зарегистироваться -->
            <v-btn block color="primary" text :to="{ name: 'register' }">Регистрация</v-btn>
        </v-card-actions>
  </v-card>
</template>

<script>
    // Компонент реализующий часть логики работы с гуглокапчей
    import VueRecaptcha from 'vue-recaptcha';
    import { mapGetters } from 'vuex';
    
    export default {
        data: () => ({
            email: '',
            password: '',
            valid: true,
            value: true,
            rules: {
                required: value => !!value || 'Необходимо заполнить.',
                email: value => {
                    const pattern = /.+@.+\..+/;
                    return (pattern.test(value) || 'Должен быть действительным');
                },
                password: value => {
                    const pattern = /^(?=.{8,})/;
                    return (pattern.test(value) || 'Минимум 8 символов');
                }
            }
        }),

        computed: {
            ...mapGetters('auth', ['error', 'loading', 'captchaKey'])
        },
        
        methods: {
            onCaptchaExpired () {
                this.$refs.recaptcha.reset()
            },
            
            login(recaptchaToken) {
                this.$store.dispatch('auth/login', { 
                    email: this.email, 
                    password: this.password, 
                    device_name: 'spa', 
                    recaptchaToken: recaptchaToken
                  }).then(() => {
                    this.$router.push(this.$route.query.redirect || '/profile');
                });
            },
            
            validate () {
                // При успешной валидации данных вызываем проверку гуглокапчи
                // если снизайдёт, то она вызовет заданный метод и передас туда гуглотокен
                if (this.$refs.form.validate()) {
                    this.$refs.recaptcha.execute()
                }
            },
        },

        components: { VueRecaptcha },
        
        mounted(){
            // Очистка ошибок авторизации
            this.$store.dispatch('auth/clearError');

            // Для Airlock CSRF Защита 
            this.$http.get('/airlock/csrf-cookie');
            
            // Подключение гугло скрипта рекапчи
            this.$load_script('https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit');
        },

        destroyed(){
            // Отключение скрипта гугло рекапчи
            this.$delete_script('https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit');
        }
    };
</script>