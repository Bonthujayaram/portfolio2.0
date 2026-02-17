// Projects data for Jayaram Bonthu's portfolio

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  demoUrl?: string;
  demoVideoUrl?: string;
  githubUrl?: string;
  category: "mobile" | "web" | "ai" | "fullstack";
}

export const projects: Project[] = [
  {
    id: "intelligent-video-surveillance",
    title: "Intelligent Video Surveillance System | AI-Based Violence Detection",
    description:
      "Deep learning-powered video surveillance system that detects violence, fights, and theft in real-time from CCTV footage.",
    longDescription:
      "The Intelligent Video Surveillance System is an advanced computer vision and deep learning project designed to enhance public safety by automatically detecting violent activities such as fights, theft, and suspicious behavior from video streams. The system uses CNN and CNN+LSTM architectures to analyze temporal video patterns and provides real-time detection through an interactive Streamlit dashboard. It supports video uploads, real-time inference, incident analytics, and alert mechanisms, making it suitable for smart surveillance and security applications.",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Streamlit",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "CNN",
      "LSTM",
      "Computer Vision"
    ],
    features: [
      "Real-time detection of violence, fights, and theft activities",
      "Deep learning models using CNN and CNN + LSTM architectures",
      "Interactive Streamlit-based user interface",
      "Video upload and frame-wise analysis",
      "Incident analytics and performance metrics",
      "Optimized inference for faster processing",
      "Modular project structure for scalability and experimentation"
    ],
    image: "/images/projects/intelligentvedio/intelligentvedio.png",
    //demoUrl: "https://sync-verse01.vercel.app",
    githubUrl: "https://github.com/Bonthujayaram/intelligence-video-surveillance-system-using-deep-learning",
    category: "ai"
  },
  {
    id: "portfolio-v1",
    title: "Personal Portfolio v1 | HTML-CSS-JS Single Page Site",
    description:
      "A from-scratch personal portfolio website built with only HTML, CSS, and JavaScript.",
    longDescription:
      "This is Jayaram bonthu's first personal portfolio website, built entirely with core web technologies and no frontend frameworks. The site showcases projects, skills, and journey as a computer science student, with a focus on smooth scrolling, theme toggling, and subtle animations. It includes a working contact form powered by Formspree, dual-theme support (light/dark), and interactive elements like a pixel grid that lights up on hover, delivering a polished but framework-free portfolio experience.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6)",
      "CSS Variables",
      "Font Awesome",
      "Formspree"
    ],
    features: [
      "Dual-theme (light & dark) with preference saved in local storage",
      "Fully responsive layout for mobile, tablet, and desktop",
      "Smooth scroll-based animations and section transitions",
      "Typing effect in the hero section for dynamic introduction",
      "Functional contact form integrated via Formspree",
      "Interactive pixel grid and clean single-page navigation"
    ],
    image: "/images/projects/portfolio-v1/portfolio.png",
    demoUrl: "https://jayaram-portfolio.netlify.app/",
    githubUrl: "https://github.com/Bonthujayaram/Portfolio",
    category: "web"
  },
  {
    id: "spotify-clone",
    title: "Spotify Clone | Music Streaming Web Application",
    description:
      "A modern Spotify-inspired music streaming web app with playlist browsing, audio playback, and responsive UI.",
    longDescription:
      "The Spotify Clone is a full-stack music streaming web application inspired by Spotify’s core features and user experience. It allows users to browse music, play tracks, control playback, and navigate playlists with a clean and responsive interface. The frontend is built using React and modern CSS frameworks, while music playback is handled using external audio APIs. This project focuses on UI/UX accuracy, component reusability, and smooth audio interactions, demonstrating strong frontend and integration skills.",
    technologies: [
      "JavaScript",
      "React",
      "node.js",
      "mongodb",
      "express.js",
      "cors",
      "dotenv",
      "formspree",
      "Tailwind CSS",
      "Audio APIs",
      "REST APIs",
      "GitHub",
      "Responsive Web Design"
    ],
    features: [
      "Spotify-like user interface and layout",
      "Music playback with play, pause, next, and previous controls",
      "Dynamic song and playlist rendering",
      "Responsive design for desktop and mobile devices",
      "Reusable React components for scalability",
      "Clean navigation between sections like Home and Playlists",
      "Focus on performance and smooth user experience"
    ],
    image: "/images/projects/spotify_clone/spotify_clone.png",
    demoUrl: "https://jairamspotifyclone.netlify.app/",
    githubUrl: "https://github.com/Bonthujayaram/spotifyclone_frontend",
    category: "fullstack"
  },
  {
    id: "screen-record-share",
    title: "Screen Record & Share | In-Browser Video Recording Platform",
    description:
      "A browser-based screen recording and sharing platform that records screen and audio, trims videos, and generates shareable links.",
    longDescription:
      "Screen Record & Share is a modern web application that enables users to record their screen and microphone directly from the browser using the MediaRecorder API. Users can trim recordings, export videos, upload them to cloud storage, and generate public shareable links with an embedded video player. The platform also tracks basic analytics such as view count and watch completion percentage. Built with Next.js and TypeScript, this project demonstrates strong frontend engineering, browser media handling, and product-oriented thinking.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "MediaRecorder API",
      "FFmpeg.wasm",
      "Supabase",
      "Cloud Storage",
      "HTML5 Video",
      "REST APIs",
      "Tailwind CSS"
    ],
    features: [
      "In-browser screen and microphone recording",
      "Start and stop recording controls using MediaRecorder API",
      "Video trimming with start and end time selection",
      "Export recorded videos in WebM format",
      "Upload videos to cloud storage",
      "Public shareable link with embedded video player",
      "View count and watch completion analytics",
      "Persistent data storage for videos and analytics",
      "Clean and minimal user interface"
    ],
    image: "/images/projects/screenrecord-share/screen_record.png",
    demoUrl: "https://screen-record-share.vercel.app/",
    githubUrl: "https://github.com/Bonthujayaram/screen-record-share",
    category: "fullstack"
  },
  {
    id: "offline-language-translator",
    title: "Offline Language Translator | Android ML App",
    description:
      "An Android application that translates text between languages completely offline using on-device machine learning.",
    longDescription:
      "The Offline Language Translator is an Android application designed to provide fast and reliable language translation without requiring an internet connection. Built using Kotlin and Google ML Kit, the app performs on-device text translation, making it suitable for travelers and low-connectivity environments. The project demonstrates practical use of mobile machine learning, efficient resource handling, and clean Android UI design with a focus on usability and performance.",
    technologies: [
      "Kotlin",
      "Android Studio",
      "Google ML Kit",
      "On-device Machine Learning",
      "Offline Translation",
      "Android SDK",
      "Material UI",
      "Text Processing"
    ],
    features: [
      "Offline text translation using on-device ML models",
      "Supports multiple language pairs",
      "No internet connection required for translation",
      "Fast and lightweight translation processing",
      "Simple and user-friendly Android interface",
      "Efficient handling of ML models on mobile devices",
      "Ideal for travel and low-network environments"
    ],
    image: "/images/projects/offlinelanguage/offlinelanguage.png",
    demoVideoUrl: "https://www.youtube.com/watch?v=jkvWkPQvAy4",
    githubUrl: "https://github.com/Bonthujayaram/Offline-Languge-Translator-android-app",
    category: "mobile"
  }, {
    id: "smo-sewing-machine-operator",
    title: "SMO | Sewing Machine Operator Management System",
    description:
      "A full-stack Android and Spring Boot application for managing garment production workflows using QR-code-based tracking.",
    longDescription:
      "The SMO (Sewing Machine Operator) Management System is a full-stack application designed to digitize garment manufacturing floor operations. The Android app, built with Kotlin, provides role-based access for Admins, Workers, and Supervisors, while the Spring Boot backend manages REST APIs and database operations. The system uses QR codes for tracking orders and workstations, enabling efficient task allocation, real-time production updates, and accurate workflow monitoring aligned with real industry processes.",
    technologies: [
      "Kotlin",
      "Android Studio",
      "Spring Boot",
      "Java",
      "REST APIs",
      "MySQL",
      "QR Code Scanning",
      "RecyclerView",
      "Material UI",
      "Role-Based Authentication"
    ],
    features: [
      "Android app with role-based login (Admin, Worker, Supervisor)",
      "Spring Boot backend with RESTful APIs",
      "QR-code-based order and workstation tracking",
      "Order management, task allocation, and machine assignment",
      "Real-time production status updates",
      "Secure data storage using MySQL",
      "Scalable full-stack architecture for manufacturing workflows"
    ],
    image: "/images/projects/smo/smo.png",
    demoUrl: "",
    githubUrl: "https://github.com/Bonthujayaram/SMO-Sewing-Machine-Operator",
    category: "mobile"
  },

];
