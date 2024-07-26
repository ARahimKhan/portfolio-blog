<script>
	import '../app.css';
</script>

<div class="flex flex-col h-full">
	<!-- NAVIGATION BAR -->
	<div class="flex flex-row h-16 bg-emerald-800 items-center px-5">
    <p class="font-bold text-2xl">Blogfolio</p>
    <div class="flex-1"></div>
    <a class="navlink" href="/home">Home</a>
    <a class="navlink" href="/">Projects</a>
    <a class="navlink" href="/">Blog</a>
    <a class="navlink" href="/about">About</a>
  </div>
  <!-- MAIN CONTENT AREA -->
	<div class="flex-1 overflow-y-scroll overflow-x-hidden">
		<slot />
	</div>
</div>

<style lang="postcss">
  .navlink {
    justify-content: center;
    align-content: center;
    font-family: 'Quicksand', sans-serif;
    font-weight: 500;
    @apply px-5 h-full text-white
  }

  .navlink:hover {
    @apply bg-emerald-900
  }
</style>
