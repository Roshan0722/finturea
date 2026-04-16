import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
// content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//    theme: {
//     extend: {
//       fontFamily: {
//         sans: ["DM Sans", "sans-serif"],
//       },
//     },
//   },
//   plugins: [react(),tailwindcss(),
// ],
// })
export default defineConfig({
  plugins: [react()],
  base: '/', // important for Vercel
})