// api/webnaz/signup.ts (or wherever your handlers live)

type T = {
  email: string
  password: string
  firstName: string
  lastName: string
}

type R = {
  success: boolean
  message: string
  code: number
}

declare global { interface API { "webnaz/signup": (T: T) => R } var API: API }

const usersCollection = udb.collection("members")

export default async function F(T: T, C: APISession): Promise<R> {
  const { email, password, firstName, lastName } = T

  if (!email || !password || !firstName || !lastName) {
    return {
      success: false,
      message: "Missing required fields",
      code: 400,
    }
  }

  try {
    const existing = await usersCollection.findOne({ email })

    if (existing) {
      return {
        success: false,
        message: "User already exists with this email",
        code: 409,
      }
    }

    await usersCollection.insertOne({
      email,
      password, // ⚠️ Plain text password — for dev only!
      firstName,
      lastName,
      isActive: true,
      createdAt: new Date(),
    })

    return {
      success: true,
      message: "User registered successfully",
      code: 0,
    }
  } catch (err) {
    console.error("Signup error:", err)
    return {
      success: false,
      message: "Internal server error",
      code: 500,
    }
  }
}
