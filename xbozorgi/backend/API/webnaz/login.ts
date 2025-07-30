import { Code, Collection, MongoClient } from "mongodb"
import { ObjectId } from "mongodb"
import SerialGenerator from "@/frontend/components/qecomps/SerialGenerator"

type T = {
    email: string
    password: string
}

type R = {
    success: boolean
    user?: {
        userId: string
        email: string
        firstName: string
        lastName: string
        phoneNumber?: string
    }
    message: string
    code: number
}

declare global { interface API { "webnaz/login": (T: T) => R } var API: API }

export default async function F(T: T, C: APISession): Promise<R> {
    const usersCollection = udb.collection("members")

    const user = await usersCollection.findOne({
        email: T.email,
    })

    if (!user) {
        return {
            success: false,
            message: "کاربری با این ایمیل یافت نشد",
            code: 1,
        }
    }

    if (user.password !== T.password) {
        return {
            success: false,
            message: "رمز عبور نادرست است",
            code: 2,
        }
    }

    if (user.isActive === false) {
        return {
            success: false,
            message: "حساب کاربری غیرفعال شده است",
            code: 3,
        }
    }

    await usersCollection.updateOne(
        { _id: user._id },
        { $set: { lastLogin: new Date() } }
    )

    return {
        success: true,
        user: {
            userId: user._id.toString(),
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber,
        },
        message: "ورود با موفقیت انجام شد",
        code: 0,
    }
}
