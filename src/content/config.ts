import { z, defineCollection } from 'astro:content';

const photographyCollection = defineCollection({
	type: 'data',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		cover: z.string(),
		isPortrait: z.boolean()
	}),	
});

export const collections = {
  'photography': photographyCollection,
};
