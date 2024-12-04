import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
    const mockData = {
        message: "This is a test endpoint!",
        data: [1, 2, 3, 4, 5],
    };

    return NextResponse.json(mockData, { status: 200 });
}
