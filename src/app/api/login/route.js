import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";


export async function POST(request){
  const {email, password} = await request.json();

  try {

    // 1. Get user and validate its email and password 
    const user = await User.findOne({
      email: email,
    });

    if(user == null){
      throw new Error("Invalid user!!")
    }

    const matched = bcrypt.compareSync(password, user.password);
    if(!matched){
      throw new Error("Incorrecr Password!!")
    }

    // 2. Generate Token
    const token = jwt.sign({
      _id: user._id,
      name: user.name
    }, process.env.JWT_KEY);

    console.log(user);
    console.log(token);

    // 3. Create NextResponse cookie
    const response = NextResponse.json({
      message: "Login success !!",
      success: true,
      user: user, 
    });

    response.cookies.set("authToken", token, {
      expiresIn: "1d",
      httpOnly: true,
    });

    console.log(user);
    console.log(token);

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}