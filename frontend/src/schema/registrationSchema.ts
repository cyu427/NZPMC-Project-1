import * as z from "zod"

export const personalInfoSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name"),
  lastName: z.string().min(1, "Please enter your last name"),
})

export const educationSchema = z.object({
  homeSchooled: z.boolean(),
  school: z.string().min(2, "School name must be at least 2 characters").optional(),
}).refine((data) => data.homeSchooled || (!!data.school && data.school.trim().length > 0), {
  message: "School name is required if not home-schooled",
  path: ["school"],
});


export const accountSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export const verificationSchema = z.object({
  code: z.string().length(6, "Verification code must be 6 digits"),
})

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

export const resetPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
  verificationCode: z.string().length(6, "Verification code must be 6 digits"),
  newPassword: z.string().min(8, "Password must be at least 8 characters"),
  confirmNewPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmNewPassword, {
  message: "Passwords don't match",
  path: ["confirmNewPassword"],
})

export type PersonalInfoFormData = z.infer<typeof personalInfoSchema>
export type EducationFormData = z.infer<typeof educationSchema>
export type AccountFormData = z.infer<typeof accountSchema>
export type VerificationFormData = z.infer<typeof verificationSchema>
export type LoginFormData = z.infer<typeof loginSchema>
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>

