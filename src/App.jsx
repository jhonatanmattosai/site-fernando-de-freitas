import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Phone, User, PlayCircle, Calendar, ArrowRight, MapPin, Mail, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { CircularGallery } from './components/ui/circular-gallery';
import { HeroSection } from './components/ui/hero-section';

gsap.registerPlugin(ScrollTrigger);

// ===== UI COMPONENTS =====

const GlassNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Quem Somos", "Fundamentos", "Cursos", "Atendimentos", "Ibracs", "Blog", "Loja", "Contato"];

  return (
    <motion.nav 
      initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className={`flex items-center justify-between rounded-full px-6 py-4 transition-all duration-300 ${scrolled ? 'bg-black/60 backdrop-blur-lg border border-white/10 shadow-2xl' : 'bg-transparent'}`}>
          <div className="text-white font-bold text-xl tracking-tighter flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm">FF</span>
            <span>Consciência Sistêmica</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map(item => (
              <a key={item} href="#" className="text-sm font-semibold text-gray-200 hover:text-accent transition-colors">
                {item}
              </a>
            ))}
            <a href="#" className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all flex items-center gap-2">
              <User size={16}/> Portal EAD
            </a>
          </div>

          <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

const HeroModern = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0A1128] flex items-center justify-center">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128]/40 via-[#0A1128]/80 to-[#0A1128] z-10" />
        <img src="https://www.fernandofreitascs.com.br/imagens/bg-video.jpg" className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity" alt="Background" />
      </motion.div>

      {/* Abstract Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] z-0 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/10 rounded-full blur-[120px] z-0" />

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}>
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
            Transformação Profunda
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 tracking-tighter leading-tight mb-8"
        >
          CONSCIÊNCIA<br/>SISTÊMICA
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mx-auto mb-12"
        >
          Movidos a paixão e café. <span className="text-white italic">Muito café.</span>
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 rounded-full bg-accent text-white font-bold text-lg hover:bg-yellow-600 transition-colors shadow-[0_0_30px_rgba(212,163,115,0.4)] flex items-center gap-2">
            Descubra os Cursos <ArrowRight size={20} />
          </button>
          <button className="px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-md flex items-center gap-2">
            <PlayCircle size={20} /> O que é?
          </button>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-xs uppercase tracking-widest font-bold">Role para explorar</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </div>
  );
};

const BentoGrid = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=2000",
        scrub: 1,
        pin: true,
      }
    });

    // O zoom escalando a div wrapper que contém o SVG
    tl.fromTo(".bento-svg-wrapper", 
      { scale: 1 },
      { scale: 60, duration: 0.8, ease: "power2.in" }
    )
    // Faz o overlay desaparecer suavemente quando o texto já está gigante
    .to(".bento-svg-wrapper", {
      opacity: 0,
      duration: 0.2
    }, "-=0.2");
  }, { scope: containerRef });

  const items = [
    { title: "Constelação", icon: Network, col: "col-span-1 md:col-span-2", row: "row-span-2", bgImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" },
    { title: "Psicossomática", icon: Activity, col: "col-span-1", row: "row-span-1", bgImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80" },
    { title: "Neo Reichiana", icon: PersonStanding, col: "col-span-1", row: "row-span-1", bgImage: "https://images.unsplash.com/photo-1520694478166-daaaaec95b69?auto=format&fit=crop&w=800&q=80" },
    { title: "Medicina", icon: Stethoscope, col: "col-span-1", row: "row-span-2", bgImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" },
    { title: "Genética", icon: Dna, col: "col-span-1 md:col-span-2", row: "row-span-1", bgImage: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80" },
    { title: "Física Quântica", icon: Atom, col: "col-span-1", row: "row-span-1", bgImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80" },
    { title: "Neurociência", icon: Brain, col: "col-span-1", row: "row-span-1", bgImage: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80" },
    { title: "Coach", icon: Target, col: "col-span-1 md:col-span-3", row: "row-span-1", bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" }
  ];

  return (
    <div ref={containerRef} className="relative w-full bg-white overflow-hidden rounded-b-[40px]">
       
       {/* Overlay em SVG (Perfeito recorte de buraco sem mix-blend-mode) */}
       <div className="absolute inset-0 z-50 pointer-events-none">
          <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">
             <div className="bento-svg-wrapper w-full h-full flex items-center justify-center" style={{ transformOrigin: 'center center', willChange: 'transform' }}>
               <svg className="w-full h-full">
                 <defs>
                   <mask id="hole-mask">
                     <rect width="100%" height="100%" fill="white" />
                     <text 
                       x="50%" y="50%" 
                       textAnchor="middle" 
                       dominantBaseline="middle" 
                       fill="black" 
                       className="font-black tracking-tighter"
                       style={{ fontSize: '15vw' }}
                     >
                       CONSCIÊNCIA
                     </text>
                   </mask>
                 </defs>
                 <rect width="100%" height="100%" fill="#02050A" mask="url(#hole-mask)" />
               </svg>
             </div>
          </div>
       </div>

       {/* Conteúdo do Bento Grid (Fundo Branco) */}
       <div id="bento-content" className="relative z-0 min-h-screen flex flex-col justify-center py-32">
            <div className="max-w-7xl mx-auto px-4 relative z-10 w-full mt-20">
              <div className="mb-20 reveal-left">
                <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4">A FUNDAÇÃO</h2>
                <p className="text-gray-600 text-lg max-w-2xl">Uma abordagem profunda que integra 8 ciências essenciais para compreender a complexidade humana.</p>
              </div>
            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] gap-4">
              {items.map((item, i) => {
                const Icon = item.icon;
                return (
                <div 
                  key={i} 
                  className={`reveal-up group relative rounded-3xl overflow-hidden bg-black/5 border border-black/10 p-6 flex flex-col justify-end ${item.col} ${item.row} cursor-pointer`}
                >
                  <img src={item.bgImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-all duration-500"/>
                  <Icon className="absolute top-6 right-6 w-10 h-10 text-white/90 group-hover:text-white group-hover:-translate-y-2 transition-all duration-500 drop-shadow-2xl z-10" strokeWidth={1.5} />
                  <h3 className="relative z-10 text-xl md:text-2xl font-bold text-white transition-colors leading-tight drop-shadow-lg">{item.title}</h3>
                </div>
              )})}
            </div>
          </div>
       </div>
    </div>
  );
};

