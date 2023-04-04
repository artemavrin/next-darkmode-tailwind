import { ThemeSwitcher } from "@components/client/theme-swither"
import { Theme } from "@types"
import { cookies } from "next/headers"
import Image from "next/image"

export default function Home() {

  const theme = cookies().get("theme")?.value === "dark" ? Theme.dark : Theme.light
  return (
    <main className="flex flex-col justify-center items-center h-full gap-5 p-10">
      <div className="">
        <ThemeSwitcher theme={theme} />
      </div>
      <div className="flex justify-center items-center">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />

      </div>
      <h1 className="text-5xl md:text-8xl font-extrabold text-center max-w-6xl">
        The React Framework for the Web
      </h1>
      
    </main>
  )
}
