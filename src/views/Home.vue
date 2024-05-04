<script setup>
	import Testing from '../components/Testing.vue'
	import Project from '../components/Project.vue'
</script>

<template>
	<main class="home-page">
		<h1>Home</h1>
		<Project 
			class="project" 
			title="FireflyLib" 
			image="/images/fflib_pong.png" 
			desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.">
		</Project>
		<Project 
			class="project" 
			title="MirrorLib" 
			image="/images/mirror_lib_50.png" 
			desc="">
		</Project>
		<Project 
			class="project" 
			title="MirrorLib" 
			image="https://civilrights.msu.edu/_assets/images/placeholder/placeholder-600x600.jpg" 
			desc="">
		</Project>
	</main>
</template>

<style>
.project {
	margin: 10px;
}
</style>
