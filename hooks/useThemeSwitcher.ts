import { useEffect, useState } from "react"

type Theme = "dark" | "light"

export const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefer-color-scheme: dark)"
  const [mode, setMode] = useState<Theme | null>(null)

  const toggleMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"))
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery)

    const userPref = localStorage.getItem("theme") as Theme

    const handleChange = () => {
      if (userPref) {
        setMode(userPref)
        if (userPref === "dark") {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }
      } else {
        const theme = mediaQuery.matches ? "dark" : "light"
        setMode(theme)

        if (theme === "dark") {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }
      }
    }

    handleChange()

    mediaQuery.addEventListener("change", handleChange)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  useEffect(() => {
    if (!mode) return

    localStorage.setItem("theme", mode)

    if (mode === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [mode])

  return {
    mode,
    toggleMode,
  }
}
