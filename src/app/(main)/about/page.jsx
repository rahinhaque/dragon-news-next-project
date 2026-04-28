import React from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import Link from 'next/link';




//Meta data
export const metadata = {
  title: "About us",
  description:
    "This is the best online news Portal in current generetions, Where you can find International news, Tranding news, News of the sports, entertainment and culture. You can also join as reporter Senior Journalist , Photojournalist by applying in the career section. Our Mission is to unveil the true news of the world Uncompromising Integrity, Deep Investigation.",
};



const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center border-b border-zinc-100 dark:border-zinc-800">
        <div className="flex justify-center mb-10">
          <Image 
            src={logo} 
            alt="Dragon News Logo" 
            className="w-full max-w-[500px] h-auto dark:invert"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 tracking-tight">
          Journalism Without Fear or Favour
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
          Since our inception, Dragon News has been dedicated to delivering high-impact journalism that matters. 
          We believe in the power of truth and the importance of an informed public.
        </p>
      </section>

      {/* Mission & Values */}
      <section className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Our Mission</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-loose">
            At Dragon News, our mission is to provide accurate, timely, and unbiased news to our global audience. 
            We strive to be a voice for the voiceless and a watchdog for democracy. Our team of seasoned journalists 
            works around the clock to bring you the stories that shape our world.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center shrink-0">
                <span className="text-red-600 font-bold">01</span>
              </div>
              <div>
                <h3 className="font-bold text-zinc-800 dark:text-zinc-200">Uncompromising Integrity</h3>
                <p className="text-sm text-zinc-500">We adhere to the highest ethical standards in journalism.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center shrink-0">
                <span className="text-red-600 font-bold">02</span>
              </div>
              <div>
                <h3 className="font-bold text-zinc-800 dark:text-zinc-200">Deep Investigation</h3>
                <p className="text-sm text-zinc-500">We go beyond the headlines to uncover the real story.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 text-center">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-red-500 outline-none transition-all" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-red-500 outline-none transition-all" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Message</label>
              <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-red-500 outline-none transition-all" placeholder="How can we help?"></textarea>
            </div>
            <button className="w-full py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all transform hover:scale-[1.01]">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer-like CTA */}
      <section className="bg-zinc-900 dark:bg-zinc-900 py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to join the conversation?</h2>
          <p className="text-zinc-400 mb-10 max-w-xl mx-auto">
            Subscribe to our newsletter for daily updates and exclusive investigations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input type="email" className="flex-1 px-6 py-4 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:ring-2 focus:ring-red-500 outline-none" placeholder="Enter your email" />
            <button className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all shadow-xl">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
