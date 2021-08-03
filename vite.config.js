import vue from '@vitejs/plugin-vue'
import path from "path"
const srcPath = path.resolve(__dirname, "vue3-full-course/")

export default {
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "${srcPath}/assets/global";` },
    },
  },
}