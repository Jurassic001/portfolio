import type { ResumeData } from "../types/resume";

/**
 * ╔════════════════════════════════════════════════════════════╗
 * ║  SINGLE SOURCE OF TRUTH — Edit this file to update the   ║
 * ║  entire portfolio. All sections read from this object.    ║
 * ╚════════════════════════════════════════════════════════════╝
 */

const resumeData: ResumeData = {
  basics: {
    name: "Max Haberer",
    headline: "B.S. Computer Engineering, Texas A&M University",
    graduation: "May 2029",
    email: "mhaberer25@gmail.com",
    website: "https://mhaberer.com",
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

  projects: [
    {
      id: "bell-flight-sim",
      name: "Engineer Operator Station",
      org: "Bell Helicopter",
      role: "Flight Simulation Software Intern",
      period: "2026",
      description:
        "A ground-up rewrite of a legacy Java tool for managing flight tests, rebuilt in modern C++17 to fix long-standing bugs and end-user pain points. The new architecture prioritizes maintainability and extensibility while preserving backwards-compatibility with the existing test workflow, and was built alongside mentors and fellow interns under established team standards.",
      techStack: [
        "C++17",
        "Qt6",
        "Flight Simulation",
        "Software Architecture",
        "Azure DevOps",
      ],
      outcomes: [],
	  thumbnail: "/img/bell-mv75.jpg",
    },
    {
      id: "srt-avionics",
      name: "Hybrid Engine Avionics",
      org: "Texas A&M Sounding Rocketry Team",
      role: "Avionics Engineer",
      period: "2025 - Present",
      description:
        "Embedded flight software on a multi-layer avionics stack, handling navigation and ground-station communication aboard a student-built sounding rocket. The boards underneath it are custom as well: power distribution, sensor integration, and communication interfaces designed and assembled in-house, then validated through ground and flight testing against safety, performance, and team standards.",
      techStack: [
        "Embedded C",
        "STM32Cube",
        "FreeRTOS",
        "CAN",
        "UART",
      ],
      outcomes: [],
	  thumbnail: "/img/hybrid-av.jpg",
    },
    {
      id: "vertex",
      name: "VERTEX",
      org: "Texas A&M Sounding Rocketry Team",
      role: "Avionics Engineer",
      period: "2025 - Present",
      description:
        "Purpose-built rocket telemetry software written in Rust. It ingests the downlink from the avionics stack and renders vehicle state live for the ground station during flight, then replays the same data for analysis once the rocket is back on the ground.",
      techStack: ["Rust", "TypeScript", "OBS Studio", "Telemetry", "Data Visualization"],
      outcomes: [],
	  thumbnail: "/img/vertex.png"
    },
    {
      id: "helm",
      name: "Helm",
      org: "TAMUhack '26",
      period: "2026",
      description:
        "Real-time health monitoring from a live camera feed. A C++ backend drives the Presage SmartSpectra SDK for the physiological sensing itself and hands its readings to a Qt6 Python GUI over a WSL2 pipeline, using FFmpeg/TCP streaming and JSON messaging to keep the visualization low-latency.",
      techStack: ["C++", "Python", "Qt6", "FFmpeg", "WSL2", "TCP", "JSON"],
      githubUrl: "https://github.com/Jurassic001/helm",
      outcomes: ["TAMUhack '26 Winner"],
	  thumbnail: "/img/helm.png",
    },
    {
      id: "avr-2024",
      name: "AVR-2024",
      org: "Bell Advanced Vertical Robotics Competition",
      role: "AVR Drone Lead",
      period: "2023 - 2024",
      description:
        "Jetson Nano software, PCC/PX4 flight-controller firmware, and a high-level testing and data-collection GUI for an autonomous competition drone, covering the full software, electrical, and mechanical integration for Highland Park High School's Team Zephyrus. The drone flies itself on inertial and visual tracking, with thermal image processing and electromagnet control firmware integrated across its subsystems, and carries no dependency on 5 GHz WiFi or a ground station, so it keeps flying in RF-restricted environments.",
      techStack: [
        "Python",
        "C++",
        "PX4",
        "QGroundControl",
        "Fusion 360",
        "Docker",
      ],
      githubUrl: "https://github.com/Jurassic001/AVR-2024",
      outcomes: [
        "4th place nationally",
        "Judge's Choice Award for autonomous flight",
      ],
	  thumbnail: "/img/bell-avr.jpg",
    },
    {
      id: "usbc-bench-supply",
      name: "USB-C Bench Power Supply",
      period: "2026",
      description:
        "A compact, portable bench supply that replaces the usual AC-to-DC brick with a laptop USB-C charger and an off-the-shelf module wrapped in a custom 3D printed case. An HUSB238 PD board negotiates up to 20V fixed PDO over the CC lines and feeds a DSP5005 buck module, yielding an adjustable 0-18V CV/CC output at up to 5A and sizing the whole thing around the USB PD standard 100W ceiling. Bench-validated at full 5A draw across the adjustable range.",
      techStack: [
        "3D Printing & Design",
        "Soldering",
        "Multimeters",
        "Power Electronics",
      ],
      outcomes: [],
	  thumbnail: "/img/power-supply.jpg"
    },
    {
      id: "simple-ytdl",
      name: "simple_ytdl",
      period: "2024 - 2025",
      description:
        "An easy-to-use, text-based program for downloading YouTube videos at high quality, utilizing industry-standard binaries (yt-dlp and FFmpeg) to download, process, and convert video and audio files. Self-developed CI/CD workflows build and publish the cross-platform releases on GitHub.",
      techStack: ["Python", "yt-dlp", "FFmpeg"],
      githubUrl: "https://github.com/Jurassic001/simple_ytdl",
      outcomes: [],
	  thumbnail: "/img/simple-ytdl.png"
    },
    {
      id: "eagle-scout-project",
      name: "Community Garden Restoration",
      org: "Boy Scouts of America",
      role: "Eagle Scout Project",
      period: "2024",
      description:
        "The service project behind my Eagle Scout rank: restoring a neglected garden at an elderly living facility. I planned the project in phases, sourced the materials and tools, and led a team of Scouts through the build while keeping facility staff and volunteers aligned on timeline and scope.",
      techStack: ["Leadership", "Project Management", "Community Service"],
      outcomes: ["Eagle Scout"],
	  thumbnail: "/img/eagle-proj.jpg"
    },
  ],
};

export default resumeData;
