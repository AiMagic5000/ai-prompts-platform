import { Header } from '@/components/layout/header'
import { DashboardSidebar } from '@/components/dashboard/sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // TODO: Add auth check here when NextAuth is set up
  // const session = await auth()
  // if (!session?.user) {
  //   redirect('/login')
  // }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}
