"use client";

import { useFormState } from "react-dom";
import { addTweet } from "./actions";
import Button from "@/components/button";

export default function AddTweet() {
    const [state, action] = useFormState(addTweet, null);
    return (
        <div className="flex flex-col gap-1 items-center justify-center w-full">
            <form className="flex flex-col gap-1 border-2 border-red-200 rounded-md items-center" action={action}>
                <h3>Add Tweet</h3>
                <textarea
                    name="tweet"
                    placeholder="Tweet"
                    className="border-2 border-red-100 rounded-md p-1 text-black"
                />
                <Button text="Submit" />
                {state?.error && <p>{state.error.tweet}</p>}
            </form>
        </div>
    );
}
