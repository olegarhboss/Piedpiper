<template>
    <v-card class="mx-auto" max-width="640" outlined>
        <v-list-item three-line>
            <v-list-item-content>
                <div class="overline mb-4">Профиль пользователя</div>
                <v-list-item-title class="headline mb-1">{{ authUser.name }}</v-list-item-title>
                <v-list-item-subtitle>E-mail: <b>{{ authUser.email }}</b></v-list-item-subtitle>
                <v-list-item-subtitle>День рождения: <b>{{ authUser.birthday }} г.</b></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile size="164" color="grey">
                <img :src="authUser.photos.simple_min" :srcset="authUser.photos.simple_full + ' 1x,' + authUser.photos.retina_full + ' 2x'">
            </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
            <v-btn text @click="token_modal = true"><v-icon left>mdi-api</v-icon> token</v-btn>
            <v-btn text @click="userEditor"><v-icon left>mdi-account-edit</v-icon> Редактировать</v-btn>
            <v-btn text @click="delete_modal = true"><v-icon left>mdi-account-cancel</v-icon> Удалить профиль</v-btn>
        </v-card-actions>

        <v-dialog v-model="token_modal" max-width="500px">
            <v-card>
                <v-card-title>API Token</v-card-title>
                
                <v-card-text>
                    <b>{{ authToken }}</b>
                </v-card-text>
            
                <v-card-actions>
                    <v-btn text @click="copyToken"><v-icon left>mdi-content-copy</v-icon> Скопировать</v-btn>
                    <v-btn text @click="token_modal = false"><v-icon left>mdi-close</v-icon> Закрыть</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog v-model="edit_modal" max-width="500px">
            <v-card>
                <v-form ref="form" v-model="valid" @submit.prevent="updateProfile">
                    <v-card-title>Редактор профиля</v-card-title>
                        <v-card-text>
                        <!-- ФИО пользователя с ограничением на длинну (так что бы было) -->
                        <v-text-field v-model="name" :counter="42" :rules="[rules.name]" prepend-icon="mdi-account-badge-outline" label="Фамилия Имя Отчество"></v-text-field>

                        <!-- Дата рождения -->
                        <v-text-field v-model="birthday" type="date" :rules="[rules.birthday]" prepend-icon="mdi-calendar-outline" label="Дата рождения"></v-text-field>

                        <!-- E-mail -->
                        <v-text-field v-model="email" :rules="[rules.email]" prepend-icon="mdi-email-outline" label="E-mail"></v-text-field>
                        
                        <!-- Фотография пользователя (автарка) -->
                        <v-file-input v-model="photo" show-size :rules="[rules.photo]" accept="image/png, image/jpeg" placeholder="Загрузите свою фотографию" prepend-icon="mdi-face-recognition" label="Фото"></v-file-input>

                        <!-- Тут показываем ошибки авторизации если таковые тмеются -->
                        <v-alert v-if="error" type="error">{{ error }}</v-alert>

                        <div class="text-center">
                            <v-btn @click="edit_modal = false"><v-icon left>mdi-close</v-icon> Закрыть</v-btn>
                            <v-btn :disabled="(!valid || loading)" :loading="loading" color="success" type="submit">Сохранить</v-btn>
                        </div>
                    </v-card-text>
                </v-form>
            </v-card>
        </v-dialog>

        <v-dialog v-model="delete_modal" max-width="500px">
            <v-card>
                <v-card-title>Подтвердите удаление</v-card-title>
                
                <v-card-text>
                    <b>Вы действительно хотите удалить учётную запись {{ authUser.name }}</b>
                </v-card-text>
            
                <v-card-actions>
                    <v-btn text @click="deleteProfile"><v-icon left>mdi-delete-forever</v-icon> Удалить</v-btn>
                    <v-btn text @click="delete_modal = false"><v-icon left>mdi-close</v-icon> Закрыть</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-card>
</template>

<script>
    import { mapGetters } from 'vuex';
    import UserService from '../services/UserService';

    export default {
        data() {
            return {
                valid: true,
                token_modal: false,
                edit_modal: false,
                delete_modal: false,
                email: '',
                name: '',
                birthday: '',
                photo: [],
                // Тут простые правила валидации формы, проверка подтверждения вынесена отдельно
                rules: {
                    name: value => (value.length <= 42 || 'Превышена допустимая длинна'),
                    birthday: value => (value.length <= 20 || 'Превышена допустимая длинна'),
                    photo: value => (value == '' || value.size < 2000000 || 'Фото не должно превышать размер в 2 мегабайта!'),
                    email: value => {
                        const pattern = /.+@.+\..+/;
                        return (value == '' || pattern.test(value) || 'Должен быть действительным');
                    }
                }
            };
        },

        computed: {
            ...mapGetters('auth', ['authUser', 'authToken', 'error', 'loading'])
        },
        
        
        methods: {
            // Скопировать API token в буфер обмена и закрыть модальное окно
            copyToken(){
                navigator.clipboard.writeText(this.authToken).then(() => {
                    this.token_modal = false;
                });
            },

            userEditor(){
                this.edit_modal = true,
                
                this.email = this.authUser.email;
                this.name = this.authUser.name;
                this.birthday = this.authUser.b_date;
            },

            updateProfile(){
                let formData = new FormData();
                formData.append('_method', 'PUT');
                formData.append('email', this.email);
                formData.append('name', this.name);
                formData.append('birthday', this.birthday);
                formData.append('photo', this.photo);

                this.$store.dispatch('auth/update', formData).then(() => {
                    this.edit_modal = false;
                });
            },

            deleteProfile(){
                let formData = new FormData();
                formData.append('_method', 'DELETE');

                this.$store.dispatch('auth/delete', formData);
                this.$router.push({ name: 'main'});
            }
        },

        mounted() {
            
        }
    };
</script>