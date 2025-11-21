import React from 'react';
import { motion } from 'framer-motion';
import { Database, FileSpreadsheet, Code, BarChart, Layout, Server } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const skills = [
    {
        category: "Data Analysis",
        icon: <Database size={24} />,
        items: [
            { name: "SQL", level: 90 },
            { name: "Excel (Advanced)", level: 95 },
            { name: "Python (Pandas/NumPy)", level: 85 },
        ]
    },
    {
        category: "Visualization",
        icon: <BarChart size={24} />,
        items: [
            { name: "Power BI", level: 90 },
            { name: "Tableau", level: 85 },
            { name: "Google Data Studio", level: 80 },
        ]
    },
    {
        category: "CRM & Cloud",
        icon: <Server size={24} />,
        items: [
            { name: "Salesforce", level: 75 },
            { name: "EspoCRM", level: 90 },
            { name: "AWS Basics", level: 70 },
        ]
    },
    {
        category: "Project Management",
        icon: <Layout size={24} />,
        items: [
            { name: "Agile/Scrum", level: 85 },
            { name: "JIRA", level: 80 },
            { name: "Stakeholder Management", level: 90 },
        ]
    }
];

const Skills = () => {
    return (
        <PageTransition>
            <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Technical <span className="text-gradient">Skills</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            A comprehensive toolkit for data analysis, visualization, and project management.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skills.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-8 rounded-3xl hover:border-primary-500/30 transition-all duration-300 group"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-primary-500/10 rounded-xl text-primary-500 group-hover:scale-110 transition-transform duration-300">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.category}</h3>
                                </div>

                                <div className="space-y-6">
                                    {category.items.map((skill, idx) => (
                                        <div key={idx}>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                                                <span className="text-primary-500 font-medium">{skill.level}%</span>
                                            </div>
                                            <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 1, delay: 0.5 }}
                                                    className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Skills;
