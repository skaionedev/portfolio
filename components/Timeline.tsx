import React, { useRef } from "react"
import { motion, useScroll } from "framer-motion"

interface Props {
  items: TimelineItem[]
}

export const Timeline = ({ items }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  })

  return (
    <div className="relative xl:w-[75%] mx-auto lg:w-[90%] w-full mt-16 lg:mt-32 ">
      <motion.div
        ref={ref}
        style={{
          scaleY: scrollYProgress,
        }}
        className="absolute lg:left-9 top-[2px] lg:w-[3px] w-[2px] md:left-[29px] left-[19px] h-[97%] bg-slate-800 origin-top  dark:bg-light/50  dark:shadow-3xl"
      />

      <ul className="flex flex-col items-start justify-between w-full ml-4 space-y-8">
        {items.map((it) => (
          <Details
            key={it.company}
            position={it.position}
            company={it.company}
            time={it.time}
            address={it.address}
            work={it.work}
          />
        ))}
      </ul>
    </div>
  )
}

export interface TimelineItem {
  position: string
  company: string
  time: string
  address: string
  work: string
}

const Details = (props: TimelineItem) => {
  const ref = useRef<HTMLLIElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center center"],
  })

  return (
    <li
      ref={ref}
      className="lg:w-[60%] mx-auto flex flex-col items-start justify-between w-[80%]"
    >
      <figure className="absolute left-0 stroke-dark/70 dark:stroke-light/50">
        <svg
          className="-rotate-90 lg:w-[75px] lg:h-[75px] md:w-[60px] md:h-[60px] w-[40px] h-[40px]"
          viewBox="0 0 100 100"
        >
          <circle
            cx={75}
            cy={50}
            r={20}
            className="stroke-1 stroke-dark/70 fill-none dark:stroke-light/50"
          />
          <motion.circle
            cx={75}
            cy={50}
            r={20}
            className="stroke-[3px] fill-light dark:fill-dark"
            style={{
              pathLength: scrollYProgress,
            }}
          />
          <circle
            cx={75}
            cy={50}
            r={10}
            className="stroke-1 animate-pulse fill-slate-700 dark:fill-light"
          />
        </svg>
      </figure>

      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          type: "spring",
        }}
      >
        <h3 className="text-lg font-bold capitalize lg:text-2xl sm:text-xl">
          {props.position}&nbsp;
          <a className="capitalize text-slate-500 dark:text-slate-100/70">
            @{props.company}
          </a>
        </h3>
        <span className="inline-block py-1 text-sm font-medium capitalize lg:text-base text-dark/50 dark:text-light/50">
          {props.time} | {props.address}
        </span>
        <p className="w-full text-sm font-medium text-slate-700 dark:text-light/70 lg:text-base">
          {props.work}
        </p>
      </motion.div>
    </li>
  )
}
