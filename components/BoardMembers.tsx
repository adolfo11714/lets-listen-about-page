import React, { useState } from 'react';
import '../src/app/globals.css';


const members = [
  {
    name: 'Bob Smith',
    position: 'Position',
    image: '/dummy-image.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  // Repeat for 4 members
  {
    name: 'Bob Smith',
    position: 'Position',
    image: '/dummy-image.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: 'Bob Smith',
    position: 'Position',
    image: '/dummy-image.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: 'Bob Smith',
    position: 'Position',
    image: '/dummy-image.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const BoardMembers: React.FC = () => {
  const [expandedMembers, setExpandedMembers] = useState<Set<number>>(new Set());

  const toggleMember = (index: number) => {
    const newExpanded = new Set(expandedMembers);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedMembers(newExpanded);
  };

  return (
    <section className="flex flex-col items-center mt-8">
    {/* Cloud Heading */}
    <div className="relative mb-12">
      <div className="bg-white font-bold text-2xl px-8 py-4 rounded-full shadow-lg flex items-center justify-center" style={{ minWidth: '220px', color: '#170566' }}>
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
          className="flex flex-col items-center rounded-xl p-6 text-white shadow-lg"
          style={{ backgroundColor: '#12025A' }}
          tabIndex={0}
          aria-label={`Board member: ${member.name}`}
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-48 h-48 rounded-lg mb-4 object-cover"
          />
          <div className="font-bold text-2xl w-full text-center mt-2 mb-0">{member.name}</div>
          <div className="flex items-center w-full my-2">
            <div className="flex-grow border-t border-white/30"></div>
            <button
              onClick={() => toggleMember(idx)}
              className="flex items-center gap-2 px-4 focus:outline-none focus:ring-2 focus:ring-white transition-colors duration-200"
              aria-expanded={expandedMembers.has(idx)}
              aria-controls={`member-description-${idx}`}
              tabIndex={0}
              aria-label={`Toggle description for ${member.name}`}
              style={{ minWidth: 0 }}
            >
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${expandedMembers.has(idx) ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="flex-grow border-t border-white/30"></div>
          </div>
          <div
            id={`member-description-${idx}`}
            className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedMembers.has(idx) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className="font-bold text-base text-white/70 mb-2">{member.position}</div>
            <p className="text-sm text-white/90 text-left leading-relaxed">
              {member.description}
            </p>
          </div>
        </div>
      ))}
          </div>
    </section>
  );
};

export default BoardMembers; 