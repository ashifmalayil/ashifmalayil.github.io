import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-3xl bg-white dark:bg-dark-card rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full bg-black/10 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-black/20 dark:hover:bg-white/20 transition-colors z-20"
                        >
                            <X size={20} />
                        </button>

                        <div className="h-64 sm:h-80 w-full bg-gray-200 dark:bg-gray-800 relative">
                            {/* Placeholder for project image */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600 text-4xl font-bold bg-gradient-to-br from-primary-500/20 to-secondary-500/20">
                                {project.title}
                            </div>
                        </div>

                        <div className="p-6 sm:p-8">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 text-xs font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h2>

                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                                {project.description}
                            </p>

                            <div className="flex gap-4">
                                <a href="#" className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-colors">
                                    <ExternalLink size={18} />
                                    Live Demo
                                </a>
                                <a href="#" className="flex items-center gap-2 px-6 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                    <Github size={18} />
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
