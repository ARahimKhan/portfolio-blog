<script>
	const content = [
		{
			description:
				'A website that uses yfinance and observable charts to plot real-time price movements',
			title: 'Live Stock Viewer',
			slug: 'live-stocks'
		},
		{
			description:
				'Performant and scalable data aggregation and transformation pipeline built with Kafka',
			title: 'ETL',
			slug: 'etl'
		},
		{
			description:
				'College activities and student-club interaction platform. Supports articles, events, venues, leaderboards',
			title: 'Junction',
			slug: 'junction'
		},
		{
			description:
				'A web UI to generate Kubernetes yaml config files through a drag-and-drop interface',
			title: 'Kubernetes configurator',
			slug: 'k8s-configurator'
		},
		{
			description:
				'An application that maps all relations in a database based on conventions and constraints',
			title: 'Database relation viewer',
			slug: 'db-relations-viewer'
		},
		{
			description:
				'A virtual machine and disassembler that supports a minimal instruction set. Performs semantic and syntactic checks as well',
			title: 'Emulator001',
			slug: 'emulator001'
		},
		{
			description:
				'A GUI library written solely in SDL with C++ directly utilizing textures and frames',
			title: 'SDL GUI API',
			slug: 'sdl-gui-api'
		},
		{
			description:
				'A Youtube Music website surfer and music downloader with support for organizing, annotating and searching for songs',
			title: 'YouMuPi',
			slug: 'youmupi'
		},
		{
			description: 'A space invaders spinoff made a 100x harder and given eerie sound effects',
			title: 'Space Invaders',
			slug: 'space-invaders'
		},
		{
			description:
				"Classic hissssssssssssssssstoric snek game. Go around and try to eat everything. Don't bite your own tail",
			title: 'Snake',
			slug: 'snake'
		}
	];
</script>

<div class="flex flex-col mx-auto lg:w-[60%] p-8 lg:px-0 lg:py-20 gap-16">
	<div class="lg:mb-10 mb-2">
		<h2>My work</h2>
		<p class="text-xl text-gray-400">
			Take a tour through some of my most memorable and rewarding projects
		</p>
	</div>

	{#each content as item, i}
		{@const rev = i % 2}
		<a
			class={`flex ${rev ? 'flex-row-reverse' : 'flex-row'} hover:bg-[#0c0c0c]`}
			href={`work/${item.slug}`}
		>
			<div
				class={`lg:w-72 lg:basis-0 basis-1/2 grow aspect-square bg-emerald-950 rounded-[4px] ${rev ? 'ml-6 lg:ml-20' : 'mr-6 lg:mr-20'}`}
			></div>
			<div class="flex flex-col basis-1/2 lg:flex-1 justify-center">
				<h2 class="lg:text-5xl text-2xl lg:mb-6 mb-2">{item.title}</h2>
				<p class="text-[10px] lg:text-base">
					{item.description}
				</p>
			</div>
			<div class={`lg:w-32 w-0 aspect-square bg-transparent ${rev ? 'lg:mr-8' : 'lg:ml-8'}`}></div>
		</a>
	{/each}
</div>
