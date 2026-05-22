import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Corrigido aqui

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/gerenciador-tarefas/', // Certifique-se de que este é o nome exato do seu repositório
})