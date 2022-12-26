<template>
	<aside id="bigPhoto" class="grid overflow-hidden" aria-hidden="true">
		<picture id="myPic" class="block h-full w-full">
			<source
				sizes="(max-width: 1000px) 200px, 1000px"
				srcset="/images/timoanttila-200.webp 200w, /images/timoanttila.webp 1000w"
				type="image/webp"
			/>
			<img
				alt="A self-taught passionate developer Timo Anttila"
				aria-label="Portrait of Timo Anttila"
				class="block h-full object-cover w-full"
				loading="lazy"
				sizes="(max-width: 1000px) 200px, 1000px"
				srcset="/images/timoanttila-200.jpg 200w, /images/timoanttila.jpg 1000w"
				src="/images/timoanttila.jpg"
			/>
		</picture>
	</aside>
</template>
