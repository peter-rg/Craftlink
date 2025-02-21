import Footer from "@/components/shared/footer"
import Header from "@/components/shared/header"


export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex flex-col min-h-screen bg-soft-dark-grey '>
      <Header/>
      <main className='flex-1 flex flex-col'>{children}</main>
      <Footer/>
    </div>
  )
}