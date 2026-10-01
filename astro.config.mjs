// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://clinics.lustresystems.com',
    // Off so whitespace between inline elements survives: the hero headline is one span per word.
    compressHTML: false,
});
