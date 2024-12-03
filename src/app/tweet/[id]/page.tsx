import db from "@/utils/db";

export default async function Tweet({ params }: { params: { id: string } }) {
    const tweet = await db.tweet.findUnique({
        where: {
            id: Number(params.id),
        },
    });
    return (
        <div className="flex flex-col gap-1 items-start border p-3 justify-center">
            <h1>Tweet</h1>
            <p>{tweet?.tweet}</p>
            <p>{tweet?.created_at.toLocaleString()}</p>
        </div>
    );
}
