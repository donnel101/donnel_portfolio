<script setup>
import { defineComponent, reactive } from 'vue';

defineComponent({
    name: 'Timelines',
});

const timelines = reactive([
    {
        id: 0,
        icon: 'mdi-book-education',
        color: 'cyan lighten-1',
        title: 'Mindanao State University - Maigo School of Arts and Trades',
        position: 'Computer Science',
        period: 'JUN 2011 — APR 2017',
        description: 'Bachelor of Computer Science',
    },
    {
        id: 1,
        icon: 'mdi-briefcase-variant',
        color: 'amber darken-1',
        title: 'HTI House Technology Industries PTE. LTD.',
        position: 'Office Staff / Admin Staff',
        period: 'MAY — OCT 2018',
        description: 'Under Recruitment Department and Staff management',
    },
    {
        id: 2,
        icon: 'mdi-briefcase-variant',
        color: 'blue-darken-3',
        title: 'H.R.D. Singapore Pte Ltd',
        position: 'Office Staff / House Plan Designer',
        period: 'JAN 2019 — JUN 2019',
        description: 'Designer of Parapet Roof for the House Specification',
    },
    {
        id: 3,
        icon: 'mdi-briefcase-variant',
        color: 'blue-grey',
        title: 'H.R.D. Singapore Pte Ltd',
        position: 'Senior Staff / Web Developer',
        period: 'JAN 2021 — DEC 2023',
        description: 'Create and Maintain the System use in USA staff and Pinoy Staff using Laravel and Vue.js',
    },
    {
        id: 4,
        icon: 'mdi-briefcase-variant',
        color: 'deep-orange-lighten-1',
        title: 'Octal Philippines Inc.',
        position: 'PHP developer',
        period: 'MAR 2024 — MAR 2025',
        description: 'Building and modifying Laravel & Vue.js projects',
    },
]);
</script>

<template>
    <div class="timeline mt-5">
        <h5 class="text-h5 text-uppercase text-center text-deep-purple-accent-1">Education & work</h5>
        <v-timeline class="mt-5">
            <v-timeline-item
                v-for="timeline in timelines"
                :key="timeline.id"
                :dot-color="timeline.color"
                :icon="timeline.icon"
                size="large"
            >
                <template v-slot:opposite>
                    <div
                        :class="`pt-1 headline font-weight-bold text-button text-${timeline.color}`"
                        v-text="timeline.period"
                    ></div>
                </template>
                <div>
                    <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${timeline.color}`">
                        {{ timeline.title }}
                    </h2>
                    <h5 :class="`text-button text-${timeline.color}`">{{ timeline.position }}</h5>
                    <span class="text-subtitle-2">{{ timeline.description }}</span>
                </div>
            </v-timeline-item>
        </v-timeline>
    </div>
</template>
