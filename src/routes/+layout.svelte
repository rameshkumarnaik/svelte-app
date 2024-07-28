<script>
	import { SvelteUIProvider } from '@svelteuidev/core';
	import { TypographyProvider } from '@svelteuidev/core';

	import '../app.css';
</script>

<SvelteUIProvider>
	<TypographyProvider>
		<slot></slot>
	</TypographyProvider>
</SvelteUIProvider>
