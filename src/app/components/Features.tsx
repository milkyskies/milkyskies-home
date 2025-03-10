import { motion } from "framer-motion";
import {
	FaSearch,
	FaMapMarkerAlt,
	FaMoneyBillWave,
	FaChartLine,
	FaMobileAlt,
	FaShieldAlt,
} from "react-icons/fa";

const Features = () => {
	const features = [
		{
			id: "registration",
			icon: <FaSearch className="text-3xl text-blue-500" />,
			title: "Easy Item Registration",
			description:
				"Simple and intuitive interface for registering lost or found items with detailed descriptions and photos.",
		},
		{
			id: "location",
			icon: <FaMapMarkerAlt className="text-3xl text-purple-500" />,
			title: "Location Tracking",
			description:
				"Track where items were lost or found with precise location data and interactive maps.",
		},
		{
			id: "cost",
			icon: <FaMoneyBillWave className="text-3xl text-green-500" />,
			title: "Low Initial Cost",
			description:
				"Start with minimal investment thanks to our revenue sharing model designed for startups.",
		},
		{
			id: "scalable",
			icon: <FaChartLine className="text-3xl text-red-500" />,
			title: "Scalable Solution",
			description:
				"The system grows with your business, handling more items and users as you expand.",
		},
		{
			id: "mobile",
			icon: <FaMobileAlt className="text-3xl text-yellow-500" />,
			title: "Mobile Friendly",
			description:
				"Fully responsive design works perfectly on smartphones, tablets, and desktop computers.",
		},
		{
			id: "security",
			icon: <FaShieldAlt className="text-3xl text-indigo-500" />,
			title: "Secure & Private",
			description:
				"Advanced security measures protect user data and item information with encryption.",
		},
	];

	return (
		<section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
			<div className="container mx-auto px-4">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Powerful Features for Your
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
							{" "}
							Lost & Found System
						</span>
					</h2>
					<p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						Our system combines ease of use with powerful functionality, all
						designed to help Japanese startups implement an effective lost &
						found solution.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<motion.div
							key={feature.id}
							className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1, duration: 0.5 }}
							whileHover={{ y: -5 }}
						>
							<div className="mb-4">{feature.icon}</div>
							<h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
							<p className="text-gray-600 dark:text-gray-400">
								{feature.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
