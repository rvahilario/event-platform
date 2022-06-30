import { gql, useQuery } from '@apollo/client';
import { LessonCard } from './LessonCard';

const GET_LESSONS_QUERY = gql`
	query {
		lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
			id
			title
			availableAt
			lessonType
			slug
		}
	}
`;

interface GetLessonsQueryResponse {
	lessons: Array<{
		id: string;
		title: string;
		availableAt: string;
		lessonType: 'live' | 'class';
		slug: string;
	}>;
}

export const Sidebar = () => {
	const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);

	return (
		<aside className="w-[348px] bg-gray-700 border-l border-gray-600 p-6">
			<span className="pb-6 mb-6 text-2xl font-bold border-b border-gray-600 block">
				Class schedule
			</span>

			<div className="flex flex-col gap-8">
				{data?.lessons.map((lesson) => (
					<LessonCard
						key={lesson.id}
						availableAt={new Date(lesson.availableAt)}
						title={lesson.title}
						type={lesson.lessonType}
						slug={lesson.slug}
					/>
				))}
			</div>
		</aside>
	);
};
