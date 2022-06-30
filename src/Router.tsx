import { Route, Routes } from 'react-router-dom';
import { Event } from './pages/Event';

export const Router = () => (
	<Routes>
		<Route path="/" element={<Event />} />
		<Route path="/event" element={<Event />} />
		<Route path="/event/lesson/:slug" element={<Event />} />
	</Routes>
);
