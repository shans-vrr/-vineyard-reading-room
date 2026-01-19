import React, { useState, useEffect } from 'react';
import { BookOpen, Coffee, TreePine, Users, MapPin, ArrowRight, Menu, X, Instagram, Mail, Search, Heart } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, children }) => (
    <a href={href} className="text-stone-600 hover:text-stone-900 transition-colors font-medium">
      {children}
    </a>
  );

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-stone-900 p-1.5 rounded-lg">
              <BookOpen className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-serif font-bold tracking-tight">Vineyard Reading Room</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#vision">Vision</NavLink>
            <NavLink href="#the-room">The Space</NavLink>
            <NavLink href="#curation">Curation</NavLink>
            <button className="bg-stone-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-stone-800 transition-all transform hover:scale-105 active:scale-95">
              Join the First Chapter
            </button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-8 md:hidden">
          <div className="flex flex-col space-y-6 text-2xl font-serif">
            <a href="#vision" onClick={() => setIsMenuOpen(false)}>Vision</a>
            <a href="#the-room" onClick={() => setIsMenuOpen(false)}>The Space</a>
            <a href="#curation" onClick={() => setIsMenuOpen(false)}>Curation</a>
            <button className="bg-stone-900 text-white px-8 py-4 rounded-full text-lg font-sans">
              Join the First Chapter
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-stone-800">
        <div className="absolute inset-0">
          {/* Gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/40 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=2000" 
            alt="Library with coffee and books" 
            className="w-full h-full object-cover"
            onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000";
            }}
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
              A Sanctuary for <span className="italic text-stone-200">Deep Focus</span> and Connection.
            </h1>
            <p className="text-xl md:text-2xl text-stone-100 mb-10 leading-relaxed font-light">
              Cultivating a "Third Space" in the heart of Utah City. Where the tactile warmth of a book meets the sensory comfort of craft coffee on the water's edge.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-stone-900 px-8 py-4 rounded-full font-bold flex items-center justify-center hover:bg-stone-100 transition-all group">
                Founding Member Access <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent border-2 border-white/40 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                The Waterfront Pop-Up
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section id="vision" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block p-3 bg-stone-100 rounded-2xl mb-6">
            <TreePine className="text-stone-800 w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Connection over Consumption</h2>
          <p className="text-xl text-stone-600 leading-relaxed mb-12">
            In an era of digital isolation, we are building a cultural anchor—a physical space that exists intentionally between the modern workplace and the private residence. Our vision is to provide a biophilic sanctuary that transforms daily rituals into acts of dwelling.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left pt-12 border-t border-stone-100">
            <div>
              <h3 className="font-serif font-bold text-xl mb-3 flex items-center">
                <Search className="w-5 h-5 mr-2 text-stone-400" /> Curated
              </h3>
              <p className="text-stone-500">Focused on independent presses, local Utah voices, and the classics that spark curiosity.</p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl mb-3 flex items-center">
                <Coffee className="w-5 h-5 mr-2 text-stone-400" /> Intentional
              </h3>
              <p className="text-stone-500">A high-end craft coffee program designed to sustain your study and your socializing.</p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl mb-3 flex items-center">
                <Users className="w-5 h-5 mr-2 text-stone-400" /> Communal
              </h3>
              <p className="text-stone-500">From Silent Book Clubs to Storytime, we are the living room of the Vineyard waterfront.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Space Concepts */}
      <section id="the-room" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 space-y-4">
            <div className="max-w-xl">
              <h2 className="text-4xl font-serif font-bold mb-4 italic">Designed for Two Speeds.</h2>
              <p className="text-lg text-stone-600">Architected for both the hum of conversation and the silence of deep work.</p>
            </div>
            <div className="flex space-x-2">
              <div className="px-4 py-2 bg-stone-200 rounded-full text-sm font-medium">Social Zone</div>
              <div className="px-4 py-2 bg-stone-900 text-white rounded-full text-sm font-medium">Quiet Zone</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-3xl aspect-[4/5] shadow-xl bg-stone-200">
              <img 
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1000" 
                alt="Quiet Zone" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent flex flex-col justify-end p-10 text-white">
                <h3 className="text-3xl font-serif font-bold mb-2 text-white">The Hearth</h3>
                <p className="text-stone-200 leading-relaxed">Floor-to-ceiling oak shelves, leather armchairs, and amber-hued study nooks for deep focus.</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl aspect-[4/5] shadow-xl bg-stone-200">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1000" 
                alt="Social Zone" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent flex flex-col justify-end p-10 text-white">
                <h3 className="text-3xl font-serif font-bold mb-2 text-white">The Promenade Bar</h3>
                <p className="text-stone-200 leading-relaxed">A vibrant space with large windows overlooking Utah Lake, built for community connection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curation Highlight */}
      <section id="curation" className="py-24 bg-stone-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              Curated for the <span className="text-stone-400 italic">Thoughtful Reader.</span>
            </h2>
            <p className="text-xl text-stone-300 font-light leading-relaxed">
              Our inventory isn't dictated by algorithms. We source from independent publishers, emphasize local Utah County authors, and keep a "living list" of books that matter.
            </p>
            <div className="flex items-center space-x-4 p-4 border border-white/10 rounded-2xl bg-white/5">
              <div className="w-12 h-12 bg-stone-700 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-stone-300" />
              </div>
              <div>
                <p className="font-bold text-lg">Utah Voices Spotlight</p>
                <p className="text-stone-400 text-sm italic">Featuring over 200 local authors at launch.</p>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="aspect-[3/4] rounded-2xl bg-stone-800 animate-pulse"></div>
                <div className="aspect-[3/4] rounded-2xl bg-stone-700"></div>
              </div>
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl bg-stone-600"></div>
                <div className="aspect-[3/4] rounded-2xl bg-stone-800 animate-pulse"></div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-100 py-16 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-stone-900 p-1 rounded-lg">
                <BookOpen className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-serif font-bold">Vineyard Reading Room</span>
            </div>
            <p className="text-stone-500 max-w-sm leading-relaxed">
              Vineyard's cultural living room. A curated independent bookstore and craft coffee experience on the Utah City waterfront.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white rounded-full text-stone-400 hover:text-stone-900 transition-all shadow-sm">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white rounded-full text-stone-400 hover:text-stone-900 transition-all shadow-sm">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-stone-900">Explore</h4>
            <ul className="space-y-4 text-stone-500">
              <li><a href="#vision" className="hover:text-stone-900 transition-colors">Our Vision</a></li>
              <li><a href="#the-room" className="hover:text-stone-900 transition-colors">The Space</a></li>
              <li><a href="#curation" className="hover:text-stone-900 transition-colors">The Curation</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors">The Pop-Up</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-stone-900">Contact</h4>
            <ul className="space-y-4 text-stone-500">
              <li className="flex items-center"><Mail className="w-4 h-4 mr-2" /> hello@vineyardreadingroom.com</li>
              <li className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> Utah City Waterfront</li>
              <li className="pt-4 flex items-center text-stone-900 font-medium italic">
                Coming 2026.
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-stone-200 text-center md:text-left">
          <p className="text-stone-400 text-xs tracking-widest uppercase">
            &copy; 2026 Vineyard Reading Room. All Rights Reserved. Designed for the Future of Utah City.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
