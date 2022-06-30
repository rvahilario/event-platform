import { gql, useQuery } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { Event } from './pages/Event';
import { ApolloProvider } from '@apollo/client';
import { client } from './lib/apollo';

const App = () => {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</ApolloProvider>
		// <Event />

		// <ul>
		// 	{data?.lessons.map((lesson: Lesson) => {
		// 		return <li key={lesson.id}>{lesson.title}</li>;
		// 	})}
		// </ul>
	);
};

export default App;
