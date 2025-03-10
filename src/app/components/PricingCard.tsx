import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FaCheckCircle } from "react-icons/fa";

interface PricingCardProps {
	title: string;
	icon: IconType;
	iconColor: string;
	children: ReactNode;
	delay?: number;
}

export default function PricingCard({
	title,
	icon: Icon,
	iconColor,
	children,
	delay = 0.2,
}: PricingCardProps) {
	return (
		<motion.div
			className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-10"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay, duration: 0.5 }}
		>
			<div className="p-8 sm:p-10">
				<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
					<Icon className={`mr-3 ${iconColor}`} />
					{title}
				</h2>
				{children}
			</div>
		</motion.div>
	);
}

export function PricingFeature({ children }: { children: ReactNode }) {
	return (
		<li className="flex items-start">
			<FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
			<span>{children}</span>
		</li>
	);
}

export function PricingFeatureList({ children }: { children: ReactNode }) {
	return (
		<ul className="space-y-3 text-gray-600 dark:text-gray-400">{children}</ul>
	);
}
