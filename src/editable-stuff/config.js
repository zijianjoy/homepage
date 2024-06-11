// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "James",
  middleName: "",
  lastName: "Liu",
  message: "Fostering the developer community and innovating with the world",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/zijianjoy",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/jameszijian/",
    },
    {
      image: "fa-medium-m",
      url: "https://medium.com/@mr_funkyfire",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.png",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/zijianjoy.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/zijianjoy.png"),
  imageSize: 375,
  message:
    "My name is James Liu. I’m an Engineer.",
  resume: "https://docs.google.com/document/d/1KVyk35u9jh3UYRFxj9EdUhFQnmxa5Rb75klPlFwBags/edit?usp=sharing",
  blog: "https://medium.com/@mr_funkyfire",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Open Source Projects",
  gitHubUsername: "zijianjoy", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: ["pipelines", "dag-in-react", "gcp-blueprints", "firebase-js-sdk"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/zijianjoy.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/zijianjoy.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "JavaScript", value: 90 },
    { name: "golang", value: 90 },
    { name: "Java", value: 90 },
    { name: "C/C++", value: 90 },
    { name: "C#", value: 80 },
    { name: "Data Structures", value: 85 },
    { name: "Kubernetes", value: 85 },
    { name: "MLOps", value: 85 },
    { name: "Database", value: 84 },
    { name: "Android", value: 80 },
    { name: "System Architecture", value: 82 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 85 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 85 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 94 },
    { name: "Empathy", value: 90 },
    { name: "Planning", value: 90 },
    { name: "Creativity", value: 86 },
  ],
  tools: [
    { name: "Kubeflow", value: 95 },
    { name: "GCP", value: 90 },
    { name: "React", value: 85 },
    { name: "NodeJS", value: 85 },
    { name: "MapReduce", value: 80 },
    { name: "Protocol Buffers", value: 85 },
    { name: "Docker", value: 85 },
    { name: "Linux", value: 85 },
    { name: "GitHub", value: 83 },
    { name: "Kustomize/Helm", value: 82 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Please feel free to contact me at ",
  email: "zijianliu.james@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: true,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
