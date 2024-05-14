import {isAdmin} from "@/app/api/auth/[...nextauth]/route";
import {EmployeeInfo} from "@/models/EmployeeInfo";
import mongoose from "mongoose";

export async function POST(req) {
  mongoose.connect(process.env.MONGO_URL);
  const data = await req.json();
  if (await isAdmin()) {
    const employeeInfoDoc = await EmployeeInfo.create(data);
    return Response.json(employeeInfoDoc);
  } else {
    return Response.json({});
  }
}

export async function PUT(req) {
  mongoose.connect(process.env.MONGO_URL);
  if (await isAdmin()) {
    const {_id, ...data} = await req.json();
    await EmployeeInfo.findByIdAndUpdate(_id, data);
  }
  return Response.json(true);
}

export async function GET() {
  mongoose.connect(process.env.MONGO_URL);
  return Response.json(
    await EmployeeInfo.find()
  );
}

export async function DELETE(req) {
  mongoose.connect(process.env.MONGO_URL);
  const url = new URL(req.url);
  const _id = url.searchParams.get('_id');
  if (await isAdmin()) {
    await EmployeeInfo.deleteOne({_id});
  }
  return Response.json(true);
}