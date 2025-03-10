import { motion } from "framer-motion";
import Link from "next/link";
import { FaSearch, FaMapMarkerAlt, FaInfoCircle } from "react-icons/fa";

const Header = () => {
	return (
		<motion.header
			className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 shadow-sm"
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ type: "spring", stiffness: 100 }}
		>
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				<Link href="/" className="flex items-center space-x-2">
					<motion.div
						className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
						whileHover={{ scale: 1.05 }}
					>
						<FaMapMarkerAlt className="text-white text-xl" />
					</motion.div>
					<div>
						<h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
							FindFlow
						</h1>
						<p className="text-xs text-gray-500 dark:text-gray-400">
							Lost & Found System
						</p>
					</div>
				</Link>

				<nav className="hidden md:flex items-center space-x-8">
					<NavLink href="#features">Features</NavLink>
					<NavLink href="#pricing">Pricing</NavLink>
					<NavLink href="#about">About</NavLink>
					<NavLink href="#contact">Contact</NavLink>
				</nav>

				<div className="flex items-center space-x-4">
					<motion.button
						className="hidden md:flex items-center space-x-1 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						type="button"
					>
						<FaSearch className="text-gray-500" />
						<span className="text-sm">Search</span>
					</motion.button>

					<motion.button
						className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-sm"
						whileHover={{
							scale: 1.05,
							boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
						}}
						whileTap={{ scale: 0.95 }}
						type="button"
					>
						Get Started
					</motion.button>

					<button
						className="md:hidden text-gray-700 dark:text-gray-300"
						type="button"
						aria-label="Menu"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
			</div>
		</motion.header>
	);
};

const NavLink = ({
	href,
	children,
}: { href: string; children: React.ReactNode }) => {
	return (
		<Link
			href={href}
			className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
		>
			{children}
		</Link>
	);
};

export default Header;
