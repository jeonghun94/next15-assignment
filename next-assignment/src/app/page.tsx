"use client";

import { useActionState } from "react";
import FormInput from "./components/FormInput";
import Message from "./components/Message";
import handleLoginForm from "./actions";
import FormBtn from "./components/FormButton";

export default function Home() {
    const [state, action, isPending] = useActionState(handleLoginForm, null);

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
            <form className="flex flex-col gap-4" action={action}>
                <FormInput placeholder="이메일" type="email" name="email" defaultValue={state?.data?.email as string} />
                <FormInput
                    placeholder="사용자 이름"
                    type="text"
                    name="username"
                    defaultValue={state?.data?.username as string}
                />
                <FormInput
                    placeholder="비밀번호"
                    type="password"
                    name="password"
                    defaultValue={state?.data?.password as string}
                />

                <FormBtn />

                {/* <button
                    type="submit"
                    className={`bg-blue-500 text-white p-1 rounded-md hover:bg-blue-600 ${
                        isPending ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={isPending}
                >
                    {isPending ? "Loading..." : "Login"}
                </button> */}

                {state?.success ? (
                    <Message type="success" message="Welcome Back" />
                ) : (
                    state !== null && <Message type="error" message="Wrong password" />
                )}
            </form>
        </div>
    );
}
