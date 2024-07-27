<ul class="bulleted-list list-disc list-outside px-5">
	<slot></slot>
</ul>

<style lang="postcss">
	.bulleted-list :global(li) {
		@apply lg:pl-5 lg:mb-2;
	}

  .bulleted-list :global(ul) {
		@apply lg:pl-10;
	}
</style>
