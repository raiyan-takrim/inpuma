'use client';
import React from 'react';
import SectionHeading from './ui/SectionHeading';

const VideoTour = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          {/* <h2 className="text-3xl font-semibold text-gray-800">VIDEO TOUR</h2> */}
          <SectionHeading>VIDEO TOUR</SectionHeading>
          <p className="mt-2 text-gray-600">
            Explore the journey and achievements of INPUMA through this video
            documentary.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="relative" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute left-0 top-0 h-full w-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/YD8ppW95h9M"
                title="INPUMA Video Documentary"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTour;
