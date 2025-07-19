import React from 'react';
import { useNavigate } from 'react-router-dom';
import KhisaResume from "./assets/Lebrun_Khisa_Lee_Resume_2025.pdf";
import KhisaCover from './assets/Cover_Letter.pdf';
import pp from './assets/ProfilePic.png'
import pp2 from './assets/LastFirstDayofSchool.jpg'

const Home = () => {
    const navigate = useNavigate();
  return (
    <main className="min-h-screen w-full bg-gray-50 flex flex-col items-center p-6 md:p-12">
     
      {/* Profile Section */}
      <section className=" w-full bg-white shadow-xl rounded-2xl p-8 mb-8 text-center">
        <img
          src={pp}
          alt=""
          className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-indigo-500 mb-4"
        />
        <h1 className="text-3xl font-bold text-gray-800">Khisa-Lee Lebrun</h1>
        {/* Buttons for Resume and Cover Letter */}
        <div className="mt-6 flex justify-center space-x-4">
          <a
            href={KhisaResume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            download
          >
            Download Resume
          </a>
          <a
            href={KhisaCover}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            download
          >
            Download Cover Letter
          </a>
        </div>
      </section>


      {/* My Projects */}
      <section
        onClick={() => navigate('/projects')}
        className=" w-full bg-white shadow-lg rounded-2xl p-8 mb-8 cursor-pointer hover:bg-gray-100"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Projects</h2>
        <p>Click Here to see the project I have accomplished as well as the ones in progress</p>
      </section>

       {/* Blog and Updates */}
      <section
        onClick={() => navigate('/blog')}
        className=" w-full bg-white shadow-lg rounded-2xl p-8 mb-8 cursor-pointer hover:bg-gray-100"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Blog and Project Updates</h2>
        <p>Click here to see weekly updates on my projects</p>
      </section>

      {/* Background Story */}
      <section className=" w-full bg-white shadow-lg rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Story</h2>
        <p className="text-gray-600 text-md leading-relaxed">
        Hi, I am Khisa. I have always been passionate about the environment, and when it came 
          time to choose my major, I initially considered environmental engineering. But as I 
          learned more about the impact of global energy consumption on the environment, 
          I realized I wanted to be part of the solution from the energy side, so I chose 
          electrical engineering. That decision was also encouraged by a high school teacher 
          who once told me I had the mind to really see circuits, and that stuck with me.
          <br></br>
          Almost four years later, I have come to love so much more about my major than just its 
          environmental applications. Much like my habit of picking up a new hobby every month, 
          each semester in college has brought new interests and skills, ranging from robotics and 
          power systems to cross-platform development and renewable energy.
          <br></br>
          But what truly drives my work today is the intersection of AI and drones. I now spend much of 
          my time designing intelligent systems that can detect, navigate, or analyze in real-time, 
          whether it's a drone locating hidden metallic objects or a smart mirror offering 
          AI-powered fashion advice.
          <br></br>
          What excites me most now is the opportunity to combine this technical knowledge with the soft 
          skills I’ve developed throughout my life and apply them to real-world challenges that matter.
        </p>
      </section>

      {/* Skills */}
      <section className=" w-full bg-white shadow-lg rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
          <p className="text-gray-600 text-md leading-relaxed">
            <h3 className="text-xl text-purple-600 font-semibold">Technical</h3>
            <ul>
              <li>- Circuit design, simulation, and PCB creation (KiCad, LTspice, AutoCAD, Vivado, Basys 3 Artix-7 FPGA)</li>
              <li>- Embedded systems and microcontroller development (Arduino, Raspberry Pi, Artix-7 FPGA)</li>
              <li>- Control systems engineering, including real-time control loops and feedback systems</li>
              <li>- Low-level programming and debugging (ASM Assembly, C)</li>
              <li>- Automation and motion control (H-bridge motor drivers, servo actuation, PID tuning)</li>
              <li>- Sensor integration and power management for robotics and drones</li>
              <li>- Drone and robotic system development (Betaflight, Pixhawk, QGroundControl)</li>
              <li>- RTOS applications in robotics (e.g., autonomous rover navigation)</li>
              <li>- Communication systems and debugging (comms protocols, TCP, UDP, IP, MAC, latency analysis)</li>
              <li>- GPS integration for autonomous navigation</li>
              <li>- Computer vision (YOLOv8, Roboflow) and X-Y pixel to real-world coordinate conversion</li>
              <li>- Artificial Intelligence and Machine Learning applications, including Reinforcement Learning</li>
              <li>- Power systems, photovoltaic (PV) cells, and grid integration</li>
              <li>- Signal processing and analog circuit design (bandpass filters, LCD display control)</li>
              <li>- Web/mobile development and styling (React, React Native, Ionic, Electron, Vite, Tailwind CSS)</li>
              <li>- Cross-platform app development (.NET MAUI, Android Studio)</li>
              <li>- MATLAB for modeling, control, and data analysis</li>
              <li>- Compliance with electrical and engineering standards (NEC, IEEE)</li>
              <li>- Documentation and productivity tools (Microsoft Office, Excel, Google Sheets, PowerPoint, Google Slides, Canva)</li>
            </ul>

            <h3 className="text-xl text-purple-600 font-semibold">Soft</h3>
            <ul>
              <li>- Laboratory supervision and team coordination</li>
              <li>- Planning, testing, and iterative development</li>
              <li>- Multitasking and task prioritization in fast-paced environments</li>
              <li>- Strong verbal and written communication skills</li>
              <li>- Organizational and time-management capabilities</li>
              <li>- Meticulous attention to detail</li>
              <li>- Quality assurance and continuous improvement</li>
              <li>- Adaptability, problem-solving, and critical thinking</li>
            </ul>

            <h3 className="text-xl text-purple-600 font-semibold">Programming Language</h3>
            <ul>
              <li>- C</li>
              <li>- C++</li>
              <li>- C#</li>
              <li>- Python</li>
              <li>- Java</li>
              <li>- HTML</li>
              <li>- JavaScript (JS)</li>
              <li>- TypeScript (TS)</li>
              <li>- JSX / TSX</li>
              <li>- .NET framework</li>
            </ul>

            <h3 className="text-xl text-purple-600 font-semibold">Spoken Language</h3>
            <ul>
              <li>- French (Fluent - Score of 80 on CLEP French Levels 1 & 2)</li>
              <li>- English (Fluent - TOEFL score: 117)</li>
              <li>- Spanish (Intermediate)</li>
            </ul>

            <h3 className="text-xl text-purple-600 font-semibold">Certifications & Licenses</h3>
            <ul>
              <li>- International Driving License (valid for global mobility)</li>
            </ul>
          </p>

      </section>

      {/* Contact Section */}
      <section className=" w-full bg-white shadow-md rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Me</h2>
        <ul className="text-gray-700 space-y-2 text-md">
          <li>
            Email:{" "}
            <a
              href="mailto:lebrunkhisalee@gmail.com"
              style={{ color: "var(--color-sunset-coral)" }}
              className="hover:underline"
            >
              lebrunkhisalee@gmail.com
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/khisaleelebrun/"
              style={{ color: "var(--color-sunset-coral)" }}
              className="hover:underline"
            >
              linkedin.com/in/khisaleelebrun
            </a>
          </li>
        </ul>
      </section>
      
    </main>
  );
};
export default Home;
