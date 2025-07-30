import React, { useState } from "react"

export default function LoginModal({ onClose }: { onClose: () => void }) {
  const [isSignup, setIsSignup] = useState(false)
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  })
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    setError("")
    setMessage("")

    try {
      const data = isSignup
        ? await API["webnaz/signup"](form)
        : await API["webnaz/login"](form) // login handler not implemented yet

      if (!data.success) {
        setError(data.message)
      } else {
        setMessage(data.message)
        setTimeout(() => {
          onClose()
        }, 1000)
      }
    } catch (e) {
      console.error("API call error:", e)
      setError("An error occurred. Please try again.")
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[2000]">
      <div className="bg-white p-6 rounded-lg shadow-xl w-[400px] relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-xl">
          ✕
        </button>
        <h2 className="text-xl mb-4">{isSignup ? "Sign Up" : "Login"}</h2>

        {isSignup && (
          <>
            <input
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              className="mb-2 w-full p-2 border"
            />
            <input
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              className="mb-2 w-full p-2 border"
            />
          </>
        )}
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="mb-2 w-full p-2 border"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="mb-2 w-full p-2 border"
        />

        {error && <p className="text-red-500 mb-2">{error}</p>}
        {message && <p className="text-green-500 mb-2">{message}</p>}

        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white p-2 rounded mb-2"
        >
          {isSignup ? "Sign Up" : "Login"}
        </button>

        <button
          onClick={() => setIsSignup(!isSignup)}
          className="text-sm underline text-blue-600"
        >
          {isSignup ? "Already have an account?" : "Create a new account"}
        </button>
      </div>
    </div>
  )
}
