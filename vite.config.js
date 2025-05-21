import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/primerapag/', // reemplaza con el nombre de tu repositorio
  plugins: [react()]
})
