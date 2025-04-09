<template>
	<div>
		<div>
			<h1 class="n-font-size-xxl n-color-accent-text">Happier patients and teams are a click away</h1>
			<p class="n-font-size-m n-color-text-weaker n-margin-bs-xs n-padding-i-xxl">Join over 2,300 veterinary clinics using Provet Cloud to improve patient care and grow their business.</p>
		</div>
		<div class="n-margin-bs-l n-container-xs">
			<provet-stack>
				<AuthForm page="login">
					<template #footer>
						Dont' have an account?
						<NuxtLink to="signup">Sign up</NuxtLink>
					</template>
				</AuthForm>
			</provet-stack>
		</div>
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		layout: "auth",
	});
</script>

<style scoped></style>
