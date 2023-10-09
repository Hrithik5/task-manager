import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

// get single task
export async function GET(request, {params}){
  const { taskID } = params;

  try {
    const requestedTask = await Task.findById(taskID);
    return NextResponse.json({
      requestedTask,
      sucess: true
    });
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in getting task of the user", 404, false);
  }
}

// delete task
export async function DELETE(request, { params }){
  const { taskID } = params;

  try {
    await Task.deleteOne({
      _id: taskID
    });
    return getResponseMessage("Task Deleted Sucessfully", 200, true);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error occured while deleting the task", 500, false);
  }
}

// update task
export async function PUT(request, {params}){

  try {
    const { taskID } = params;
    const  {title, content, status} = await request.json();

    let requiredTask = await Task.findById(taskID);
    requiredTask.title = title;
    requiredTask.content = content;
    requiredTask.status = status;

    const updatedTask = await requiredTask.save();
    return NextResponse.json({
      updatedTask,
      sucess: true,
    })
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in Updating task", 500, false);
  }
}