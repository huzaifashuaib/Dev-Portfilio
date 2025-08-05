import { db } from "@/firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { NextResponse } from "next/server";

interface postData {
  name: string;
  email: string;
  msg: string;
}

export const POST = async (req: Request) => {
  try {
    const { name, email, msg } = await req.json();
    if (!name || !email || !msg) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    await addDoc(collection(db, "users"), {
      name,
      email,
      msg,
      createdAt: serverTimestamp(),
    });
    return NextResponse.json({ message: "Successfully Sent" }, { status: 200 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to Send Message";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
};
