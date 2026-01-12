import z from 'zod';

export const CreateBookSchema = z.object({
  isbn: z.string(),
  title: z.string(),
  description: z.string(),
  quantity: z.number().min(0),
});

export type CreateBookDto = z.infer<typeof CreateBookSchema>;
