<script lang="ts">
	import '../app.css';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	let container: HTMLElement;

	afterNavigate(() => {
		container.scrollTo(0, 0);
	});

	export const snapshot = {
		capture: () => container.scrollTop,
		restore: (y) => container.scrollTo(0, y)
	};
</script>

<div class="flex flex-col h-full">
	<!-- NAVIGATION BAR -->
	<p class="font-bold text-2xl lg:hidden block px-auto pt-4 pb-1 bg-emerald-800 text-center">
		Blogfolio
	</p>
	<div class="flex flex-row h-16 bg-emerald-800 items-center px-5">
		<p class="font-bold text-2xl hidden lg:block">Blogfolio</p>
		<div class="lg:flex-1 lg:block hidden"></div>
		<a class={`navlink ${$page.url.pathname.split('/')[1] === 'work' ? 'active' : ''}`} href="/work">Work</a>
		<a class={`navlink ${$page.url.pathname.split('/')[1] === 'blog' ? 'active' : ''}`} href="/blog">Blog</a>
		<a class={`navlink ${$page.url.pathname.split('/')[1] === 'about' ? 'active' : ''}`} href="/about">About</a>
	</div>
	<!-- MAIN CONTENT AREA -->
	<div bind:this={container} class="flex-1 overflow-y-scroll overflow-x-hidden">
		<slot />
	</div>
</div>

<style lang="postcss">
	.navlink {
		justify-content: center;
		align-content: center;
    align-items: center;
		font-family: 'Quicksand', sans-serif;
		font-weight: 500;
    display: flex;
		@apply px-5 h-full text-white lg:basis-0 basis-full text-center;
	}

	.navlink:hover {
		@apply bg-emerald-700;
	}

  .navlink.active {
    @apply border-solid border-transparent border-0 border-y-4 border-b-gray-400 border-t-transparent;
  }
</style>
