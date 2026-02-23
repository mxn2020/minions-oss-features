import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    base: '/',
    optimizeDeps: {
        include: ['@minions-oss-features/sdk'],
    },
    build: {
        commonjsOptions: {
            include: [/oss-features/, /node_modules/],
        },
    },
});
