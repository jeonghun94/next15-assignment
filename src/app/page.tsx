"use client";

import db from "@/utils/db";
import Link from "next/link";

async function getTweets(page: number) {
    const tweets = await db.tweet.findMany({
        skip: (page - 1) * 3,
        take: 3,
        orderBy: {
            created_at: "desc",
        },
    });
    return tweets;
}

async function getPageCount() {
    const tweetLength = await db.tweet.findMany();
    return Math.ceil(tweetLength.length / 3);
}

export default async function Home({ searchParams }: { searchParams: { page: string } }) {
    const currentPage = Number(searchParams.page) || 1;

    const tweets = await getTweets(currentPage);
    const pageSize = await getPageCount();

    return (
        <div className="flex flex-col gap-1 items-center justify-center">
            <h1>HOME</h1>

            {tweets.map((tweet) => (
                <Link href={`/tweet/${tweet.id}`} className="border-2 border-stone-300 rounded-md p-1" key={tweet.id}>
                    <p>{tweet.tweet}</p>
                    <p>{tweet.created_at.toLocaleString()}</p>
                </Link>
            ))}

            <div className="flex gap-3">
                {Array.from({ length: pageSize }).map((_, index) => (
                    <Link href={`/?page=${index + 1}`} key={index} className="border  border-stone-300 rounded-md p-2">
                        {index + 1}
                    </Link>
                ))}
            </div>
        </div>
    );
}
