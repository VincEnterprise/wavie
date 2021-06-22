// this allows much faster HMR
// discussed here: https://github.com/tailwindlabs/tailwindcss/issues/2820
import './styles/tw-base.postcss'
import './styles/tw-components.postcss'
import './styles/tw-utilities.postcss'
import './styles/main.postcss'

import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
  },
)
