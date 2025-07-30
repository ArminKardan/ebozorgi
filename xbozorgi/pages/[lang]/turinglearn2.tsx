import Component, { PageEl } from "@/frontend/components/qecomps/Component"
import type { GetServerSideProps, GetServerSidePropsContext } from "next"
import SchoolIcon from "@mui/icons-material/School"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo"
// import ParticlesBackground from "@/frontend/components/ParticlesBackground"
import { motionColorMap, badgeColorMap } from "@/frontend/components/colorMap"
export default (p) => Component(p, Page)

const Page: PageEl = (props: {} & { [key: string]: any }, refresh, getProps, onLoad, onConnected, dies, isFront, z) => {
  getProps(async (isFront) => {
    props.courses = [
      {
        id: "html-css-js",
        title: "HTML,CSS,JS (ورودی جدید)",
        image:
          "https://cdn.ituring.ir/qeupload/r074JSABoti9WepB8wAv/nt9jfy98boqzn0gcit663.jpg",
        hours: 45,
        price: 980000,
        originalPrice: 840000,
        isFree: true,
        badge: null,
        teachers: "پرهام یدالهی",
        motion: "warning",
        subBadge: "yellow",
        status: "رو به اتمام",
      },
      {
        id: "flex-git-tools",
        title: "Flex, Git, Tools",
        image:
          "https://cdn.ituring.ir/qeupload/r074JSABoti9WepB8wAv/w7wl86dd6rfkck1pyfle8.png",
        hours: 45,
        price: 980000,
        originalPrice: 840000,
        badge: null,
        teachers: "کوروش رحیمی",
        motion: "success",
        subBadge: "green",
        status: "موجود",
      },
      {
        id: "react-next",
        title: "Front-end React + NextJS-SSR",
        image:
          "https://cdn.ituring.ir/qeupload/r074JSABoti9WepB8wAv/ca0zpv93odv02bh3nkr4tzo.png",
        hours: 45,
        price: 1980000,
        originalPrice: 840000,
        badge: null,
        teachers: null,
        motion: "warning",
        subBadge: "yellow",
        status: "رو به اتمام",
      },
      {
        id: "qe",
        title: "QE - دوره کامل تست نرم افزار و کیفیت سنجی محصولات دیجیتال",
        image: "https://cdn.ituring.ir/qepal/qe.png",
        hours: 45,
        price: 2980000,
        originalPrice: 840000,
        badge: null,
        teachers: null,
        motion: "warning",
        subBadge: "yellow",
        status: "رو به اتمام",
      },
      {
        id: "python-practice",
        title:
          "Python (Practice) - دوره عملی برنامه نویسی پایتون با پروژه‌های واقعی",
        image:
          "https://cdn.ituring.ir/qeupload/r074JSABoti9WepB8wAv/l3vqaq4egh7h7ui65q9us.png",
        hours: 45,
        price: 2980000,
        originalPrice: null,
        badge: null,
        teachers: null,
        motion: "error",
        subBadge: "red",
        status: "تکمیل",
      },
      {
        id: "mongodb",
        title: "MongoDB - پایگاه داده NoSQL برای برنامه‌های مدرن",
        image:
          "https://cdn.ituring.ir/qeupload/r074JSABoti9WepB8wAv/3eabf4l03pfmrwh9j1wqs.jpg",
        hours: 45,
        price: 1980000,
        originalPrice: 840000,
        badge: null,
        teachers: null,
        motion: "warning",
        subBadge: "yellow",
        status: "رو به اتمام",
      },
      {
        id: "lpic",
        title: "LPIC1,2 - دوره تخصصی لینوکس و صدور گواهینامه بین‌المللی",
        image:
          "https://cdn.ituring.ir/qeupload/r074JSABoti9WepB8wAv/o0oer41hntei3t24g580h.jpg",
        hours: 45,
        price: 3980000,
        originalPrice: 840000,
        badge: null,
        teachers: null,
        motion: "success",
        subBadge: "green",
        status: "موجود",
      },
      {
        id: "network",
        title:
          "[Network] Intro & [MikroTik] Intro (Router, Wireless Radio) Network [Programming]",
        image:
          "https://cdn.ituring.ir/qeupload/r074JSABoti9WepB8wAv/6joy9ubo7zr3sysx40ctth.jpg",
        hours: 45,
        price: 2980000,
        originalPrice: 840000,
        badge: null,
        teachers: null,
        motion: "warning",
        subBadge: "yellow",
        status: "رو به اتمام",
      },
      {
        id: "bash-scripting",
        title: "Bash scripting - اتوماسیون و اسکریپت نویسی پیشرفته در لینوکس",
        image:
          "https://cdn.ituring.ir/qeupload/r074JSABoti9WepB8wAv/pxp7nimre7onzoxj5q96n.png",
        hours: 45,
        price: 1980000,
        originalPrice: 840000,
        badge: null,
        teachers: null,
        motion: "success",
        subBadge: "green",
        status: "موجود",
      },
      {
        id: "hardware-design",
        title:
          "Hardware (RFID, Touch, Sensors...) Altium Designer - دوره عملی طراحی سخت افزار",
        image:
          "https://cdn.ituring.ir/qeupload/r074JSABoti9WepB8wAv/4sjkn24ehw2ltxk4wc8v8p.webp",
        hours: 45,
        price: 3980000,
        originalPrice: 840000,
        badge: null,
        teachers: null,
        motion: "warning",
        subBadge: "yellow",
        status: "رو به اتمام",
      },
      {
        id: "go-lang",
        title:
          "Go Lang Intro - برنامه نویسی سیستم‌های توزیع شده و میکروسرویس‌ها",
        image:
          "https://cdn.ituring.ir/qeupload/r074JSABoti9WepB8wAv/1qwnrq5yt1wbe8mlw61bz.png",
        hours: 45,
        price: 2980000,
        originalPrice: 840000,
        badge: null,
        teachers: null,
        motion: "warning",
        subBadge: "yellow",
        status: "رو به اتمام",
      },
      {
        id: "reinforcement-learning",
        title:
          "Reinforcement Learning Intro - مقدمه‌ای بر یادگیری تقویتی و کاربردهای آن در هوش مصنوعی",
        image:
          "https://cdn.ituring.ir/qeupload/r074JSABoti9WepB8wAv/gb2k55jjavapt913rdw3t.png",
        hours: 45,
        price: 3980000,
        originalPrice: 840000,
        badge: null,
        teachers: null,
        motion: "warning",
        subBadge: "yellow",
        status: "رو به اتمام",
      },
    ]
  })

  const CourseCard = ({ course }) => (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <img
        src={course.image}
        alt={course.title}
        className="rounded-xl h-36 w-full object-cover bg-gray-100 mb-4"
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-gray-800 text-lg font-semibold leading-snug line-clamp-3 min-h-[2rem]">
          {course.title}
        </h3>
        <div className="mt-4 mb-6">
          {course.teachers ? (
            <f-c style={{ gap: 4 }}>
              <SchoolIcon className="text-xs text-gray-500" />
              <div className="text-xs text-gray-500">{course.teachers}</div>
            </f-c>
          ) : (
            <f-c style={{ gap: 4 }}>
              <SchoolIcon className="text-xs text-gray-500" />
              <div className="text-xs text-gray-500">{"مدرسین تورینگ"}</div>
            </f-c>
          )}

          {course.hours && (
            <f-c style={{ gap: 4 }}>
              <AccessTimeIcon className="text-xs text-gray-500" />
              <div className="text-xs text-gray-500 mt-2">
                {course.hours} ساعت
              </div>
            </f-c>
          )}
          {course.isFree && (
            <f-c style={{ gap: 4 }}>
              <OndemandVideoIcon className="text-xs text-gray-500 mt-2" />
              <div className="text-xs text-gray-500 mt-2">
                ویدیو آنلاین: رایگان
              </div>
            </f-c>
          )}
        </div>
      </div>
      <p>
        <div className="inline-grid *:[grid-area:1/1]">
          <div className="inline-grid *:[grid-area:1/1]">
            <div
              className={`rounded-full ${
                motionColorMap[course.motion] || "bg-gray-400"
              } 
    w-2.5 h-2.5 animate-ping`}
            ></div>
            <div
              className={`rounded-full ${
                motionColorMap[course.motion] || "bg-gray-400"
              } 
    w-2.5 h-2.5`}
            ></div>
          </div>
        </div>
        <span className="font-medium"> ظرفیت:</span>
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold 
  ${badgeColorMap[course.subBadge]?.bg || "bg-gray-100"} 
  ${badgeColorMap[course.subBadge]?.text || "text-gray-800"}`}
        >
          {course.status}
        </span>
      </p>
      <div className="mt-4 ">
        <div className="flex items-center justify-between">
          <div className="text-blue-600 font-bold text-lg">
            {course.price.toLocaleString("fa-IR")}{" "}
            <span className="text-blue-500 font-bold text-xs">تومان</span>
          </div>
          {course.originalPrice && (
            <div className="text-red-500 text-s line-through">
              {course.originalPrice.toLocaleString("fa-IR")} تومان
            </div>
          )}
        </div>
        <button
          className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-lg mt-3 w-full transition-colors duration-300"
          onClick={() => console.log("Buy course:", course.id)}
        >
          خرید دوره
        </button>
      </div>
    </div>
  )

  return (
    <>
      {/* <ParticlesBackground /> */}
      <div
        style={{
          direction: z.lang.dir,
          padding: 10,
          backgroundColor: "#ECEFF1",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center p-4 mb-8 bg-white rounded-xl shadow-sm">
            <h1 className="text-gray-800 text-xl font-bold">
              گروه پژوهشی تورینگ
            </h1>
            <a href="https://ituring.ir/">
              <img
                className="w-48"
                src="https://cdn.ituring.ir/qeupload/r074JSABoti9WepB8wAv/let4eu1lpphmdwxgl6z5sf.png"
                alt="tu"
              />
            </a>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            {props.courses?.map((course) => (
              <div key={course.id} className="w-[300px]">
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
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
        title: "دوره های آموزشی",
        description: "صفحه دوره های آموزشی گروه پژوهشی تورینگ",
        
      },
    },
    context
  )

  return obj
}
