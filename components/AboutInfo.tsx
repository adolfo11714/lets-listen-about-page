import React from 'react';
import Link from 'next/link';

const AboutInfo: React.FC = () => (
  <section className="w-full flex flex-col gap-12 mb-12">
    {/* Our Mission */}
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 lg:justify-between">
      <div className="flex-1 flex flex-col items-start">
        {/* Cloud Heading */}
        <div className="relative mb-4">
          <div className="bg-white font-bold text-2xl px-8 py-4 rounded-full shadow-lg flex items-center justify-center" style={{ minWidth: '180px', color: '#170566' }}>
            Our Mission
          </div>
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"></span>
          <span className="absolute top-2 right-0 w-3 h-3 bg-white rounded-full"></span>
          <span className="absolute bottom-2 left-0 w-3 h-3 bg-white rounded-full"></span>
        </div>
        <p className="text-white max-w-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <img src="/dummy-image-section.webp" alt="Mission" className="rounded-lg w-[500px] h-[375px] object-cover self-center" />
    </div>
    {/* Our Philosophy */}
    <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-8 lg:gap-60 lg:justify-between">
      <div className="flex-1 flex flex-col items-start">
        {/* Cloud Heading */}
        <div className="relative mb-4">
          <div className="bg-white font-bold text-2xl px-8 py-4 rounded-full shadow-lg flex items-center justify-center" style={{ minWidth: '200px', color: '#170566' }}>
            Our Philosophy
          </div>
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"></span>
          <span className="absolute top-2 right-0 w-3 h-3 bg-white rounded-full"></span>
          <span className="absolute bottom-2 left-0 w-3 h-3 bg-white rounded-full"></span>
        </div>
        <p className="text-white max-w-xl mb-4 text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <Link
          href="/philosophy"
          aria-label="More Info"
          tabIndex={0}
          className="font-semibold px-6 py-2 rounded-full shadow transition-transform transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-white hover:scale-105 hover:shadow-lg hover:bg-indigo-700 active:scale-95"
          style={{ backgroundColor: '#6d79e6', color: 'white', fontFamily: 'Inter, sans-serif' }}
        >
          More Info
        </Link>
      </div>
      <img src="/dummy-image-section.webp" alt="Philosophy" className="rounded-lg w-[500px] h-[375px] object-cover self-center" />
    </div>
  </section>
);

export default AboutInfo; 