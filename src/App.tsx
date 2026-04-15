/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Film, 
  Award, 
  Users, 
  Calendar, 
  MapPin, 
  Star, 
  ChevronRight, 
  ChevronDown,
  Mail, 
  Instagram, 
  Facebook, 
  Youtube,
  Play,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Info,
  X,
  Menu
} from "lucide-react";

const LOGO_URL = "https://images.squarespace-cdn.com/content/v1/65d4ebcfb92f9e409d8cf8c9/fafb875f-93d8-4dc8-8400-72e569bdc1f0/Logo+NSff.png?format=1500w";
const PALETTE_IMAGE = "https://images.squarespace-cdn.com/content/v1/65d4ebcfb92f9e409d8cf8c9/59312528-194c-469e-9d88-c6c720cee5e8/Color+Palett+1.jpg?format=1000w";
const HILTON_IMAGE = "https://images.squarespace-cdn.com/content/v1/65d4ebcfb92f9e409d8cf8c9/59c35ab4-e818-45f1-b864-58e86da26092/Hotel+Hilton.jpg?format=1500w";
const MARTINEZ_IMAGE = "https://images.squarespace-cdn.com/content/v1/65d4ebcfb92f9e409d8cf8c9/4b697089-8eaa-4e58-a747-d5c3167899c6/Hotel+Martinez.jpg?format=1500w";
const UMBERTO_IMAGE = "https://images.squarespace-cdn.com/content/v1/65d4ebcfb92f9e409d8cf8c9/f452f2c5-9b86-450f-b43e-78287886efed/Umberto.jpg?format=2500w";
const HERO_VIDEO = "https://return.imindevelopment.com/wp-content/uploads/2026/04/202604151254-2.mp4";

