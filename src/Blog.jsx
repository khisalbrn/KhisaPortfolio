import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const blogPosts = [
  {
    title: "Third Week of July",
    date: "July 20, 2025",
    content:
    "This week was packed in the best way possible. I got in some extra 3D modeling for the drone projects and kept refining the Figma design for the NFC memory box during my free time. A big milestone on the landmine detection drone: we got the inductive sensor up and running! It’s now reliably detecting metallic signatures, which is a huge step forward. I have been running additional tests and also exploring how AI could enhance the detection process. At the same time, I’m helping my fellow research assistant, Andy Pierre, prepare to present the project next month. On the fashion AI side, I have been improving the model’s accuracy, especially when it comes to shoes that aren’t athletic-style. It’s still a bit hit-or-miss there, but progress is happening. I also made a major update to the GUI by turning it into a MagicMirror2 module. With my teammate Boyd Paxton, we built a locally hosted web app that lets the module be controlled from any phone or laptop. Users can enter their measurements, tap a button to trigger a 5-second photo timer, and then view the AI’s outfit rating and comments right on the mirror. We are getting really close to wrapping up the smart mirror project since the final deadline is August 6th. Seeing all the pieces come together is incredibly motivating.",
  },
  {
    title: "Second Week of July",
    date: "July 13, 2025",
    content:
    "After last week’s clogged-printer setback, we managed to get things running again and printed more propeller guards; we need six total for the hexacopter. They’re looking good, and it’s nice to see the safety side of our drone project coming together while we wait for supervisor feedback. On the NFC memory album front, I officially started designing the web app! I’m using Figma to map out the interface, which has been a fun way to combine creativity, code, and make a very aesthetic memory box for my roommates. It’s definitely my favorite personal project at the moment. Outside of tech, I ran a 5km race this week! It felt amazing to be back after a hard semester and push myself physically. All in all, a good balance of hands-on work, digital design, and a little bit of sweat.",
  },
  {
    title: "First Week of July",
    date: "July 6, 2025",
    content:
    "Aside from enjoying a semi rainy, semi sunny Fourth of July and a whole lot of fireworks, I made progress on multiple projects and got ideas for new ones this week. The least fun part was taking 200 pictures of outfits, including mine, my friends', and some from online stores, to annotate them for my AI fashion mirror project. Taking screenshots from online shopping probably wasn’t the most interesting idea, but it was definitely better for my bank account than buying everything. On the drone side, a few projects are currently paused while we wait for feedback from supervisors who are reviewing our data. In the meantime, part of the research team and I have been working on 3D printing propeller guards for the hexacopter so we can run safer test flights. The only issue we ran into was a big clog in the 3D printer. As for new ideas, I’ve always wanted to work with NFCs. Since I won’t be living with my roommates next month, I thought it would be a thoughtful gift to create a randomized memory album. It would include our favorite quotes, songs, photos, videos, or short texts describing memories we share. When they tap their phones to the NFC tag, which I plan to attach to a picture frame of the three of us, a page will pop up showing a memory fragment. I also decided to start learning Figma. Since I’ve been getting more interested in creative app design, I think it would be really fun to make my own personalized UI. Maybe I’ll even redesign this portfolio soon. Stay tuned.",
  },
  
];

const Blogs = () => {
    const navigate = useNavigate();
  return (
    <div className="w-full px-10 py-12 text-center">
        <button
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 text-purple-600 hover:text-purple-800 transition p-2 rounded-full hover:bg-purple-100"
        aria-label="Go back"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
        <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">Weekly Project Updates 🛠️</h1>
      {blogPosts.map((post, index) => (
        <div key={index} className="mb-10 border-b border-gray-300 pb-6">
          <h2 className="text-2xl font-semibold mb-1">{post.title}</h2>
          <p className="text-sm text-gray-400 mb-4">{post.date}</p>
          <p className="text-base leading-relaxed">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
