import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
  const {userID} = params;

  try {
    const requestedTasksOfUser = await Task.find({
      userId: userID
    });

    return NextResponse.json(requestedTasksOfUser);
  } catch (error) {
    console.log(error);
    return getResponseMessage("No task found for this user", 404, false);
  }
}