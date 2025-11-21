import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Sales Dashboard',
            category: 'Data Visualization',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
            link: '#'
        },
        {
            title: 'CRM Migration',
            category: 'Project Management',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop',
            link: '#'
        },
        {
            title: 'Support Automation',
            category: 'Process Improvement',
            image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1600&auto=format&fit=crop',
            link: '#'
        },
        {
            title: 'Market Analysis',
            category: 'Research',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
            link: '#'
        }
    ];

    return (
        <section id="projects" className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-12">Selected Work</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.a
                            href={project.link}
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group block"
                        >
                            <div className="relative overflow-hidden aspect-[4/3] mb-4 bg-gray-900">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black p-2 rounded-full">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>
                            <div className="flex justify-between items-end">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-gray-300 transition-colors">{project.title}</h3>
                                    <p className="text-gray-500 text-sm">{project.category}</p>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
