<script setup>
import { defineComponent, reactive } from 'vue';

defineComponent({
    name: 'ContactInfo',
});

defineProps({
    header: String,
});

const data = reactive([
    {
        icon: 'mdi-cellphone-sound',
        title: 'Phone',
        value: '+63 916 8744 997',
        href: 'tel:+639168744997',
        target: null,
    },
    // {
    //     icon: 'mdi-message-text',
    //     title: 'Telegram',
    //     value: '@fordiquez',
    //     href: 'https://t.me/fordiquez',
    //     target: '_blank',
    // },
    {
        icon: 'mdi-gmail',
        title: 'Gmail',
        value: 'donneltagalog@gmail.com',
        href: 'mailto:donneltagalog@gmail.com',
        target: null,
    },
    {
        icon: 'mdi-github',
        title: 'GitHub',
        value: 'donnel101',
        href: 'https://github.com/donnel101',
        target: '_blank',
    },
    {
        icon: 'mdi-linkedin',
        title: 'LinkedIn',
        value: 'donnel-tagalog',
        href: 'https://www.linkedin.com/in/donnel-tagalog-9290951aa/',
        target: '_blank',
    },
]);
</script>

<template>
    <div class="contact-info">
        <h5 class="text-h5 text-uppercase text-deep-purple-accent-1">{{ header }}</h5>
        <div class="contact-info__item mt-3" v-for="(item, i) in data" :key="i">
            <div class="contact-info__icon">
                <v-icon size="x-large">{{ item.icon }}</v-icon>
            </div>
            <div class="contact-info__content">
                <span class="text-uppercase text-button">{{ item.title }}</span>
                <a :href="item.href" :target="item.target">{{ item.value }}</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.contact-info__item {
    display: flex;
    align-items: flex-end;
}

.contact-info__content {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}
</style>
