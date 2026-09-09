import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Database, 
  Cloud, 
  Zap, 
  ChartBar, 
  ShieldCheck, 
  Code2, 
  Menu, 
  X 
} from 'lucide-react';

// --- CUSTOM SVG LOGO COMPONENT (RESPONSIVE) ---
const Logo = () => (
  <div className="flex items-center">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 700 120" 
      className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto text-white max-w-[180px] sm:max-w-[220px] md:max-w-[260px]"
    >
      <defs>
        <style>
          {`
            .text-forward { font-family: 'Segoe UI', -apple-system, Roboto, sans-serif; font-weight: 700; font-size: 38px; letter-spacing: -0.5px; }
            .text-data { font-family: 'Segoe UI', -apple-system, Roboto, sans-serif; font-weight: 600; font-size: 26px; letter-spacing: 2px; }
            .text-labs { font-family: 'Segoe UI', -apple-system, Roboto, sans-serif; font-weight: 300; font-size: 24px; letter-spacing: 1px; opacity: 0.85; }
            .text-tagline { font-family: 'Segoe UI', -apple-system, Roboto, sans-serif; font-weight: 500; font-size: 11px; letter-spacing: 2px; opacity: 0.7; }
          `}
        </style>
      </defs>
      <g fill="currentColor">
        {/* Icon: Merged Fast-Forward Symbol & Data Geometry */}
        <path d="M 25,25 L 65,60 L 25,95 Z" />
        <path d="M 60,25 L 100,60 L 60,95 Z" />
        <path d="M 103,25 L 109,25 L 109,95 L 103,95 Z" />
        
        {/* Typography */}
        <text x="135" y="62" className="text-forward">FORWARD</text>
        <text x="365" y="46" className="text-data">DATA</text>
        <text x="366" y="74" className="text-labs">LABS</text>
        <text x="137" y="102" className="text-tagline">INNOVATION THROUGH INTELLIGENCE</text>
      </g>
    </svg>
  </div>
);

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// --- COMPONENTS ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0C10]/90 backdrop-blur-md border-b border-[#1F2833]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-300 hover:text-orange-500 transition-colors font-medium text-sm uppercase tracking-wide">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-lg shadow-orange-900/20">
              Book a Sprint
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0B0C10] border-b border-[#1F2833]">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-orange-500 hover:bg-[#1F2833] rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-orange-600 text-white px-6 py-3 rounded-lg font-bold"
            >
              Book a Sprint
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#0B0C10]">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-orange-600/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1F2833]/50 border border-[#1F2833] text-orange-400 text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Forward Deployed Data Engineering
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight">
            Forge Your Data.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-400">
              Deploy Your Future.
            </span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            I don't just advise on strategy. I embed with your team to build, ship, and optimize 
            production-grade SQL, Cloud (Azure/AWS), and AI solutions. 
            <span className="text-white block mt-2 font-semibold">No slide decks. Just working systems.</span>
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <a href="#contact" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-orange-900/25 flex items-center gap-2">
              Start Your Sprint <ArrowRight size={20} />
            </a>
            <a href="#work" className="bg-[#1F2833] hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all border border-[#1F2833] flex items-center gap-2">
              View Case Studies
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Ticker = () => {
  return (
    <div className="bg-[#0B0C10] py-6 border-y border-[#1F2833] overflow-hidden relative">
      <div className="flex whitespace-nowrap animate-[spin_20s_linear_infinite]">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 mx-8">
            {['SQL Server', 'Azure Synapse', 'AWS Redshift', 'Power BI', 'Python', 'Databricks', 'Snowflake', 'AI Models'].map((tech) => (
              <span key={tech} className="text-2xl font-bold text-[#1F2833] uppercase tracking-widest hover:text-orange-500 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    { icon: <Database size={32} />, title: "Data Infrastructure", desc: "End-to-end design and implementation of SQL Server and Cloud Data Warehouses.", tags: ["SQL Server", "Data Warehouse"] },
    { icon: <Cloud size={32} />, title: "Cloud Migration", desc: "Safe, zero-downtime migration from legacy on-prem systems to Azure/AWS.", tags: ["Azure", "AWS", "Migration"] },
    { icon: <Zap size={32} />, title: "AI-Ready Platforms", desc: "Build data pipelines and models ready for AI integration and predictive analytics.", tags: ["AI Integration", "ML Ops"] },
    { icon: <ChartBar size={32} />, title: "BI & Insights", desc: "Interactive dashboards and KPIs that drive real-time decision making.", tags: ["Power BI", "KPIs"] },
    { icon: <ShieldCheck size={32} />, title: "Data Governance", desc: "Solving data entanglement, establishing quality standards, and ensuring security.", tags: ["Quality", "Security"] },
    { icon: <Code2 size={32} />, title: "Optimization", desc: "Performance tuning for SQL queries, cloud costs, and pipeline efficiency.", tags: ["FinOps", "Tuning"] },
  ];

  return (
    <section id="services" className="py-32 bg-[#0B0C10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Engineering Services, Not Just Advice</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              I combine the depth of a senior engineer with the strategy of a consultant. 
              Every service is delivered as a production-grade deployment.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#1F2833] border border-[#1F2833] rounded-2xl p-8 hover:border-orange-500 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-900/10 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full -mr-12 -mt-12 transition-all group-hover:bg-orange-500/10"></div>
              
              <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 bg-[#0B0C10] rounded-full text-slate-300 border border-[#1F2833] group-hover:border-orange-500 group-hover:text-orange-400 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Work = () => {
  const cases = [
    {
      title: "Retail Data Unification",
      desc: "Migrated 5TB of legacy data to Azure Synapse, reducing reporting time by 90%.",
      tags: ["Azure", "Data Migration", "BI"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
    },
    {
      title: "AI-Powered Supply Chain",
      desc: "Built a predictive analytics engine using Python and AWS, saving $2M in inventory costs.",
      tags: ["AWS", "AI/ML", "Python"],
      image: "https://images.unsplash.com/photo-1518186285599-0a20b83a200c?auto=format&fit=crop&q=80&w=2070"
    },
    {
      title: "Real-Time Executive Dashboard",
      desc: "Deployed a single version of truth for C-suite, eliminating conflicting reports.",
      tags: ["Power BI", "SQL Server", "Strategy"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
    }
  ];

  return (
    <section id="work" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Selected Work</h2>
            <p className="text-slate-400 text-lg">Production-grade solutions for complex problems.</p>
          </div>
          <a href="#contact" className="hidden md:flex items-center gap-2 text-orange-500 font-bold hover:underline mt-4 md:mt-0">
            View All Projects <ArrowRight size={18} />
          </a>
        </div>

        <div className="space-y-24">
          {cases.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-video w-full overflow-hidden bg-[#1F2833]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-[#0B0C10]/40 group-hover:bg-[#0B0C10]/20 transition-colors"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-[#0B0C10] via-[#0B0C10]/90 to-transparent">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold uppercase tracking-wider text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300 text-lg max-w-2xl">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { num: "01", title: "Embed & Discover", desc: "I sit with your team, access production data, and identify the real bottlenecks. No abstract workshops." },
    { num: "02", title: "Build & Forge", desc: "I write production-grade code. Pipelines, warehouses, and dashboards are built in your environment." },
    { num: "03", title: "Ship & Handover", desc: "I deliver working systems, train your team, and provide documentation. You own the asset." }
  ];

  return (
    <section id="process" className="py-32 bg-[#0B0C10] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The FDE Methodology</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Outcome ownership. Production-grade delivery. Zero hand-off friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 via-cyan-500 to-orange-500 opacity-30 -z-10"></div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-[#1F2833] border border-[#1F2833] rounded-xl p-8 text-center hover:border-orange-500 transition-colors"
            >
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500 font-bold text-2xl border border-orange-500/30">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-black relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-[#1F2833] border border-[#1F2833] rounded-3xl p-8 md:p-16 relative overflow-hidden"
        >
          {/* Glow Effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-orange-600/20 rounded-full blur-[100px] -z-10"></div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Forge Your Data?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Book a <span className="text-orange-500 font-bold">Discovery Sprint</span> to audit your data, identify quick wins, and map your path to production-ready AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@dataforgelabs.io" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-orange-900/25">
              Book a Sprint ($5k)
            </a>
            <a href="mailto:hello@dataforgelabs.io" className="bg-[#0B0C10] hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all border border-[#1F2833]">
              Email Me Directly
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-[#1F2833]/50">
            <p className="text-slate-500 text-sm">
              Available for remote engagements globally. Based in [Your Location].
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0B0C10] border-t border-[#1F2833] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center font-bold text-white text-xs">DF</div>
          <span className="text-white font-bold text-lg">DataForge<span className="text-orange-500">Labs</span></span>
        </div>
        <div className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} ForwardDataLabs. All rights reserved.
        </div>
        <div className="flex gap-6">
          {['LinkedIn', 'Twitter', 'GitHub'].map((social) => (
            <a key={social} href="#" className="text-slate-400 hover:text-orange-500 transition-colors text-sm font-medium">
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

// --- MAIN APP COMPONENT ---
function App() {
  return (
    <div className="bg-[#0B0C10] text-white font-sans selection:bg-orange-500 selection:text-white">
      <Navbar />
      <Hero />
      <Ticker />
      <Services />
      <Work />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;