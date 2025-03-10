import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const Hero = () => {
	return (
		<section className="pt-32 pb-20 overflow-hidden">
			<div className="container mx-auto px-4">
				<div className="flex flex-col lg:flex-row items-center">
					{/* Left content */}
					<motion.div
						className="w-full lg:w-1/2 mb-12 lg:mb-0"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						<motion.h1
							className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, duration: 0.5 }}
						>
							<span className="block">Modern Lost & Found</span>
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
								For Japanese Startups
							</span>
						</motion.h1>

						<motion.p
							className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3, duration: 0.5 }}
						>
							A cost-effective solution with revenue sharing model. Start with
							minimal investment and scale as your business grows.
						</motion.p>

						<motion.div
							className="flex flex-col sm:flex-row gap-4 mb-10"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4, duration: 0.5 }}
						>
							<motion.button
								className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium flex items-center justify-center gap-2"
								whileHover={{
									scale: 1.05,
									boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
								}}
								whileTap={{ scale: 0.95 }}
								type="button"
							>
								Get Started
								<FaArrowRight />
							</motion.button>

							<motion.button
								className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium flex items-center justify-center"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								type="button"
							>
								Learn More
							</motion.button>
						</motion.div>

						<motion.div
							className="flex flex-col sm:flex-row gap-6"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5, duration: 0.5 }}
						>
							<div className="flex items-center gap-2">
								<FaCheckCircle className="text-green-500" />
								<span className="text-sm text-gray-600 dark:text-gray-400">
									Low Initial Cost
								</span>
							</div>
							<div className="flex items-center gap-2">
								<FaCheckCircle className="text-green-500" />
								<span className="text-sm text-gray-600 dark:text-gray-400">
									Revenue Sharing
								</span>
							</div>
							<div className="flex items-center gap-2">
								<FaCheckCircle className="text-green-500" />
								<span className="text-sm text-gray-600 dark:text-gray-400">
									Scalable Solution
								</span>
							</div>
						</motion.div>
					</motion.div>

					{/* Right illustration */}
					<motion.div
						className="w-full lg:w-1/2 relative"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.2, duration: 0.5 }}
					>
						<div className="relative w-full aspect-square max-w-lg mx-auto">
							<div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-3xl opacity-70" />
							<div className="relative z-10 w-full h-full flex items-center justify-center">
								<svg
									viewBox="0 0 200 200"
									className="w-full h-full"
									aria-hidden="true"
								>
									<defs>
										<linearGradient
											id="gradient"
											x1="0%"
											y1="0%"
											x2="100%"
											y2="100%"
										>
											<stop offset="0%" stopColor="#3B82F6" />
											<stop offset="100%" stopColor="#8B5CF6" />
										</linearGradient>
									</defs>
									<path
										fill="url(#gradient)"
										d="M45.1,-76.4C59.2,-69.7,72.2,-59.5,79.8,-45.8C87.5,-32.1,89.7,-16.1,88.7,-0.6C87.7,14.9,83.5,29.8,75.3,42.5C67.1,55.2,55,65.7,41.2,72.6C27.4,79.5,13.7,82.8,-0.2,83.1C-14.1,83.4,-28.1,80.8,-40.7,74.1C-53.3,67.4,-64.4,56.7,-72.8,43.5C-81.2,30.3,-86.9,15.1,-87.8,-0.5C-88.7,-16.1,-84.8,-32.3,-76.3,-45.6C-67.8,-58.9,-54.7,-69.4,-40.5,-76C-26.3,-82.6,-13.1,-85.3,1.2,-87.3C15.5,-89.3,31,-83.1,45.1,-76.4Z"
										transform="translate(100 100)"
									/>
								</svg>

								<div className="absolute inset-0 flex items-center justify-center">
									<div className="relative w-3/4 h-3/4">
										<div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center transform -rotate-6 animate-float">
											<span className="text-2xl">📱</span>
										</div>
										<div className="absolute top-1/2 right-1/4 w-20 h-20 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center transform rotate-12 animate-float-delayed">
											<span className="text-2xl">🔍</span>
										</div>
										<div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center transform -rotate-12 animate-float-slow">
											<span className="text-3xl">💼</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
