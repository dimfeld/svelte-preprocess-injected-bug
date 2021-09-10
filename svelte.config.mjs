import preprocess from 'svelte-preprocess';

export default {
  preprocess: preprocess({
    typescript: {
      compilerOptions: {
        // Uncomment this to make things work.
        // outDir: undefined,
      },
    },
    sourceMap: true,
  }),
};
