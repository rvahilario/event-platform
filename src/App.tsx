import { gql, useQuery } from '@apollo/client';
import { Event } from './pages/Event';

const GET_LESSONS_QUERY = gql`
	query {
		lessons {
			id
			title
		}
	}
`;

interface Lesson {
	id: string;
	title: string;
}

const App = () => {
	const { data } = useQuery<{ lessons: Array<Lesson> }>(GET_LESSONS_QUERY);

	return (
		<Event />
		// <ul>
		// 	{data?.lessons.map((lesson: Lesson) => {
		// 		return <li key={lesson.id}>{lesson.title}</li>;
		// 	})}
		// </ul>
	);
};

export default App;
