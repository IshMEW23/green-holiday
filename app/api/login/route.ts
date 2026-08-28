import { NextResponse } from "next/server";

// Demo admin credentials used for the presentation
const ADMIN_EMAIL = "admin@greenholiday.lk";
const ADMIN_PASSWORD = "admin123";

export async function POST(request: Request) {
  try {
    // Read email and password from the login form
    const body = await request.json();

    const { email, password } = body;

    // Check if the email field is empty
    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "Email is required",
        },
        { status: 400 }
      );
    }

    // Check if the password field is empty
    if (!password) {
      return NextResponse.json(
        {
          success: false,
          message: "Password is required",
        },
        { status: 400 }
      );
    }

    // Check if the email is incorrect
    if (email !== ADMIN_EMAIL) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email address",
        },
        { status: 401 }
      );
    }

    // Check if the password is incorrect
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid password",
        },
        { status: 401 }
      );
    }

    // Login is successful when both credentials are correct
    return NextResponse.json(
      {
        success: true,
        message: "Login successful",
      },
      { status: 200 }
    );
  } catch {
    // Return an error if something unexpected happens
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}