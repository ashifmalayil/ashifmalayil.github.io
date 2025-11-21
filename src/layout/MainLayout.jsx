import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-dark-bg transition-colors duration-300 overflow-x-hidden">
            {/* Background Gradients */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-500/20 rounded-full blur-[120px] animate-blob"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary-500/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
                <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-purple-500/20 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
            </div>

            <Navbar />

            <main className="flex-grow pt-20">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;
