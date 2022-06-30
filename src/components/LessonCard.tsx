import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';

interface LessonCardProps {
	title: string;
	slug: string;
	availableAt: Date;
	type: 'live' | 'class';
}

export const LessonCard = (props: LessonCardProps) => {
	const isLessonAvailable = isPast(props.availableAt);
	const availableAtFormatted = format(
		props.availableAt,
		"EEEE' • 'd' of 'MMMM' • 'K'h'mm"
	);

	return (
		<a href="#" className="flex flex-col gap-2">
			<span className="text-base text-gray-300">{availableAtFormatted}</span>

			<div className="flex flex-col border border-gray-500 rounded p-4 gap-4">
				<header className="flex items-center justify-between">
					{isLessonAvailable ? (
						<span className="flex items-center text-sm text-blue-500 font-medium gap-2">
							<CheckCircle size={20} />
							Lesson unlocked
						</span>
					) : (
						<span className="flex items-center text-sm text-orange-500 font-medium gap-2">
							<Lock size={20} />
							Coming soon
						</span>
					)}
					<span className="text-xs border border-green-300 rounded text-gray-200 font-bold px-2 py-[0.125rem]">
						{props.type === 'live' ? 'Live' : 'Class'}
					</span>
				</header>

				<strong className="text-gray-200 block">{props.title}</strong>
			</div>
		</a>
	);
};
