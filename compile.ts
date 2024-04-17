import { $ } from 'bun';

await $`rm -rf dist`.nothrow();
await $`mkdir dist`;
await $`cp node_modules/webview-bun/build/**.* dist`;

$.cwd('dist');

await $`bun build --compile --minify --sourcemap ../src/index.ts --outfile logic-app`;
