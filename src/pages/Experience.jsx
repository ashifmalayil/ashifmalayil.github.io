import React from 'react';
import { motion } from 'framer-motion';
import { Building2, CheckCircle2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const experiences = [
    {
        company: "Hospital CRM Implementation",
        role: "Lead Consultant",
        period: "2023",
        points: [
            "Implemented a comprehensive CRM system for a multi-specialty hospital.",
            "Integrated patient records with appointment scheduling, reducing wait times by 30%.",
            "Developed custom dashboards for department heads to track patient flow and resource utilization."
        ]
    },
    {
        company: "Real Estate Agency",
        role: "CRM Specialist",
        period: "2022",
        points: [
            "Customized EspoCRM to manage property listings and client requirements.",
            "Automated lead nurturing workflows, resulting in a 25% increase in conversion rates.",
            "Set up email marketing campaigns targeting specific buyer personas."
        ]
    },
    {
        company: "Sales & Service CRM",
        role: "Project Manager",
        period: "2021",
        points: [
            "Managed the deployment of a Sales & Service CRM for a retail chain.",
            "Trained 50+ staff members on using the new system effectively.",
            "Configured ticketing system for customer support, improving response times by 40%."
        ]
    }
];

const Experience = () => {
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
                            Project <span className="text-gradient">Experience</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Detailed breakdown of my key CRM implementations and data projects.
                        </p>
                    </motion.div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-8 rounded-3xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary-500 to-secondary-500"></div>

                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <Building2 className="text-primary-500" size={24} />
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                                        </div>
                                        <p className="text-lg text-gray-600 dark:text-gray-300">{exp.role}</p>
                                    </div>
                                    <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                                        {exp.period}
                                    </span>
                                </div>

                                <ul className="space-y-4">
                                    {exp.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={18} />
                                            <span className="text-gray-600 dark:text-gray-400 leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Experience;
