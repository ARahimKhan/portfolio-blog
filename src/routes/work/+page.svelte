<script lang="ts">
	import ListIcon from '$lib/assets/icons/list-icon.svelte';
	import CompactListIcon from '$lib/assets/icons/compact-list-icon.svelte';
	import GridIcon from '$lib/assets/icons/grid-icon.svelte';

	const content = [
		{
			description:
				'A website that uses yfinance and observable charts to plot real-time price movements',
			title: 'Live Stock Viewer',
			slug: 'live-stocks',
			icon: import('$lib/assets/images/stock-viewer-ss.png'),
			technologies: ['python', 'react', 'next.js', 'typescript', 'django', 'redis']
		},
		{
			description:
				'Performant and scalable data aggregation and transformation pipeline built with Kafka',
			title: 'ETL',
			slug: 'etl',
			icon: import('$lib/assets/images/etl-system-design-icon.png'),
			technologies: ['python', 'kafka', 'docker', 'postgresql', 'aws']
		},
		{
			description:
				'College activities and student-club interaction platform. Supports articles, events, venues, leaderboards',
			title: 'Junction',
			slug: 'junction',
			technologies: ['java', 'python', 'kotlin', 'react native', 'node.js', 'android']
		},
		{
			description:
				'A web UI to generate Kubernetes yaml config files through a drag-and-drop interface',
			title: 'Kubernetes configurator',
			slug: 'k8s-configurator',
			technologies: ['python', 'fastapi', 'react', 'typescript']
		},
		{
			description:
				'An application that maps all relations in a database based on conventions and constraints',
			title: 'Database Mapper',
			slug: 'db-mapper',
			technologies: ['ruby on rails', 'svelte', 'ruby', 'typescript', 'javascript']
		},
		{
			description:
				'A virtual machine and disassembler that supports a minimal instruction set. Performs semantic and syntactic checks as well',
			title: 'Emulator001',
			slug: 'emulator001',
			technologies: ['c', 'c++', 'asm', 'cli']
		},
		{
			description:
				'A GUI library written solely in SDL with C++ directly utilizing textures and frames',
			title: 'SDL GUI API',
			slug: 'sdl-gui-api',
			technologies: ['c', 'c++', 'sdl2', 'winapi']
		},
		{
			description:
				'A Youtube Music website surfer and music downloader with support for organizing, annotating and searching for songs',
			title: 'YouMuPi',
			slug: 'youmupi',
			technologies: ['python', 'linux', 'cli']
		},
		{
			description: 'A space invaders spinoff made a 100x harder and given eerie sound effects',
			title: 'Space Invaders',
			slug: 'space-invaders',
			icon: import('$lib/assets/images/space-invaders-ss.png'),
			technologies: ['python', 'pygame']
		},
		{
			description:
				"Classsssic snek game. Go around and try to eat everything. Don't bite your own tail",
			title: 'Snake',
			slug: 'snake',
			icon: import('$lib/assets/images/snake-game-ss.png'),
			technologies: ['python', 'pygame']
		}
	];

	const shortDescription = (desc: string): string => {
		let truncated = desc.slice(0, 65).split(' ');
		truncated.pop();
		const lastCharacter = truncated[truncated.length - 1];
		truncated[truncated.length - 1] = lastCharacter.replace('.', '').replace(/$/i, '...');
		return truncated.join(' ');
	};

	let activeViewMode = 'list';
</script>

