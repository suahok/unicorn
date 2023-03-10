/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  VITE_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
