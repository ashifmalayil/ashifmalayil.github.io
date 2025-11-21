import React from 'react';
import { motion } from 'framer-motion';

const TextReveal = ({ children, className = "" }) => {
    return (
        <div className={`overflow-hidden ${className}`}>
            <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default TextReveal;
