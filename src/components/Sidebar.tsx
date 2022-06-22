import { LessonCard } from './LessonCard';

export const Sidebar = () => {
	return (
		<aside className="w-[348px] bg-gray-700 border-l border-gray-600 p-6">
			<span className="pb-6 mb-6 text-2xl font-bold border-b border-gray-600 block">
				Class schedule
			</span>

			<div className="flex flex-col gap-8">
				<LessonCard />
				<LessonCard />
				<LessonCard />
			</div>
		</aside>
	);
};
