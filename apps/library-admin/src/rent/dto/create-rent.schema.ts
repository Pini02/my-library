import z from 'zod';

export const createRentSchema = z.object({
  user_id: z.number().int().positive(),
  isbn: z.string(),
  end_date: z.iso.date().refine((date) => {
    const now = new Date().toISOString();
    return date > now ? date : null;
  }),
});

export type CreateRentDto = z.infer<typeof createRentSchema>;
