import { cookies } from "next/headers"
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const theme = cookies().get("theme")

  return (
    <html lang="en" className={theme?.value}>
      <body className="bg-white text-black dark:bg-black dark:text-white transition duration-700">{children}</body>
    </html>
  )
}
