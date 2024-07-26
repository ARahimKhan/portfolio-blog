<script lang="ts">
	import GithubIcon from '$lib/icons/github.svelte';
	import LinkedinIcon from '$lib/icons/linkedin.svelte';
	import EmailIcon from '$lib/icons/email.svelte';

	const descriptors = [
		'Rahim',
		'backend engineer',
		'software developer',
		'programmer',
		'fullstack developer'
	];
	let currentDescriptor = 0;
	let displayDescriptor = '';
	let showCursor = false;

	const TICKS_PER_DESCRIPTOR = 80;

	let timer: number | undefined = undefined;
	let tick = 0;
	$: {
		clearInterval(timer);
		timer = setInterval(() => {
			tick += 1;
		}, 100);
	}

	// Blinking cursor, changing role and adding/removing characters
	$: {
		const tempDescriptor = descriptors[currentDescriptor];
		showCursor = false;
		if (tick < tempDescriptor.length) {
			displayDescriptor = tempDescriptor.slice(0, tick + 1);
		} else if (
			tick >= tempDescriptor.length &&
			tick < TICKS_PER_DESCRIPTOR - tempDescriptor.length
		) {
			displayDescriptor = tempDescriptor;
			showCursor = tick % 8 > 1;
		} else if (
			tick >= TICKS_PER_DESCRIPTOR - tempDescriptor.length &&
			tick < TICKS_PER_DESCRIPTOR
		) {
			displayDescriptor = tempDescriptor.slice(0, TICKS_PER_DESCRIPTOR - tick - 1);
		} else {
			tick = 0;
			currentDescriptor = (currentDescriptor + 1) % descriptors.length;
		}
	}
</script>

<div class="flex flex-col mx-auto w-[60%] py-20">
	<div class="flex flex-row mb-20">
		<img class="mr-16 my-auto aspect-square" src="headshot.jpg" alt="headshot" width="280px" />
		<div class="flex flex-col justify-center">
			<p class="font-bold text-8xl font-retro">Hello, World</p>
			<p class="font-mono text-5xl mt-10 ml-2 h-[100px]">
				I am {currentDescriptor ? 'a ' : ''}{displayDescriptor}<span
					class={showCursor ? '' : 'invisible'}>_</span
				>
			</p>
		</div>
	</div>
	<div class="flex flex-row mb-20">
		<div class="flex-1 mr-6">
			<h2>Who am I</h2>
			<p class="text-xl mb-5 text-gray-400">
				I am a maker, a generalist and a dreamer. Nothing gives me as much enjoyment as designing
				solutions and seeing them through to completion. I have been playing around with programming
				languages since I was 12. First learnt game development in C++, made GUIs with Java and dove
				head first into embedded electronics, no training wheels.
			</p>
			<p class="text-xl mb-2 text-gray-400">
				I currently work full time as a full stack developer working with Python, Ruby, Javascript and
        sometimes Java. Check out my blog to know more about what interests me. Find me at my socials
				<span class="md:hidden inline text-gray-400">below.</span><span
					class="hidden md:inline text-gray-400">on the right.</span
				>
			</p>
		</div>
		<div
			class="flex flex-col w-32 border-l-[5px] border-l-emerald-900 justify-center items-center gap-5"
		>
			<a href="https://www.github.com/ARahimKhan" target="_blank">
				<GithubIcon width="55" height="55" />
			</a>
			<a href="https://www.linkedin.com/in/abdul-rahim-khan-6251b3224/" target="_blank">
				<LinkedinIcon width="50" height="50" />
			</a>
			<a href="mailto:abdulrahimkhan1999@gmail.com" target="_blank">
				<EmailIcon width="55" height="55" />
			</a>
		</div>
	</div>
	<div class="flex-1 mr-6">
		<h2>Connect with me</h2>
		<p class="text-xl mb-6 text-gray-400">
			Lets build great things together. Find my socials above or just shoot a message below and I
			will get in touch!
		</p>
		<form class="flex flex-col" method="post">
			<input type="text" placeholder="Your name" />
			<input type="text" placeholder="Your email" />
			<textarea placeholder="Message" />
			<button class="px-4 py-3 my-5 ml-auto bg-emerald-800 hover:bg-emerald-900" type="submit"
				>Send Message</button
			>
		</form>
	</div>
</div>

<style lang="postcss">
	img {
		border-radius: 50%;
	}

	input,
	textarea {
		@apply bg-gray-400 focus:bg-gray-100 text-black placeholder-gray-700 px-4 py-3 my-2;
		@apply border-2 focus:border-2 border-transparent focus:border-emerald-600 focus:ring-0 outline-none;
	}

	textarea {
		height: 100px;
	}
</style>
