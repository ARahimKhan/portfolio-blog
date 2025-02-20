<script lang="ts">
	import GithubIcon from '$lib/assets/icons/github.svelte';
	import LinkedinIcon from '$lib/assets/icons/linkedin.svelte';
	import EmailIcon from '$lib/assets/icons/email.svelte';
	import Paragraph from '$lib/blog-components/elements/paragraph.svelte';
	import SectionHeader from '$lib/blog-components/elements/section-header.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData | undefined;

	const descriptors = ['Rahim', 'fullstack developer', 'backend developer', 'programmer'];
	let currentDescriptor = 0;
	let displayDescriptor = '';
	let showCursor = false;

	const TICKS_PER_DESCRIPTOR = 80;

	let timer: any = undefined;
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

{#if form}
	<div class={`flex flex-row ${form?.success ? 'bg-green-700' : 'bg-red-900'}`}>
		{#if form?.blank}
			<div class="text-white px-5 py-3 flex justify-center items-center">
				Please enter all required details
			</div>
		{:else if form?.upload}
			<div class="text-white px-5 py-3 flex justify-center items-center">
				<span
					>An error occured while sending your message. Contact me <a
						class="underline font-bold"
						href="mailto:abdulrahimkhan1999@gmail.com">on my email</a
					></span
				>
			</div>
		{:else if form?.invalid}
			<div class="text-white px-5 py-3 flex justify-center items-center">
				<span
					>Your {form.item} appears to be invalid. Please try again or contact me
					<a class="underline font-bold" href="mailto:abdulrahimkhan1999@gmail.com">on my email</a
					></span
				>
			</div>
		{:else if form?.success}
			<div class="text-white px-5 py-3 flex justify-center items-center">
				Successfully sent! I will get in touch with you soon.
			</div>
		{/if}
		<div class="flex-1"></div>
		<button
			class="text-xl flex justify-center items-center aspect-square px-5 py-3 hover:bg-white hover:bg-opacity-5"
			on:click={() => {
				form = undefined;
			}}
		>
			⨯
		</button>
	</div>
{/if}
<div class="flex flex-col mx-auto lg:w-[60%] p-8 lg:px-0 lg:py-20 lg:gap-16 gap-5">
	<div class="flex lg:flex-row flex-col lg:mb-12 gap-10 lg:gap-0 items-center">
		<img
			class="lg:mr-16 my-auto aspect-square lg:w-[280px] w-48"
			src="$lib/assets/images/headshot.jpg"
			alt="headshot"
		/>
		<div class="flex flex-col justify-center gap-4 lg:gap-0 items-center lg:items-start">
			<p class="font-bold lg:text-8xl text-5xl font-retro lg:text-left text-center">Hello, World</p>
			<p class="font-mono lg:text-5xl text-xl lg:mt-10 lg:ml-2 lg:h-[100px] h-[60px]">
				I am {currentDescriptor ? 'a ' : ''}{displayDescriptor}<span
					class={showCursor ? '' : 'invisible'}>_</span
				>
			</p>
		</div>
	</div>
	<div class="flex lg:flex-row flex-col lg:mb-12">
		<div class="flex-1 mr-6">
			<SectionHeader>Who am I</SectionHeader>
			<Paragraph>
				A programmer and web developer in Python, Ruby, Javascript and sometimes Java. Check out my
				<a class="filled-link" href="work">projects</a>
				to know more about what interests me. Follow my
				<a class="filled-link" href="blog">blog</a> for useful technical articles. Find me at my
				socials
				<span class="lg:hidden inline">below.</span>
				<span class="hidden lg:inline">on the right.</span>
			</Paragraph>
			<Paragraph>
				I have been playing around with programming languages since I was 13 and have continued
				learning everyday since. Nothing gives me as much satisfaction as designing novel solutions
				to complex problems and seeing them through to completion.
			</Paragraph>
		</div>
		<div
			class="flex lg:flex-col lg:w-32 lg:border-l-[5px] border-l-emerald-900 justify-center items-center gap-5 lg:my-0 my-5"
		>
			<a class="icon-link" href="https://www.github.com/ARahimKhan" target="_blank">
				<GithubIcon width="55" height="55" />
			</a>
			<a
				class="icon-link"
				href="https://www.linkedin.com/in/abdul-rahim-khan-6251b3224/"
				target="_blank"
			>
				<LinkedinIcon width="50" height="50" />
			</a>
			<a class="icon-link" href="mailto:abdulrahimkhan1999@gmail.com" target="_blank">
				<EmailIcon width="55" height="55" />
			</a>
		</div>
	</div>
	<div class="flex-1">
		<SectionHeader>Connect with me</SectionHeader>
		<Paragraph>
			Lets build great things together. Find my socials above or just shoot a message below and I
			will get in touch!
		</Paragraph>
		<form class="flex flex-col" method="post">
			<input type="text" name="name" required placeholder="Your name" />
			<input type="text" name="email" required placeholder="Your email" />
			<textarea name="message" required placeholder="Message" />
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

	a.filled-link {
		@apply text-white hover:bg-emerald-800 bg-emerald-900 p-1;
	}
</style>
