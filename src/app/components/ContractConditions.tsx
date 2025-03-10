interface ContractCondition {
	title: string;
	description: string;
}

interface ContractConditionsProps {
	conditions: ContractCondition[];
}

export default function ContractConditions({
	conditions,
}: ContractConditionsProps) {
	return (
		<ul className="space-y-4 text-gray-600 dark:text-gray-400">
			{conditions.map((condition, index) => (
				<li key={`condition-${condition.title}`} className="flex items-start">
					<div className="bg-blue-100 dark:bg-blue-900 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
						<span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white text-xs">
							{index + 1}
						</span>
					</div>
					<div>
						<span className="font-medium text-gray-900 dark:text-white">
							{condition.title}:
						</span>{" "}
						{condition.description}
					</div>
				</li>
			))}
		</ul>
	);
}