const CoursesCircular = () => {
  const courses = [
    { 
      common: "O Verdadeiro Problema | Infidelidade", 
      binomial: "Curso Online",
      photo: { url: "https://www.fernandofreitascs.com.br/imagens/cursos/img/banneinfidelidade500x700.png", text: "Infidelidade", by: "Instituto CS" }
    },
    { 
      common: "O Verdadeiro Problema | Câncer", 
      binomial: "Curso Online",
      photo: { url: "https://www.fernandofreitascs.com.br/imagens/cursos/img/constelacao-cancer500x700.png", text: "Câncer", by: "Instituto CS" }
    },
    { 
      common: "O Verdadeiro Problema | Depressão", 
      binomial: "Curso Online",
      photo: { url: "https://www.fernandofreitascs.com.br/imagens/cursos/img/bannerdepressao-500x700.png", text: "Depressão", by: "Instituto CS" }
    },
    { 
      common: "O Verdadeiro Problema | Suicídio", 
      binomial: "Curso Online",
      photo: { url: "https://www.fernandofreitascs.com.br/imagens/cursos/img/curso-constelacao-suicidio.jpg", text: "Suicídio", by: "Instituto CS" }
    },
    { 
      common: "Consciência Sistêmica Online", 
      binomial: "Curso de Formação",
      photo: { url: "https://www.fernandofreitascs.com.br/imagens/cursos/img/curso-constelacao-sistemica-online.png", text: "Formação", by: "Instituto CS" }
    },
    { 
      common: "Constelação com Bonecos", 
      binomial: "Curso Online",
      photo: { url: "https://www.fernandofreitascs.com.br/imagens/cursos/img/constelacao-indivisual-bonecos.png", text: "Bonecos", by: "Instituto CS" }
    },
    { 
      common: "Distúrbios Alimentares", 
      binomial: "O Verdadeiro Problema",
      photo: { url: "https://www.fernandofreitascs.com.br/imagens/cursos/img/banner-disturbioalimentares500x700.png", text: "Alimentar", by: "Instituto CS" }
    },
    { 
      common: "Abuso", 
      binomial: "O Verdadeiro Problema",
      photo: { url: "https://www.fernandofreitascs.com.br/imagens/cursos/img/bannerabuso500x700.png", text: "Abuso", by: "Instituto CS" }
    },
    { 
      common: "Dinheiro e Prosperidade", 
      binomial: "O Verdadeiro Problema",
      photo: { url: "https://www.fernandofreitascs.com.br/imagens/cursos/img/bannerdinheiro500x700.png", text: "Dinheiro", by: "Instituto CS" }
    },
    { 
      common: "Intimidade Sistêmica", 
      binomial: "Curso Online",
      photo: { url: "https://www.fernandofreitascs.com.br/imagens/cursos/img/cq-site-ff-500x700-px-lateral-.png", text: "Intimidade", by: "Instituto CS" }
    }
  ];

  return (
    <div className="w-full text-white overflow-hidden relative">
      <div className="w-full relative h-[500px] md:h-[1000px] flex flex-col items-center justify-center overflow-hidden py-10 md:py-20">
        
        <div className="text-center absolute top-8 md:top-16 z-10 w-full px-4 pointer-events-none reveal-up">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">CATÁLOGO EXCLUSIVO</h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">Role a página ou aguarde a rotação 3D para explorar os cursos projetados para curar, ensinar e transformar realidades.</p>
        </div>

        <div className="w-full h-full mt-24 md:mt-32">
          <CircularGallery items={courses} radius={window.innerWidth < 768 ? 300 : 650} autoRotateSpeed={0.15} />
        </div>
      </div>
    </div>
  );
};

