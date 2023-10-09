import { User } from "@/models/user";
import { NextResponse } from "next/server";

// get single user
export async function GET(request, { params }){
  const {userID} = params;
  
  try {
    let requestedUser = await User.findById(userID).select('-password');
    return NextResponse.json({
      requestedUser,
      sucess: true
    });
  } catch (error) {
    return NextResponse.json({
      message: "User Not Found",
      sucess: false
    });
  }
}

// delete user
export async function DELETE(request, { params }){
  
  const { userID }  = params;

  try {
    await User.deleteOne({
      _id: userID
    });
    return NextResponse.json({
      message: "User deleted sucessfully",
      sucess: true
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error occured while deleting the user",
      sucess: false
    })
  }
}

export async function PUT(request, {params}){
  const {userID} = params;
  const {name, password, about, profileURL} = await request.json();

  try {
    const user = await User.findById(userID)
    user.name = name;
    user.password = password;
    user.about = about;
    user.profileURL = profileURL;

    const updatedUser = await user.save();

    return NextResponse.json({
      updatedUser,
      message: "User updated sucessfully",
      sucess: true,
    })
  } catch (error) {
    return NextResponse.json({
      message: "User Updation Failed",
      sucess: false
    })
  }
}