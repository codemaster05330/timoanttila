<template>
	<div>
		<picture
			id="myPic"
			class="
				block
				overflow-hidden
				w-full
				lg:fixed lg:top-0 lg:left-0 lg:w-1/3
				2xl:-left-6 2xl:w-1/2
			"
		>
			<source srcset="/images/timoanttila.webp" type="image/webp" />
			<source srcset="/images/timoanttila.jpg" type="image/jpeg" />
			<img
				class="block w-full h-full object-cover"
				src="/images/timoanttila.jpg"
				alt="A self-taught passionate developer Timo Anttila"
				aria-label="Portrait of Timo Anttila"
				width="1000"
				height="1000"
			/>
		</picture>
	</div>
</template>