import { NextResponse as res } from "next/server";
import { db } from "@/lib/db";
import User from "@/schema/user.schema";
export const POST = async (request) => {
  db();

  try {
    const body = await request.json();

    const user = new User(body);
    await user.save();

    return res.json(
      {
        message: "Signup successfull",
        success: true,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return res.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
};
