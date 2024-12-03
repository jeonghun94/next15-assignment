"use server";

import { z } from "zod";

const checkEmail = (email: string) => email.includes("@zod.com");

const formSchema = z.object({
    email: z.string().email().refine(checkEmail, { message: "Only @zod.com email is allowed" }),
    username: z.string().min(5, { message: "Username must be at least 5 characters long" }),
    password: z
        .string()
        .min(10, { message: "Password must be at least 10 characters long" })
        .refine((data) => /[0-9]/.test(data), { message: "Password must include at least one number" }),
});

export default async function handleLoginForm(prevState: any, formData: FormData) {
    const data = {
        email: formData.get("email"),
        username: formData.get("username"),
        password: formData.get("password"),
    };

    const result = formSchema.safeParse(data);

    if (!result.success) {
        return {
            success: false,
            fieldErrors: result.error.flatten().fieldErrors,
        };
    }

    return { success: true };
}
