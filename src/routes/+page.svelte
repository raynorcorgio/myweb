<script>
	import { base } from '$app/paths';
	import NavBar from './NavBar.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<NavBar />

<h1 class="text-3xl font-bold text-purple-600">
	Hello sveltekit + tailwindcss deployed using github pages!
</h1>

<br />

<p class="text-xl">
	Test navigation:
	<a href="{base}/about " class="text-blue-600 underline">About</a>
</p>
