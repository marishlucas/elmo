import * as z from "zod";
import { paginationSchema } from "./pagination";

export const brandSchema = z.object({
	id: z.string(),
	name: z.string(),
	domains: z.array(z.string()),
	aliases: z.array(z.string()),
	/** ISO 3166-1 alpha-2 country the engines are asked from; null uses the provider default. */
	country: z.string().nullable(),
	/** Google canonical location name for engines that take a city; null asks at country level. */
	location: z.string().nullable(),
	enabled: z.boolean(),
	onboarded: z.boolean(),
	createdAt: z.iso.datetime({ offset: true }),
	updatedAt: z.iso.datetime({ offset: true }),
	organizationId: z.string(),
	enabledModels: z.array(z.string()).nullable(),
	delayOverrideHours: z.int().nullable(),
});

export const brandsListSchema = z.object({
	data: z.array(brandSchema),
	brands: z.array(brandSchema),
	pagination: paginationSchema,
});
