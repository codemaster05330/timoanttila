<template>
	<div>
		<picture
			id="myPic"
			class="block overflow-hidden lg:fixed lg:top-0 lg:left-0 lg:w-1/3 2xl:-left-6 2xl:w-1/2"
		>
			<source
				srcset="/images/timoanttila-200.webp 200w, /images/timoanttila.webp 1000w"
				sizes="(max-width: 1000px) 200px,
            1000px"
				type="image/webp"
			/>
			<source
				srcset="/images/timoanttila-200.jpg 200w, /images/timoanttila.jpg 1000w"
				sizes="(max-width: 1000px) 200px,
            1000px"
				type="image/jpeg"
			/>
			<img
				class="block w-full h-full object-cover"
				srcset="/images/timoanttila-200.jpg 200w, /images/timoanttila.jpg 1000w"
				sizes="(max-width: 1000px) 200px,
            1000px"
				src="/images/timoanttila.jpg"
				alt="A self-taught passionate developer Timo Anttila"
				aria-label="Portrait of Timo Anttila"
				width="1000"
				height="1000"
			/>
		</picture>
	</div>
</template>
