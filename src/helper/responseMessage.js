import { NextResponse } from "next/server"

export const getResponseMessage = (messageText, statusCode, sucessStatus) => {
  return NextResponse.json({
    message: messageText,
    success: sucessStatus
  },
  {
    status: statusCode
  })
}