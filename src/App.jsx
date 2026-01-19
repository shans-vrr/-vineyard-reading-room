import React, { useState, useEffect } from 'react';
import { BookOpen, Coffee, TreePine, Mail, Instagram, ArrowRight } from 'lucide-react';

const App = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 flex flex-col justify-between">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[2px] z-10" />
        <img 
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=2000" 
          alt="Library and Coffee" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      <header className="relative z-20 p-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-white p-1.5 rounded-lg">
            <BookOpen className="text-stone-900 w-6 h-6" />
          </div>
          <span className="text-xl font-serif font-bold tracking-tight text-white">Vineyard Reading Room</span>
        </div>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white transition-colors"
        >
          <Instagram className="w-6 h-6" />
        </a>
      </header>

      {/* Main Content */}
      <main className="relative z-20 flex-grow flex items-center justify-center px-6 py-12">
        <div className="max-w-3xl w-full text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-stone-200 text-sm font-medium border border-white/10">
              <TreePine className="w-4 h-4" />
              <span>Coming to Utah City • 2026</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
              A New Home for <br />
              <span className="italic text-stone-300">Curious Minds.</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 font-light max-w-2xl mx-auto leading-relaxed">
              We are building a sanctuary where the tactile warmth of a bookstore meets the sensory comfort of craft coffee.
            </p>
          </div>

          {/* Email Capture */}
          <div className="max-w-md mx-auto">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="relative group">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 bg-white text-stone-900 px-6 rounded-full font-bold text-sm flex items-center hover:bg-stone-100 transition-all"
                >
                  Join the List <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-white animate-pulse">
                <p className="font-serif italic text-lg">You're on the list. See you at the waterfront soon.</p>
              </div>
            )}
            <p className="mt-4 text-stone-400 text-sm">
              Be the first to know about our soft opening and "Golden Ticket" clues.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 p-8 text-center">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-stone-400 text-sm tracking-widest uppercase">
          <div className="flex items-center">
            <Coffee className="w-4 h-4 mr-2" />
            <span>Local Craft Brews</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="w-4 h-4 mr-2" />
            <span>Curated Independent Press</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-2" />
            <span>hello@vineyardreadingroom.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
