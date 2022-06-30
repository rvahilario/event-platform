import { DefaultControls, DefaultUi, Player, Youtube } from '@vime/react';
import '@vime/core/themes/default.css';
import {
	CaretRight,
	DiscordLogo,
	FileArrowDown,
	Lightning,
} from 'phosphor-react';

export const Video = () => {
	return (
		<div className="flex-1">
			<div className="flex justify-center bg-black">
				<div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
					<Player>
						<Youtube videoId="hMUF8aHuWBY" />
						<DefaultUi noControls>
							<DefaultControls hideOnMouseLeave activeDuration={2000} />
						</DefaultUi>
					</Player>
				</div>
			</div>

			<div className="p-8 max-w-[1100px] mx-auto">
				<div className="flex items-start gap-16">
					<div className="flex-1">
						<h1 className="text-2xl font-bold">
							Class 01 - Opening of Ignite Lab
						</h1>
						<p className="mt-4 text-gray-200 leading-relaxed">
							Esse adipisicing amet id officia voluptate nostrud proident et sit
							nisi. Adipisicing proident enim incididunt adipisicing et commodo
							eu aute qui dipisicing. Aute sit aute cupidatat consequat ipsum id
							et do est pariatur ea elit. Voluptate sint duis exercitation
							tempor ipsum dolor laboris occaecat sint mollit eiusmod ipsum et.
							Cupidatat ea eu incididunt voluptate sunt deserunt aliqua laboris
							adipisicing adipisicing.
						</p>

						<div className="flex items-center gap-4 mt-6">
							<img
								src="https://github.com/rvahilario.png"
								alt="Professor avatar"
								className="h-16 w-16 rounded-full border-2 border-blue-500"
							/>

							<div className="leading-relaxed">
								<strong className="font-bold text-2xl block">
									Nome professor
								</strong>
								<span className="text-gray-200 text-sm block">Biografia</span>
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
};
