<script setup>
import { defineComponent, reactive } from 'vue';
import { useDisplay } from 'vuetify';
import PersonalInfo from '../components/PersonalInfo.vue';
import ContactInfo from '../components/ContactInfo.vue';
import Skills from '../components/Skills.vue';
import Timelines from '../components/Timelines.vue';
import Languages from '../components/Languages.vue';

defineComponent({
    name: 'Profile',
});

const { xs, sm, smAndDown, md, mdAndDown } = useDisplay();

const profile = reactive({
    fullName: 'Donnel Tagalog',
    position: 'Full-stack Web Developer',
});
</script>
<template>
    <div class="container">
        <v-row>
            <v-col cols="12">
                <v-row>
                    <v-col cols="3">SpecSheet</v-col>
                    <v-col cols="3">First Project</v-col>
                    <v-col cols="3">First Project</v-col>
                    <v-col cols="3">First Project</v-col>
                </v-row>
            </v-col>
            <v-col cols="3">meok</v-col>
            <v-col cols="3">meok</v-col>
            <v-col cols="3">meok</v-col>
            <v-col cols="3">meok</v-col>
            <v-col cols="3">meok</v-col>
        </v-row>
    </div>
</template>

<style scoped>
/* .container {
    max-width: 1440px;
    margin: 0 auto;
} */

.profile {
    border-radius: 50%;
    display: flex;
}

.profile__image,
.profile__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.block {
    margin-top: 50px;
}

.block__row {
    display: flex;
}

@media (max-width: 767px) {
    .profile {
        flex-direction: column;
    }

    .profile__image,
    .profile__text {
        align-items: center;
    }

    h1,
    h2 {
        text-align: center;
    }
}

@media (min-width: 768px) {
    .profile__text {
        margin-left: 50px;
    }
}

@media (min-width: 992px) {
    .block__element-1 {
        flex: 0 0 300px;
        margin-right: 20px;
    }

    .block__element-2 {
        flex: 1 1 auto;
        margin-left: 20px;
    }
}
@media (max-width: 991px) {
    .block__element-1 {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
}
.zoomed-image {
    transform: scale(1.4);
    transform-origin: center center;
}
</style>
