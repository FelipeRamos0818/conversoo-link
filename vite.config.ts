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
  // Force the Nitro deploy bundle. Without an explicit `nitro` option, the wrapper
  // skips Nitro entirely outside the Lovable sandbox (Vite-only build, no SSR server)
  // — which is why the host served only the static client and 404'd every route.
  //
  // Preset is chosen by the build environment: Vercel sets VERCEL=1, everything else
  // (Netlify included) keeps "netlify".
  //
  // The Lovable wrapper hard-codes output to dist/{client,server}. Netlify is happy
  // with that (netlify.toml points at dist/server). Vercel auto-detects the Build
  // Output API v3 layout under .vercel/output, so for Vercel we override the output
  // back to the preset's native locations (static + functions/__server.func).
  nitro: process.env.VERCEL
    ? {
        preset: "vercel",
        output: {
          dir: ".vercel/output",
          serverDir: ".vercel/output/functions/__server.func",
          publicDir: ".vercel/output/static",
        },
      }
    : { preset: "netlify" },
});
