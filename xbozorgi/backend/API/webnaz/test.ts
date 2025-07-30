import { Collection } from "mongodb"
import { ObjectId } from "mongodb"

type T = {
  Sid: string
  Sname: string
  SlastName: string
  SnationalID: string
  Sphone: string
  SstudentNum: string
}

type R = {
  success: boolean
  message: string
  code: number
}

declare global { interface API { "webnaz/test": (T: T) => R } var API: API }

const membersCollection = udb.collection("members")

export default async function F(T: T, C: APISession): Promise<R> {
  try {
    const existing = await membersCollection.findOne({
      $or: [
        { SstudentNum: T.SstudentNum },
        { SnationalID: T.SnationalID },
      ],
    })

    if (existing) {
      return {
        success: false,
        message: "کاربری با این اطلاعات قبلاً ثبت‌نام کرده است",
        code: 1,
      }
    }

    const result = await membersCollection.insertOne({
      Sid: T.Sid,
      Sname: T.Sname,
      SlastName: T.SlastName,
      SnationalID: T.SnationalID,
      Sphone: T.Sphone,
      SstudentNum: T.SstudentNum,
      isActive: true,
      createdAt: new Date(),
    })

    return {
      success: true,
      message: "ثبت‌نام با موفقیت انجام شد",
      code: 0,
    }
  } catch (err) {
    console.error("SignUp Error:", err)
    return {
      success: false,
      message: "خطا در ثبت‌نام کاربر",
      code: 500,
    }
  }
}