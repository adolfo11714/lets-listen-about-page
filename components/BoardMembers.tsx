import React from 'react';
import '../src/app/globals.css';


const members = [
  {
    name: 'Bob Smith',
    position: 'Position',
    image: 'https://placehold.co/150x150',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  // Repeat for 4 members
  {
    name: 'Bob Smith',
    position: 'Position',
    image: 'https://placehold.co/150x150',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: 'Bob Smith',
    position: 'Position',
    image: 'https://placehold.co/150x150',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: 'Bob Smith',
    position: 'Position',
    image: 'https://placehold.co/150x150',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const BoardMembers: React.FC = () => (
  <section className="flex flex-col items-center mt-8">
    {/* Cloud Heading */}
    <div className="relative mb-12">
      <div className="bg-white text-blue-800 font-bold text-2xl px-8 py-4 rounded-full shadow-lg flex items-center justify-center" style={{ minWidth: '220px' }}>
        Board Members
      </div>
      {/* Cloud bubbles */}
      <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"></span>
      <span className="absolute top-2 right-0 w-3 h-3 bg-white rounded-full"></span>
      <span className="absolute bottom-2 left-0 w-3 h-3 bg-white rounded-full"></span>
    </div>
    {/* Members Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
      {members.map((member, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center bg-blue-800 rounded-xl p-6 text-white shadow-lg"
          tabIndex={0}
          aria-label={`Board member: ${member.name}`}
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 rounded-lg border-4 border-white mb-4 object-cover"
          />
          <div className="font-bold text-lg">{member.name}</div>
          <div className="font-bold text-sm mb-2">{member.position}</div>
          <p className="text-sm text-white/90 text-left">{member.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default BoardMembers; 