<script setup lang="ts">
import BaseLayout from "@/layouts/BaseLayout.vue";
</script>

<template>
	<BaseLayout>
		<section class="bg-gray-50">
			<div
				class="flex flex-col items-center justify-center px-4 md:px-0 py-8 md:py-0 mx-auto w-full md:w-2xl lg:w-4xl xl:w-6xl h-screen sm:h-auto md:h-screen"
			>
				<div
					class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0"
				>
					<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1
							class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl"
						>
							قم بتسجيل الدخول الى حسابك
						</h1>
						<form class="space-y-4 md:space-y-6" action="#">
							<div>
								<label
									for="email"
									class="block mb-2 text-sm font-medium text-gray-900"
								>
                  البريد الالكتروني
                </label>
								<input
									type="email"
									name="email"
									id="email"
									class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
									placeholder="name@company.com"
								/>
							</div>
							<div>
								<label
									for="password"
									class="block mb-2 text-sm font-medium text-gray-900"
								>
                  كلمة المرور
                </label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="••••••••"
									class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
								/>
							</div>
							<div class="flex items-center justify-between">
								<a
									href="#"
									class="text-sm font-medium text-blue-600 hover:underline"
								>
									نسيت كلمة المرور؟
								</a>
								<div class="flex items-start">
									<div class="ml-3 text-sm">
										<label for="remember" class="text-gray-500">تذكرني</label>
									</div>
									<div class="flex items-center h-5">
										<input
											id="remember"
											type="checkbox"
											class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
										/>
									</div>
								</div>
							</div>
							<button
								type="submit"
								class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
							>
								تسجيل دخول
							</button>
							<p class="text-sm font-light text-gray-500">
								ليس لديك حساب؟
								<RouterLink
									to="/auth/signup"
									class="font-medium text-blue-600 hover:underline mx-2"
								>
									انشئ حسابك
								</RouterLink>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	</BaseLayout>
</template>
