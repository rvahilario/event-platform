export const Video = () => {
	return (
		<div className="flex-1">
			<div className="flex justify-center bg-black">
				<div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
					<div className="flex h-full justify-center items-center">Video</div>
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
				</div>
			</div>
		</div>
	);
};
