import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.MY_VARIABLE': JSON.stringify('my_value'), // ここで環境変数を定義
  },
});