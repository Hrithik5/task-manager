import { connectDB } from "@/helper/db";
import { NextResponse } from "next/server";
import { User } from '@/models/user'
import { getResponseMessage } from "@/helper/responseMessage";
import bcrypt from 'bcryptjs';

connectDB();

export async function GET(request){
  let users = [];
  try {
    users = await User.find().select('-password');
  } catch (error) {
    console.log(error);
    return getResponseMessage("Failed to get information of all users", 404, flase);
  }
  return NextResponse.json(users);
}


// create users
export async function POST(request) {
  // fetch user detail from  request

  const { name, email, password, about, profileURL } = await request.json();

  // console.log({ name, email, password, about, profileURL });

  // create user object with user model

  const user = new User({
    name,
    email,
    password,
    about,
    profileURL,
  });

  try {
    // save the object to  database
    user.password = bcrypt.hashSync(
      user.password,
      parseInt(process.env.BCRYPT_SALT)
    );

    // console.log(user);
    const createdUser = await user.save();
    console.log(createdUser);
    const response = NextResponse.json(user, {
      status: 201,
    });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "failed to create user !!",
        status: false,
      },
      {
        status: 500,
      }
    );
  }

  // const body = request.body;
  // console.log(body);
  // console.log(request.method);
  // console.log(request.cookies);
  // console.log(request.headers);
  // console.log(request.nextUrl.pathname);
  // console.log(request.nextUrl.searchParams);

  // const jsonData = await request.json();

  // const textData = await request.text();

  // console.log(jsonData);

  // console.log(textData);

  // return NextResponse.json({
  //   message: "posting user data",
  // });
}

