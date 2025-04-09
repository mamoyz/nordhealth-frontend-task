<template>
	<div>
		<div>
			<h1 class="n-font-size-xxl n-color-accent-text">{{ $t("auth.header.title") }}</h1>
			<p class="n-font-size-m n-color-text-weaker n-margin-bs-xs n-padding-i-xxl">{{ $t("auth.header.description") }}</p>
		</div>
		<div class="n-margin-bs-l n-container-xs">
			<provet-stack>
				<AuthForm page="signup" @submit="handleSignUp">
					<template #footer>
						{{ $t("auth.signup.footer.have_account") }}
						<NuxtLink to="login">{{ $t("auth.signup.footer.sign_in") }}</NuxtLink>
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
	const { handleSignUp } = useAuth();
</script>

<style scoped></style>
