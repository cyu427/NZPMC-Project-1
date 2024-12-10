import * as z from "zod"



export const verifyEmailSchema = z.object({
    email: z.string().email("Invalid email address"),
})

export const verificationSchema = z.object({
  code: z.string().length(6, "Verification code must be 6 digits"),
})

export const resetPasswordSchema = z.object({
    newPassword: z.string().min(8, "Password must be at least 8 characters"),
    confirmNewPassword: z.string(),
  }).refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords don't match",
    path: ["confirmNewPassword"],
  })

export type VerifyEmailFormData = z.infer<typeof verifyEmailSchema>
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>
export type VerificationFormData = z.infer<typeof verificationSchema>