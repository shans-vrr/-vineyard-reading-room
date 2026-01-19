import React, { useState, useEffect } from 'react';
import { BookOpen, Coffee, Leaf, Users, MapPin, Calendar, ArrowRight, Instagram, Mail, CheckCircle2, Heart } from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#2C3E50] font-sans selection:bg-[#D4AF37] selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-[#2C3E50] p-1.5 rounded-lg">
              <BookOpen className="text-white w-5 h-5" />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight text-[#2C3E50]">Vineyard Reading Room</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest">
            <a href="#vision" className="hover:text-[#D4AF37] transition-colors">Vision</a>
            <a href="#mission" className="hover:text-[#D4AF37] transition-colors">The Impact</a>
            <a href="#community" className="hover:text-[#D4AF37] transition-colors">Community</a>
            <a href="#join" className="bg-[#2C3E50] text-white px-5 py-2 rounded-full hover:bg-[#3d566e] transition-all">Join the List</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000" 
            alt="Warm Bookstore Cafe" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8">
            <Heart className="w-4 h-4 text-red-400 fill-red-400" />
            <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">Partnered with Switchpoint Coffee</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight">
            Coffee with a <br /> <span className="italic text-[#D4AF37]">Conscience</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Vineyard’s third space sanctuary, where every cup served supports Switchpoint's mission to end homelessness in Utah.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href="#join" className="w-full md:w-auto bg-[#D4AF37] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
              Support the Mission <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#mission" className="w-full md:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
              Our Impact
            </a>
          </div>
        </div>
      </header>

      {/* Switchpoint Mission Section */}
      <section id="mission" className="py-24 px-6 bg-[#F4EFEA]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Strategic Partnership</span>
            <h2 className="font-serif text-4xl text-[#2C3E50] mb-6">Brewing Change, Page by Page</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We have partnered exclusively with <strong>Switchpoint Coffee Roasters</strong>. 100% of the proceeds from the beans we brew go directly toward providing housing and support for those experiencing homelessness in Utah.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm">
                <div className="bg-red-50 p-2 rounded-lg"><Heart className="w-6 h-6 text-red-500" /></div>
                <p className="font-bold">100% Non-Profit Sourcing</p>
              </div>
              <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm">
                <div className="bg-blue-50 p-2 rounded-lg"><Users className="w-6 h-6 text-blue-500" /></div>
                <p className="font-bold">Utah-First Community Impact</p>
              </div>
            </div>
          </div>
          <div className="bg-[#2C3E50] p-12 rounded-3xl text-white relative overflow-hidden">
             <h3 className="text-2xl font-serif mb-4 relative z-10">The "Round Up" Initiative</h3>
             <p className="text-white/70 mb-8 relative z-10">At Vineyard Reading Room, you'll have the option to round up every purchase. These micro-donations directly fund Switchpoint's local Vineyard and Utah County outreach.</p>
             <div className="text-5xl font-serif text-[#D4AF37]">$0.00</div>
             <p className="text-xs uppercase tracking-widest mt-2 opacity-50">Our Goal: $10,000 in Year One</p>
             <div className="absolute top-0 right-0 opacity-10 -mr-16 -mt-16">
                <Coffee className="w-64 h-64" />
             </div>
          </div>
        </div>
      </section>

      {/* Membership/Signup Section */}
      <section id="join" className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#2C3E50] rounded-[2rem] p-8 md:p-16 relative overflow-hidden text-white">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl mb-6">Start Your <span className="text-[#D4AF37]">Impact Journey</span></h2>
              <p className="mb-8 text-white/70">Join the list for clues to our Golden Ticket scavenger hunt and be the first to taste our signature Switchpoint blend.</p>
              
              {submitted ? (
                <div className="bg-white/10 p-6 rounded-xl border border-white/20 flex items-center space-x-4 animate-in fade-in slide-in-from-bottom-4">
                  <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" />
                  <div>
                    <p className="font-bold">You're on the list!</p>
                    <p className="text-sm text-white/50">Welcome to the first chapter.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-6 py-4 rounded-full bg-white/10 border-white/20 text-white focus:ring-2 focus:ring-[#D4AF37] outline-none"
                  />
                  <button type="submit" className="bg-[#D4AF37] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all">
                    Join Us
                  </button>
                </form>
              )}
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1511914265872-c40672604a80?auto=format&fit=crop&q=80&w=800" 
                alt="Switchpoint Coffee" 
                className="rounded-2xl shadow-xl -rotate-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="bg-[#2C3E50] p-1.5 rounded-lg">
              <BookOpen className="text-white w-5 h-5" />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight text-[#2C3E50]">Vineyard Reading Room</span>
          </div>
          <p className="text-gray-400 text-sm mb-8">Official Partner of Switchpoint Coffee Roasters</p>
          <div className="flex justify-center space-x-6 text-gray-500 text-sm font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-[#D4AF37]">Instagram</a>
            <a href="#" className="hover:text-[#D4AF37]">Mission</a>
            <a href="#" className="hover:text-[#D4AF37]">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
