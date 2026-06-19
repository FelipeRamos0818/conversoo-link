// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Force the Nitro deploy bundle with the Netlify preset. Without an explicit
  // `nitro` option, the wrapper skips Nitro entirely outside the Lovable sandbox
  // (Vite-only build, no SSR server) — which is why Netlify served only the
  // static client and 404'd every route. `preset: "netlify"` makes Nitro emit a
  // Netlify Function for SSR plus the static client.
  nitro: { preset: "netlify" },
});
