import {defineConfig} from 'astro/config';

import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    integrations: [tailwind(), preact({compat: true})],
    adapter: netlify(),
});
