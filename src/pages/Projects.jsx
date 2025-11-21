import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ProjectModal from '../components/ProjectModal';

const projects = [
    {
        id: 1,
        title: "Sales Dashboard",
        category: "Data Visualization",
        description: "An interactive dashboard built with Power BI to track regional sales performance, identifying key growth areas and underperforming sectors. Features include dynamic filtering, drill-down capabilities, and real-time data updates.",
        tags: ["Power BI", "SQL", "DAX"]
    },
    {
        id: 2,
        title: "Customer Churn Prediction",
        category: "Machine Learning",
        description: "A predictive model developed using Python and Scikit-learn to identify customers at risk of churning. The solution includes a comprehensive EDA report and a deployed web interface for real-time predictions.",
        tags: ["Python", "Scikit-learn", "Pandas"]
    },
    {
        id: 3,
        title: "CRM Migration Project",
        category: "CRM Implementation",
        description: "Led the migration of legacy customer data to a modern Salesforce environment for a mid-sized healthcare provider. Ensured 100% data integrity and implemented automated workflows to reduce manual entry by 40%.",
        tags: ["Salesforce", "Data Migration", "ETL"]
    },
    {
        id: 4,
        title: "E-commerce Analytics",
        category: "Data Analysis",
        description: "Comprehensive analysis of e-commerce transaction data to optimize inventory management and pricing strategies. Utilized SQL for complex queries and Tableau for visualization.",
        tags: ["SQL", "Tableau", "Excel"]
    },
    {
        id: 5,
        title: "EspoCRM Customization",
        category: "CRM Development",
        description: "Customized EspoCRM for a real estate agency, adding custom entities for property management and automated email marketing campaigns.",
        tags: ["EspoCRM", "PHP", "MySQL"]
    },
    {
        id: 6,
        title: "Financial Forecasting",
        category: "Financial Analysis",
        description: "Developed a financial forecasting model using advanced Excel macros and VBA to predict quarterly revenue with 95% accuracy.",
        tags: ["Excel", "VBA", "Financial Modeling"]
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

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
                            Featured <span className="text-gradient">Projects</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            A selection of my work in data analytics, CRM implementation, and software development.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setSelectedProject(project)}
                                className="group cursor-pointer"
                            >
                                <div className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-500/20">
                                    <div className="h-48 bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 group-hover:scale-110 transition-transform duration-500"></div>
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400 font-bold text-xl opacity-50">
                                            {project.title}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <span className="text-xs font-medium text-primary-500 uppercase tracking-wider mb-2 block">
                                            {project.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </PageTransition>
    );
};

export default Projects;
