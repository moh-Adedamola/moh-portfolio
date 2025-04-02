const Contacts = () => (
    <section id="contact" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto bg-slate-700 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-center mb-8 text-cyan-100">
                    Get in Touch
                </h2>

                <div className="space-y-6 text-center">
                    <div>
                        <p className="text-gray-300 mb-4">
                            Looking for internship opportunities
                        </p>
                        <a
                            href="https://drive.google.com/file/d/1XEr76-9WmmWQQc4l1Z6Ntd1Wks46WW8p/view?usp=sharing"// Replace with your actual CV URL
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-cyan-500 text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-cyan-400 transition-colors"
                        >
                            View Full CV
                        </a>
                    </div>

                    <div className="pt-8 border-t border-slate-600">
                        <p className="text-gray-300">
                            Connect via{' '}
                            <a
                                href="https://www.linkedin.com/in/mohammed-adegbite-2a6990301/"
                                className="text-cyan-400 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>{' '}
                            or explore code on{' '}
                            <a
                                href="https://github.com/moh-Adedamola"
                                className="text-cyan-400 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Contacts