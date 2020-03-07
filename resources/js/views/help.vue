<template>
    <section>
        <h1 class="text-center display-4 my-8">Справочная информация</h1>

        <v-alert prominent type="info">
            <v-row align="center">
                <v-col class="grow">Документация по работе с API расположена на Swagger, она может содержать недостаточно информации об ответах сервера.</v-col>
                    <v-col class="shrink">
                        <v-btn color="primary" href="https://app.swaggerhub.com/apis-docs/webmasterolegan/TestTask/0.0.1" target="_blank">API Документация</v-btn>
                    </v-col>
            </v-row>
        </v-alert>

    </section>
</template>