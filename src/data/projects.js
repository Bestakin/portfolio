// ─────────────────────────────────────────────────────────────
// All project + case-study content lives here.
// Sources: Best's case-study write-up, resume and StatCourt demo video.
// Links set to null are hidden (no broken buttons).
// ─────────────────────────────────────────────────────────────

export const featuredProjects = [
  {
    slug: 'statcourt',
    name: 'StatCourt',
    summary: 'Basketball and soccer analytics with head-to-head comparisons, similarity search and historical stats.',
    keyTech: ['React', 'FastAPI', 'Python', 'SQLite'],
    icon: 'ChartColumn',
    category: 'Full-Stack Development · Sports Analytics',
    status: 'Live in production',
    description:
      'A full-stack sports analytics platform for basketball and soccer, featuring player comparisons, historical statistics, similarity analysis, and interactive data visualizations.',
    tech: ['React', 'Python', 'FastAPI', 'SQLite', 'REST APIs', 'Supabase', 'Data Visualization'],
    links: { live: 'https://getstatcourt.com', github: null },
    // Real demo recording. poster = a real frame from it.
    video: {
      src: '/media/statcourt-demo.mp4',
      preview: '/media/statcourt-preview.mp4',
      poster: '/media/statcourt-poster.webp',
      duration: '1:00',
    },
    image: '/media/statcourt-poster.webp',
    facts: ['NBA since 1950', 'WNBA since 1997', '11 football competitions', '14,900+ football players'],
    problem: [
      "Sports stats are scattered across many websites, making it hard to compare players, analyze historical performances or spot trends in one place. The gap is widest for women's basketball, historical NBA seasons and players across different soccer competitions.",
    ],
    solution: [
      'StatCourt brings NBA, WNBA and soccer statistics into one interactive platform. Users explore player profiles, compare performances head-to-head, analyze historical seasons and find statistically similar players, with sport-specific tools in a unified interface.',
    ],
    architecture: {
      summary:
        'One React frontend talks to a separate Python backend API for each sport. External sports data is ingested, cleaned and transformed into structured datasets, then exposed through REST APIs.',
      flow: ['External sports data', 'Data processing', 'Database', 'API layer', 'React frontend'],
      components: [
        { title: 'React frontend', body: 'Comparison tables, charts and interactive visualizations, shared across both sports.' },
        { title: 'Soccer API (Python / FastAPI)', body: 'Processes stored player statistics, calculates normalized per-90 metrics and serves them over REST.' },
        { title: 'Basketball API (Python)', body: 'A separate pipeline and API for NBA and WNBA data, built on Basketball Reference data used with permission.' },
        { title: 'Data & accounts', body: 'SQLite stores structured player and competition data. Supabase handles sign-in and per-user saved comparisons.' },
      ],
      note: 'Basketball and soccer have distinct data pipelines and backend implementations.',
    },
    challenges: [
      { title: 'Building a player similarity engine', body: 'Finding similar players takes more than comparing raw totals. I built a similarity engine on standardized statistical features and cosine similarity, with position-specific metric selection.' },
      { title: 'Comparing players fairly', body: 'Raw statistics mislead when players have different playing time or positions. I implemented normalized soccer metrics, including per-90-minute statistics, and position-aware comparison logic.' },
      { title: 'Accurate group comparisons', body: 'Basketball group comparisons combine player statistics and calculate pooled shooting percentages, rather than simply averaging individual percentages.' },
      { title: 'Managing historical sports data', body: 'Seasons and competitions vary in how complete their data is. I worked on ingestion, cleaning, filtering and consistent statistical calculations so comparisons stay reliable.' },
    ],
    features: [
      'Head-to-head player comparisons',
      'Player similarity recommendations',
      'NBA and WNBA player profiles and historical statistics',
      'Soccer player analytics across major European competitions',
      'Group basketball comparisons',
      'Interactive statistical charts',
      'Season and career comparisons',
      'Position-aware soccer statistics',
      'Player development and historical performance analysis',
      'Basketball awards and historical winners',
    ],
    screenshots: [
      { src: '/media/statcourt-shot-1.webp', caption: 'Basketball head-to-head, any era' },
      { src: '/media/statcourt-shot-2.webp', caption: 'Football comparison score' },
      { src: '/media/statcourt-shot-3.webp', caption: 'Match-by-match workload' },
      { src: '/media/statcourt-shot-4.webp', caption: 'Season-by-season trends' },
    ],
  },
  {
    slug: 'parksenseai',
    name: 'ParkSenseAI',
    summary: 'Smart parking that uses YOLOv8 to detect open spaces and lets drivers reserve them from a mobile app.',
    keyTech: ['React Native', 'YOLOv8', 'OpenCV', 'Firebase'],
    icon: 'Car',
    category: 'AI · Computer Vision · Mobile',
    status: 'Team capstone · Sep 2025 – Apr 2026',
    description:
      'An AI-powered smart parking system combining computer vision, mobile development, and real-time parking management.',
    tech: ['React Native', 'Expo', 'Python', 'YOLOv8', 'OpenCV', 'Firebase', 'Firestore', 'Stripe', 'WebSockets'],
    links: { live: null, github: 'https://github.com/ParkSenseAI/ParkSenseAI' },
    image: '/images/parksenseai.webp',
    imageIsMockup: true,
    problem: [
      'Finding parking in busy facilities is slow because most systems give drivers no real-time view of which spaces are free. We wanted to see how computer vision and mobile technology could make parking management more efficient.',
    ],
    solution: [
      'ParkSenseAI analyzes camera footage with YOLOv8 to detect vehicles and decide which spaces are occupied. Drivers see live availability, reserve spaces and use QR-code passes in a mobile app, with payments and administrative parking management built in.',
    ],
    architecture: {
      summary: 'Three main components: a mobile app, an AI detection backend, and cloud services that connect them.',
      flow: ['Camera feed', 'YOLOv8 detection', 'Occupancy analysis', 'Backend updates', 'Firestore / WebSockets', 'Mobile app'],
      components: [
        { title: 'Mobile application', body: 'React Native and Expo. User authentication, parking availability, reservations and QR-code passes.' },
        { title: 'AI detection backend', body: 'Python, OpenCV and YOLOv8. Processes camera footage and evaluates occupancy using predefined parking-space regions.' },
        { title: 'Cloud services', body: 'Firebase Authentication for sign-in, Firestore for availability and reservation data, Stripe for payments, WebSockets for live availability updates.' },
      ],
      note: 'Built as a team capstone project at Ontario Tech University.',
    },
    challenges: [
      { title: 'Detecting parking-space occupancy', body: 'Vehicle detection alone does not say whether a specific space is occupied. The system uses defined parking-space polygons to associate detected vehicles with individual spaces.' },
      { title: 'Preventing conflicting reservations', body: 'Several users reserving the same space could create inconsistent bookings. Reservations use time-overlap validation and Firestore transactions so each booking is atomic.' },
      { title: 'Preventing unstable detection results', body: 'Temporary detection failures could make spaces flip rapidly between occupied and available. A stability filter reduces false occupancy changes.' },
      { title: 'Connecting AI predictions to app state', body: 'Camera detections had to become availability updates users can see, which meant coordinating detection results, backend logic and mobile app updates.' },
    ],
    features: [
      'AI-powered vehicle detection',
      'Parking-space occupancy analysis',
      'Real-time availability updates',
      'Mobile parking reservations',
      'QR-code parking passes',
      'Stripe payment integration',
      'Firebase authentication',
      'License plate recognition',
      'Administrative role-based access',
      'Camera health monitoring',
    ],
  },
  {
    slug: 'unitrack',
    name: 'UniTrack',
    summary: 'University enrollment platform enforcing capacity, prerequisites and automatic waitlist promotion.',
    keyTech: ['React', 'FastAPI', 'MongoDB', 'JWT'],
    icon: 'GraduationCap',
    category: 'Full-Stack Development · University Management',
    status: 'Solo project · June 2026',
    description:
      'A university enrollment and transcript management platform with course registration, prerequisites, waitlists, and academic records.',
    tech: ['React', 'Python', 'FastAPI', 'REST APIs', 'SQLite', 'MongoDB Atlas', 'JWT'],
    links: { live: null, github: 'https://github.com/Bestakin/UniTrack' },
    image: '/images/unitrack.webp',
    imageIsMockup: true,
    problem: [
      'University enrollment depends on interconnected rules for registration, prerequisites, capacity limits, waitlists and academic records. Getting them right requires consistent business logic and accurate data handling.',
    ],
    solution: [
      'UniTrack models these workflows in a full-stack app: students enroll, drop courses and view transcripts, while administrators manage courses and enrollment. The backend enforces the registration rules across its APIs and database.',
    ],
    architecture: {
      summary:
        'A React frontend serves separate student and admin portals. The backend is split into four FastAPI microservices (students, courses, enrollment, semesters), backed by SQLite and MongoDB Atlas.',
      flow: ['React frontend', 'FastAPI microservices', 'Enrollment business logic', 'Database'],
      components: [
        { title: 'Frontend (React)', body: 'Interfaces for students and administrators.' },
        { title: 'Backend (Python / FastAPI)', body: 'Four microservices handling REST requests, enrollment rules, academic records and user operations. JWT authentication with role-based access across the two portals.' },
        { title: 'Database layer', body: 'SQLite and MongoDB Atlas store student information, course records, enrollment data and related academic information.' },
      ],
    },
    challenges: [
      { title: 'Managing waitlists', body: 'When a course is full, the system tracks students waiting for a seat and promotes them automatically when one opens.' },
      { title: 'Keeping academic records consistent', body: 'Dropping courses, enrolling students and updating academic records required coordinated backend operations across services.' },
      { title: 'Enforcing course capacity', body: 'Enrollment logic prevents registrations from exceeding a course’s available capacity.' },
      { title: 'Validating prerequisites', body: 'Students must satisfy course requirements before they can register for certain classes.' },
    ],
    features: [
      'Prerequisite validation',
      'Course capacity management',
      'Waitlist management',
      'Course enrollment',
      'Transcript viewing',
      'Student and administrator authentication',
      'Course dropping',
      'Student academic records',
      'Administrative course management',
    ],
  },
  // NaijaVerify and Toronto City Game: case-study content is ready in Best's write-up.
  // Add them back here once their repositories are pushed and the stack is confirmed.
];

export const moreProjects = [
  {
    name: 'E-Commerce Web Application',
    icon: 'ShieldCheck',
    description:
      'A production-style Spring Boot backend with JWT authentication and role-based access control securing its API endpoints. Documented with Swagger, verified with Postman, and built and deployed through CI/CD pipelines to Kubernetes.',
    tech: ['Java', 'Spring Boot', 'JWT', 'REST APIs', 'Swagger', 'GitHub Actions', 'Jenkins', 'Kubernetes'],
    links: { live: null, github: 'https://github.com/Bestakin/springboot-jwt-auth' },
    note: null,
  },
  {
    name: 'Java File Storage Application',
    icon: 'HardDrive',
    description: 'A file management application built using Java and Spring Boot.',
    tech: ['Java', 'Spring Boot'],
    links: { live: null, github: 'https://github.com/Bestakin/Super-Duper-Drive-Spring-Boot-Cloud-Storage' },
    note: 'In progress',
  },
];
