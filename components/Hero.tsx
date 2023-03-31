import { FC, PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import { AnimatedText } from './AnimatedText'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import { PREFIX } from '@/constants'

export const Hero = () => {
  const years = new Date().getFullYear() - 2019
  return (
    <div className="z-0 w-full min-h-[calc(100vh_-_100px_-_64px)] flex items-center">
      <div className="flex-col items-center justify-center w-full lg:flex lg:justify-between lg:flex-row">
        <motion.div
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          transition={{
            duration: 1,
            delay: 0.1
          }}
          viewport={{ once: true }}
          className="flex items-center lg:w-1/2"
        >
          <img
            src={`${PREFIX}/webdev.svg`}
            className="w-full h-auto"
            alt="Ai photo"
          />
        </motion.div>
        <div className="flex flex-col items-center self-center lg:w-[45%] pt-12 lg:pt-0">
          <AnimatedText text="Bringing Vision to Life with Code" />
          <div className="flex flex-col my-4 gap-y-2">
            <Description>
              {`Hello! I'm a self-taught frontend developer with ${years}+ years of experience in development. I'm excited to utilize my technical skills to bring your vision to life.`}
            </Description>

            <Description>
              {`Let's collaborate to create visually appealing interfaces.`}
            </Description>
          </div>

          <motion.div
            initial={{
              y: 60,
              opacity: 0
            }}
            whileInView={{
              y: 0,
              opacity: 1
            }}
            transition={{
              duration: 1,
              type: 'spring',
              delay: 0.2
            }}
            viewport={{
              once: true
            }}
            className="flex items-center self-start mx-auto mt-2 lg:mx-0"
          >
            <a
              href={`${PREFIX}/batyr_khodzhakuliev_resume.pdf`}
              target="_blank"
              download
              className="flex gap-x-1 items-center border-2 border-dark bg-dark py-2.5 px-4 lg:px-6 rounded-lg lg:text-lg font-semibold hover:bg-light text-light hover:border-dark hover:bg-transparent hover:text-dark 
              dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light transition-colors "
            >
              <AiOutlineCloudDownload size={24} />
              Resume
            </a>
            <a
              href="mailto:skaionedev@gmail.com"
              target="_blank"
              className="ml-4 py-2.5 px-4 border-2 border-slate-500 rounded-lg
              dark:border-light/70 dark:hover:border-light hover:border-dark lg:px-6 font-medium  capitalize hover:no-underline dark:text-light/70 dark:hover:text-light lg:text-lg hover:text-dark text-slate-500 transition-colors"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const Description: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.p
      initial={{
        y: 60,
        opacity: 0
      }}
      whileInView={{
        y: 0,
        opacity: 1
      }}
      transition={{
        duration: 1,
        type: 'spring',
        delay: 0.1
      }}
      viewport={{
        once: true
      }}
      className="text-base font-medium text-center text-slate-700 dark:text-light/70 lg:text-left"
    >
      {children}
    </motion.p>
  )
}
