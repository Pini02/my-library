import z from 'zod';

export const createUsersAdminSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export type CreateUsersAdminDto = z.infer<typeof createUsersAdminSchema>;
