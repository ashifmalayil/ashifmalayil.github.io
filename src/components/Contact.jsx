import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-black border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                        Let's work <br /> together.
                    </h2>
                    <p className="text-xl text-gray-400 mb-12">
                        Have a project in mind? I'd love to hear about it.
                    </p>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                        <div>
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Contact</h3>
                            <a href="mailto:ashifmalayil885@gmail.com" className="block text-xl text-white hover:text-gray-300 transition-colors mb-2">
                                hello@example.com
                            </a>
                            <p className="text-xl text-white">+1 (555) 123-4567</p>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Socials</h3>
                            <div className="flex flex-col space-y-2">
                                <a href="#" className="text-lg text-white hover:text-gray-300 transition-colors">LinkedIn</a>
                                <a href="#" className="text-lg text-white hover:text-gray-300 transition-colors">GitHub</a>
                                <a href="#" className="text-lg text-white hover:text-gray-300 transition-colors">Twitter</a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
