import { z } from 'zod';
import 'dotenv/config';

const envSchema = z.object({
  PORT: z.coerce.number().int().min(1024).max(65535).default(4000),
  SUPABASE_URL: z.string().url().optional(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1).optional(),
  SUPABASE_ANON_KEY: z.string().min(1).optional()
}).superRefine((val, ctx) => {
  if (val.SUPABASE_URL && !(val.SUPABASE_SERVICE_ROLE_KEY || val.SUPABASE_ANON_KEY)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Provide SUPABASE_SERVICE_ROLE_KEY or SUPABASE_ANON_KEY when SUPABASE_URL is set'
    });
  }
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error('Invalid environment configuration:', parsed.error.flatten().fieldErrors);
  throw new Error('Backend environment variables are not configured properly.');
}

export const env = parsed.data;

