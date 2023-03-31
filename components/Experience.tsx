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
    work: "My responsibilities as a frontend developer includes developing and maintaining dashboards using React, Ant Design, and Styled-components. I utilized TypeScript and Git for the project. The dashboards featured charts created using Highcharts and Chart.js, as well as forms created using React-hook form. To retrieve data, I worked with Elasticsearch, while Zustand and React-context were used for state management. Additionally, I maintained a node.js backend using Express.js as a proxy for Elasticsearch queries.",
  },
  {
    position: "Frontend developer",
    company: "StarNavi",
    time: "01.2022 - Present",
    address: "Ukraine",
    work: "My responsibilities as a frontend developer included helping to develop components using React, Styled-components, JavaScript, TypeScript,  Git, React-context for React static site generator.",
  },
  {
    position: "Frontend developer",
    company: "Tasin Yyldyz",
    time: "12.2021 - 06.2022",
    address: "Turkmenistan",
    work: 'Built from scratch mutli-vendor marketplace with dark and light mode named "Akat Market" with help of Next.js, Typescript, Styled-components and MobX. Also worked on dashboards for seller and admin of marketplace.',
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
