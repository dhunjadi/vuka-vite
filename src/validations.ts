import {ZodType, z} from 'zod';
import {News} from './types/newsTypes';
import {LoginForm} from './types/loginTypes';

export const loginPageValidationSchema: ZodType<LoginForm> = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(20),
});

export const newsActionsPageValidationSchema: ZodType<News> = z.object({
    _id: z.string(),
    title: z.string(),
    text: z.string(),
    type: z.enum(['general', 'student', 'professor']),
    isPublished: z.boolean(),
});
