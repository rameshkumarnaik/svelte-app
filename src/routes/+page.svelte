<script lang="ts">
	import { Button } from '@svelteuidev/core';

	let clicked = false;
</script>

<h1>Welcome to SvelteKit</h1>
<Button on:click={() => (clicked = !clicked)}>
	{clicked ? "Don't click me anymore" : 'Click me'}
</Button>
