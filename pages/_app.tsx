import type { AppProps } from 'next/app'
import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { HireMe } from '@/components/HireMe'
import '@/styles/globals.css'
import { PREFIX } from '@/constants'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut" href={`${PREFIX}/favicon.ico`} />
        <title>skaionedev | Portfolio</title>
        <meta
          name="description"
          content="Discover the portfolio of a talented frontend developer specializing in creating visually appealing and highly functional websites and web applications. With expertise in HTML, CSS, JavaScript React, React Native, Next.js, and Typescript, I create dynamic and responsive designs that engage users and enhance their online experience. Explore my portfolio now to see examples of my work and experience the innovative solutions I can offer."
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
        if (
          localStorage.theme === "dark" ||
          (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }`
          }}
        ></script>
      </Head>
      <div
        className={` font-sans dark:text-light bg-light dark:bg-dark w-full min-h-screen flex flex-col`}
      >
        <Header />
        <main className="min-h-full">
          <Component {...pageProps} />
        </main>
        <Footer />
        <HireMe />
      </div>
    </>
  )
}
