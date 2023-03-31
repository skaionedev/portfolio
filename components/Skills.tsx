import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

import { AnimatedText } from "./AnimatedText"

export const Skills = () => {
  return (
    <div className="my-24 overflow-hidden lg:my-48">
      <div className="mb-4">
        <AnimatedText text="Skills" className="text-center " />
      </div>

      <div className="lg:w-full w-[130%] -translate-x-[12%] lg:translate-x-0  xl:h-[90vh] relative xl:bg-circularLight xl:dark:bg-circularDark  flex items-center justify-center rounded-full lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd  bg-circularLightSm dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh]  h-[50vh]">
        <motion.div
          className="flex p-2 text-xs rounded-full cursor-pointer md:text-base xl:p-6 md:font-semibold bg-slate-800 text-light shadow-dark dark:bg-light dark:text-dark lg:p-6 md:p-4 "
          whileHover={{ scale: 1.05 }}
        >
          Development
        </motion.div>
        <Skill name="Node" x="-25vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Express" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-12vw" />
        <Skill name="Typescript" x="15vw" y="-12vw" />
        <Skill name="Expo" x="-17vw" y="10vw" />
        <Skill name="Git" x="32vw" y="-5vw" />
        <Skill name="React Native" x="0vw" y="-20vw" />
        <Skill name="Zustand" x="-25vw" y="18vw" />
        <Skill name="TailwindCSS" x="18vw" y="18vw" />
      </div>
    </div>
  )
}

interface SkillProps {
  name: string
  x: string
  y: string
}

const Skill = ({ name, x, y }: SkillProps) => {
  const [isMobile, setIsMobile] = useState(0)

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(window.innerWidth)
    }
  }, [])

  const getValue = (val: string) => {
    if (isMobile) {
      const multiplier = isMobile > 500 ? 7 + Math.random() : 6 + Math.random()
      let [num, _] = val.split("vw")
      const number = Number(num)

      if (Math.sign(number) === -1) {
        return number - multiplier + "vw"
      }
      return number + multiplier + "vw"
    }
    return val
  }

  return (
    <motion.div
      initial={{ x: 0, y: 0, opacity: 0 }}
      whileInView={{
        x: getValue(x),
        y: getValue(y),
        opacity: 1,
        transition: {
          duration: 1.5,
        },
      }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
      }}
      className="cursor-pointer w-max origin-center absolute  md:font-semibold md:bg-slate-800 md:text-light md:py-3 md:px-6 rounded-full md:dark:bg-light dark:md:text-dark lg:py-2 lg:px-4 md:text-sm py-1.5 px-3  bg-transparent dark:bg-transparent text-dark dark:text-light xs:dark:text-light font-bold "
    >
      {name}
    </motion.div>
  )
}
