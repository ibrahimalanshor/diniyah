// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: 'https://ibrahimalanshor.github.io',
    base: '/diniyah',
    vite: {
        plugins: [tailwindcss()],
    },
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: 'Google Sans',
            cssVariable: '--font-google'
        },
        {
            provider: fontProviders.fontsource(),
            name: 'Noto Kufi Arabic',
            cssVariable: '--font-noto-kufi-arabic'
        }
    ]
});
