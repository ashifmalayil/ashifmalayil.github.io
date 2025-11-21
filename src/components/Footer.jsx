import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-gray-200 dark:border-gray-800 mt-20 glass">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    © {new Date().getFullYear()} Ashif Malayil. All rights reserved.
                </p>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/ashifmalayil" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-500 transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/ashifmalayil" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-500 transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:ashifmalayil885@gmail.com" className="text-gray-500 hover:text-primary-500 transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
