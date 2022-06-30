import { gql, useQuery } from '@apollo/client';
import { Event } from './pages/Event';

const App = () => {
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
