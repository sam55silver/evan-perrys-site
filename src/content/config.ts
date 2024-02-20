import { z, defineCollection } from 'astro:content';

const photographyCollection = defineCollection({
	type: 'data',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		cover: z.string(),
	}),	
});

export const collections = {
  'photography': photographyCollection,
};