<div class="flex flex-col mx-auto lg:w-[60%] p-8 lg:px-0 lg:py-20 lg:gap-16 gap-10">
	<div>
		<h2 class="mb-3 lg:mb-6">My work</h2>
		<p class="lg:text-xl text-base text-gray-400">
			Take a tour through some of my most memorable and rewarding projects
		</p>
	</div>

	<div class="flex flex-row items-center justify-center gap-10">
		<button class="view-mode-btn grid-view-btn" on:click={() => (activeViewMode = 'grid')}
			><GridIcon classlist={activeViewMode === 'grid' ? 'active-mode' : ''}></GridIcon></button
		>
		<button class="view-mode-btn" on:click={() => (activeViewMode = 'list')}
			><ListIcon
				classlist={activeViewMode === 'list' ? 'active-mode' : ''}
				on:click={() => (activeViewMode = 'list')}
			></ListIcon></button
		>
		<button class="view-mode-btn" on:click={() => (activeViewMode = 'compact')}
			><CompactListIcon
				classlist={activeViewMode === 'compact' ? 'active-mode' : ''}
				on:click={() => (activeViewMode = 'compact')}
			></CompactListIcon></button
		>
	</div>

	{#if activeViewMode === 'list'}
		{#each content as item, i}
			{@const rev = i % 2}
			<a
				class={`work-item w-full flex ${rev ? 'flex-row-reverse' : 'flex-row'} hover:bg-[#0c0c0c]`}
				href={`work/${item.slug}`}
			>
				<div
					class={`overflow-hidden lg:w-72 lg:basis-0 basis-1/2 grow aspect-square bg-emerald-950 rounded-[4px] ${rev ? 'ml-6 lg:ml-20' : 'mr-6 lg:mr-20'}`}
				>
					{#if item.icon}
						{#await item.icon then { default: src }}
							<img
								class="scale-[103%] object-cover w-full h-full aspect-square"
								{src}
								alt="Project icon"
							/>
						{/await}
					{/if}
				</div>
				<div class="flex flex-col lg:basis-0 basis-1/2 lg:flex-1 justify-center md:py-5 py-2">
					<h2 class="lg:text-5xl text-2xl lg:mb-6 mb-2">{item.title}</h2>
					<p class="text-[10px] lg:text-base">
						{item.description}
					</p>
					<div class="flex flex-row flex-wrap mt-2 md:mt-5 gap-[2px] md:gap-3">
						{#each item.technologies as tech}
							<span
								class="font-mono text-[8px] md:text-sm text-emerald-700 bg-neutral-950 py-[1px] px-1 rounded"
								>{tech}</span
							>
						{/each}
					</div>
				</div>
				<div class="xl:w-32 w-0 bg-transparent"></div>
			</a>
		{/each}
	{:else if activeViewMode === 'grid'}
		<div class="grid grid-cols-2 gap-x-8 gap-y-8">
			{#each content as item}
				<div class="work-item relative flex flex-col hover:bg-[#0c0c0c] justify-end aspect-square">
					<a
						class="flex absolute top-0 bottom-0 left-0 right-0 w-full z-20"
						href={`/work/${item.slug}`}><br /></a
					>
					<div
						class="overflow-hidden absolute bg-emerald-950 top-0 bottom-0 left-0 right-0 rounded-[4px]"
					>
						{#if item.icon}
							{#await item.icon then { default: src }}
								<img class="scale-[103%] object-cover w-full h-full" {src} alt="Project icon" />
							{/await}
						{/if}
					</div>
					<div class="z-10">
						<h2 class="lg:text-4xl text-lg p-5 block bg-black bg-opacity-80 m-0">{item.title}</h2>
						<p class="text-[6px] lg:text-sm px-5 pb-5 bg-black bg-opacity-80">
							{item.description}
						</p>
						<div class="flex flex-row flex-wrap gap-2 px-5 pb-3 bg-black bg-opacity-80 m-0">
							{#each item.technologies as tech}
								<span
									class="font-mono text-[8px] md:text-xs text-emerald-700 bg-neutral-950 py-[1px] px-1 rounded"
									>{tech}</span
								>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	{:else if activeViewMode === 'compact'}
		{#each content as item, i}
			<a
				class="work-item flex hover:bg-[#0c0c0c] gap-8 w-full md:p-3 pb-2 pt-1 pl-1"
				href={`work/${item.slug}`}
			>
				<div
					class="overflow-hidden lg:w-28 w-16 my-auto aspect-square bg-emerald-950 rounded-[4px]"
				>
					{#if item.icon}
						{#await item.icon then { default: src }}
							<img class="scale-[103%] object-cover w-full h-full" {src} alt="Project icon" />
						{/await}
					{/if}
				</div>
				<div class="flex flex-col flex-1 justify-center">
					<h2 class="lg:text-2xl text-lg lg:mb-2 mb-1">{item.title}</h2>
					<p class="text-[12px] lg:text-base block lg:hidden">
						{shortDescription(item.description)}
					</p>
					<p class="text-[12px] lg:text-base hidden lg:block">
						{item.description}
					</p>
					<div class="flex flex-row flex-wrap mt-2 gap-[2px]">
						{#each item.technologies.slice(0, 3) as tech}
							<span
								class="font-mono text-[8px] md:text-sm text-emerald-700 bg-neutral-950 py-[1px] px-1 rounded"
								>{tech}</span
							>
						{/each}
					</div>
				</div>
			</a>
		{/each}
	{/if}
</div>

<style lang="postcss">
	.view-mode-btn {
		@apply hover:bg-neutral-950 rounded-md h-8 w-8 flex items-center justify-center;
	}

	.view-mode-btn.grid-view-btn {
		@apply lg:flex hidden;
	}

	@media (min-width: 1024px) {
		.work-item:not(:hover) img {
			filter: sepia(100%) saturate(300%) brightness(35%) hue-rotate(108deg);
      transition: filter 200ms, scale 200ms;
		}

		.work-item:hover img {
      scale: 106%;
      filter: sepia(0%) saturate(100%) brightness(100%) hue-rotate(0deg);
      transition: filter 500ms, scale 500ms;
		}
	}

	.view-mode-btn :global(svg:not(.active-mode)) {
		@apply fill-neutral-600 stroke-none;
	}

	.view-mode-btn :global(svg.active-mode) {
		@apply fill-emerald-400 stroke-none;
	}

	.view-mode-btn:hover :global(svg:not(.active-mode)) {
		@apply fill-neutral-300 stroke-none;
	}

	.grid > div:hover p {
		display: block;
	}

	.grid > div p {
		display: none;
	}
</style>
