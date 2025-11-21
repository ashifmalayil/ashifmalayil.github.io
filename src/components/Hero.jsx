import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import TextReveal from './TextReveal';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="max-w-4xl">
                <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-tight">
                    <TextReveal>I build digital</TextReveal>
                    <TextReveal>experiences.</TextReveal>
                </h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-12">
                        Data Analyst & Project Manager based in [Location]. <br />
                        Specializing in turning complex data into clear, actionable insights.
                    </p>

                    <div className="flex flex-wrap gap-6">
                        <a
                            href="#projects"
                            className="text-white border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-all text-lg"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-400 border-b border-gray-400 pb-1 hover:text-white hover:border-white transition-all text-lg"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-4 sm:left-8 animate-bounce"
            >
                <ArrowDown className="text-gray-500" size={24} />
            </motion.div>
        </section>
    );
};

export default Hero;
