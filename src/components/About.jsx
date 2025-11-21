import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 bg-black border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
	    <h1>Hello Ashif</h1>
                        <h2 className="text-sm font-bold text-gray-500 tracking-widest uppercase sticky top-24">About Me 1</h2>
                    </div>

                    <div className="md:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8 text-gray-300 text-lg md:text-xl leading-relaxed"
                        >
                            <p>
                                I am a data-driven professional with a passion for clarity. My work sits at the intersection of technical analysis and strategic project management.
                            </p>
                            <p>
                                With over 3 years of experience, I've helped organizations make sense of their data and optimize their workflows. I believe that the best solutions are often the simplest ones.
                            </p>
                            <p>
                                When I'm not analyzing datasets or managing CRM implementations, I'm likely exploring new technologies or refining my craft.
                            </p>

                            <div className="pt-8 grid grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-white font-bold mb-4">Experience</h3>
                                    <ul className="space-y-2 text-base text-gray-400">
                                        <li>Data Analyst @ Company</li>
                                        <li>CRM Manager @ Company</li>
                                        <li>Support Engineer @ Company</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-4">Skills</h3>
                                    <ul className="space-y-2 text-base text-gray-400">
                                        <li>SQL & Python</li>
                                        <li>Tableau & Power BI</li>
                                        <li>Project Management</li>
                                        <li>Technical Support</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
