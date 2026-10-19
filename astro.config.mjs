import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: 'https://ctapiadev.github.io',
    base: '/nodo-ai-dashboard',
    vite: {
        plugins: [tailwindcss()],
    },
});
