<template>
	<div :class="`project ${expanded ? 'expanded' : ''}`">
		<div class="row title">
			<span class="dropdown material-icons" @click='toggle'>arrow_right</span>
			<h1>{{title}}</h1>
		</div>
		<div class="project-content">
			<div class="row">
				<img v-if="`${image.endsWith('.svg') === true}`" 
						 type='image/svg+xml' 
						 class='svg-limiter'
						 :src=image></img>
				<img v-else :src=image></img>
				<div class="information">
					<div class="description">
						<h2><u>Description</u></h2>
						<div v-for="line of desc">
							<p>{{line}}</p>
						</div>
					</div>
					<div class="description">
						<h2><u>Challenges</u></h2>
						<p>{{challenges}}</p>
					</div>
					<div class="description">
						<h2><u>URL</u></h2>
						<a v-bind:href="url" target="_blank">{{title}}</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { ref, toRefs, toRef } from 'vue'

	const props = defineProps(['title', 'image', 'image-width', 'desc', 'url', 'challenges'])
	const expanded = ref(false)
	const { title, image, desc, url, challenges } = toRefs(props)

	const toggle = () => {
		expanded.value = !expanded.value;
		console.log('toggle visibility')
	}
</script>
<style lang="scss" scoped>
.title {
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	border-radius: 5px;
	border-style: solid;
	border-width: 0;
	padding-top: 15px; 
	padding-bottom: 5px;
	padding-left: 5px;
	border-bottom-style: none;
	background-color: var(--dark-alt);
}
.column {
	display: flex;
	flex-direction: row;
	width: 100%;
}
.row {
	flex-direction: row;
	flex-wrap: wrap;
	display: flex;
	width: 100%;
	flex-direction: row;
	box-sizing: border-box;
	margin: auto;
	h1 {
		padding-left: 1rem;
	}
	span {
		cursor: pointer;
	}
}
.project-content {
	img {
		max-width: 100%;
		object-fit: contain;
	}
	svg {
		max-width: 100%;
		object-fit: contain;
	}
	.svg-limiter {
		height: auto;
		max-width: 600px;
	}
	display: flex;
}
@media screen and (max-width:350px) {
	.project-content {
		flex-wrap: wrap;
	}
	.item:first-child {
		flex-basis: 100%;
	}
}
@media screen and (max-width:990px) {
	.project-content {
		flex-wrap: wrap;
	}
	.item:first-child {
		flex-basis: 100%;
	}
}
.project {
	align-content: center;
	max-height: 58px;
	width: 100%;
	overflow: hidden;
	border-bottom-right-radius: 9px;
	border-bottom-left-radius: 9px;
	transition: 0.2s ease-out;
	min-height: 0;
	.material-icons {
		aspect-ratio: 1;
	}
	.information {
		padding: 10px;
		margin-left: 0rem;
		align-content: start;
		max-width: min(575px, 100%);
		min-width: min(500px, 100%);
	}
	.description {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		flex-grow: 1;
		border: dotted grey 3px;
		border-radius: 6px;
		padding: 1rem;
		margin-top: 0.5rem;
		font-size: 1.2rem;
		gap: 20px;
	}
	.dropdown {
		transform: rotate(0deg);
		transition: 0.2 ease-out;
	}
	&.expanded {
		max-height: 100%;
		.dropdown {
			transform: rotate(90deg);
			transition: 0.2 ease-out;
		}
	}
}
</style>
