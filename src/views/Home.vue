<template>
	<main class="home-page">
		<h2 style="padding-left:20px;">Who am I?</h2>
		<hr>
		<div class="photo-about">
			<img src="/vite-rf-site/images/riley_photo.jpeg"></img>
			<p>Hello! This is me! My name is <b>Riley Fischer</b> and I am a passionate computer programmer, and nature lover.</p>
		</div>
		<hr>
		<h2 style="padding-left:20px;">What am I into?</h2>
		<hr>
		<div class="who-am-i">
			<p>I am a programmer who primarily uses the <b>C</b> programming language. I like the way it forces me to think about how the computer works in a more complex way.</p>
		</div>
		<hr>
		<h2 style="padding-left:20px;">What are my projects?</h2>
		<hr>
		<div class="my-projects">
			<p>You can find my projects <RouterLink to="/projects">here</RouterLink></p>
		</div>
	</main>
</template>

<style lang="scss" scoped>
.photo-about {
	flex-direction: row;
	flex-wrap: wrap;
	display: flex;
	box-sizing: border-box;
	padding: 1rem;
	padding-bottom: 4rem;
	img {
		max-width: min(373px, calc(100vw - 160px));
		border-radius: 10px;
		border-width: 3px;
		border-style: dashed;
		border-color: var(--dark-alt);
		object-fit: contain;
	}
	p {
		padding-top: 1rem;
	}
}
.who-am-i {
	padding: 1rem;
	padding-bottom: 4rem;
	ul {
		margin-left: 30px;
	}
}
hr {
	margin-bottom: 15px;
}
	
a:link {
  color: green;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: pink;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: red;
  background-color: transparent;
  text-decoration: underline;
}

a:active {
  color: yellow;
  background-color: transparent;
  text-decoration: underline;
}
</style>
