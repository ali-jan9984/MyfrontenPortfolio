import {defineConfig} from 'vite';
import react from '@vitejs/plugin-reat';

export default defineConfig({
    plugins:[react()],
    modules:{
        localsConvention:"CamelCase",
    }
})