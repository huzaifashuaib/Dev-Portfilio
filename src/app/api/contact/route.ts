import { NextResponse } from "next/server";

interface postData {
  name: string;
  email: string;
  msg: string;
}

export const POST = async (request: Request) => {
  try {
    (await request.json()) as postData;

    return NextResponse.json({ message: "Successfully Sent" }, { status: 200 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to Send Message";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
};
