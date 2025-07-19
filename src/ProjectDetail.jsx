import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import WiSpyPoster from './assets/WiSpyPoster.png'
import WiSPyReport from './assets/WiSpyFinalReport.pdf'
import SolarSys from './assets/Solar_system.jpg'
import Tricopter from './assets/Tricopter.jpg'
import RobotReport from './assets/FinalRoboticReport.pdf'
import ISpyReport from './assets/PiSpyReport.pdf'
import HexaPhoto from './assets/HexacopterePhoto.jpg'
import RoavPhoto from './assets/roavpilot_logo_480.png'
import UXO from './assets/InductSensor.png'
import ISpyThumb from './assets/ISpythumbnail.png'
import RoverThumb from './assets/RoverThumb.png'
import AiMirrorLogo from './assets/AIMirrorDetail.png'
import TroisDproject from './assets/troisDproj.png'
import AIMirrorReport from './assets/AIMirrorInterimReport.pdf'
import NFCFigma2 from './assets/NFCfigma2.png'

const sampleProjects = [
  {
    id: 1,
    title: 'F22 Flyover Drone',
    status: 'In Progress',
    description: "This project involves the development of a custom front-yaw tricopter mounted on a 3D-printed frame, designed to fit seamlessly into a foam aircraft body modeled after a military fighter jet. The final goal is to create a show drone capable of performing realistic aerial maneuvers during indoor or outdoor events, simulating the iconic flyovers typically seen at major football games. The tricopter uses a custom mixer configuration to enable precise yaw control from the front, contributing to more dynamic and cinematic movement. The entire system is optimized for integration into a lightweight foam cutout, preserving aerodynamic integrity while achieving the visual authenticity of a real aircraft. Future phases of the project include integrating a stabilized onboard camera to capture immersive, game-day-style footage from the drone's perspective, making it not only a spectacle for the audience but also a tool for creative media capture during sports or entertainment events.",
    thumbnail: Tricopter,
    team: ['Khisa-Lee Lebrun', 'Braden Fadal'],
    report:{},
    
  },
  {
    id: 2,
    title: 'Landmine Detection Drone',
    status: 'In Progress',
    description: "This project focuses on the development of a landmine detection drone designed to assist farmers in post-conflict regions where agricultural land remains contaminated with anti-personnel landmines. The goal is to deliver a low-cost, rugged, and semi-autonomous aerial platform that can safely scan fields for buried threats, allowing communities to reclaim and cultivate their land with confidence. The drone employs inductive sensing technology to detect both military-grade and improvised explosive devices hidden beneath the surface. Unlike conventional electric drones, this platform is being designed for long flight endurance using a gasoline or diesel-powered engine, ensuring operability in remote areas lacking electrical infrastructure. It is also being developed to operate without GPS by relying on onboard sensors and custom pathfinding algorithms for autonomous mapping. Recent progress includes the successful deployment of the inductive sensor, which is now reliably detecting metallic signatures in test conditions. The project is a collaborative effort, with research assistant Andy Pierre playing a key role in hardware integration, testing, and presentation preparation. As we continue refining the detection system and text-based output, Andy is preparing to present the project to stakeholders next month. Together, we aim to build a scalable, humanitarian solution that addresses the overlooked challenges of landmine contamination in agricultural development.",
    thumbnail: UXO,
    team: ['Khisa-Lee Lebrun', 'Andy Pierre'],
    report:{},
    
  },
  {
    id: 3,
    title: 'Transport Hexacopter',
    status: 'In Progress',
    description: "This project centers on a high-performance hexacopter built on a lightweight yet durable carbon fiber frame, engineered for heavy-lift capability and long-range autonomous operations. The drone is powered by a Pixhawk flight controller and integrates GPS navigation and mission planning through QGroundControl, allowing for fully autonomous flight based on pre-programmed routes. Designed with dual-use functionality in mind, the hexacopter serves two primary applications: wildfire support and medical logistics. In fire scenarios, it is capable of carrying and deploying a mounted water sprinkler system to provide localized relief in areas inaccessible to ground crews or too dangerous for manned aircraft. In a medical context, the drone can be used for the rapid and stable transport of temperature-sensitive human organs, offering a potential solution to logistical challenges in time-critical transplant missions. With its robust navigation system, modular payload capacity, and autonomous control, this hexacopter is being developed as a versatile platform for both emergency response and humanitarian aid.",
    thumbnail: HexaPhoto,
    team: ['Khisa-Lee Lebrun', 'Braden Fadal'],
    report:{},
    
  },
  {
    id: 4,
    title: 'Network Analysis Application',
    status: 'Done',
    description: 'Wi-Spy is a spectrum analysis tool designed to visualize and diagnose wireless networks using detailed radio frequency spectrum data. Unlike traditional Wi-Fi analyzers focusing solely on network traffic, Wi-Spy captures real-time radio activity in the 2.4 GHz and limited 5 GHz bands. This comprehensive approach enables users to identify and reduce sources of interference effectively. The tool offers interactive visualizations such as heat maps and diagrams showing signal strength, channel utilization, and interference patterns over time. These visual tools are indispensable for network administrators wishing to optimize Wi-Fi coverage and performance. For mobile diagnostics, Wi-Spy extends these features to smartphones and laptops, enabling spectrum analysis on the move. By offering a clear view of the wireless environment, Wi-Spy supports proactive network management and efficient troubleshooting.',
    thumbnail: WiSpyPoster,
    team: ['Khisa-Lee Lebrun', 'Boyd Paxton','Nicholas Woodward'],
    report: WiSPyReport,
  },
  {
    id: 5,
    title: 'AI I-Spy',
    status: 'Done',
    description: "This project is a modern, AI-driven adaptation of the classic “I Spy” game, developed on a Raspberry Pi 5 platform using Python, YOLO (You Only Look Once), and Halo for real-time object detection and classification. Designed as both an educational and interactive system, the game challenges players to locate and identify specific objects within a room or environment, with the AI providing visual cues and verifying the responses using its trained recognition model. The system integrates a laser-based mapping mechanism to assist in spatial awareness and enhance object tracking precision. This mapping feature enables the AI to not only identify objects but also understand their relative location within the environment, improving both engagement and accuracy. During testing, the system achieved over 95% accuracy when recognizing and tracking more than 10 object categories, including common household and classroom items. By combining computer vision, spatial mapping, and interactive gameplay, this project demonstrates the potential of embedded AI systems in education, entertainment, and robotics. Future iterations aim to expand object categories, support voice interaction, and implement adaptive difficulty based on user performance.",
    thumbnail: ISpyThumb,
    team: ['Khisa-Lee Lebrun', 'Boyd Paxton','Nicholas Woodward','Hope Regaldo'],
    report: ISpyReport,
  },
  {
    id: 6,
    title: 'Rocket League Rover',
    status: 'Done',
    description: "This project centers on the development of an autonomous soccer-playing rover engineered to locate, retrieve, and accurately shoot a ball into a goal defined by infrared transmitters. The system was built on the Basys 3 development board featuring the Artix-7 FPGA, with core control logic written in Verilog using Icarus Verilog. An H-Bridge motor driver controls the robot’s movement and kicking mechanism, enabling precise direction and speed control. To track the ball, which emits a constant 1 kHz audio signal, the rover employs an array of microphones paired with analog band-pass filters, allowing it to detect the ball’s position through sound localization. Infrared beacons define the target zone, and the robot autonomously aligns and shoots with high accuracy. Multiple custom circuits and PCBs were designed and fabricated using KiCad to support sensor integration, motor control, and power management. This rover was entered into a penalty shootout competition requiring both offensive and defensive performance, where it earned 2nd place overall, demonstrating its effectiveness in real-world autonomous navigation and gameplay. The project highlights proficiency in digital logic design, signal processing, embedded systems, and autonomous robotics.",
    thumbnail: RoverThumb,
    team: ['Khisa-Lee Lebrun', 'Tristen Tugmon', 'Wyatt Rust', 'Shayne Logue'],
    report:RobotReport,
  },
  {
    id: 7,
    title: 'Drone Pilote Application',
    status: 'Done',
    description: "Roav Pilot is a cross-platform application designed to assist drone pilots by streamlining the administrative and operational tasks associated with drone flights. Developed using a hybrid tech stack—.NET MAUI for desktop and mobile deployment alongside a React Ionic frontend built with Vite—the app provides a unified interface for managing pre-flight checklists, post-flight reports, and incident documentation. The goal of Roav Pilot is to reduce friction in compliance and safety workflows, especially for drone operators working in field conditions. The app includes features such as real-time flight logging, access to FAA regulations, integrated document storage, and simplified accident reporting tools. Its user-friendly interface ensures that both experienced pilots and beginners can use it effectively during mission planning and debriefing. Since its release, the application has been adopted by over 20 active users and continues to evolve based on pilot feedback. The project showcases experience in full-stack development, cross-platform app design, and user-centered engineering tailored for the growing field of unmanned aerial systems.\n\nThe logo is inspired by Gontrand, a baby seagull whose nest was right above our office. When he fell and injured his wing, our team at ROAV7 took him in and brought him to a bird sanctuary where he received care. Gontrand became a little mascot for the team and symbolized the spirit of support and protection behind Roav Pilot.",
    team: ['Khisa-Lee Lebrun'],
    thumbnail: RoavPhoto,
    report: {},
  },
  {
    id: 8,
    title: 'Smart Mirror',
    status: 'In Progress',
    description: "This capstone project centers on the creation of a smart mirror that combines everyday utility with artificial intelligence–driven fashion advice. Developed in collaboration with my long-time teammate Boyd Paxton—my partner for the past three semesters—this project builds on our strong working dynamic. As we like to say: you don’t change a winning team. The smart mirror is designed to display essential daily information, such as the current weather, personalized to-do lists, and other widgets tailored to the user’s lifestyle. One of its most innovative features is an AI-powered fashion assistant. Using a camera and Roboflow’s image recognition tools, the mirror identifies what the user is wearing and offers fashion suggestions, including color coordination and outfit recommendations based on style trends or saved preferences. The idea for this fashion assistant came from a relatable moment in my college life. My roommates, Lily Zimmerman and Vanessa Knight, often ask me whether their outfits are good enough to go out—a daily ritual familiar to just about every college girl and her friends. One evening, after we had our usual back-and-forth over outfits, they jokingly said, “What are we going to do once you’re graduated?” That question stuck with me, and that’s when the idea clicked: why not build something that could offer the same second opinion, powered by AI? In addition to the software side, this project includes a significant hardware component. We’re designing and building a custom wooden frame that houses a display behind a two-way mirror, creating the illusion of a traditional mirror while overlaying interactive, digital content. The combination of practical UI features, AI integration, and hands-on hardware work makes this project a comprehensive showcase of both engineering and user-centered design.",
    team: ['Khisa-Lee Lebrun', 'Boyd Paxton'],
    thumbnail: AiMirrorLogo,
    report:AIMirrorReport,
    
  },
  {
    id: 9,
    title: 'Solar Energy Laboratory',
    status: 'In Progress',
    description: "This project involved the design and instruction of a hands-on solar energy laboratory as part of a course offered at Texas Tech University. Serving both as a teaching assistant and a demonstrator, I led and supported a class of over 30 students through key concepts in photovoltaic (PV) systems and solar tracking technologies. The laboratory sessions focused on understanding how real-world conditions affect the performance and efficiency of solar panels. I guided students through experiments comparing one-axis, two-axis, and fixed (no-axis) solar tracking systems, showing how solar irradiance and angle of incidence influence power output. We also examined how different electrical loads affect panel performance, introducing the concept of load matching and its impact on energy conversion efficiency. By facilitating live demonstrations and real-time data collection, I helped students grasp the practical implications of solar tracking, shading, and electrical design. This lab not only reinforced core renewable energy concepts but also gave students hands-on experience with measurement tools, power meters, and tracking platforms, bridging the gap between theory and application in sustainable energy systems.",
    team: ['Khisa-Lee Lebrun', 'Andy Pierre'],
    thumbnail: SolarSys,
    report:{},
    
  },
  {
    id: 10,
    title: '3D prints',
    status: 'In Progress',
    description: "This collection showcases a variety of 3D printing projects I’ve completed for both personal and professional purposes, reflecting a broad range of design challenges and practical applications. These prints span from small-scale everyday items to specialized components used in academic and engineering projects. On the personal side, one example includes a reusable Nespresso pod designed for my coffee cart—a sustainable alternative to single-use capsules that combines function with custom-fit precision. On the professional and academic end, I designed and fabricated several components for engineering systems featured in my other projects. These include custom propeller guards used during test flights of the hexacopter, enhancing safety and protecting both equipment and surroundings during early-stage development. Additionally, I created specialized sensor mounts for the autonomous soccer-playing rover to ensure precise placement and durability during movement and impact. These projects demonstrate not only my proficiency with CAD software and additive manufacturing processes, but also my ability to apply 3D printing to solve real-world problems across disciplines—from personal sustainability to robotics and aerial systems.",
    thumbnail:TroisDproject,
    report:{},
    
  },
   {
    id: 11,
    title: 'NFC Memory Box',
    status: 'In Progress',
    description: 'This project is a heartfelt fusion of technology and memory preservation, designed as a farewell gift for my roommates as we prepare to move apart. The NFC Memory Box is built around a simple idea: one tap triggers a moment. When a phone is tapped to the NFC tag embedded in a custom picture frame, it launches a web application that displays a randomized memory fragment, ranging from photos, quotes, and inside jokes to shared playlists and short videos. The app is designed in Figma with a clean and emotionally resonant interface, aiming to feel more like flipping through a scrapbook than using a website. All front-end and backend components are built to be lightweight and mobile-responsive, ensuring seamless interaction across devices. While the technical side involves web hosting, NFC integration, and dynamic content rendering, the deeper goal is emotional continuity, offering my friends a tactile way to revisit the little moments that made our time together so special. This project demonstrates a blend of creative UI/UX design, web development, and embedded tech, with an emphasis on creating meaningful user experiences that go beyond functionality. ',
    thumbnail: NFCFigma2,
    report:{}
  },
  
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = sampleProjects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Project not found.
      </div>
    );
  }

  return (
    <div className="w-screen overflow-x-hidden">
    <main className="min-h-screen bg-white px-6 py-12 max-w-4xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-purple-600 hover:text-purple-800 transition p-2 rounded-full hover:bg-purple-100"
        aria-label="Go back"
      >
        ← Back
      </button>

      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full object-cover rounded-lg shadow mb-6"
      />

      <h1 className="text-4xl font-bold text-gray-800 mb-4">{project.title}</h1>
      <p className="text-lg text-gray-500 mb-2">Status: {project.status}</p>
      {project.team && project.team.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Team Members:</h2>
          <ul className="list-disc list-inside text-gray-700">
            {project.team.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>
      )}

      <p className="text-base text-gray-700 mb-4">{project.description}</p>
      
      {Object.keys(project.report).length > 0 && (
        <a
          href={project.report}
          target="_blank"
          rel="noopener noreferrer"
          className="px-2 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          download
        >
          Download Project Report
        </a>
      )}
    </main>
    </div>
  );
};

export default ProjectDetail;
