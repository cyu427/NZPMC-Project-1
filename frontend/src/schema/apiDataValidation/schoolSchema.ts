import * as z from "zod"

export const schoolSchema = z.object({
    
  name: z.string(),
  eqi: z.number()
})

export type SchoolFormData = z.infer<typeof schoolSchema> 

