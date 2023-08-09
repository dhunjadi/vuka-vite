import {ZodType, z} from 'zod';
import {LoginForm} from '../../types';

export const loginPageValidationSchema: ZodType<LoginForm> = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(20),
});
