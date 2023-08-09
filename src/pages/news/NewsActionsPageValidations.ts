import {ZodType, z} from 'zod';
import {News} from '../../types';

export const newsActionsPageValidationSchema: ZodType<News> = z.object({
    _id: z.string(),
    title: z.string(),
    text: z.string(),
    type: z.enum(['general', 'student', 'professor']),
    isPublished: z.boolean(),
});
