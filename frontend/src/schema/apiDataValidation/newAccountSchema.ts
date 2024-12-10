import * as z from "zod"

export const accountSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name"),
  lastName: z.string().min(1, "Please enter your last name"),
  homeSchooled: z.boolean(),
  school: z.string().optional(),
  email: z.string().email(),
  password: z.string().min(8),
})

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export type AccountFormData = z.infer<typeof accountSchema> 
export type SignInData = z.infer<typeof signInSchema> 

