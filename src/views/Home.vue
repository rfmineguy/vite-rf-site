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
			image="/vite-rf-site/images/fflib_pong.png"
			challenges="OpenGL, Linear Algebra, Organization"
			url="https://github.com/rfmineguy/firefly-lib.git"
			:desc="[
				`FireflyLib is a graphics library intended for use with games development`,
				`It provides a variety of features including windowing, rendering, audio, input, and more!`
				]"
			>
		</Project>
		<Project 
			class="project" 
			title="MirrorLib" 
			image="/vite-rf-site/images/mirror_lib_50.png" 
			challenges="Recursion, Intersection, Reflection"
			:desc="[
				`MirrorLib is a library that performs basic laser reflections off objects.`,
				`You have a laser source, and the ability to add and move around boundaries at runtime. The boundaries affect the path of the laser (as seen in the image).`
			]"
			url="https://github.com/rfmineguy/mirror-lib">
		</Project>
		<Project 
			class="project" 
			title="Spaz" 
			image="/vite-rf-site/images/spaz.svg" 
			challenges="Language design, LR parsing, Tokenization, Interpretation"
			:desc="[
				`Spaz is a programming language inspired by Porth, which was inspired by Forth.`,
				`Spaz is a stack based language, meaning all logic and calculations are done via a stack data structure.`
			]"
			url="https://github.com/rfmineguy/mirror-lib">
		</Project>
	</main>
</template>

<style>
.project {
	margin-bottom: 10px;
	margin-top: 10px;
}
</style>
