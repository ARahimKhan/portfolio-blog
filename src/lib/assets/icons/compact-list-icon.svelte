<script>
	export let width = '50px';
	export let height = '50px';
  export let classlist = undefined;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	{height}
	{width}
	viewBox="0 -960 960 960"
  class={classlist === undefined ? 'fill-emerald-900 hover:fill-white' : classlist}
	><path
		d="M160-360v-80h640v80H160Zm0 160v-80h640v80H160Zm0-320v-80h640v80H160Zm0-160v-80h640v80H160Z"
	/></svg
>
