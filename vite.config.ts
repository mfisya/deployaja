import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [sveltekit()],
    preview: {
        host: true,        // memungkinkan binding ke 0.0.0.0
        port: 8070,        // sesuaikan dengan port container Anda
        allowedHosts: ['deployaja.duckdns.org'],
    }
});


