<ul class="bulleted-list list-disc list-outside px-5">
	<slot></slot>
</ul>

<style lang="postcss">
	.bulleted-list :global(li) {
		@apply pl-5 mb-2;
	}

  .bulleted-list :global(ul) {
		@apply pl-10;
	}
</style>