const SomosHumanosAccordion = () => {
    const embaixadores = [
        { name: "Carla Queiroz", role: "Palestrante & Especialista", img: "https://www.fernandofreitascs.com.br/imagens/profissionais/carla-queiroz-22.jpg", bio: "Focada em relacionamentos e terapia familiar profunda." },
        { name: "Dr Fernando de Freitas", role: "Criador do Método", img: "https://www.fernandofreitascs.com.br/imagens/profissionais/ffcsavatar.jpg", bio: "Médico e criador da metodologia Consciência Sistêmica." },
        { name: "Luiza Freitas", role: "Embaixadora Jovem", img: "https://www.fernandofreitascs.com.br/imagens/profissionais/luiza-freitas.jpg", bio: "Traz a visão contemporânea da abordagem sistêmica." },
        { name: "Tiko Santos", role: "Treinador Master", img: "https://www.fernandofreitascs.com.br/imagens/profissionais/tikosantos-nova.jpg", bio: "Especialista em dinâmicas corporais e análise neo-reichiana." }
    ];

    const [active, setActive] = useState(1); // Default to Fernando

    return (
        <div className="py-32 relative">
            {/* Background texture */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.fernandofreitascs.com.br/imagens/bg-teia.png')] bg-repeat" />
            
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16 reveal-up">
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">SOMOS HUMANOS</h2>
                    <p className="text-accent text-lg font-medium tracking-wide uppercase">As mentes por trás do método</p>
                </div>

                <div className="flex flex-col md:flex-row h-[600px] w-full gap-2 md:gap-4 overflow-hidden rounded-3xl">
                    {embaixadores.map((person, idx) => (
                        <motion.div 
                            key={idx}
                            layout
                            onClick={() => setActive(idx)}
                            onMouseEnter={() => setActive(idx)}
                            className={`relative h-full overflow-hidden cursor-pointer rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${active === idx ? 'md:flex-[4] flex-[2]' : 'md:flex-[1] flex-[0.5]'}`}
                        >
                            <img src={person.img} alt={person.name} className="absolute inset-0 w-full h-full object-cover object-top" />
                            <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500 ${active === idx ? 'opacity-80' : 'opacity-40'}`} />
                            
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end h-full">
                                <motion.div layout className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-accent/20 backdrop-blur-md border border-accent/50 flex items-center justify-center flex-shrink-0 text-accent font-bold">
                                        {person.name.charAt(0)}
                                    </div>
                                    <div className={`whitespace-nowrap transition-opacity duration-300 ${active === idx ? 'opacity-100' : 'opacity-0 hidden md:block'}`}>
                                        <h3 className="text-2xl font-bold text-white">{person.name}</h3>
                                        <p className="text-accent text-sm font-semibold">{person.role}</p>
                                    </div>
                                </motion.div>
                                
                                <AnimatePresence>
                                    {active === idx && (
                                        <motion.p 
                                            initial={{ opacity: 0, height: 0 }} 
                                            animate={{ opacity: 1, height: "auto" }} 
                                            exit={{ opacity: 0, height: 0 }}
                                            className="text-gray-300 mt-4 max-w-md hidden md:block"
                                        >
                                            {person.bio}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const BlogCreative = () => {
    const posts = [
        { category: "Constelação", title: "O Poder da Constelação Sistêmica", img: "captura-de-tela-2024-02-20-103748.png" },
        { category: "Saúde", title: "A dinâmica do câncer (Outubro Rosa)", img: "outubro-rosa-consciencia-sistemica.jpg" },
        { category: "Metodologia", title: "Você sabe o que é o 'Consciência Sistêmica'?", img: "consciencia-blog.png" }
    ];

    return (
        <div className="py-32 relative">
             <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 reveal-left">
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">PENSAMENTOS <br/><span className="text-gray-600">&</span> REFLEXÕES</h2>
                    <button className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white hover:text-black transition-colors">
                        Acessar o Blog Completo
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, i) => (
                        <div 
                            key={i} className="group relative reveal-up"
                        >
                            <div className="relative h-80 rounded-3xl overflow-hidden mb-6">
                                <img src={`https://www.fernandofreitascs.com.br/imagens/blog/img/${post.img}`} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/10">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white leading-snug group-hover:text-accent transition-colors">
                                {post.title}
                            </h3>
                            <div className="w-12 h-1 bg-white/20 mt-6 group-hover:w-full group-hover:bg-accent transition-all duration-500" />
                        </div>
                    ))}
                </div>
             </div>
        </div>
    );
};

const ModernFooter = () => {
    return (
        <footer className="text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
            {/* Glowing orb in footer */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-gradient-to-r from-accent to-[#b37042] rounded-3xl p-10 md:p-16 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden reveal-up">
                    <div className="absolute inset-0 bg-[url('https://www.fernandofreitascs.com.br/imagens/bg-teia.png')] opacity-10 mix-blend-overlay" />
                    <h2 className="text-3xl md:text-4xl font-black text-white leading-tight max-w-2xl relative z-10">
                        Seja um licenciado e leve a Consciência Sistêmica para a sua cidade!
                    </h2>
                    <button className="relative z-10 px-8 py-4 bg-white text-[#b37042] rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform whitespace-nowrap">
                        Saiba como funciona
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative z-10">
                    <div className="col-span-1 md:col-span-2">
                        <div className="mb-6">
                            <img src="https://www.fernandofreitascs.com.br/imagens/fernando-freitas-logo.png" alt="Fernando Freitas Consciência Sistêmica" className="h-16 md:h-20 object-contain" />
                        </div>
                        <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
                            Integrando Terapia Sistêmica, Psicoterapia Corporal, Análise Psicossomática e Coaching para uma transformação integral.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all text-gray-400 hover:text-white">F</a>
                            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all text-gray-400 hover:text-white">Y</a>
                            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all text-gray-400 hover:text-white">I</a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="text-white font-bold mb-6">Contato</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-start gap-3"><MapPin size={18} className="text-accent flex-shrink-0 mt-1"/> Av. Áurea Apparecida Braguetto Machado, 650 - Ribeirão Preto</li>
                            <li className="flex items-center gap-3"><Phone size={18} className="text-accent flex-shrink-0"/> +55 16 3635-9663</li>
                            <li className="flex items-center gap-3"><Mail size={18} className="text-accent flex-shrink-0"/> contato@fernandofreitascs.com.br</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-accent transition-colors">Portal EAD</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Quem Somos</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Cursos Oferecidos</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Loja Oficial</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm mt-16 pt-8 border-t border-white/5">
                    <p>© 2026 Fernando Freitas CS. Todos os direitos reservados.</p>
                    <p>Desenvolvido por <a href="https://crasto.ai" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-accent transition-colors">CRASTO.AI</a></p>
                </div>
            </div>

            {/* Fab Whatsapp */}
            <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: "spring" }}
                className="fixed bottom-6 right-6 z-50 group cursor-pointer"
            >
                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-xl border border-white/20 text-white text-sm px-4 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    Fale conosco agora!
                </div>
                <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform">
                    <Phone className="w-8 h-8 text-white" />
                </div>
            </motion.div>
        </footer>
    );
};

export default function App() {
  useGSAP(() => {
    gsap.utils.toArray('.reveal-up').forEach((elem) => {
      gsap.fromTo(elem, 
        { y: 80, opacity: 0, filter: 'blur(15px)' }, 
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1, scrollTrigger: { trigger: elem, start: 'top 95%', end: 'top 60%', scrub: 1 } }
      );
    });

    gsap.utils.toArray('.reveal-left').forEach((elem) => {
      gsap.fromTo(elem, 
        { x: -80, opacity: 0, filter: 'blur(15px)' }, 
        { x: 0, opacity: 1, filter: 'blur(0px)', duration: 1, scrollTrigger: { trigger: elem, start: 'top 95%', end: 'top 60%', scrub: 1 } }
      );
    });

    gsap.utils.toArray('.reveal-right').forEach((elem) => {
      gsap.fromTo(elem, 
        { x: 80, opacity: 0, filter: 'blur(15px)' }, 
        { x: 0, opacity: 1, filter: 'blur(0px)', duration: 1, scrollTrigger: { trigger: elem, start: 'top 95%', end: 'top 60%', scrub: 1 } }
      );
    });

  });

  return (
    <div className="min-h-screen bg-[#02050A] font-sans selection:bg-accent selection:text-white relative">
      {/* GLOBAL FLUID BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060D20] via-[#02050A] to-[#060D20]" />
        
        {/* Creative ambient glows */}
        <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-[40%] right-[0%] w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-[0%] -left-[10%] w-[40vw] h-[40vw] bg-purple-900/10 rounded-full blur-[130px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s' }} />
        
        {/* Subtle texture overlay for premium feel */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay" />
      </div>

      <div className="relative z-10 overflow-x-hidden">
        <HeroSection />
        <CoursesCircular />
        
        {/* Soft edge transition TO BentoGrid */}
        <div className="w-full h-48 bg-gradient-to-b from-transparent to-[#02050A] -mb-1 relative z-20 pointer-events-none" />
        
        <BentoGrid />
        
        {/* Soft edge transition FROM BentoGrid */}
        <div className="w-full h-48 bg-gradient-to-t from-transparent to-[#02050A] relative z-20 pointer-events-none" />

        <SomosHumanosAccordion />
        <BlogCreative />
        <ModernFooter />
      </div>
    </div>
  );
}
