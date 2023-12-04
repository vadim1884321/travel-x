import { defineConfig } from 'astro/config';
import { SiteMetadata } from './src/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import critters from 'astro-critters';
import compress from 'astro-compress';
import favicons from 'astro-favicons';

// https://astro.build/config
export default defineConfig({
	site: SiteMetadata.website,
	prefetch: true,
	integrations: [
		mdx(),
		sitemap(),
		icon({
			iconDir: './src/assets/icons',
			include: {},
			svgoOptions: {
				multipass: true,
				plugins: [
					{
						name: 'preset-default',
						params: {
							overrides: {
								removeViewBox: false,
							},
						},
					},
				],
			},
		}),
		favicons({
			masterPicture: './public/favicon.svg',
			emitAssets: true,
			appName: SiteMetadata.title,
			appDescription: SiteMetadata.description,
			lang: SiteMetadata.locale,
			background: '#fff',
			theme_color: SiteMetadata.themeColor,
			display: 'standalone',
			orientation: 'natural',
			faviconsDarkMode: true,
			manifestMaskable: true,
			icons: {
				android: ['android-chrome-512x512.png', 'android-chrome-192x192.png'],
				appleIcon: ['apple-touch-icon.png'],
				appleStartup: false,
				favicons: ['favicon.ico'],
				windows: false,
				yandex: false,
				safari: false,
			},
		}),
		critters(),
		compress({ Image: false, SVG: false }),
	],
	vite: {
		plugins: [],
	},
});
