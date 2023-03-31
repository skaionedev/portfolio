import React from "react"

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai"

export const Footer = () => {
  return (
    <footer className="w-full text-lg font-medium border-t-2 border-dark/40 dark:border-light/40">
      <div className="container flex flex-col items-center justify-between py-8 mx-auto gap-y-2 md:flex-row">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>

        <div className="flex items-center justify-center space-x-2 ">
          <a
            className="transition-opacity hover:opacity-60"
            href="https://github.com/skaionedev"
            target="_blank"
          >
            <AiFillGithub size={32} />
          </a>
          <a
            className="transition-opacity hover:opacity-60"
            href="https://twitter.com/skaionedev"
            target="_blank"
          >
            <AiFillTwitterSquare size={32} />
          </a>
          <a
            className="transition-opacity hover:opacity-60"
            href="https://www.linkedin.com/in/skaionedev/"
            target="_blank"
          >
            <AiFillLinkedin size={32} />
          </a>
        </div>
      </div>
    </footer>
  )
}
