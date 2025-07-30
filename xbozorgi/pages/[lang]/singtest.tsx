import Component, { PageEl } from "@/frontend/components/qecomps/Component"
import type { GetServerSideProps, GetServerSidePropsContext } from "next"
import Brightness4Icon from "@mui/icons-material/Brightness4"
import Brightness7Icon from "@mui/icons-material/Brightness7"
import React from "react"
import PersonIcon from "@mui/icons-material/Person"
import LockIcon from "@mui/icons-material/Lock"
import PhoneIcon from "@mui/icons-material/Phone"
import BadgeIcon from "@mui/icons-material/Badge"
import SchoolIcon from "@mui/icons-material/School"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import Router from "next/router"

export default (p) => Component(p, Page)

const Page: PageEl = (props: {} & { [key: string]: any }, refresh, getProps, onLoad, onConnected, dies, isFront, z) => {
  const [darkMode, setDarkMode] = React.useState(false)
  const [isAnimating, setIsAnimating] = React.useState(false)
  const [loading, setLoading] = React.useState(true)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    nationalId: "",
    studentNumber: "",
    agreeToTerms: false,
  })
  const [errors, setErrors] = React.useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    nationalId: "",
    studentNumber: "",
    agreeToTerms: "",
  })

  React.useEffect(() => {
    const isDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    setDarkMode(isDarkMode)

    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const toggleDarkMode = () => {
    setIsAnimating(true)
    setDarkMode(!darkMode)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })

    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const validateForm = (): boolean => {
    let valid = true
    const newErrors = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      nationalId: "",
      studentNumber: "",
      agreeToTerms: "",
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = "نام الزامی است"
      valid = false
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "نام باید حداقل ۲ حرف داشته باشد"
      valid = false
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "نام خانوادگی الزامی است"
      valid = false
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "نام خانوادگی باید حداقل ۲ حرف داشته باشد"
      valid = false
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "شماره تلفن الزامی است"
      valid = false
    } else if (!/^09\d{9}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "شماره تلفن باید با 09 شروع شده و 11 رقمی باشد"
      valid = false
    }

    if (!formData.nationalId.trim()) {
      newErrors.nationalId = "کد ملی الزامی است"
      valid = false
    } else if (!/^\d{10}$/.test(formData.nationalId)) {
      newErrors.nationalId = "کد ملی باید 10 رقمی باشد"
      valid = false
    }

    if (!formData.studentNumber.trim()) {
      newErrors.studentNumber = "شماره دانشجویی الزامی است"
      valid = false
    } else if (!/^\d+$/.test(formData.studentNumber)) {
      newErrors.studentNumber = "شماره دانشجویی باید عددی باشد"
      valid = false
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "پذیرش قوانین الزامی است"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const res = await API["webnaz/signUp"]({
        Sid: z.middleuser.uid.toString(),
        Sname: formData.firstName.trim(),
        SlastName: formData.lastName.trim(),
        SnationalID: formData.nationalId.trim(),
        Sphone: formData.phoneNumber.trim(),
        SstudentNum: formData.studentNumber.trim(),
      })

      if (res.code === 0) {
        success("!ثبت نام با موفقیت انجام شد")
        setTimeout(() => {
          Router.push(z.root + "/index")
        }, 1500)
      } else {
        error(res.message || ".ثبت‌نام انجام نشد")
      }
    } catch (e) {
      console.error("Signup error", e)
      error("مشکل در ارتباط با سرور")
    } finally {
      setIsSubmitting(false)
      refresh()
    }
  }

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 z-50 transition-colors duration-1000">
        <div className="text-center max-w-md px-4">
          <div className="relative w-48 h-48 mx-auto mb-8 animate-float">
            <div className="absolute inset-0 bg-white/30 dark:bg-white/10 rounded-full shadow-lg animate-pulse-slow"></div>
            <img
              src="https://cdn.ituring.ir/qeupload/r074JSABoti9WepB8wAv/v1yx1rz8wl7y5m1q5w244.png"
              alt="Turing Research Group"
              className="relative z-10 w-full h-full object-contain transform transition-all duration-700 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 animate-text-reveal">
              به تیم تورینگ خوش آمدید
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 animate-text-fade delay-100">
              ... در حال آماده‌سازی بهترین تجربه آموزشی برای شما
            </p>
          </div>

          <div className="mt-8 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden max-w-xs mx-auto">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 animate-progress"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-500 ${
        darkMode
          ? "dark bg-gradient-to-br from-gray-900 to-blue-900"
          : "light bg-gradient-to-br from-blue-50 to-indigo-100"
      }`}
      style={{ direction: "rtl" }}
    >
      <div
        className={`w-full max-w-md p-8 rounded-2xl shadow-xl transition-all duration-500 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="text-center mb-8">
          <img
            src="https://cdn.ituring.ir/qeupload/r074JSABoti9WepB8wAv/v1yx1rz8wl7y5m1q5w244.png"
            alt="Turing Logo"
            className={`w-32 h-32 mx-auto mb-4 ${
              darkMode ? "bg-white/10" : "bg-gray-700"
            } rounded-full shadow-lg`}
          />
          <h2
            className={`text-2xl font-bold mb-2 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            ثبت نام در سامانه آموزشی
          </h2>
          <p
            className={`text-md mt-8 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            لطفا اطلاعات خود را با دقت وارد کنید.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              نام
            </label>
            <div
              className={`relative flex items-center rounded-lg border ${
                errors.firstName
                  ? "border-red-500"
                  : darkMode
                  ? "border-gray-700"
                  : "border-gray-300"
              } ${darkMode ? "bg-gray-700" : "bg-white"}`}
            >
              <span
                className={`px-3 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <PersonIcon fontSize="small" />
              </span>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`w-full py-3 px-2 rounded-lg focus:outline-none ${
                  darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
                }`}
                placeholder="نام"
                maxLength={50}
              />
            </div>
            {errors.firstName && (
              <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="lastName"
              className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              نام خانوادگی
            </label>
            <div
              className={`relative flex items-center rounded-lg border ${
                errors.lastName
                  ? "border-red-500"
                  : darkMode
                  ? "border-gray-700"
                  : "border-gray-300"
              } ${darkMode ? "bg-gray-700" : "bg-white"}`}
            >
              <span
                className={`px-3 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <PersonIcon fontSize="small" />
              </span>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`w-full py-3 px-2 rounded-lg focus:outline-none ${
                  darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
                }`}
                placeholder="نام خانوادگی"
                maxLength={50}
              />
            </div>
            {errors.lastName && (
              <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              شماره تلفن
            </label>
            <div
              className={`relative flex items-center rounded-lg border ${
                errors.phoneNumber
                  ? "border-red-500"
                  : darkMode
                  ? "border-gray-700"
                  : "border-gray-300"
              } ${darkMode ? "bg-gray-700" : "bg-white"}`}
            >
              <span
                className={`px-3 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <PhoneIcon fontSize="small" />
              </span>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className={`w-full py-3 px-2 rounded-lg focus:outline-none ${
                  darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
                }`}
                placeholder="09123456789"
                maxLength={11}
              />
            </div>
            {errors.phoneNumber && (
              <p className="mt-1 text-xs text-red-500">{errors.phoneNumber}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="nationalId"
              className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              کد ملی
            </label>
            <div
              className={`relative flex items-center rounded-lg border ${
                errors.nationalId
                  ? "border-red-500"
                  : darkMode
                  ? "border-gray-700"
                  : "border-gray-300"
              } ${darkMode ? "bg-gray-700" : "bg-white"}`}
            >
              <span
                className={`px-3 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <BadgeIcon fontSize="small" />
              </span>
              <input
                type="text"
                id="nationalId"
                name="nationalId"
                value={formData.nationalId}
                onChange={handleInputChange}
                className={`w-full py-3 px-2 rounded-lg focus:outline-none ${
                  darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
                }`}
                placeholder="کد ملی 10 رقمی"
                maxLength={10}
              />
            </div>
            {errors.nationalId && (
              <p className="mt-1 text-xs text-red-500">{errors.nationalId}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="studentNumber"
              className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              شماره دانشجویی
            </label>
            <div
              className={`relative flex items-center rounded-lg border ${
                errors.studentNumber
                  ? "border-red-500"
                  : darkMode
                  ? "border-gray-700"
                  : "border-gray-300"
              } ${darkMode ? "bg-gray-700" : "bg-white"}`}
            >
              <span
                className={`px-3 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <SchoolIcon fontSize="small" />
              </span>
              <input
                type="text"
                id="studentNumber"
                name="studentNumber"
                value={formData.studentNumber}
                onChange={handleInputChange}
                className={`w-full py-3 px-2 rounded-lg focus:outline-none ${
                  darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
                }`}
                placeholder="شماره دانشجویی"
                maxLength={20}
              />
            </div>
            {errors.studentNumber && (
              <p className="mt-1 text-xs text-red-500">
                {errors.studentNumber}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="flex items-start">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className={`mt-1 ml-2 rounded ${
                  darkMode ? "text-blue-400" : "text-blue-600"
                } focus:ring-blue-500`}
              />
              <span
                className={`text-sm ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                قوانین و شرایط استفاده از سامانه را می‌پذیرم
              </span>
            </label>
            {errors.agreeToTerms && (
              <p className="mt-1 text-xs text-red-500">{errors.agreeToTerms}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin ml-2"></span>
            ) : (
              <ArrowForwardIcon className="ml-2" />
            )}
            {isSubmitting ? "در حال ثبت..." : "ثبت نام"}
          </button>
        </form>

        <div
          className={`mt-6 text-center text-sm ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          قبلا ثبت نام کرده‌اید؟{" "}
          <a
            className={`font-medium cursor-pointer ${
              darkMode
                ? "text-blue-400 hover:text-blue-300"
                : "text-blue-600 hover:text-blue-800"
            }`}
            onClick={() => {
              Router.push(z.root + "/index")
            }}
          >
            وارد شوید
          </a>
        </div>
      </div>

      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={toggleDarkMode}
          className={`p-4 rounded-full shadow-lg transition-all duration-500 m-1 ${
            darkMode
              ? "bg-gray-700 hover:bg-gray-600"
              : "bg-gray-200 hover:bg-gray-300"
          } ${isAnimating ? "animate-color-switch" : ""}`}
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Brightness7Icon className="text-yellow-300" />
          ) : (
            <Brightness4Icon className="text-gray-700" />
          )}
        </button>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  var session = await ((await import('@/backend/SSRVerify.ts')).SSRVerify)(context, false, [])

  
  
  

  let obj = await Prosper(
    {
      props: {
        
        
        
        session,
        title: "ثبت نام",
        description: "صفحه ثبت نام در سامانه آموزشی گروه پژوهشی تورینگ",
        
      },
    },
    context
  )

  return obj
}