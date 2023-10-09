
// work schema and model creation

import { NextResponse } from "next/server";
import { Task } from "@/models/task";
import { getResponseMessage } from "@/helper/responseMessage";
import jwt from 'jsonwebtoken';

//get all tasks
export async function GET(request) {
  try {
    const task = await Task.find();
    return NextResponse.json(task, {
      sucess: true
    })
  } catch (error) {
    return getResponseMessage("Error in getting data", 404, false);
  }
}

//create task
export async function POST(request){
  const {title, content, userId, status} = await request.json();

  // Fetching Logged in User userId
  const authToken = request.cookies.get("authToken")?.value;
  // console.log(authToken);
  const data = jwt.verify(authToken,process.env.JWT_KEY);
  // console.log(data);

  try {
    const task = new Task({
      title,
      content,
      userId: data._id,
      status,
    });
    const createdTask = await task.save();

    return NextResponse.json(createdTask, {
      message : "Task created sucessfully",
      status: 201
    });
  } catch (error) {
    console.log(error);
    return getResponseMessage("Failed to create task", 500, false);
  }
}