import { DefaultControls, DefaultUi, Player, Youtube } from '@vime/react';
import {
	CaretRight,
	DiscordLogo,
	FileArrowDown,
	Lightning,
} from 'phosphor-react';

import '@vime/core/themes/default.css';
import { gql, useQuery } from '@apollo/client';

const GET_LESSON_BY_SLUG_QUERY = gql`
	query GetLessonBySlug($slug: String) {
		lesson(where: { slug: $slug }) {
			title
			videoId
			description
			teacher {
				name
				bio
				avatarURL
			}
		}
	}
`;

interface GetLessonBySlugResponse {
	lesson: {
		title: string;
		videoId: string;
		description: string;
		teacher: {
			name: string;
			bio: string;
			avatarURL: string;
		};
	};
}

interface VideoProps {
	lessonSlug: string;
}

export const Video = (props: VideoProps) => {
	const { lessonSlug } = props;

	const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
		variables: { slug: lessonSlug },
	});
	const lesson = data?.lesson;

	if (data) {
		return (
			<div className="flex-1">
				<div className="flex justify-center bg-black">
					<div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
						<Player>
							<Youtube videoId={lesson?.videoId || ''} />
							<DefaultUi noControls>
								<DefaultControls hideOnMouseLeave activeDuration={2000} />
							</DefaultUi>
						</Player>
					</div>
				</div>

				<div className="p-8 max-w-[1100px] mx-auto">
					<div className="flex items-start gap-16">
						<div className="flex-1">
							<h1 className="text-2xl font-bold">{lesson?.title}</h1>
							<p className="mt-4 text-gray-200 leading-relaxed">
								{lesson?.description}
							</p>

							<div className="flex items-center gap-4 mt-6">
								<img
									src={lesson?.teacher.avatarURL}
									alt="Professor avatar"
									className="h-16 w-16 rounded-full border-2 border-blue-500"
								/>

								<div className="leading-relaxed">
									<strong className="font-bold text-2xl block">
										{lesson?.teacher.name}
									</strong>
									<span className="text-gray-200 text-sm block">
										{lesson?.teacher.bio}
									</span>
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-4">
							<a
								href=""
								className="flex p-4 text-sm bg-green-500 items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
							>
								<DiscordLogo size={24} />
								Discord Community
							</a>

							<a
								href=""
								className="flex p-4 text-sm text-blue-500 border border-blue-500 items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
							>
								<Lightning size={24} />
								Access the Challenge
							</a>
						</div>
					</div>

					<div className="gap-8 mt-20 grid grid-cols-2">
						<a
							href=""
							className="flex items-stretch bg-gray-700 rounded-lg overflow-hidden gap-6 hover:bg-gray-600 transition-colors"
						>
							<div className="flex items-center bg-green-700 h-full p-6">
								<FileArrowDown size={40} />
							</div>
							<div className="py-6 leading-relaxed">
								<strong className="text-2xl">Complementary material</strong>
								<p className="text-sm text-gray-200 mt-2">
									Access complementary material to accelerate your development
								</p>
							</div>
							<div className="flex items-center h-full p-6 ">
								<CaretRight size={24} />
							</div>
						</a>

						<a
							href=""
							className="flex items-stretch bg-gray-700 rounded-lg overflow-hidden gap-6 hover:bg-gray-600 transition-colors"
						>
							<div className="flex items-center bg-green-700 h-full p-6">
								<FileArrowDown size={40} />
							</div>
							<div className="py-6 leading-relaxed">
								<strong className="text-2xl">Exclusive Wallpapers</strong>
								<p className="text-sm text-gray-200 mt-2">
									Download exclusive Ignite Lab wallpapers and customize your
									machine
								</p>
							</div>
							<div className="flex items-center h-full p-6 ">
								<CaretRight size={24} />
							</div>
						</a>
					</div>
				</div>
			</div>
		);
	} else {
		return <h1>Loading...</h1>;
	}
};
