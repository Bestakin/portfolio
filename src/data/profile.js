// ─────────────────────────────────────────────────────────────
// Personal info. A link set to null is hidden, never shown as a broken button.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Best Akinlabi',
  role: 'Software Engineer',
  roleLine: 'Software Engineer · Backend & Full-Stack',
  tagline:
    "I'm a software engineer passionate about building scalable backend systems, intelligent applications, and digital products that solve real-world problems.",
  badges: ['Backend', 'Full-Stack', 'AI/ML', 'Systems Design'],
  email: 'akinlabibest@gmail.com',
  github: 'https://github.com/Bestakin',
  linkedin: 'https://www.linkedin.com/in/best-akinlabi-817416251/',
  // The real resume, served unchanged from public/. Nav + hero both use this.
  resume: '/Best_Akinlabi_Resume.pdf',
  resumeFileName: 'Best_Akinlabi_Resume.pdf',
  // To use a headshot: put the file in public/images and set e.g. '/images/headshot.jpg'.
  // While null, the About section shows the BA monogram.
  photo: null,
  location: 'Greater Toronto Area, Ontario, Canada',
};

export const highlights = [
  { icon: 'Code2', value: '5 projects', label: 'Sports analytics, AI and fintech' },
  { icon: 'Globe', value: 'Live product', label: 'StatCourt at getstatcourt.com' },
  { icon: 'Briefcase', value: 'Fintech research', label: 'KYC verification at DemmyPay' },
  { icon: 'Layers', value: 'Full-stack', label: 'APIs · Frontend · Databases' },
];

export const about = [
  "I'm a software engineering student at Ontario Tech University who enjoys turning ideas into real applications. I focus on backend and full-stack development, with interests in AI and cloud technologies.",
  'From building StatCourt to researching fintech verification solutions, I enjoy solving problems, experimenting with new technologies, and creating software that people can actually use.',
];

export const interests = {
  text: "Outside software engineering, I'm interested in sports, technology, and finding creative ways to bring the two together.",
  tags: [
    { icon: 'Trophy', label: 'Basketball & Football' },
    { icon: 'ChartLine', label: 'Sports Analytics' },
    { icon: 'BrainCircuit', label: 'AI & Technology' },
  ],
};

export const experience = [
  {
    company: 'DemmyPay — Demmy Global Limited',
    role: 'Technical Research Assistant',
    dates: 'Oct 2026 – Present',
    location: 'Remote',
    summary:
      'Researching customer identity verification for DemmyPay, the company’s fintech app, focused on NIN-based KYC during wallet activation.',
    points: [
      'Investigated wallet activation failures caused by mismatches between customers’ phone numbers and their NIN records.',
      'Evaluated KYC verification APIs (Dojah, Smile ID, Youverify, Prembly) on capability, pricing and integration requirements.',
      'Ruled out the incumbent provider after confirming it could only check the primary NIN-linked phone number.',
      'Identified Smile ID’s Enhanced KYC API as a candidate solution, since it returns both primary and secondary NIN-linked numbers for matching.',
    ],
  },
];

export const skills = [
  { group: 'Backend Development', icon: 'Server', items: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'REST APIs'] },
  { group: 'Frontend Development', icon: 'LayoutGrid', items: ['React', 'React Native', 'JavaScript'] },
  { group: 'Databases', icon: 'Database', items: ['MySQL', 'SQLite', 'Firebase'] },
  { group: 'DevOps & Cloud', icon: 'Cloud', items: ['Docker', 'Kubernetes', 'GitHub Actions', 'Google Cloud'] },
  { group: 'AI & Machine Learning', icon: 'Brain', items: ['Python', 'OpenCV', 'YOLOv8'] },
];
