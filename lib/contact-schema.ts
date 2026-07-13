import { z } from "zod";

export const serviceOptions = [
  "Digital Transformation",
  "IT Consultancy",
  "ERP Implementation",
  "Custom Software Development",
  "Not sure yet",
] as const;

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  company: z.string().min(2, "Please enter your company or institution"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .regex(/^[+\d][\d\s()-]{5,19}$/, "Please enter a valid phone number"),
  service: z.enum(serviceOptions, {
    message: "Please select a service",
  }),
  message: z
    .string()
    .min(20, "Tell us a bit more — at least 20 characters")
    .max(2000, "Please keep your message under 2000 characters"),
});

export type ContactPayload = z.infer<typeof contactSchema>;
