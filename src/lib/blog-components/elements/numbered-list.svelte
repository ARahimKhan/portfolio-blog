<script lang="ts">
	export let items: string[];
</script>

<ol class="list-decimal list-outside p-6">
	{#each items as item}
		<li>{item}</li>
	{/each}
</ol>

<style lang="postcss">
	li {
		@apply pl-5;
	}
</style>
