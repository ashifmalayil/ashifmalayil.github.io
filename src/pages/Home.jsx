import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Database, BarChart2, PieChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PageTransition from '../components/PageTransition';

const data = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 2000 },
    { name: 'Apr', value: 2780 },
    { name: 'May', value: 1890 },
    { name: 'Jun', value: 2390 },
    { name: 'Jul', value: 3490 },
];

const Home = () => {
    return (
        <PageTransition>
            <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            Hi, I'm <br />
                            <span className="text-gradient">Ashif Malayil</span>
                        </h1>

                        <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 h-[60px]">
                            I am a{' '}
                            <TypeAnimation
                                sequence={[
                                    'Data Analyst',
                                    2000,
                                    'CRM Specialist',
                                    2000,
                                    'Tech Support Engineer',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                className="text-primary-500 font-semibold"
                                repeat={Infinity}
                            />
                        </div>

                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-lg leading-relaxed">
                            Transforming raw data into actionable insights and optimizing CRM workflows for business growth.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/projects"
                                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-primary-500/30 flex items-center gap-2 group"
                            >
                                View Projects
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/contact"
                                className="px-8 py-4 glass text-gray-900 dark:text-white rounded-xl font-medium hover:bg-white/50 dark:hover:bg-white/10 transition-all flex items-center gap-2"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        {/* Main Glass Card */}
                        <div className="glass-card rounded-3xl p-6 relative z-10 w-full max-w-lg mx-auto transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Growth Analytics</h3>
                                    <p className="text-sm text-gray-500">Monthly Revenue</p>
                                </div>
                                <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
                                    <BarChart2 size={24} />
                                </div>
                            </div>
                            <div className="h-[200px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={data}>
                                        <defs>
                                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <Tooltip
                                            contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                                        />
                                        <Area type="monotone" dataKey="value" stroke="#0ea5e9" fillOpacity={1} fill="url(#colorValue)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Floating Card 1 */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-12 -right-4 glass-card p-4 rounded-2xl z-20 w-48"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
                                    <Database size={20} />
                                </div>
                                <span className="font-semibold text-gray-900 dark:text-white">SQL Expert</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                                <div className="bg-purple-500 h-full w-[95%]"></div>
                            </div>
                        </motion.div>

                        {/* Floating Card 2 */}
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-8 -left-8 glass-card p-4 rounded-2xl z-20 w-48"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500">
                                    <PieChart size={20} />
                                </div>
                                <span className="font-semibold text-gray-900 dark:text-white">Visualization</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                                <div className="bg-orange-500 h-full w-[90%]"></div>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Home;
