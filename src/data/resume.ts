import type { ResumeData } from "../types/resume";

/**
 * ╔════════════════════════════════════════════════════════════╗
 * ║  SINGLE SOURCE OF TRUTH — Edit this file to update the   ║
 * ║  entire portfolio. All sections read from this object.    ║
 * ╚════════════════════════════════════════════════════════════╝
 *
 * Data extracted from resume LaTeX source (authoritative).
 */

const resumeData: ResumeData = {
  basics: {
    name: "Max Haberer",
    label: "Computer Engineering Student",
    email: "mhaberer25@gmail.com",
    website: "https://jurassic001.github.io",
    location: "College Station, TX",
    image: "https://avatars.githubusercontent.com/u/119370602?v=4",
    avatarUrl: "/img/mh_headshot.jpg",
    profiles: [
      {
        network: "GitHub",
        username: "Jurassic001",
        url: "https://github.com/Jurassic001",
      },
      {
        network: "LinkedIn",
        username: "Maxwell Haberer",
        url: "https://www.linkedin.com/in/maxwell-haberer-280a0a368/",
      },
    ],
  },

  summary:
    "Computer engineering student with hands-on experience in systems engineering, software development, and aerospace in large team environments. Experienced with design, implementation, and validation of integrated control systems and software. Passionate about aerospace, avionics, flight simulation, and computer architecture.",

  experience: [
    {
      id: "bell-flight-sim",
      company: "Bell Helicopter",
      role: "Flight Simulation Software Intern",
      startDate: "2026",
      endDate: "2026",
      bullets: [
        "Rewrote a legacy Java tool for managing flight tests into modern C++17, fixing long-standing bugs and end-user gripes",
        "Architected new software with a focus on maintainability and extensibility while preserving backwards-compatibility",
        "Worked alongside mentors and interns to engineer new features while adhering to team standards and best practices",
      ],
      tags: ["C++17", "Java", "Flight Simulation", "Software Architecture"],
      category: "work",
    },
    {
      id: "tamu-rocketry",
      company: "Texas A&M Sounding Rocketry Team",
      role: "Avionics Engineer",
      startDate: "2025",
      endDate: "Present",
      bullets: [
        "Developed purpose-built rocket telemetry visualization software in Rust, enabling in-flight viewing, streaming, and analysis",
        "Engineered embedded software on a multi-layer avionics stack for robust navigation and communication with ground stations",
        "Validated avionics systems via ground and flight testing, ensuring compliance with safety, performance, and team standards",
        "Designed and assembled avionics PCBs, including power distribution, sensor integration, and communication interfaces",
      ],
      tags: [
        "Rust",
        "Embedded C",
        "Telemetry",
        "STM32",
        "Altium Designer",
        "PCB Design",
      ],
      category: "leadership",
    },
    {
      id: "bell-avr",
      company: "Bell Advanced Vertical Robotics Competition",
      role: "AVR Drone Lead",
      startDate: "2023",
      endDate: "2024",
      bullets: [
        "Spearheaded software development enabling autonomous drone flight using inertial and visual-based tracking mechanisms",
        "Integrated unmanned vehicle subsystems, including thermal image processing and electromagnet control firmware",
        "Modeled rotor downwash using CFD and component strength to determine optimal design for 3D-printed mechanisms",
        "Eliminated dependencies on 5 GHz WiFi and ground control, redefining performance in unpermissive RF environments",
        "Verified drone systems in a recreated competition field, executing full mission tests that simulated competition conditions",
        "Tracked metrics during verification to evaluate performance, identify failure points, and refine system implementation",
      ],
      tags: [
        "Python",
        "C++",
        "PX4",
        "MavLink",
        "Fusion 360",
        "Jetson Nano",
        "Systems Engineering",
      ],
      link: "https://github.com/Jurassic001/AVR-2024",
      category: "leadership",
    },
    {
      id: "helm-tamuhack",
      company: "TAMUhack '26",
      role: "Helm - Hackathon Winner",
      startDate: "2026",
      endDate: "2026",
      bullets: [
        "Built a C++ backend integrating Presage SmartSpectra SDK for real-time physiological sensing via live camera input",
        "Designed a Python GUI in Qt6 with a WSL2 C++ pipeline for FFmpeg/TCP streaming and JSON messaging",
      ],
      tags: ["C++", "Python", "Qt6", "FFmpeg", "WSL2", "TCP"],
      link: "https://github.com/Jurassic001/helm",
      category: "leadership",
    },
    {
      id: "eagle-scout",
      company: "Boy Scouts of America",
      role: "Eagle Scout Project Lead",
      startDate: "2024",
      endDate: "2024",
      bullets: [
        "Led a team of Scouts to restore a garden at an elderly living facility, steering through problem-solving and project delivery",
        "Planned project phases, coordinated resources, and managed timelines while communicating with staff and volunteers",
      ],
      tags: ["Leadership", "Project Management"],
      category: "leadership",
    },
    {
      id: "holmes-aquatic",
      company: "Holmes Aquatic Center",
      role: "Guest Services Manager",
      startDate: "May 2023",
      endDate: "Aug 2025",
      bullets: [
        "Managed guest check-ins, concessions, party events, and maintenance tasks while ensuring safety and a positive experience for all patrons",
        "Strengthened customer service skills through frequent interaction with guests and attention to both safety and hospitality",
      ],
      tags: ["Customer Service", "Operations"],
      category: "work",
    },
    {
      id: "mathnasium",
      company: "Mathnasium",
      role: "Mathematics Tutor",
      startDate: "Oct 2023",
      endDate: "May 2025",
      bullets: [
        "Taught small-group math classes for students ages eight to 14, delivering customized lessons, monitoring progress, and encouraging independent learning",
        "Strengthened teaching and communication skills by adapting instruction to student needs and collaborating with colleagues on daily operations",
      ],
      tags: ["Teaching", "Communication", "Mathematics"],
      category: "work",
    },
  ],

  projects: [
    {
      id: "avr-2024",
      name: "AVR-2024",
      description:
        "Jetson Nano software, PCC/PX4 flight-controller firmware, and a high-level testing/data-collection GUI for the Bell AVR competition drone. Led the full software, electrical, and mechanical integration for Team Zephyrus (Highland Park Scots), placing 4th nationally and winning the Judge's Choice Award for autonomous flight.",
      techStack: [
        "Python",
        "C++",
        "PX4",
        "MavLink",
        "QGroundControl",
        "Jetson Nano",
        "Docker",
      ],
      githubUrl: "https://github.com/Jurassic001/AVR-2024",
      outcomes: [
        "4th place nationally",
        "Judge's Choice Award for autonomous flight",
      ],
    },
    {
      id: "helm",
      name: "Helm",
      description:
        "A real-time physiological sensing application built at TAMUhack '26. Integrates a C++ backend with the Presage SmartSpectra SDK for live camera-based health monitoring, paired with a Python GUI for visualization and a WSL2 pipeline with FFmpeg/TCP streaming for low-latency data flow.",
      techStack: ["C++", "Python", "FFmpeg", "WSL2", "TCP", "JSON"],
      githubUrl: "https://github.com/Jurassic001/helm",
      outcomes: ["TAMUhack '26 Winner"],
    },
    {
      id: "usbc-bench-supply",
      name: "USB-C Bench Power Supply",
      description:
        "A compact, portable bench supply that replaces the usual AC-to-DC brick with a laptop USB-C charger and an off-the-shelf module wrapped in a custom 3D printed case. An HUSB238 PD board negotiates up to 20V fixed PDO over the CC lines and feeds a DSP5005 buck module, yielding an adjustable 0-18V CV/CC output at up to 5A. Sized around the USB PD standard 100W ceiling.",
      techStack: [
        "3D Printing & Design",
        "Soldering",
        "Multimeters",
        "Standard Tools",
        "Power Electronics",
      ],
      outcomes: [
        "0-18V / 5A adjustable DC output",
        "Runs off an existing laptop charger, no dedicated cables",
        "Bench-validated at full 5A draw across the adjustable range",
      ],
    },
    {
      id: "simple-ytdl",
      name: "simple_ytdl",
      description:
        "An easy-to-use, text-based program for downloading YouTube videos at high quality, utilizing industry-standard binaries (yt-dlp and FFmpeg) to download, process, and convert video and audio files.",
      techStack: ["Python", "yt-dlp", "FFmpeg"],
      githubUrl: "https://github.com/Jurassic001/simple_ytdl",
      outcomes: [
        "Cross-platform releases distributed on GitHub",
        "Self-developed CI/CD workflows",
      ],
    },
  ],

  education: [
    {
      id: "tamu",
      institution: "Texas A&M University - College of Engineering",
      degree: "B.S.",
      field: "Computer Engineering (CPEN)",
      startDate: "Aug 2025",
      endDate: "May 2029",
      gpa: "3.40",
      honors: [],
    },
    {
      id: "hphs",
      institution: "Highland Park High School",
      degree: "High School Diploma",
      startDate: "Sep 2021",
      endDate: "May 2025",
      gpa: "4.30",
      honors: [
        "Boy Scouts of America - Eagle Scout",
        "National Honors Society",
        "Young Men's Service League",
      ],
    },
  ],

  skills: [
    {
      name: "Programming",
      skills: [
        "Python",
        "Rust",
        "Embedded C",
        "C++",
        "Java",
        "Git",
        "Linux",
        "Bash",
        "Docker",
        "GitHub",
        "Azure DevOps",
        "CI/CD",
      ],
    },
    {
      name: "Software",
      skills: [
        "Altium Designer",
        "Verilog",
        "STM32Cube",
        "Autodesk Fusion 360",
        "Adobe Photoshop",
        "Adobe Premiere Pro",
      ],
    },
    {
      name: "Equipment",
      skills: [
        "3D Printing & Design",
        "Printed Circuit Boards",
        "Microcontrollers",
        "Soldering",
        "Multimeters",
        "Standard Tools",
      ],
    },
  ],

  awards: [
    {
      title: "TAMUhack '26 Winner",
      issuer: "TAMUhack",
      date: "2026",
      description: "Won TAMUhack '26 with Helm, a real-time physiological sensing application.",
    },
    {
      title: "Judge's Choice Award - Autonomous Flight",
      issuer: "Bell Advanced Vertical Robotics",
      date: "2024",
      description:
        "Awarded for demonstrating fully autonomous drone flight at the Bell AVR competition. Team Zephyrus placed 4th nationally.",
    },
    {
      title: "Eagle Scout",
      issuer: "Boy Scouts of America",
      date: "2024",
      description:
        "Highest rank in the BSA. Led a service project to restore a community garden at an elderly living facility.",
    },
  ],
};

export default resumeData;
