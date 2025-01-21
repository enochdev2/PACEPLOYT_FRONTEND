import DBConnect from "@/app/db/db_connect";
import Users from "@/app/db/models/users"
import mongoose from "mongoose"
import { NextResponse } from "next/server";
// Connecting to db
export const GET = async (req, res) => {
    // DBConnect();

    // const users = await Users.find();
  return  NextResponse.json({ message: "Hello" });
}