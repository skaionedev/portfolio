import { FC } from "react"
import { motion } from "framer-motion"

interface Props {
  className?: string
  text: string
  component?: "h1" | "h2"
}

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
}

const word = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
}

export const AnimatedText: FC<Props> = (props) => {
  const { className, text, component = "h1" } = props

  const wrapperProps = {
    className: `inline-block w-full dark:text-light text-dark font-bold   ${className}`,
    variants: quote,
    initial: "initial",
    whileInView: "animate",
    viewport: { once: true },
  }

  let splitted = text.split(" ")

  if (splitted.length === 1) {
    splitted = splitted[0].split("")
  }

  const renderText = splitted.map((w, i) => (
    <motion.span variants={word} className="inline-block" key={w + i}>
      {w}&nbsp;
    </motion.span>
  ))
  return (
    <div
      className={`w-full mx-auto py-2 flex items-center justify-center overflow-hidden lg:text-6xl text-3xl md:text-4xl text-center lg:text-left`}
    >
      {component === "h1" ? (
        <motion.h1 {...wrapperProps}>{renderText}</motion.h1>
      ) : (
        <motion.h2 {...wrapperProps}>{renderText}</motion.h2>
      )}
    </div>
  )
}
