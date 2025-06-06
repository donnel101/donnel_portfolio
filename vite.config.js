import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vuetify({ autoImport: true })],
    resolve: {
        alias: {
            '@component': fileURLToPath(new URL('./src/components', import.meta.url)),
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});
