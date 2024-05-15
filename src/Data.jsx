import Coin from "./assets/projects/coin.gif";
import Todo from "./assets/projects/Todo.png";
import Tictactoe from "./assets/projects/tic-tac-toe.png";
import Form from "./assets/projects/form.png";
import Tour from "./assets/projects/tour.png";
import Cuberun from "./assets/projects/cube.gif";
import flying from "./assets/projects/flying.gif";
import loader from "./assets/projects/loader.gif";
import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { FileIconsNextjs } from "./components/SvgIcon/Next";
import { LaJsSquare } from "./components/SvgIcon/Javascript";
import { SkillIconsTailwindcssDark } from "./components/SvgIcon/Tailwind";
import { SkillIconsReactDark } from "./components/SvgIcon/React";
import { SimpleIconsGithub } from "./components/SvgIcon/github";
import { SimpleIconsShadcnui } from "./components/SvgIcon/Shadcn";
import { FaNode } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";

export const links = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "Projects",
    path: "project",
  },
  {
    name: "Blog",
    path: "blog",
  },
  {
    name: "Contact",
    path: "contact",
  },
];

export const projects = [
  {
    id: 1,
    img: Todo,
    category: "Easy",
    title: "Todo List",
    link1: "https://todo-list-using-react-blue.vercel.app/",
    link2: "https://github.com/sandeepNpl/Todo-List-Using-React",
    demo: "Demo",
  },
  {
    id: 2,
    img: Tictactoe,
    category: "Medium",
    title: "Tic-Tac-Toe Game",
    link1: "https://tic-tac-toe-game-seven-alpha.vercel.app/",
    link2: "https://github.com/sandeepNpl/Tic-Tac-Toe-Game-Using-JS",
    demo: "Demo",
  },
  {
    id: 3,
    img: Form,
    category: "Easy",
    title: "Form Collection",
    link1: "https://form-collection.vercel.app/",
    link2: "https://github.com/sandeepNpl/Form-Collection",
    demo: "Demo",
  },
  {
    id: 4,
    img: Tour,
    category: "Easy",
    title: "Nepal Tour",
    link1: "https://nepal-tour.vercel.app/",
    link2: "https://github.com/sandeepNpl/Nepal-Tour#nepal-tour",
    demo: "Demo",
  },
  {
    id: 5,
    img: Cuberun,
    category: "Hard",
    title: "Cube Run Game",
    link1: "https://npbtsandip.itch.io/cuberun-web-game/",
    link2: "https://github.com/sandeepNpl/CUBERUN-Game",
    demo: "Demo",
  },
  {
    id: 6,
    img: flying,
    category: "Easy",
    title: "Flying Bubble",
    link1: "https://luxury-pony-90e33c.netlify.app/",
    link2:
      "https://github.com/sandeepsz/CSS-Project/tree/master/Flying%20Bubbles",
    demo: "Demo",
  },
  {
    id: 7,
    img: loader,
    category: "Easy",
    title: "Loader ",
    link1:
      "https://657fdc231d85b871e6439431--charming-peony-da86e6.netlify.app/",
    link2: "https://github.com/sandeepsz/CSS-Project/tree/master/Loader",
    demo: "Demo",
  },
];

export const skills = [
  {
    id: 1,
    title: "Javascript",
    icon: <LaJsSquare />,
  },
  {
    id: 2,
    title: "Typescript",
    icon: <TbBrandTypescript style={{ width: "40px", height: "40px" }} />,
  },
  {
    id: 3,
    title: "ReactJs",
    icon: <SkillIconsReactDark />,
  },
  {
    id: 4,
    title: "NextJs",
    icon: <FileIconsNextjs />,
  },
  {
    id: 5,
    title: "NodeJs",
    icon: <FaNode style={{ width: "50px", height: "50px" }} />,
  },
  {
    id: 6,
    title: "AntDesign",
    icon: <SiAntdesign style={{ width: "40px", height: "40px" }} />,
  },
  {
    id: 7,
    title: "ShadcnUI",
    icon: <SimpleIconsShadcnui />,
  },
  {
    id: 7,
    title: "Tailwind",
    icon: <SkillIconsTailwindcssDark />,
  },
  {
    id: 8,
    title: "Github",
    icon: <SimpleIconsGithub />,
  },
];

// export const skills = [
//   {
//     id: 1,
//     title: "Javascript",
//     svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6 fill-current"><path d="M4.669 19.82c-.17.159-.354.318-.625.318-.399 0-.573-.222-.573-.57V4.849c0-.275.11-.42.37-.42.16 0 .27.09.41.25l8.08 9.16v-.06c-.04-.06-3.91-4.59-3.91-4.59-.11-.12-.26-.22-.43-.22-.16 0-.31.1-.41.25l-3.5 5.55v8.69c0 .35.174.56.523.56.15 0 .29-.07.4-.18l1.29-1.2 2.7 2.86c.15.15.35.23.55.23.19 0 .37-.08.51-.23l6.07-5.9c.16-.15.25-.35.25-.56 0-.2-.1-.37-.26-.52-.33-.34-.93-.34-1.27.01l-5.1 5.04s3.47 3.6 3.82 3.96c.14.14.31.22.5.22.24 0 .48-.1.64-.3.16-.2.23-.46.16-.72-.05-.25-.22-.45-.47-.56-1.25-.56-2.46-1.23-3.66-2.01-.3-.22-.6-.45-.89-.68l-.96.87-.8-.87c-.33-.33-.71-.67-1.12-1.02-.42-.35-.8-.65-1.12-.9l-.64-.5v2.24l.59.54c.26.24.53.5.82.78.7.68 1.42 1.4 2.14 2.16.27.28.53.56.76.85l1.13 1.44-3.84 3.77-5.48-6.21h3.08c.34 0 .64-.16.85-.47l1.53-1.81-4.54-5.22h-4.3l.44.47c.2.21.44.44.69.7.53.54 1.12 1.17 1.79 1.9.41.45.79.86 1.14 1.22l2.19 2.49-4.19 4.18z"/></svg>`,
//   },
//   {
//     id: 2,
//     title: "Typescript",
//     svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6 fill-current"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 7h2v2h-2zm0 4h2v6h-2z"/></svg>`,
//   },
// ];
