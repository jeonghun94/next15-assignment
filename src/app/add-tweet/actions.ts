"use server";

import db from "@/utils/db";
import { getSession } from "@/utils/session";
import { z } from "zod";
import { redirect } from "next/navigation";
const tweetSchema = z.object({
    tweet: z.string().min(3, "Tweet must be at least 3 characters long."),
});

export async function addTweet(_: unknown, formData: FormData) {
    const tweet = formData.get("tweet");

    const result = tweetSchema.safeParse({ tweet });
    if (!result.success) {
        return {
            error: result.error.flatten().fieldErrors,
        };
    }

    const session = await getSession();
    const addTweet = await db.tweet.create({
        data: {
            tweet: tweet as string,
            userId: Number(session?.id),
        },
    });

    if (addTweet.id) redirect(`/tweet/${addTweet.id}`);
}
