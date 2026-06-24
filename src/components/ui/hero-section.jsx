import React, { useState, useEffect } from 'react';
import { Button } from './button';
import { InfiniteSlider } from './infinite-slider';
import { ProgressiveBlur } from './progressive-blur';
import { cn } from '../../lib/utils';
import { Menu, X, ChevronRight, Brain, Dna, Heart, Activity, Microscope, Telescope, Sparkles, User } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                {/* Container that takes exactly 100vh to fit the screen perfectly without scrolling */}
                <div className="h-screen w-full flex flex-col pt-24 pb-4">
                    <section className="flex-1 relative flex flex-col justify-center min-h-0">
                        {/* Image Background Box constrained to the parent section */}
                        <motion.div 
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="absolute inset-x-1 md:inset-x-4 lg:inset-x-8 top-0 bottom-4 overflow-hidden rounded-3xl border border-white/20 lg:rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] z-0"
                        >
                            <div className="absolute inset-0 bg-black/60 z-10" />
                            <motion.img
                                animate={{ 
                                    scale: [1.05, 1.15, 1.05],
                                    x: [0, 20, -20, 0],
                                    y: [0, -15, 15, 0]
                                }}
                                transition={{ 
                                    duration: 40, 
                                    repeat: Infinity, 
                                    ease: "linear" 
                                }}
                                className="size-full object-cover opacity-90"
                                src="/hero-bg.png"
                                alt="Consciência Sistêmica Background"
                            />
                        </motion.div>

                        <div className="relative z-20 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12 w-full">
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left"
                            >
                                <span className="inline-block py-1 px-3 rounded-full bg-white/20 border border-white/30 text-white text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md shadow-lg">
                                    Transformação Profunda
                                </span>
                                <h1 className="mt-4 max-w-3xl text-balance text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                                    CONSCIÊNCIA SISTÊMICA
                                </h1>
                                <p className="mt-4 max-w-2xl text-balance text-lg md:text-xl text-gray-100 font-semibold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                                    Movidos a paixão e café. <span className="text-white italic">Muito café.</span>
                                </p>

                                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                                    <Button
                                        size="lg"
                                        className="h-14 rounded-full pl-6 pr-4 text-lg bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all">
                                        <a href="#cursos" className="flex items-center">
                                            <span className="text-nowrap font-bold">Descubra os Cursos</span>
                                            <ChevronRight className="ml-2 w-5 h-5" />
                                        </a>
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="ghost"
                                        className="h-14 rounded-full px-6 text-lg border-2 border-white/30 bg-black/40 hover:bg-white/20 text-white font-bold backdrop-blur-md transition-all">
                                        <a href="#about" className="flex items-center">
                                            <span className="text-nowrap">O que é?</span>
                                        </a>
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                <section className="pb-2">
                    <div className="group relative m-auto max-w-7xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-[14rem] md:border-r border-white/10 md:pr-6 mb-4 md:mb-0">
                                <p className="text-center md:text-end text-sm text-gray-400 font-bold uppercase tracking-widest">Os 8 Fundamentos</p>
                            </div>
                            <div className="relative py-6 w-full md:w-[calc(100%-14rem)]">
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    gap={60}>
                                    
                                    <div className="flex items-center gap-2 text-white/50 hover:text-accent transition-colors">
                                        <Heart className="w-6 h-6" /> <span className="font-bold">Constelação</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-white/50 hover:text-accent transition-colors">
                                        <Brain className="w-6 h-6" /> <span className="font-bold">Psicossomática</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-white/50 hover:text-accent transition-colors">
                                        <Activity className="w-6 h-6" /> <span className="font-bold">Neo Reichiana</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-white/50 hover:text-accent transition-colors">
                                        <Microscope className="w-6 h-6" /> <span className="font-bold">Medicina</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-white/50 hover:text-accent transition-colors">
                                        <Dna className="w-6 h-6" /> <span className="font-bold">Genética</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-white/50 hover:text-accent transition-colors">
                                        <Sparkles className="w-6 h-6" /> <span className="font-bold">Física Quântica</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-white/50 hover:text-accent transition-colors">
                                        <Telescope className="w-6 h-6" /> <span className="font-bold">Neurociência</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-white/50 hover:text-accent transition-colors">
                                        <User className="w-6 h-6" /> <span className="font-bold">Coach</span>
                                    </div>

                                </InfiniteSlider>

                                <div className="bg-gradient-to-r from-[#0A1128] absolute inset-y-0 left-0 w-20 z-10"></div>
                                <div className="bg-gradient-to-l from-[#0A1128] absolute inset-y-0 right-0 w-20 z-10"></div>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'Quem Somos', href: '#' },
    { name: 'Fundamentos', href: '#' },
    { name: 'Cursos', href: '#' },
    { name: 'Ibracs', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Loja', href: '#' },
    { name: 'Contato', href: '#' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { scrollYProgress } = useScroll()

    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="group fixed z-50 w-full pt-4">
                <div className={cn('mx-auto max-w-7xl rounded-full px-6 transition-all duration-300 lg:px-12', scrolled && 'bg-black/60 backdrop-blur-2xl border border-white/10 shadow-2xl py-2')}>
                    <motion.div
                        className={cn('relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-4', scrolled && 'lg:py-2')}>
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <a
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <div className="text-white font-bold text-xl tracking-tighter flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm">FF</span>
                                    <span>Consciência Sistêmica</span>
                                </div>
                            </a>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState === true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden text-white">
                                {menuState ? <X className="size-6" /> : <Menu className="size-6" />}
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm font-semibold">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                className="text-gray-300 hover:text-accent block duration-150">
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className={cn("bg-[#0A1128] lg:bg-transparent absolute top-full left-0 w-full mt-4 rounded-2xl p-6 lg:static lg:w-auto lg:p-0 lg:mt-0 transition-all", menuState ? "block" : "hidden lg:flex items-center justify-end")}>
                            <div className="lg:hidden mb-6">
                                <ul className="space-y-4 text-base font-semibold">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                className="text-gray-300 hover:text-accent block duration-150">
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:ml-6">
                                <Button
                                    className="bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full px-6 flex items-center gap-2">
                                    <a href="#">
                                        <User size={16} className="inline mr-2"/>
                                        <span>Portal EAD</span>
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </header>
    )
}
