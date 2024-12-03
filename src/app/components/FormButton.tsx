"use client";

import { useFormStatus } from "react-dom";

export default function FormBtn() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className={`bg-blue-500 text-white p-1 rounded-md hover:bg-blue-600 ${
                pending ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={pending}
        >
            {pending ? "Loading..." : "Login"}
        </button>
    );
}
