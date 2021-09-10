# Reproduction for svelte-preprocess sourcemap crash issue.

1. yarn install
2. yarn build
3. Note the build failure
4. Uncomment the `outDir` entry in `svelte.config.mjs` and build again to see things work.
