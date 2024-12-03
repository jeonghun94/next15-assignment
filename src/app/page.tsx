"use client";

import { useActionState, useState } from "react";
import handleLoginForm from "./actions";
import FormInput from "./components/FormInput";
import FormBtn from "./components/FormButton";
import Message from "./components/Message";

export default function Home() {
    const [state, action] = useActionState(handleLoginForm, null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        action(formData);
    };

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center gap-4 ">
            <form className="flex flex-col gap-4 w-1/5" onSubmit={handleSubmit}>
                <FormInput placeholder="이메일" type="email" name="email" errors={state?.fieldErrors?.email} />
                <FormInput
                    placeholder="사용자 이름"
                    type="text"
                    name="username"
                    errors={state?.fieldErrors?.username}
                />
                <FormInput
                    placeholder="비밀번호"
                    type="password"
                    name="password"
                    errors={state?.fieldErrors?.password}
                />
                <FormBtn />
                {state?.success && <Message type="success" message="Welcome Back" />}
            </form>
        </div>
    );
}
