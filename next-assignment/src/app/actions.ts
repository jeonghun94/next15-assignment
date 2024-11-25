"use server";

export default async function handleLoginForm(prevState: any, formData: FormData) {
    try {
        await new Promise((resolve) => setTimeout(resolve, 500));

        const email = formData.get("email");
        const username = formData.get("username");
        const password = formData.get("password");

        return {
            success: password === "12345",
            data: { email, username, password },
        };
    } catch (error) {
        return {
            success: false,
            error: "Form submission failed",
        };
    }
}
