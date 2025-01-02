import { z } from "zod";

export const createCompetitionSchema = z.object({
    title: z.string().min(1, "Please enter competition title"),
})

export type CreateCompetitionFormData = z.infer<typeof createCompetitionSchema>
