import { z, defineCollection } from "astro:content";
import { file } from 'astro/loaders';
import { parse } from 'toml';

const techniques = defineCollection({
  loader: file('src/data/techniques.toml', { parser: (text) => parse(text).techniques }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    inhaleTime: z.number().nonnegative(),
    holdTime: z.number().nonnegative(),
    exhaleTime: z.number().nonnegative(),
    bottomHoldTime: z.number().nonnegative(),
    rounds: z.number().nonnegative(),
    difficulty: z.enum(["beginner", "intermediate", "advanced"]),
    breathHoldAfterRound: z.number().nonnegative().optional(),
    roundsOfRounds: z.number().nonnegative().optional(),
  }),
});

export const collections = {
  techniques,
};