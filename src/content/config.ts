import { z, defineCollection } from 'astro:content';

const swiperCollection = defineCollection({
	type: 'data',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			tag: z.string(),
			image: image().optional(),
			color: z.string().default('#000000'),
			order: z.number(),
		}),
});

const socialCollection = defineCollection({
	type: 'data',
	schema: z.object({
		name: z.string().optional(),
		link: z.string().url(),
		icon: z.string(),
		order: z.number(),
	}),
});

export const collections = {
	swiper: swiperCollection,
	social: socialCollection,
};
