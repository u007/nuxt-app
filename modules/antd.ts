// modules/antdv.js
import { fileURLToPath } from "node:url"
import { defineNuxtModule } from "@nuxt/kit"

export default defineNuxtModule({
  setup (_, nuxt) {
    nuxt.options.css.push("ant-design-vue/dist/antd.css")
  },
  hooks: {
    "components:dirs" (dirs) {
      dirs.push({
        path: fileURLToPath(new URL("../node_modules/ant-design-vue/es", import.meta.url)),
        pattern: "*/index.js",
        prefix: "a"
      })
    }
  }
})