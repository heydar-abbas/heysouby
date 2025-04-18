<script setup lang="ts">
import BaseLayout from "@/layouts/BaseLayout.vue";
</script>

<template>
	<BaseLayout>
		<div class="w-full h-screen flex flex-col justify-center">
			<details class="bg-[#eee] w-80 p-3 mx-auto my-3 rounded">
				<summary class="cursor-pointer text-center text-xl">الابتدائية</summary>
				<ul>
					<li class="py-2 cursor-pointer hover:underline">
						<nuxt-link to="/class1">الصف الأول</nuxt-link>
					</li>
					<li class="py-2 cursor-pointer hover:underline">
						<nuxt-link to="/class2">الصف الثاني</nuxt-link>
					</li>
					<li class="py-2 cursor-pointer hover:underline">
						<nuxt-link to="class3">الصف الثالث</nuxt-link>
					</li>
					<li class="py-2 cursor-pointer hover:underline">
						<nuxt-link to="/class4">الصف الرابع</nuxt-link>
					</li>
					<li class="py-2 cursor-pointer hover:underline">
						<nuxt-link to="/class5">الصف الخامس</nuxt-link>
					</li>
					<li class="py-2 cursor-pointer hover:underline">
						<nuxt-link to="/class6">الصف السادس</nuxt-link>
					</li>
				</ul>
			</details>

			<details class="bg-[#eee] w-80 p-3 mx-auto my-3 rounded">
				<summary class="cursor-pointer text-center text-xl">المتوسطة</summary>
				<ul>
					<li class="py-2 cursor-pointer hover:underline">
						<nuxt-link to="/class7">الصف الاول</nuxt-link>
					</li>
					<li class="py-2 cursor-pointer hover:underline">
						<nuxt-link to="/class8">الصف الثاني</nuxt-link>
					</li>
					<li class="py-2 cursor-pointer hover:underline">
						<nuxt-link to="/class9">الصف الثالث</nuxt-link>
					</li>
				</ul>
			</details>

			<details class="bg-[#eee] w-80 p-3 mx-auto my-3 rounded">
				<summary class="cursor-pointer text-center text-xl">الاعدادية</summary>
				<ul>
					<li class="py-2 cursor-pointer hover:underline">
						<nuxt-link to="/class10">الرابع</nuxt-link>
					</li>
					<li class="py-2 cursor-pointer hover:underline">
						<nuxt-link to="/class11">الخامس</nuxt-link>
					</li>
					<li class="py-2 cursor-pointer hover:underline">
						<nuxt-link to="/class12">السادس</nuxt-link>
					</li>
				</ul>
			</details>
		</div>
	</BaseLayout>
</template>
