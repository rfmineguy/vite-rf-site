<template>
	<div>
		<span class="dropdown-arrow material-icons" @click='toggle'>
			arrow_drop_down
		</span>
	</div>
</template>

<script setup>
	const toggle = () => {
	}
</script>

<style lang="scss" scoped>
	.dropdown-arrow {
		position: relative;
		rotation: 0deg;
		cursor: pointer;
		transform: rotate(-90deg);
		
		&:hover {
			transition: 0.2s rotate(90deg) east-out;
		}
	}
</style>
