import { z } from "zod";
import { createInsertSchema } from "drizzle-zod";

// For now, we'll define a minimal schema structure
// This can be expanded as needed for the AIRET application

export const contactSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
  createdAt: z.date(),
});

export type Contact = z.infer<typeof contactSchema>;

// Insert schema (exclude auto-generated fields)
export const insertContactSchema = contactSchema.omit({ id: true, createdAt: true });
export type InsertContact = z.infer<typeof insertContactSchema>;