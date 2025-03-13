import { motion } from 'framer-motion';
const Hero = () => (
    <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
            >
                {/* Text Content */}
                <div>
                    <h1 className="text-5xl font-bold mb-6 text-cyan-100">
                        Mohammed Adegbite
                    </h1>
                    <h2 className="text-3xl mb-8 font-light text-cyan-400">
                        Computer scientist, Software Engineer & Problem Solver
                    </h2>
                    <p className="text-lg mb-12 text-gray-300 max-w-2xl">
                        As a Software Engineer with a basic foundation in Computer Science, I leverage technology to
                        solve real-world problems, from building scalable web applications to optimizing backend
                        systems. My approach combines <span
                        className="text-cyan-400">design thinking insights</span> with <span className="text-cyan-400">robust software engineering practices</span> to
                        deliver efficient, maintainable, and impactful solutions.
                    </p>
                    <div className="flex space-x-6">
                        <a
                            href="#contact" // Links to the contact section
                            className="bg-cyan-500 text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-cyan-400 transition-all"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <motion.div
                    initial={{opacity: 0, scale: 0.9}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{delay: 0.2}}
                    className="relative group"
                >
                    {/* Glow Effect */}
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-all" />

                    {/* Your Image */}
                    <img
                        src={new URL('../assets/port_image.jpg', import.meta.url).href}
                        alt="Moh Adegbite"
                        className="relative rounded-3xl w-full h-auto border-2 border-cyan-500/20"
                    />

                </motion.div>
            </motion.div>
        </div>
    </section>
);

export default Hero;