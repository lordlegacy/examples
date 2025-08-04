import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	preview: {
		port: 3000,
		host: true,    // This enables listening on all network interfaces
	},	
	server:{
		port: 3000,
		host: true
	}
});
