import AS_Post from "./images/ArgShare/AS_Post.PNG";
import AS_Home from "./images/ArgShare/AS_Home.PNG";
import AS_Cat from "./images/ArgShare/AS_Cats1.mp4";
import AS_Cat_Start from "./images/ArgShare/AS_Cats_2.png";
import Adm_Dir from "./images/ArgAdmin/Adm_Dir.PNG";
import Adm_Demo_Start from "./images/ArgAdmin/Adm_Demo_2.png";
import Adm_Demo from "./images/ArgAdmin/Adm_Demo1.mp4";
import Adm_Post from "./images/ArgAdmin/Adm_Post.PNG";
import TP_Home from "./images/TidePharm/TP_Home.PNG";
import TP_Appointment from "./images/TidePharm/TP_Appointment1.mp4";
import TP_Appointment_Start from "./images/TidePharm/TP_Appointment_2.png";
import TP_Emp from "./images/TidePharm/TP_Emp1.mp4";
import TP_Emp_Start from "./images/TidePharm/TP_Emp_2.png";

import JS from "./images/JsImg.png";
import HtmlCss from "./images/HtmlCssImg.png";
import MSNet from "./images/MSNet.png";
import SQL from "./images/SQLImg.png";
import Bootstrap from "./images/Bootstrap.png";
import Node from "./images/Node.png";
import Electron from "./images/Electron.png";
import React from "./images/React.png";
import Git from "./images/Git.png";
import TS from "./images/TsImg.png";
import GQL from "./images/GraphQLImg.png";
import TW from "./images/TwCssImg.png";
import Jest from "./images/JestImg.png";
import Mongo from "./images/MongoDBImg.png";

export const projects = [
  {
    title: "ArgShare",
    subtitle: "JavaScript, HTML/CSS, C# .NET, and MySQL",
    description:
      "Argshare gives aspiring programmers the ability to both find and submit project ideas. I designed and built ArgShare over the Summer of 2022 after struggling to find project ideas online.",
    tools: ["HTML/CSS", "JavaScript", "C#/.NET", "SQL/MySQL"],
    features: [
      "Project idea lookup",
      "Project idea submission",
      "Rich text editor for submissions",
      "Optional 2FA",
      "Email notifications",
      "Secure password hash algorithm",
    ],
    images: [
      {
        path: AS_Home,
        gif: "",
        alt: "Home Page",
        caption: "Home Page",
      },
      {
        path: AS_Cat_Start,
        gif: AS_Cat,
        alt: "Categories",
        caption: "Categories",
      },
      {
        path: AS_Post,
        gif: "",
        alt: "An ArgShare Post",
        caption: "An ArgShare Post",
      },
    ],
    link: "",
  },
  {
    title: "ArgShare Admin Panel",
    subtitle: "Node.js, Electron, HTML/CSS, C# .NET, and MySQL",
    description:
      "This is the side of ArgShare that people don't see. A web app wrapped in a native app layer, the admin panel allows for moderation of the main site.",
    tools: ["HTML/CSS", "Node.js", "Electron", "C#/.NET", "SQL/MySQL"],
    features: [
      "Project approval/denial",
      "Custom project feedback",
      "Official project posting",
      "Admin directory",
      "Admin creation tool",
      "Report feedback tool",
      "System specs",
    ],
    images: [
      {
        path: Adm_Dir,
        gif: "",
        alt: "Directory",
        caption: "Directory",
      },
      {
        path: Adm_Demo_Start,
        gif: Adm_Demo,
        alt: "Demo",
        caption: "Demo",
      },
      {
        path: Adm_Post,
        gif: "",
        alt: "Admin Post",
        caption: "Admin Post",
      },
    ],
    link: "",
  },
  {
    title: "Tide Market Pharmacy",
    subtitle: "JavaScript, HTML/CSS, C# .NET, and MySQL",
    description:
      "This was a group project comissioned in my MIS-321 course. We were required to create a web app to track pharmacy appointments and employee schedules. ",
    tools: ["HTML/CSS", "JavaScript", "C#/.NET", "SQL/MySQL"],
    features: [
      "Account creation",
      "Appointment scheduling/viewing/canceling",
      "Employee creation tool",
      "Employee schedule/termination tool",
      "Admin functions",
    ],
    images: [
      {
        path: TP_Home,
        gif: "",
        alt: "Home Page",
        caption: "Home Page",
      },
      {
        path: TP_Appointment_Start,
        gif: TP_Appointment,
        alt: "Appointment Scheduling",
        caption: "Appointment Scheduling",
      },
      {
        path: TP_Emp_Start,
        gif: TP_Emp,
        alt: "Employee Directory",
        caption: "Employee Directory",
      },
    ],
    link: "",
  },
];

export const skills = [
  {
    title: "JavaScript",
    image: JS,
  },
  {
    title: "HTML/CSS",
    image: HtmlCss,
  },
  {
    title: "C#",
    image: MSNet,
  },
  {
    title: "SQL",
    image: SQL,
  },
  {
    title: "Bootstrap",
    image: Bootstrap,
  },
  {
    title: "Node.js",
    image: Node,
  },
  {
    title: "Electron",
    image: Electron,
  },
  {
    title: "React",
    image: React,
  },
  {
    title: "Git",
    image: Git,
  },
  {
    title: "TypeScript",
    image: TS,
  },
  {
    title: "GraphQL",
    image: GQL,
  },
  {
    title: "Tailwind",
    image: TW,
  },
  {
    title: "Jest",
    image: Jest,
  },
  {
    title: "MongoDB",
    image: Mongo,
  },
];
