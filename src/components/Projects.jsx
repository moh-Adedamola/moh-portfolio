import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "Fashion Artisans Hub",
            problem: "Fashion artisans struggle to connect with end users needing their services.",
            solution: "A web application connecting artisans with users, built with Java Spring Boot and MySQL for the backend, and Vite React.js for the frontend.",
            impact: "Enabled seamless connections between artisans and users, improving accessibility and business opportunities.",
            tools: ["Java Spring Boot", "MySQL", "Vite React.js", "REST APIs", "Tailwind CSS"],
            details: "Developed the backend with Java Spring Boot for handling user and artisan data, and built a responsive frontend with Vite React.js for an intuitive user experience."
        },
        {
            title: "Library Management System",
            problem: "Inefficient manual processes for book borrowing, returning, and tracking.",
            solution: "A robust library management system allowing users to search for books, check availability, borrow/return books, and track due dates and fines.",
            impact: "Streamlined library operations and improved user experience with automated notifications and catalog search.",
            tools: ["Java Spring Boot", "MySQL", "React.js", "REST APIs", "Bootstrap"],
            details: "Implemented backend logic for book management and user interactions, and integrated an intuitive frontend for catalog search and notifications."
        },
        {
            title: "Quiz Delivery System",
            problem: "Inadequate centralized platform for creating, managing, and taking quizzes.",
            solution: "A comprehensive quiz delivery system allowing users to create quizzes, answer questions in real-time, and track results and progress.",
            impact: "Enhanced user engagement with dynamic question randomization, time-based scoring, and progress tracking.",
            tools: ["Java Spring Boot", "MySQL", "REST APIs"],
            details: "Developed backend APIs for quiz management and real-time interactions, and integrated user authentication and dynamic question randomization."
        }
    ];

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-cyan-100">
                    Technical Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-slate-700 p-6 rounded-xl cursor-pointer hover:bg-slate-600/50 transition-all"
                            onClick={() => setSelectedProject(project)}
                        >
                            <h3 className="text-xl font-bold mb-2 text-cyan-400">
                                {project.title}
                            </h3>
                            <p className="text-gray-300 mb-4">{project.problem}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tools.map((tool) => (
                                    <span
                                        key={tool}
                                        className="bg-slate-600 px-2 py-1 rounded-full text-xs"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </div>
        </section>
    );
};

export default Projects;