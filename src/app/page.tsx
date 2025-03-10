"use client";

import { useState } from "react";
import {
	FaCheckCircle,
	FaArrowRight,
	FaYenSign,
	FaChartLine,
	FaHandshake,
	FaFileContract,
	FaRocket,
	FaGraduationCap,
	FaCog,
} from "react-icons/fa";
import { motion } from "framer-motion";
import PricingCard, {
	PricingFeature,
	PricingFeatureList,
} from "./components/PricingCard";
import PricingTable from "./components/PricingTable";
import ContractConditions from "./components/ContractConditions";

const PRICING_TABS = [
	{ id: "startup", label: "QUICK START" },
	{ id: "accelerator", label: "ACCELERATE" },
	{ id: "revenue-share", label: "GROWTH PARTNER" },
	{ id: "growth", label: "SCALE UP" },
	{ id: "custom", label: "ENTERPRISE" },
] as const;

type PricingTab = (typeof PRICING_TABS)[number]["id"];

export default function Home() {
	const [activeTab, setActiveTab] = useState<PricingTab>("startup");

	return (
		<div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
			{/* Decorative elements */}
			<div className="absolute top-20 right-10 w-16 h-16 bg-blue-500/10 dark:bg-blue-500/20 rounded-full animate-float" />
			<div className="absolute top-40 left-10 w-24 h-24 bg-purple-500/10 dark:bg-purple-500/20 rounded-full animate-float-delayed" />
			<div className="absolute bottom-20 right-20 w-20 h-20 bg-green-500/10 dark:bg-green-500/20 rounded-full animate-float-slow" />

			<div className="absolute top-1/4 right-1/4 opacity-20 dark:opacity-10">
				<FaYenSign className="text-6xl text-blue-500" />
			</div>
			<div className="absolute bottom-1/4 left-1/4 opacity-20 dark:opacity-10">
				<FaChartLine className="text-6xl text-purple-500" />
			</div>
			<div className="absolute top-3/4 right-1/3 opacity-20 dark:opacity-10">
				<FaHandshake className="text-6xl text-green-500" />
			</div>

			<main className="max-w-4xl mx-auto relative z-10">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h1 className="text-4xl sm:text-5xl font-bold mb-6">
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
							料金プラン
						</span>
					</h1>
					<p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
						スタートアップの成長に合わせた柔軟な料金プラン
					</p>
				</motion.div>

				{/* Tabs */}
				<div className="flex justify-center mb-12 overflow-x-auto">
					<div className="bg-white dark:bg-gray-800 rounded-full p-1">
						<div className="flex space-x-1">
							{PRICING_TABS.map((tab) => (
								<button
									key={tab.id}
									type="button"
									onClick={() => setActiveTab(tab.id)}
									className={`shadow-md px-6 py-2 rounded-full text-sm font-bold transition-colors whitespace-nowrap ${
										activeTab === tab.id
											? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
											: "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
									}`}
								>
									{tab.label}
								</button>
							))}
						</div>
					</div>
				</div>

				{/* Revenue Share Plan */}
				{activeTab === "revenue-share" && (
					<>
						<PricingCard
							title="GROWTH PARTNER プラン"
							icon={FaChartLine}
							iconColor="text-blue-500"
						>
							<PricingFeatureList>
								<PricingFeature>
									成功報酬型の革新的なパートナーシッププラン
								</PricingFeature>
								<PricingFeature>
									初期費用を抑え、成長に応じた料金体系で長期的な協力関係を構築
								</PricingFeature>
								<PricingFeature>
									開発からグロースまで、包括的なテクニカルサポート
								</PricingFeature>
							</PricingFeatureList>
						</PricingCard>

						<PricingCard
							title="料金詳細"
							icon={FaYenSign}
							iconColor="text-green-500"
							delay={0.3}
						>
							<PricingTable
								rows={[
									{
										item: "初期開発費",
										description: "基本開発",
										price: "¥350,000",
									},
									{
										item: "レベニューシェア (1-3ヶ月)",
										description: "立ち上げ期",
										price: "売上の3%",
									},
									{
										item: "レベニューシェア (4-9ヶ月)",
										description: "成長期",
										price: "売上の5%",
									},
									{
										item: "レベニューシェア (10ヶ月以降)",
										description: "安定期",
										price: "売上の8% (〜¥10M), 5% (¥10M〜)",
									},
								]}
							/>
							<div className="mt-6 text-gray-700 dark:text-gray-300 text-sm">
								<p className="mb-2">
									<span className="font-semibold">段階的レベニューシェア:</span>{" "}
									スタートアップの成長段階に合わせて料率が変動します。初期は低い料率で負担を抑え、成長に伴って段階的に増加します。
								</p>
								<p className="mb-2">
									<span className="font-semibold">最低月額保証:</span>{" "}
									プレローンチ期は¥40,000/月、初期成長期は¥70,000/月、安定期は¥100,000/月の最低保証額があります。
								</p>
								<p>
									<span className="font-semibold">バイアウトオプション:</span>{" "}
									18ヶ月以内の場合は過去12ヶ月の平均月額×15、以降は×18で契約を終了できます。
								</p>
							</div>
						</PricingCard>

						<PricingCard
							title="最低月額"
							icon={FaYenSign}
							iconColor="text-purple-500"
							delay={0.4}
						>
							<PricingTable
								rows={[
									{
										item: "プレローンチ期",
										description: "開発〜ローンチまで",
										price: "¥40,000/月",
									},
									{
										item: "初期成長期",
										description: "ローンチ後6ヶ月",
										price: "¥70,000/月",
									},
									{
										item: "安定期",
										description: "7ヶ月目以降",
										price: "¥100,000/月",
									},
								]}
							/>
						</PricingCard>

						<PricingCard
							title="契約条件"
							icon={FaFileContract}
							iconColor="text-purple-500"
							delay={0.5}
						>
							<ContractConditions
								conditions={[
									{
										title: "契約期間",
										description: "最低契約期間は12ヶ月間",
									},
									{
										title: "バイアウトオプション",
										description:
											"18ヶ月以内の場合は過去12ヶ月の平均月額×15、以降は×18",
									},
									{
										title: "収益報告",
										description: "月次の収益レポートをご提供いただきます",
									},
									{
										title: "サービス内容",
										description:
											"開発、保守、15時間/月までの追加開発、技術相談が含まれます",
									},
								]}
							/>
						</PricingCard>
					</>
				)}

				{/* Startup Package */}
				{activeTab === "startup" && (
					<>
						<PricingCard
							title="QUICK START プラン"
							icon={FaRocket}
							iconColor="text-blue-500"
						>
							<PricingFeatureList>
								<PricingFeature>
									スピーディーなMVP開発に特化した、スタートアップフレンドリーなプラン
								</PricingFeature>
								<PricingFeature>
									柔軟な支払いオプション（現金＋エクイティ）
								</PricingFeature>
								<PricingFeature>最短3ヶ月でのローンチを実現</PricingFeature>
							</PricingFeatureList>
						</PricingCard>

						<PricingCard
							title="料金詳細"
							icon={FaYenSign}
							iconColor="text-green-500"
							delay={0.3}
						>
							<PricingTable
								rows={[
									{
										item: "初期開発費",
										description: "MVP開発",
										price: "¥600,000 - ¥1,200,000",
									},
									{
										item: "株式転換オプション",
										description: "開発費の最大40%",
										price: "1-3%のエクイティ",
									},
									{
										item: "月額保守",
										description: "基本メンテナンス (10時間/月)",
										price: "¥120,000/月",
									},
								]}
							/>
							<div className="mt-6 text-gray-700 dark:text-gray-300 text-sm">
								<p className="mb-2">
									<span className="font-semibold">株式転換オプション:</span>{" "}
									開発費の一部（最大40%）をエクイティ（株式）に転換できる仕組みです。例えば、開発費が100万円の場合、60万円を現金で、残りの40万円分を御社の株式（1-3%）として受け取ります。
								</p>
								<p>
									このオプションにより、初期キャッシュフローの負担を軽減しながら、開発パートナーとして長期的な利害を一致させることができます。
								</p>
							</div>
						</PricingCard>
					</>
				)}

				{/* Growth Package */}
				{activeTab === "growth" && (
					<>
						<PricingCard
							title="SCALE UP プラン"
							icon={FaChartLine}
							iconColor="text-blue-500"
						>
							<PricingFeatureList>
								<PricingFeature>
									急成長するスタートアップのための拡張性重視プラン
								</PricingFeature>
								<PricingFeature>
									大規模化を見据えたアーキテクチャ設計
								</PricingFeature>
								<PricingFeature>
									シリーズA達成時の特別ボーナス特典付き
								</PricingFeature>
							</PricingFeatureList>
						</PricingCard>

						<PricingCard
							title="料金詳細"
							icon={FaYenSign}
							iconColor="text-green-500"
							delay={0.3}
						>
							<PricingTable
								rows={[
									{
										item: "開発費",
										description: "フル機能開発",
										price: "¥2,000,000 - ¥5,000,000",
									},
									{
										item: "月額保守・開発",
										description: "継続的な開発とメンテナンス",
										price: "¥300,000/月",
									},
									{
										item: "成功報酬",
										description: "シリーズA達成時",
										price: "¥1,000,000",
									},
								]}
							/>
							<div className="mt-6 text-gray-700 dark:text-gray-300 text-sm">
								<p className="mb-2">
									<span className="font-semibold">拡張性重視の設計:</span>{" "}
									将来の大規模なユーザー増加やトラフィック増加に対応できるアーキテクチャを採用します。
								</p>
								<p className="mb-2">
									<span className="font-semibold">月額開発枠:</span>{" "}
									月額料金には最大25時間の継続的な開発作業が含まれており、新機能の追加や改善を定期的に行えます。
								</p>
								<p>
									<span className="font-semibold">成功報酬:</span>{" "}
									シリーズA資金調達達成時に、開発パートナーとして特別ボーナスをお支払いいただきます。これにより、資金調達成功へのモチベーションを共有します。
								</p>
							</div>
						</PricingCard>
					</>
				)}

				{/* Accelerator Special */}
				{activeTab === "accelerator" && (
					<>
						<PricingCard
							title="ACCELERATE プラン"
							icon={FaGraduationCap}
							iconColor="text-blue-500"
						>
							<PricingFeatureList>
								<PricingFeature>
									アクセラレータープログラム参加企業向けの特別優遇プラン
								</PricingFeature>
								<PricingFeature>
									CTO級の技術サポートでスピーディーな事業成長を実現
								</PricingFeature>
								<PricingFeature>
									投資家向けピッチデックの技術監修も含む
								</PricingFeature>
							</PricingFeatureList>
						</PricingCard>

						<PricingCard
							title="料金詳細"
							icon={FaYenSign}
							iconColor="text-green-500"
							delay={0.3}
						>
							<PricingTable
								rows={[
									{
										item: "初期開発費",
										description: "MVP開発",
										price: "¥300,000 + 2-4%エクイティ",
									},
									{
										item: "レベニューシェア",
										description: "月間売上¥10Mまで",
										price: "10%",
									},
									{
										item: "技術サポート",
										description: "6ヶ月間",
										price: "込み",
									},
								]}
							/>
							<div className="mt-6 text-gray-700 dark:text-gray-300 text-sm">
								<p className="mb-2">
									<span className="font-semibold">技術共同創業者サービス:</span>{" "}
									週1回の技術戦略ミーティング、技術ロードマップの策定、採用支援、投資家向け技術デューデリジェンスのサポートが含まれます。
								</p>
								<p className="mb-2">
									<span className="font-semibold">
										エクイティ＋レベニューシェアモデル:
									</span>{" "}
									大幅に割引された初期開発費と引き換えに、2-4%のエクイティと10%のレベニューシェアをいただきます。月間売上が¥10Mに達した時点で、固定料金モデルに移行するオプションがあります。
								</p>
								<p>
									<span className="font-semibold">適用条件:</span>{" "}
									認定アクセラレータープログラムへの参加証明が必要です。
								</p>
							</div>
						</PricingCard>
					</>
				)}

				{/* Custom Plan */}
				{activeTab === "custom" && (
					<>
						<PricingCard
							title="ENTERPRISE プラン"
							icon={FaCog}
							iconColor="text-blue-500"
						>
							<PricingFeatureList>
								<PricingFeature>
									大規模プロジェクトに対応するフルカスタマイズプラン
								</PricingFeature>
								<PricingFeature>
									専任チームによる継続的な開発体制
								</PricingFeature>
								<PricingFeature>
									エンタープライズレベルのセキュリティと品質保証
								</PricingFeature>
							</PricingFeatureList>
						</PricingCard>

						<PricingCard
							title="料金目安"
							icon={FaYenSign}
							iconColor="text-green-500"
							delay={0.3}
						>
							<PricingTable
								rows={[
									{
										item: "開発費（日額）",
										description: "エンジニア1名あたり",
										price: "¥120,000 - ¥150,000",
									},
									{
										item: "プロジェクト単位",
										description: "要件定義後に見積",
										price: "要相談",
									},
									{
										item: "ハイブリッド契約",
										description: "現金+エクイティ等",
										price: "応相談",
									},
								]}
							/>
							<div className="mt-6 text-gray-700 dark:text-gray-300 text-sm">
								<p className="mb-2">
									<span className="font-semibold">専任チーム:</span>{" "}
									プロジェクトの規模に応じて、専任のエンジニアチームを編成します。プロジェクトマネージャー、フロントエンド/バックエンドエンジニア、QAなど、必要な役割を網羅します。
								</p>
								<p className="mb-2">
									<span className="font-semibold">ハイブリッド契約:</span>{" "}
									大規模プロジェクトでも初期コストを抑えたい場合、現金とエクイティを組み合わせた契約形態も可能です。
								</p>
								<p>
									<span className="font-semibold">エンタープライズ対応:</span>{" "}
									セキュリティ監査、パフォーマンステスト、負荷テスト、ドキュメント作成など、大規模システムに必要な対応を含みます。
								</p>
							</div>
						</PricingCard>
					</>
				)}

				{/* <motion.div
					className="mt-12 text-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.5 }}
				>
					<button
						type="button"
						className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-lg shadow-lg hover:shadow-xl transition-shadow"
					>
						お問い合わせ
						<FaArrowRight className="ml-2" />
					</button>
					<p className="mt-4 text-gray-500 dark:text-gray-400">
						ご質問やカスタマイズについてはお気軽にご連絡ください
					</p>
				</motion.div> */}
			</main>
		</div>
	);
}