const Section = ({ children, className = "", id = "" }: { children: ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const Button = ({ children, className = "", variant = "primary", onClick }: { children: ReactNode; className?: string; variant?: "primary" | "secondary" | "outline"; onClick?: () => void }) => {
  const variants = {
    primary: "bg-nsff-red text-white hover:bg-red-700",
    secondary: "bg-nsff-yellow text-black hover:bg-yellow-500",
    outline: "border-2 border-white text-white hover:bg-white hover:text-black"
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default function App() {
  const [isPastEventsOpen, setIsPastEventsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [submissionType, setSubmissionType] = useState<"standard" | "student">("standard");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-4xl rounded-[3rem] overflow-hidden relative shadow-2xl"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-8 right-8 text-black hover:text-nsff-red transition-colors z-10"
              >
                <X size={32} />
              </button>
              
              <div className="p-8 md:p-12 max-h-[90vh] overflow-y-auto">
                <h3 className="text-3xl font-display text-black mb-8">Submit your film</h3>
                
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Submission received! (Demo)"); setIsModalOpen(false); }}>
                  <div className="space-y-6">
                    {/* Name & Last Name */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="block text-lg font-medium text-black">Name <span className="text-gray-400 font-normal text-sm">(required)</span></label>
                        <input type="text" required className="w-full px-4 py-3 bg-nsff-yellow border-none focus:ring-2 focus:ring-nsff-red transition-all text-black" />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-lg font-medium text-black">Last name <span className="text-gray-400 font-normal text-sm">(required)</span></label>
                        <input type="text" required className="w-full px-4 py-3 bg-nsff-yellow border-none focus:ring-2 focus:ring-nsff-red transition-all text-black" />
                      </div>
                    </div>

                    {/* Email & Telephone */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="block text-lg font-medium text-black">Email <span className="text-gray-400 font-normal text-sm">(required)</span></label>
                        <input type="email" required className="w-full px-4 py-3 bg-nsff-yellow border-none focus:ring-2 focus:ring-nsff-red transition-all text-black" />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-lg font-medium text-black">Telephone <span className="text-gray-400 font-normal text-sm">(required)</span></label>
                        <input type="tel" required className="w-full px-4 py-3 bg-nsff-yellow border-none focus:ring-2 focus:ring-nsff-red transition-all text-black" />
                      </div>
                    </div>

                    {/* Country & City */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="block text-lg font-medium text-black">Country <span className="text-gray-400 font-normal text-sm">(required)</span></label>
                        <input type="text" required className="w-full px-4 py-3 bg-nsff-yellow border-none focus:ring-2 focus:ring-nsff-red transition-all text-black" />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-lg font-medium text-black">City <span className="text-gray-400 font-normal text-sm">(required)</span></label>
                        <input type="text" required className="w-full px-4 py-3 bg-nsff-yellow border-none focus:ring-2 focus:ring-nsff-red transition-all text-black" />
                      </div>
                    </div>

                    {/* Postal Code & Address */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="block text-lg font-medium text-black">Postal code <span className="text-gray-400 font-normal text-sm">(required)</span></label>
                        <input type="text" required className="w-full px-4 py-3 bg-nsff-yellow border-none focus:ring-2 focus:ring-nsff-red transition-all text-black" />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-lg font-medium text-black">Address <span className="text-gray-400 font-normal text-sm">(required)</span></label>
                        <input type="text" required className="w-full px-4 py-3 bg-nsff-yellow border-none focus:ring-2 focus:ring-nsff-red transition-all text-black" />
                      </div>
                    </div>

                    {/* Video Link */}
                    <div className="space-y-1">
                      <label className="block text-lg font-medium text-black">Video Link <span className="text-gray-400 font-normal text-sm">(required)</span></label>
                      <p className="text-xs text-gray-500 mb-1">Link video YouTube or Vimeo</p>
                      <input 
                        type="url" 
                        required 
                        placeholder="Paste here the private link to your video on Vimeo or YouTube"
                        className="w-full px-4 py-3 bg-nsff-yellow border-none focus:ring-2 focus:ring-nsff-red transition-all text-black placeholder:text-black/50" 
                      />
                    </div>

                    {/* Link Password */}
                    <div className="space-y-1">
                      <label className="block text-lg font-medium text-black">Link password (if there is one)</label>
                      <input type="text" className="w-full px-4 py-3 bg-nsff-yellow border-none focus:ring-2 focus:ring-nsff-red transition-all text-black" />
                    </div>

                    {/* Film Title & Type */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="block text-lg font-medium text-black">Film title <span className="text-gray-400 font-normal text-sm">(required)</span></label>
                        <input type="text" required className="w-full px-4 py-3 bg-nsff-yellow border-none focus:ring-2 focus:ring-nsff-red transition-all text-black" />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-lg font-medium text-black">Film Type (documentar, comedy, drama, or other) <span className="text-gray-400 font-normal text-sm">(required)</span></label>
                        <input type="text" required className="w-full px-4 py-3 bg-nsff-yellow border-none focus:ring-2 focus:ring-nsff-red transition-all text-black" />
                      </div>
                    </div>

                    {/* Running Time & Director Name */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="block text-lg font-medium text-black">Running time <span className="text-gray-400 font-normal text-sm">(required)</span></label>
                        <input type="text" required className="w-full px-4 py-3 bg-nsff-yellow border-none focus:ring-2 focus:ring-nsff-red transition-all text-black" />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-lg font-medium text-black">Director name <span className="text-gray-400 font-normal text-sm">(required)</span></label>
                        <input type="text" required className="w-full px-4 py-3 bg-nsff-yellow border-none focus:ring-2 focus:ring-nsff-red transition-all text-black" />
                      </div>
                    </div>

                    {/* Guidelines Acceptance */}
                    <div className="pt-4">
                      <p className="text-lg font-medium text-black mb-2">Submission Guidelines acceptance <span className="text-gray-400 font-normal text-sm">(required)</span></p>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" required className="w-5 h-5 accent-nsff-red" />
                        <span className="text-sm text-gray-700 group-hover:text-black transition-colors">I read and accept the Submission Guidelines</span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-8">
                    <Button variant="primary" className="w-fit px-12 py-4 text-lg">
                      CONTINUE
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <img src={LOGO_URL} alt="NSFF Logo" className="h-10 md:h-14 w-auto" referrerPolicy="no-referrer" />
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-bold uppercase text-sm tracking-widest text-gray-900">
            <a href="/" className="hover:text-nsff-red transition-colors">Home</a>
            <a href="#about" className="hover:text-nsff-red transition-colors">About</a>
            <a href="#awards" className="hover:text-nsff-red transition-colors">Awards</a>
            <a href="#rules" className="hover:text-nsff-red transition-colors">Rules</a>
            
            {/* Past Events Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsPastEventsOpen(true)}
              onMouseLeave={() => setIsPastEventsOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-nsff-red transition-colors uppercase font-bold text-sm tracking-widest">
                Past Events <ChevronDown size={14} />
              </button>
              <AnimatePresence>
                {isPastEventsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-64 bg-white shadow-xl border border-gray-100 py-4 rounded-xl mt-2 text-gray-900"
                  >
                    {[
                      "Next Step FF Cannes 2025",
                      "Next Step FF Venice 2024",
                      "Next Step FF Cannes 2024",
                      "Attendees"
                    ].map((item) => (
                      <a 
                        key={item}
                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-6 py-3 hover:bg-gray-50 hover:text-nsff-red transition-colors normal-case font-medium text-base"
                      >
                        {item}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#blog" className="hover:text-nsff-red transition-colors">Blog</a>
            <a href="#submit" className="text-nsff-red">Submit</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#submit" className="hidden md:block">
              <Button className="py-2 px-6 text-xs" variant="primary">Submit Now</Button>
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-gray-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-4 font-bold uppercase text-sm tracking-widest text-gray-900">
                <a href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-nsff-red transition-colors">Home</a>
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-nsff-red transition-colors">About</a>
                <a href="#awards" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-nsff-red transition-colors">Awards</a>
                <a href="#rules" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-nsff-red transition-colors">Rules</a>
                <a href="#blog" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-nsff-red transition-colors">Blog</a>
                <a href="#submit" onClick={() => setIsMobileMenuOpen(false)} className="text-nsff-red">Submit</a>
                <a href="#submit" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full py-4" variant="primary">Submit Now</Button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[calc(100vh-80px)] flex items-center overflow-hidden">
        {/* Top Film Strip Decoration */}
        <div className="absolute top-0 left-0 right-0 h-10 z-20 flex flex-col pointer-events-none overflow-hidden">
          <div className="h-3 bg-black w-full" />
          <div className="flex-1 flex">
            {[...Array(60)].map((_, i) => (
              <div key={i} className="flex flex-shrink-0">
                <div className="w-6 bg-black h-full" />
                <div className="w-4 bg-transparent h-full" />
              </div>
            ))}
            <div className="flex-1 bg-black" />
          </div>
          <div className="h-3 bg-black w-full" />
        </div>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          {/* Top Right Info - Aligned with Submit Now button, no background */}
          <div className="absolute top-24 md:top-32 right-6 z-20 text-right">
            <h3 className="text-nsff-yellow text-3xl md:text-6xl font-display font-black leading-none drop-shadow-2xl">Cannes</h3>
            <p className="text-white text-lg md:text-3xl font-display font-bold mt-2 drop-shadow-lg">May 13-21, 2026</p>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-nsff-yellow text-5xl md:text-[10rem] font-display font-black mb-4 leading-[0.8] drop-shadow-2xl">
              Next Step
            </h1>
            <p className="text-white text-base md:text-xl font-medium mb-10 max-w-xl opacity-90 drop-shadow-md">
              First step make a movie, next step build your career.
            </p>
            <a href="#submit">
              <Button variant="primary" className="text-lg md:text-xl px-8 md:px-12 py-4 md:py-6">SUBMIT YOUR FILM</Button>
            </a>
          </div>
        </div>

        {/* Film Strip Decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-10 z-20 flex flex-col pointer-events-none overflow-hidden">
          <div className="h-3 bg-black w-full" />
          <div className="flex-1 flex">
            {[...Array(60)].map((_, i) => (
              <div key={i} className="flex flex-shrink-0">
                <div className="w-6 bg-black h-full" />
                <div className="w-4 bg-transparent h-full" />
              </div>
            ))}
            <div className="flex-1 bg-black" />
          </div>
          <div className="h-3 bg-black w-full" />
        </div>
      </section>

      {/* Intro Section */}
      <Section id="about" className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl text-nsff-yellow mb-8">
              The Next Step <br /> Film Festival
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p className="font-bold text-xl text-nsff-blue">
                The Next Step Film Festival venue in Cannes for launching careers.
              </p>
              <p>
                What happens when movie magic meets the pulse of possibility? Our festival isn't just about watching films; it's about launching careers.
              </p>
              <p>
                Picture this: A total of six finalists will enjoy a four-day, all-expenses-paid stay in Cannes. They will be divided into two sessions: the first group of three finalists will attend from May 13th to 16th, with screenings and award ceremony on the 14th, 2026 at the Hilton Hotel Cannes.
              </p>
              <p>
                The second group will join from May 19th to 22nd with screenings and awards ceremony on the 21st, 2026 at the Hotel Martinez Cannes. Both sessions will take place during the same period as the world-renowned Cannes Film Festival.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src={HILTON_IMAGE} 
              alt="Hilton Hotel Cannes" 
              className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 bg-nsff-blue text-white p-8 rounded-2xl hidden md:block max-w-xs">
              <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-70">Venue 01</p>
              <h3 className="text-2xl mb-0 font-display">Hilton Hotel Cannes</h3>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <img 
              src={MARTINEZ_IMAGE} 
              alt="Hotel Martinez Cannes" 
              className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 bg-nsff-red text-white p-8 rounded-2xl hidden md:block max-w-xs">
              <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-70">Venue 02</p>
              <h3 className="text-2xl mb-0 font-display">Hotel Martinez Cannes</h3>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                Additionally, with our special three-day Pass, you’ll gain access to the Marché du Film, where you can freely explore booths and stands from production and distribution companies, TV networks, and other industry players.
              </p>
              <p className="font-bold text-nsff-red">
                We're on a quest to uncover the next generation of visionary storytellers.
              </p>
              <p>
                We're not looking for just good films; we're seeking bold expressions of creativity that push the boundaries of what seems possible. Our mission is to discover creators who harness the power of film to share their unique perspectives.
              </p>
              <p>
                No matter the size of your budget, we believe that true talent shines through. If you can work wonders with limited resources, we know you're ready to tackle the big leagues.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Awards Section */}
      <Section id="awards" className="bg-nsff-blue text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 right-0 h-8 film-strip opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-1/2" />
        
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl text-nsff-yellow mb-6">Awards & Prizes</h2>
            <h3 className="text-3xl md:text-4xl mb-8 font-display">Do you have what it takes to be 1 out of 6 finalists?</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg opacity-90 leading-relaxed"
            >
              <p>
                Picture this: a total of six finalists will enjoy a four-day, all-expenses-paid stay in Cannes. They will be divided into two sessions: the first group of three finalists will attend from <span className="text-nsff-yellow font-bold">May 13th to 16th, 2026</span>, while the second group will join from <span className="text-nsff-yellow font-bold">May 19th to 22nd, 2026</span>.
              </p>
              <p>
                Both sessions will take place during the same period as the world-renowned Cannes Film Festival. You’ll be our special guest!
              </p>
              <p>
                As our guest, you’ll enjoy screenings in top-tier venues, with the screening and awards ceremony taking place in the exclusive Hilton Hotel Cannes or Hotel Martinez, Cannes.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg opacity-90 leading-relaxed"
            >
              <p>
                Additionally, with our special three days Pass, you’ll gain access to the <span className="text-nsff-yellow font-bold">Marché du Film</span>, where you can freely explore booths and stands from production and distribution companies, TV networks, and other industry players.
              </p>
              <p>
                This is your chance to gather valuable insights and network with key industry figures, seizing golden opportunities that could shape your future.
              </p>
              <p className="font-bold text-nsff-yellow">
                Whether you’re an emerging filmmaker or a cinephile seeking the next big thing, the Next Step Film Festival is your ticket to an unforgettable cinematic experience.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "All-Expenses Stay",
                desc: "Four-day stay in Cannes during the festival, fully covered by NSFF.",
                icon: <Award className="w-12 h-12 text-nsff-yellow" />
              },
              {
                title: "Elite Screenings",
                desc: "Your film screened at the Hilton Hotel or Hotel Martinez for industry pros.",
                icon: <Film className="w-12 h-12 text-nsff-yellow" />
              },
              {
                title: "Marché du Film Pass",
                desc: "Full access to the world's largest film market to network and pitch.",
                icon: <Star className="w-12 h-12 text-nsff-yellow" />
              }
            ].map((prize, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/20 hover:bg-white/20 transition-colors group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform">{prize.icon}</div>
                <h3 className="text-2xl mb-4 font-display">{prize.title}</h3>
                <p className="opacity-80 leading-relaxed">{prize.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-2xl font-display italic opacity-80">
              "We're on a quest to uncover the next generation of visionary storytellers."
            </p>
          </div>
        </div>
      </Section>

      {/* Rules Section */}
      <Section id="rules" className="bg-white overflow-hidden relative">
        {/* Large Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-display font-black text-gray-50 pointer-events-none select-none leading-none">
          RULES
        </div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-6xl md:text-8xl text-nsff-yellow mb-6">Rules & Terms</h2>
              <p className="text-xl text-gray-500 font-medium uppercase tracking-widest">The official guidelines for the 2026 edition</p>
            </div>
            <div className="hidden md:block h-px flex-grow bg-gray-200 mx-12 mb-6" />
            <div className="text-right">
              <span className="text-nsff-red font-black text-4xl font-display">04</span>
              <p className="text-xs uppercase tracking-tighter font-bold opacity-40">Core Sections</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-[3rem] overflow-hidden shadow-2xl">
            {/* 01: Eligibility */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-nsff-yellow p-12 md:p-16 group transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-6xl font-display font-black text-black/10 transition-colors">01</span>
                <div className="w-16 h-16 rounded-full border-2 border-black/20 flex items-center justify-center text-black transition-colors">
                  <CheckCircle2 size={32} />
                </div>
              </div>
              <h3 className="text-4xl mb-6 font-display text-black transition-colors">Eligibility & Submission</h3>
              <p className="text-black/70 text-lg leading-relaxed mb-10 transition-colors">
                We accept films of all genres, celebrating diversity in storytelling. Filmmakers must certify that they hold all necessary rights to the materials used.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Short Short", time: "1–3 min" },
                  { label: "Middle Short", time: "3–15 min" },
                  { label: "Short", time: "15–30 min" }
                ].map((cat, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-black/10 transition-colors">
                    <span className="font-bold uppercase tracking-widest text-sm text-black">{cat.label}</span>
                    <span className="font-display text-xl text-black">{cat.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 02: Selection */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-nsff-blue p-12 md:p-16 group transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-6xl font-display font-black text-white/10 transition-colors">02</span>
                <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center text-white transition-colors">
                  <Star size={32} />
                </div>
              </div>
              <h3 className="text-4xl mb-6 font-display text-white transition-colors">Selection & Screening</h3>
              <p className="text-white/80 text-lg leading-relaxed mb-10 transition-colors">
                Selected films will be screened during the screenings and awards ceremonies. Priority will be given to films whose director or crew members are present.
              </p>
              <div className="bg-white/10 p-8 rounded-3xl border-l-4 border-white transition-colors">
                <p className="text-sm font-bold uppercase tracking-widest mb-2 text-white">Presence Matters</p>
                <p className="text-sm text-white/80">Filmmakers attending the festival gain significant networking advantages and priority screening slots.</p>
              </div>
            </motion.div>

            {/* 03: Bonus */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-nsff-red p-12 md:p-16 group transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-6xl font-display font-black text-white/10 transition-colors">03</span>
                <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center text-white transition-colors">
                  <Award size={32} />
                </div>
              </div>
              <h3 className="text-4xl mb-6 font-display text-white transition-colors">Special Bonus</h3>
              <p className="text-white/80 text-lg leading-relaxed mb-10 transition-colors">
                Each selected film receives one complimentary three-day Pass for the Marché du Film, offered in addition to the official NSFF awards & prizes.
              </p>
              <div className="flex items-center gap-6">
                <div className="h-20 w-px bg-white/20" />
                <p className="text-2xl font-display italic text-white transition-colors">
                  "Your ticket to the world's largest film market."
                </p>
              </div>
            </motion.div>

            {/* 04: Independence */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-950 p-12 md:p-16 group transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-6xl font-display font-black text-white/10 transition-colors">04</span>
                <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center text-white transition-colors">
                  <Info size={32} />
                </div>
              </div>
              <h3 className="text-4xl mb-6 font-display text-white transition-colors">Independence Note</h3>
              <p className="text-white/80 text-lg leading-relaxed mb-10 transition-colors">
                We are independent from the Cannes Film Festival – but we run in the same exciting days to give our filmmakers full access to the Marché du Film.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Networking", "Access", "Opportunity", "Cannes 2026"].map((tag, i) => (
                  <span key={i} className="px-4 py-2 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-white transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Discover NSFF 2025 Section */}
      <Section className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl text-nsff-blue mb-4">Discover the NSFF Cannes 2025</h2>
          <p className="text-xl text-gray-600">Last year’s finalists reflect on their experience at the Next Step Film Festival in Cannes.</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            { id: "zsF1qvVb_4Y", title: "Finalist Reflection 01" },
            { id: "XLU5condgD4", title: "Finalist Reflection 02" },
            { id: "Gz7rIDNG1Cg", title: "Finalist Reflection 03" }
          ].map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="aspect-video rounded-2xl overflow-hidden shadow-lg bg-black group relative"
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="relative z-10"
              ></iframe>
              <div className="absolute inset-0 bg-nsff-red/10 group-hover:opacity-0 transition-opacity z-20 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonial Section */}
      <section className="bg-nsff-yellow py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 text-9xl text-black/10 font-display">"</div>
              <h2 className="text-4xl md:text-6xl text-black leading-tight mb-8 font-black">
                Umberto introduced me to a descendant of the original creators of the Venice Film Festival, who then gave us his number.
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-12 h-1 bg-black" />
                <div>
                  <p className="font-bold text-xl">Matej Rimanic</p>
                  <p className="text-sm uppercase tracking-widest opacity-70">Cannes Film Festival x TikTok Grand Prix Winner</p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/65d4ebcfb92f9e409d8cf8c9/0fe115dd-a035-4f8a-9216-ee58acf01e39/matej.jpg?format=1000w" 
              alt="Matej Rimanic" 
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-nsff-blue/10 rounded-3xl" />
          </div>
        </div>
      </section>

      {/* Umberto Section */}
      <Section className="bg-nsff-red text-white overflow-hidden relative">
        <div className="absolute bottom-0 left-0 right-0 h-16 film-strip opacity-10 pointer-events-none" />
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl mb-8">
              Meet Umberto: <br />
              <span className="text-nsff-yellow">Your Seasoned Red Carpet Guide</span>
            </h2>
            <div className="space-y-6 text-lg opacity-90 leading-relaxed">
              <p>
                Umberto Cavalier is the founder of Cavalier Media and the driving force behind the Next Step Film Festival.
              </p>
              <p>
                With a marketing background and a passion for cinema, Umberto is dedicated to empowering young talent and shaping the future of the industry.
              </p>
              <p className="font-bold text-2xl text-nsff-yellow italic">
                "We guide the young through the industry maze, offering tangible value beyond mere accolades."
              </p>
            </div>
            <Button variant="secondary" className="mt-10">Get in Touch</Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src={UMBERTO_IMAGE} 
              alt="Umberto Cavalier" 
              className="rounded-3xl shadow-2xl w-full object-cover z-10 relative"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -top-4 -right-4 w-full h-full border-4 border-nsff-yellow rounded-3xl -z-0" />
          </motion.div>
        </div>
      </Section>

      {/* Submission Section */}
      <Section id="submit" className="bg-nsff-blue text-white text-center relative overflow-hidden py-32">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_70%)] opacity-20" />
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-1/2" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="mb-20">
            <span className="text-nsff-yellow font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Official Selection 2026</span>
            <h2 className="text-6xl md:text-8xl font-display mb-8 leading-tight">
              SUBMIT <br className="md:hidden" /> YOUR FILM
            </h2>
            <p className="text-blue-100/70 max-w-2xl mx-auto text-lg">
              Join the next generation of filmmakers at the heart of Cannes. 
              Submissions are now open for the 2026 edition.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            {/* Standard Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 p-12 rounded-[3rem] text-left group hover:border-nsff-yellow/50 transition-colors"
            >
              <h3 className="text-3xl font-display mb-8">Standard</h3>
              <div className="space-y-8">
                <div>
                  <p className="text-nsff-yellow font-bold uppercase tracking-widest text-xs mb-2">Last Call Deadline</p>
                  <div className="flex justify-between items-end">
                    <p className="text-blue-100/60">Apr 10, 2026</p>
                    <p className="text-4xl font-display">€65</p>
                  </div>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <p className="text-nsff-red font-bold uppercase tracking-widest text-xs mb-2">Final Deadline</p>
                  <div className="flex justify-between items-end">
                    <p className="text-blue-100/60">Apr 20, 2026</p>
                    <p className="text-4xl font-display">€70</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Student Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 p-12 rounded-[3rem] text-left group hover:border-nsff-yellow/50 transition-colors"
            >
              <h3 className="text-3xl font-display mb-8">Student</h3>
              <div className="space-y-8">
                <div>
                  <p className="text-nsff-yellow font-bold uppercase tracking-widest text-xs mb-2">Last Call Deadline</p>
                  <div className="flex justify-between items-end">
                    <p className="text-blue-100/60">Apr 10, 2026</p>
                    <p className="text-4xl font-display">€53</p>
                  </div>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <p className="text-nsff-red font-bold uppercase tracking-widest text-xs mb-2">Final Deadline</p>
                  <div className="flex justify-between items-end">
                    <p className="text-blue-100/60">Apr 20, 2026</p>
                    <p className="text-4xl font-display">€58</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto mb-20 text-left">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Calendar className="text-nsff-yellow" size={24} />
              </div>
              <div>
                <p className="text-blue-100/50 uppercase tracking-widest text-xs font-bold mb-1">Notification Date</p>
                <p className="text-2xl font-display">April 24, 2026</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Star className="text-nsff-yellow" size={24} />
              </div>
              <div>
                <p className="text-blue-100/50 uppercase tracking-widest text-xs font-bold mb-1">Event Date</p>
                <p className="text-2xl font-display text-nsff-yellow">May 13 - 21, 2026</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="flex gap-4 p-2 bg-white/10 rounded-full border border-white/20">
              <button 
                onClick={() => setSubmissionType("standard")}
                className={`px-8 py-3 rounded-full font-bold transition-all ${submissionType === 'standard' ? 'bg-nsff-yellow text-black shadow-lg shadow-nsff-yellow/20' : 'hover:bg-white/5 text-blue-100/60'}`}
              >
                STANDARD
              </button>
              <button 
                onClick={() => setSubmissionType("student")}
                className={`px-8 py-3 rounded-full font-bold transition-all ${submissionType === 'student' ? 'bg-nsff-yellow text-black shadow-lg shadow-nsff-yellow/20' : 'hover:bg-white/5 text-blue-100/60'}`}
              >
                STUDENT
              </button>
            </div>
            
            <Button 
              variant="primary" 
              className="text-xl px-16 py-6"
              onClick={() => setIsModalOpen(true)}
            >
              CONTINUE TO SUBMISSION
            </Button>
          </div>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <img src={LOGO_URL} alt="NSFF Logo" className="h-16 w-auto mb-8 brightness-0 invert" referrerPolicy="no-referrer" />
            <p className="text-gray-400 max-w-sm mb-8">
              Launching the next generation of visionary storytellers in the heart of Cannes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-nsff-red transition-colors"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-nsff-red transition-colors"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-nsff-red transition-colors"><Youtube size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Submission Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Conditions of Sale</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
            <a href="mailto:info@nextstepfilmfestival.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
              <Mail size={18} />
              info@nextstepfilmfestival.com
            </a>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          © 2026 Next Step Film Festival. All rights reserved. Independent from the Cannes Film Festival.
        </div>
      </footer>
    </div>
  );
}
