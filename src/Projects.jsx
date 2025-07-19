import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WiSpyLogo from './assets/WiSpy_logo.png';
import HexaPhoto from './assets/HexacopterePhoto.jpg'
import roavpilot from './assets/roavpilot_logo_480.png'
import ISpyLogo from './assets/ISpyLogo.png'
import AiMirrorLogo from './assets/SmartFashionLogo.png'
import Rover from './assets/RoverPic.jpg'
import F22Flyover from './assets/F22Flyover.jpg'
import UXO from './assets/UXO.jpg'
import SolarPanel from './assets/SolarPV.jpg'
import troisDLogo from './assets/3Dsensormount.png'
import NFCFigma1 from './assets/NFCfigma1.png'

const sampleProjects = [
  {
    id: 1,
    title: 'F22 Flyover Drone',
    status: 'In Progress',
    description: 'A stealth-inspired drone capable of aerial surveillance and formation flight patterns.',
    thumbnail: F22Flyover,
  },
  {
    id: 2,
    title: 'Landmine Detection Drone',
    status: 'In Progress',
    description: 'Uses ground-penetrating radar and machine learning to detect landmines in real-time.',
    thumbnail: UXO,
  },
  {
    id: 3,
    title: 'Transport Hexacopter',
    status: 'In Progress',
    description: 'An agricultural drone that automates watering large fields efficiently.',
    thumbnail: HexaPhoto,
  },
  {
    id: 4,
    title: 'Network Analysis Application',
    status: 'Done',
    description: 'A desktop app that visualizes and tests network topologies with packet tracing.',
    thumbnail: WiSpyLogo,
  },
  {
    id: 5,
    title: 'AI I-Spy',
    status: 'Done',
    description: 'An AI-powered mini robot for reconnaissance and indoor surveillance.',
    thumbnail: ISpyLogo,
  },
  {
    id: 6,
    title: 'Rocket League Rover',
    status: 'Done',
    description: 'A robot that plays soccer with Rocket League-like controls and motion sensors.',
    thumbnail: Rover,
  },
  {
    id: 7,
    title: 'Drone Pilote Application',
    status: 'Done',
    description: 'An app for training drone pilots using simulated GPS and environmental inputs.',
    thumbnail: roavpilot,
  },
  {
    id: 8,
    title: 'Smart Mirror',
    status: 'In Progress',
    description: 'An app for training drone pilots using simulated GPS and environmental inputs.',
    thumbnail: AiMirrorLogo,
  },
   {
    id: 9,
    title: 'Solar Energy Laboratory',
    status: 'In Progress',
    description: 'A solar Energy research for a Texas Tech course',
    thumbnail: SolarPanel,
  }, 
  {
    id: 10,
    title: '3D prints',
    status: 'In Progress',
    description: 'Different 3D prints made for personal and professional uses.',
    thumbnail: troisDLogo,
  },
  {
    id: 11,
    title: 'NFC Memory Box',
    status: 'In Progress',
    description: 'A personalized memory box that uses an NFC tag to launch a web app displaying randomized photos, quotes, and videos.',
    thumbnail: NFCFigma1,
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const filteredProjects = sampleProjects.filter(project =>
    filter === 'All' ? true : project.status === filter
  );

  return (
    <div className="w-screen overflow-x-hidden">
    <main className="min-h-screen w-full bg-gray-50 flex flex-col items-center p-6 md:p-12">
      <button
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 text-purple-600 hover:text-purple-800 transition p-2 rounded-full hover:bg-purple-100"
        aria-label="Go back"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">My Projects</h1>

      <div className="mb-8 flex justify-center flex-wrap gap-4">
        {['All', 'Done', 'In Progress'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded ${
              filter === status
                ? 'bg-purple-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 md:px-8">
        {filteredProjects.length === 0 ? (
          <p className="text-center text-gray-600 col-span-full">No projects to display.</p>
        ) : (
          filteredProjects.map(({ id, title, status, thumbnail }) => (
            <div
              key={id}
              onClick={() => navigate(`/projects/${id}`)} // <-- Navigate to project page
              className="cursor-pointer bg-white border rounded-xl shadow hover:shadow-md transition overflow-hidden flex flex-col"
            >
              <img
                src={thumbnail}
                alt={title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-lg font-bold text-gray-800">{title}</h2>
                <p className="text-sm text-gray-500 mb-2">Status: {status}</p>
                <div className="mt-auto text-sm text-purple-600">Click to view details</div>
              </div>
            </div>
          ))
        )}
      </section>
    </main>
    </div>
  );
};

export default Projects;
