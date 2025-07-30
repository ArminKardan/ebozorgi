import Component, { PageEl } from "@/frontend/components/qecomps/Component"
import type { GetServerSideProps, GetServerSidePropsContext } from "next"
// import ParticlesBackground from "@/frontend/components/ParticlesBackground"
export default (p) => Component(p, Page)

const Page: PageEl = (props: {} & { [key: string]: any }, refresh, getProps, onLoad, onConnected, dies, isFront, z) => {
  return (
    <>
      {/* <ParticlesBackground /> */}
      <div >
        {/* <ParticlesBackground /> */}
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
        title: "test title",
        description: "test description",
        
      },
    },
    context
  )

  return obj
}
