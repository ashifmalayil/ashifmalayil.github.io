import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const timelineData = [
    {
        year: 'Jan 2025 - Present',
        title: 'Senior Technical Support Engineer',
        company: 'astTECS',
        description: 'Leading advanced CRM projects with end-to-end responsibility from planning to delivery. Guiding and mentoring junior support engineers. Taking ownership of escalated client issues, complex CRM customizations, and integrations (WhatsApp, Facebook Lead Sync).',
        type: 'work'
    },
    {
        year: 'Jun 2023 - Jan 2025',
        title: 'Technical Support Engineer',
        company: 'astTECS',
        description: 'Implemented CRM solutions for various industries including healthcare and real estate. Coordinated integrations with cloud tools, WhatsApp, Facebook, and call dialers. Provided remote/on-site support, diagnosed issues, and handled CRM deployments.',
        type: 'work'
    },
    {
        year: '2024',
        title: 'IBM Data Analytics Professional Certificate',
        company: 'Coursera',
        description: 'Completed comprehensive data analytics program covering Python, SQL, data visualization, and statistical analysis.',
        type: 'education'
    }
];

const About = () => {
    return (
        <PageTransition>
            <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            About <span className="text-gradient">Me</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            I'm Ashif, a passionate Data Analyst and CRM Specialist with a knack for turning complex problems into simple, elegant solutions.
                            My journey spans across technical support, project management, and advanced data analytics.
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800"></div>

                        <div className="space-y-12">
                            {timelineData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                        }`}
                                >
                                    {/* Dot */}
                                    <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-[5px] top-0 w-3 h-3 rounded-full bg-primary-500 ring-4 ring-white dark:ring-dark-bg z-10"></div>

                                    {/* Content */}
                                    <div className="ml-8 md:ml-0 md:w-1/2">
                                        <div className={`glass-card p-6 rounded-2xl hover:border-primary-500/50 transition-colors ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                                            }`}>
                                            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-500 mb-2">
                                                <Calendar size={14} />
                                                {item.year}
                                            </span>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                                            <div className={`flex items-center gap-2 text-gray-500 text-sm mb-4 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                                                }`}>
                                                {item.type === 'work' ? <Briefcase size={14} /> : <GraduationCap size={14} />}
                                                {item.company}
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Empty space for the other side */}
                                    <div className="hidden md:block md:w-1/2"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default About;
