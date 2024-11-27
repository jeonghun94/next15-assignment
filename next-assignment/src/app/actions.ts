"use server";

import { z } from "zod";

const checkEmail = (email: string) => email.includes("@zod.com");

const formSchema = z.object({
    email: z.string().email().refine(checkEmail, { message: "Only @zod.com email is allowed" }),
    username: z.string().min(5, { message: "Username must be at least 5 characters long" }),
    password: z.string().min(10, { message: "Password must be at least 10 characters long" }),
});

type FormState = {
    success: boolean;
    data?: {
        email: string | null;
        username: string | null;
        password: string | null;
    };
    fieldErrors?: {
        email?: string[];
        username?: string[];
        password?: string[];
    };
};

export default async function handleLoginForm(prevState: FormState, formData: FormData): Promise<FormState> {
    const data = {
        email: formData.get("email")?.toString() ?? null,
        username: formData.get("username")?.toString() ?? null,
        password: formData.get("password")?.toString() ?? null,
    };

    const result = formSchema.safeParse(data);

    if (!result.success) {
        return {
            success: false,
            data,
            fieldErrors: result.error.flatten().fieldErrors,
        };
    }

    return {
        success: true,
        data,
    };
}
