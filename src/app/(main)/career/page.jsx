import React from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';

const CareerPage = () => {
  const jobs = [
    {
      title: "Senior Journalist",
      department: "Editorial",
      location: "London, UK / Remote",
      type: "Full-time",
      description: "We are looking for a seasoned journalist with a passion for investigative reporting and a track record of high-impact stories."
    },
    {
      title: "News Reporter",
      department: "General News",
      location: "New York, USA",
      type: "Full-time",
      description: "Join our fast-paced general news team. You will be responsible for covering breaking news and local events with accuracy and speed."
    },
    {
      title: "Photojournalist",
      department: "Multimedia",
      location: "Remote / Field",
      type: "Contract",
      description: "Capture the stories that shape our world. We need a creative photojournalist with an eye for detail and powerful storytelling."
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors">
      {/* Hero Section */}
      <section className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <Image 
              src={logo} 
              alt="Dragon News Logo" 
              className="w-full max-w-[400px] h-auto dark:invert opacity-80"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            Shape the Future of News
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-medium">
            Join Dragon News as a <span className="text-red-600">journalist or news reporter</span> and help us deliver truth without fear or favour.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-800">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Global Reach</h3>
            <p className="text-zinc-600 dark:text-zinc-400">Your stories will reach millions of readers across the globe, making a real impact on public discourse.</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-800">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Editorial Freedom</h3>
            <p className="text-zinc-600 dark:text-zinc-400">We value independent thinking and provide our reporters with the freedom to pursue the truth.</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-800">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Modern Newsroom</h3>
            <p className="text-zinc-600 dark:text-zinc-400">Work with the latest digital tools and a team of experts dedicated to innovative storytelling.</p>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="container mx-auto px-4 pb-24">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-12 text-center">Open Positions</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-red-500 transition-all group shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{job.title}</h3>
                    <span className="px-3 py-1 bg-red-50 dark:bg-red-900/20 text-red-600 text-xs font-bold rounded-full uppercase tracking-wider">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-zinc-500 dark:text-zinc-400 font-medium mb-4">
                    {job.department} • {job.location}
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                    {job.description}
                  </p>
                </div>
                <button className="px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all whitespace-nowrap">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-red-600 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Don't see a perfect fit?</h2>
          <p className="text-red-100 mb-8 max-w-xl mx-auto">
            We're always looking for talented storytellers. Send us your resume and we'll keep you in mind for future openings.
          </p>
          <button className="px-12 py-4 bg-white text-red-600 font-bold rounded-full hover:bg-zinc-100 transition-all shadow-xl uppercase tracking-widest text-sm">
            General Application
          </button>
        </div>
      </section>
    </main>
  );
};

export default CareerPage;
