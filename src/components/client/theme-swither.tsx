"use client"

import { Theme } from "@types"
import { FC, useState } from "react"
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

interface Props {
    theme: Theme
}

export const ThemeSwitcher: FC<Props> = ({ theme }) => {

    const [_theme, setTheme] = useState<Theme>(theme)

    const toogleTheme = () => {

        const root = document.getElementsByTagName('html')[0]
        root.classList.toggle(Theme.dark)
        if (root.classList.contains(Theme.dark)) {
            setTheme(Theme.dark)
            document.cookie = `theme=${Theme.dark}`
        } else {
            setTheme(Theme.light)
            document.cookie = `theme=${Theme.light}`
        }

    }

    return <button onClick={toogleTheme}>{
        _theme == Theme.dark ? <SunIcon className="h-10 w-10 text-yellow-500" /> : <MoonIcon className="h-10 w-10" />
    }</button>
}