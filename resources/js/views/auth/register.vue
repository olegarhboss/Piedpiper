<template>
    <v-card class="mx-auto my-12" max-width="400">
        <v-card-text>
            <div>Регистрация</div>
            
            <v-form ref="form" v-model="valid" @submit.prevent="validate">
                <!-- ФИО пользователя с ограничением на длинну (так что бы было) -->
                <v-text-field v-model="name" :counter="42" :rules="[rules.name]" prepend-icon="mdi-account-badge-outline" label="Фамилия Имя Отчество"></v-text-field>

                <!-- Дата рождения -->
                <v-text-field v-model="birthday" type="date" :rules="[rules.birthday]" prepend-icon="mdi-calendar-outline" label="Дата рождения"></v-text-field>

                <!-- E-mail -->
                <v-text-field v-model="email" :rules="[rules.email]" prepend-icon="mdi-email-outline" label="E-mail"></v-text-field>
                
                <!-- Фотография пользователя (автарка) -->
                <v-file-input v-model="photo" show-size :rules="[rules.photo]" accept="image/png, image/jpeg" placeholder="Загрузите свою фотографию" prepend-icon="mdi-face-recognition" label="Фото"></v-file-input>
                
                <!-- Ввод пароля с возможностью подсмотреть содержимое ввода -->
                <v-text-field
                    v-model="password"
                    prepend-icon="mdi-key-variant"
                    label="Пароль"
                    :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="() => (value = !value)"
                    :type="value ? 'password' : 'text'"
                    :rules="[rules.password]"
                ></v-text-field>

                <!-- Для удобства пользователя показываем содержимое обеих полей -->
                <v-text-field
                    v-model="password_confirmation"
                    prepend-icon="mdi-key-variant"
                    label="Подтверждение пароля"
                    :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="() => (value = !value)"
                    :type="value ? 'password' : 'text'"
                    :rules="[passwordConfirmation]"
                ></v-text-field>

                <!-- Тут показываем ошибки авторизации если таковые тмеются -->
                <v-alert v-if="error" type="error">{{ error }}</v-alert>
                
                <!-- Великая и могучя рекапча, если снизошла то вызывает заданный метод  (в данном случае метод login) и передаёт в него загадочный гуглотокен -->
                <vue-recaptcha ref="recaptcha" size="invisible" :sitekey="captchaKey" @verify="register" @expired="onCaptchaExpired"/>

                <!-- Не самая изящьная реализация визуализации процесса загрузки Прямо в кнопке Карл! -->
                <v-btn :disabled="(!valid || loading)" :loading="loading" block color="success" class="mt-4" type="submit">Зарегистрироваться</v-btn>
            </v-form>
        </v-card-text>
  </v-card>
</template>

<script>
    // Компонент реализующий часть логики работы с гуглокапчей
    import VueRecaptcha from 'vue-recaptcha';
    import { mapGetters } from 'vuex';
    
    export default {
        data: () => ({
            email: '',
            name: '',
            birthday: '',
            photo: [],
            password: '',
            password_confirmation: '',
            valid: true,
            value: true,
            // Тут простые правила валидации формы, проверка подтверждения вынесена отдельно
            rules: {
                required: value => !!value || 'Необходимо заполнить.',
                name: value => (value.length <= 42 || 'Превышена допустимая длинна'),
                birthday: value => (value.length <= 20 || 'Превышена допустимая длинна'),
                photo: value => (!value || value.size < 2000000 || 'Фото не должно превышать размер в 2 мегабайта!'),
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
            ...mapGetters('auth', ['error', 'loading', 'captchaKey']),

            // Простое правило проверки подтверждения пароля
            passwordConfirmation(){
                return (this.password == this.password_confirmation) || 'Пароли не совпадают';
            }
        },
        
        methods: {
            onCaptchaExpired () {
                this.$refs.recaptcha.reset()
            },
            
            register(recaptchaToken) {
                let formData = new FormData();
                formData.append('email', this.email);
                formData.append('name', this.name);
                formData.append('birthday', this.birthday);
                formData.append('photo', this.photo);
                formData.append('password', this.password);
                formData.append('password_confirmation', this.password_confirmation);
                formData.append('password_confirmation', this.password_confirmation);
                formData.append('device_name', 'spa');
                formData.append('recaptchaToken', recaptchaToken);

                this.$store.dispatch('auth/register', formData).then(() => {
                    this.$router.push('/profile');
                });
            },
            
            validate () {
                // При успешной валидации данных вызываем проверку гуглокапчи
                // если снизайдёт, то она вызовет заданный метод и передаст туда гуглотокен
                if (this.$refs.form.validate()) {
                    this.$refs.recaptcha.execute()
                }
            },
        },

        components: { VueRecaptcha },
        
        mounted(){
            // Очистка ошибок авторизации
            this.$store.dispatch('auth/clearError');
            
            // Подключение гугло скрипта рекапчи
            this.$load_script('https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit');
        },

        destroyed(){
            // Отключение скрипта гугло рекапчи
            this.$delete_script('https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit');
        }
    };
</script>