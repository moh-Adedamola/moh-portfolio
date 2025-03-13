import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';

const Navigation = () => (
    <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full bg-slate-800/80 backdrop-blur-sm z-50 shadow-xl"
    >
        <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
                {/* Add onClick to scroll to top */}
                <span
                    className="w-44 cursor-pointer text-4xl font-bold"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    MOH'AD
                </span>

                <div className="flex items-center gap-8 text-gray-300">
                    {["Skills", "Projects", "Experience", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-cyan-400 transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                    <div className="flex gap-4 ml-4">
                        <a href="https://www.linkedin.com/in/mohammed-adegbite-2a6990301/" target="_blank"
                           rel="noopener noreferrer">
                            <Linkedin className="w-6 h-6 hover:text-cyan-400"/>
                        </a>
                        <a href="https://github.com/moh-Adedamola" target="_blank" rel="noopener noreferrer">
                            <Github className="w-6 h-6 hover:text-cyan-400"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </motion.nav>
);

export default Navigation;