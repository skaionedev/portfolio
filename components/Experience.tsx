import { AnimatedText } from "./AnimatedText"
import { Timeline, TimelineItem } from "./Timeline"

export const Experience = () => {
  return (
    <div className="my-24 lg:my-48">
      <AnimatedText text="Experience" className="text-center" />
      <Timeline items={items} />
    </div>
  )
}

const items: TimelineItem[] = [
  {
    position: "Frontend Engineer",
    company: "SKF Group",
    time: "04.2022 - Present",
    address: "Sweden",
    work: "As a frontend developer, I developed and maintained dashboards using React, Ant Design, TypeScript, and Styled-components. I implemented charts and forms using Highcharts, Chart.js, and React-hook form. For data retrieval and state management, I worked with Elasticsearch, Zustand, and React-context. Additionally, I maintained a Node.js backend using Express.js as a proxy for Elasticsearch queries.",
  },
  {
    position: "Frontend developer",
    company: "StarNavi",
    time: "01.2022 - Present",
    address: "Ukraine",
    work: "As a frontend developer, my responsibilities included assisting in the development of components using React, Styled-components, JavaScript, and TypeScript. I also used Git and React-context for the React static site generator.",
  },
  {
    position: "Frontend developer",
    company: "Tasin Yyldyz",
    time: "12.2021 - 06.2022",
    address: "Turkmenistan",
    work: 'I built a multi-vendor marketplace called "Akat Market" from scratch using Next.js, Typescript, Styled-components, and MobX. The marketplace features both a dark and light mode. Additionally, I worked on creating dashboards for both sellers and admins of the marketplace.',
  },
  {
    position: "Frontend developer",
    company: "Turkmen-Tranzit",
    time: "10.2019 - 11.2020",
    address: "Turkmenistan",
    work: 'Worked on a company site, dashboard and "Kerwen" mutli-vendor trading platform. HTML, CSS, JS, Vue, Nuxt, Vuex, Vuetify was used to build projects.',
  },
  {
    position: "HTML Developer",
    company: "Sungat Eseri",
    time: "04.2019 - 10.2019",
    address: "Turkmenistan",
    work: "Work involved crafting various static sites using HTML, CSS, and a small amount of JavaScript. The sites were designed to be visually appealing and user-friendly.",
  },
]
