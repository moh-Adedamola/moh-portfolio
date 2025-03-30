import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Menu, X } from "lucide-react";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed w-full bg-slate-800/80 backdrop-blur-sm z-50 shadow-xl"
        >
            <div className="container mx-auto px-6 py-4 flex items-center">
                {/* Logo */}
                <span
                    className="text-2xl font-bold cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    MOH'
                </span>

                {/* Right-side items (pushes everything right with ml-auto) */}
                <div className="ml-auto flex items-center gap-6">
                    {/* Mobile Menu Toggle */}
                    <button className="lg:hidden block text-white" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-6 text-gray-300">
                        {["Skills", "Projects", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="hover:text-cyan-400 transition-colors uppercase font-bold"
                            >
                                {item}
                            </a>
                        ))}

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/mohammed-adegbite-2a6990301/" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="w-6 h-6 hover:text-cyan-400" />
                            </a>
                            <a href="https://github.com/moh-Adedamola" target="_blank" rel="noopener noreferrer">
                                <Github className="w-6 h-6 hover:text-cyan-400" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="lg:hidden flex flex-col items-center gap-4 bg-slate-900 py-4 rounded-lg mt-2 text-white"
                >
                    {["Skills", "Projects", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-cyan-400 transition-colors uppercase font-bold"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <div className="flex gap-4">
                        <a href="https://www.linkedin.com/in/mohammed-adegbite-2a6990301/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-6 h-6 hover:text-cyan-400" />
                        </a>
                        <a href="https://github.com/moh-Adedamola" target="_blank" rel="noopener noreferrer">
                            <Github className="w-6 h-6 hover:text-cyan-400" />
                        </a>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navigation;
