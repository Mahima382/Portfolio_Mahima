/*
  All site content lives here. To add a GitHub link, a certificate or a project,
  edit this file only: the pages read from it.
*/
window.SITE = {
  name: "Zakia Sultana Mahima",
  email: "Sultanamahima384@gmail.com",
  phone: "01631481908",
  location: "Dhaka, Bangladesh",

  // Paste your profile link, e.g. "https://github.com/your-username"
  github: "",
  linkedin: "",

  roles: [
    "CSE student at Jahangirnagar University",
    "Bangla speech recognition researcher",
    "Edge AI and embedded systems explorer",
    "Robotics club member",
    "Web developer and team lead"
  ],

  education: [
    { period: "2021 – 2025", note: "4th year", title: "B.Sc. in Computer Science and Engineering", place: "Jahangirnagar University" },
    { period: "GPA 5.00", note: "Science", title: "Higher Secondary Certificate (HSC)", place: "Holy Cross College" }
  ],

  // repo: paste the GitHub repository link for each project
  projects: [
    { id: "asr", cat: "ai", featured: true, title: "Bangla Regional-Accent Speech-to-Text", status: "Research proposal", live: true,
      summary: "A real-time Bangla speech recognition system for regional accents, designed to run offline on a Raspberry Pi.",
      tags: ["Whisper", "Transformers", "Raspberry Pi", "Edge AI", "VAD"],
      skills: ["Machine Learning", "Automatic Speech Recognition", "Edge AI"],
      details: [
        "Exploring real-time Bangla speech recognition for regional accents on a Raspberry Pi-based edge platform.",
        "Investigating Whisper and other Transformer-based ASR approaches for Bangla transcription.",
        "Developing the audio workflow: voice activity detection, noise reduction, normalization, resampling and speech segmentation.",
        "Focus on offline recognition, Edge AI deployment and better recognition of regional Bangla speech."
      ], repo: "" },
    { id: "food", cat: "web", featured: true, title: "FooDoNut", status: "In development", live: true,
      summary: "AI-assisted food recommendation platform with multiple profiles, built around diet, allergies and wellness goals.",
      tags: ["React", "TypeScript", "Node.js", "Express", "MySQL"],
      skills: ["React", "TypeScript", "Node.js", "Express", "MySQL"],
      details: [
        "Multi-profile platform that recommends recipes from dietary preferences, allergies, available ingredients, health requirements and wellness goals.",
        "Planning research-informed recipe filtering and personalized recommendations for nutrition and everyday wellbeing."
      ], repo: "" },
    { id: "sweep", cat: "web", featured: false, title: "SWEEP", status: "Academic team project", live: false,
      summary: "Web-based waste management system built by a team using an Agile workflow.",
      tags: ["Web platform", "Agile", "Testing"], skills: [],
      details: [
        "Collaborated on the web platform in an Agile team.",
        "Contributed to platform-operation requirements, notification workflows and functional testing."
      ], repo: "" },
    { id: "jurc", cat: "web", featured: true, title: "JURC Web Portal", status: "Team lead", live: false,
      summary: "Web portal for the Jahangirnagar University Robotics Club, developed by a team I led.",
      tags: ["Web portal", "Leadership"], skills: [],
      details: [
        "Led the team that developed the club's web portal.",
        "Coordinated work across team members using tools such as Trello and Discord."
      ], repo: "" },
    { id: "lfr", cat: "robotics", featured: false, title: "Line-Following Robots", status: "Competitions", live: false,
      summary: "Hands-on embedded work with Arduino, sensors and motor control for robotics competitions.",
      tags: ["Arduino", "Sensors", "Motor control"],
      skills: ["Arduino", "Sensors", "Motor Control", "Line-Following Robot"],
      details: [
        "Participated in Line-Following Robot (LFR) competitions with the Jahangirnagar University Robotics Club.",
        "Worked with sensors and motor control on Arduino-based robots."
      ], repo: "" }
  ],
  categories: { all: "All", ai: "AI & research", web: "Web", robotics: "Robotics" },

  skills: {
    "Programming": ["Python", "C++", "Java", "JavaScript"],
    "Web development": ["HTML", "CSS", "React", "TypeScript"],
    "Backend & database": ["Node.js", "Express", "FastAPI", "MySQL"],
    "Robotics & embedded": ["Arduino", "Sensors", "Motor Control", "Line-Following Robot"],
    "Tools": ["Git", "Linux", "PyCharm", "Trello", "Discord", "Toggl"],
    "Areas of interest": ["Artificial Intelligence", "Machine Learning", "Data Analysis", "Automatic Speech Recognition", "Edge AI"]
  },
  interests: ["Bangla ASR", "Regional-dialect speech processing", "Transformer-based speech models", "Edge AI", "Embedded AI systems", "Machine Learning"],

  activities: [
    { title: "Jahangirnagar University Robotics Club", note: "Active member", icon: "M12 2l9 5v10l-9 5-9-5V7z" },
    { title: "Line-Following Robot competitions", note: "Participant", icon: "M4 17h4l3-10 4 14 3-8h2" },
    { title: "FineAnswer SkillBuilder Summit", note: "Campus Ambassador", icon: "M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z" },
    { title: "Data Analysis course", note: "Completed", icon: "M4 20V10M10 20V4M16 20v-7M22 20H2" }
  ],
  softSkills: ["Teamwork", "Adaptability", "Written communication", "English proficiency", "Time management", "Attention to detail"],

  // image: optional, e.g. "assets/certificates/data-analysis.jpg"; url: link to the verifiable certificate
  certificates: [
    { title: "Data Analysis Course", issuer: "", year: "", url: "", image: "" },
    { title: "Campus Ambassador, FineAnswer SkillBuilder Summit", issuer: "FineAnswer", year: "", url: "", image: "" }
  ],
  certificateSlots: 1
};
