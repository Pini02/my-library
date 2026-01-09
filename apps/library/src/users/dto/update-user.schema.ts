import z from 'zod';

export const updateUserSchema = z.object({
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  email: z.email().optional(),
  password: z.string(),
});

export type UpdateUserDto = z.infer<typeof updateUserSchema>;
