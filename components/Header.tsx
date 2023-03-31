import { ThemeSwitcher } from "./ThemeSwitcher"

export const Header = () => {
  return (
    <div>
      <header className="relative z-10 flex items-center justify-between w-full px-4 py-4 font-medium md:py-8 xl:px-32 dark:text-light lg:px-16 z-1 md:px-12 animate-fade-down dark:dark">
        <div className="flex items-center justify-center text-xl font-bold select-none md:text-2xl">
          <span className="p-0.5 dark:text-light text-dark">skaione</span>
          <span className="bg-dark dark:bg-light dark:text-dark font-medium text-light py-0.5 px-1.5 rounded">
            dev
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center space-x-4">
          <ThemeSwitcher />
        </nav>
      </header>
    </div>
  )
}
