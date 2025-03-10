interface PricingTableRow {
	item: string;
	description: string;
	price: string;
}

interface PricingTableProps {
	rows: PricingTableRow[];
}

export default function PricingTable({ rows }: PricingTableProps) {
	return (
		<div className="overflow-x-auto">
			<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
				<thead>
					<tr className="bg-gray-50 dark:bg-gray-800">
						<th className="px-6 py-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b border-gray-200 dark:border-gray-700">
							料金項目
						</th>
						<th className="px-6 py-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b border-gray-200 dark:border-gray-700">
							内容
						</th>
						<th className="px-6 py-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b border-gray-200 dark:border-gray-700">
							料金
						</th>
					</tr>
				</thead>
				<tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
					{rows.map((row, index) => (
						<tr key={row.item}>
							<td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
								{row.item}
							</td>
							<td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">
								{row.description}
							</td>
							<td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400 font-semibold">
								{row.price}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
