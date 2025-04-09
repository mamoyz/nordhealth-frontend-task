<template>
	<div>
		<div>
			<h1 class="n-font-size-xxl n-color-accent-text">{{ $t("auth.header.title") }}</h1>
			<p class="n-font-size-m n-color-text-weaker n-margin-bs-xs n-padding-i-xxl">{{ $t("auth.header.description") }}</p>
		</div>
		<div class="n-margin-bs-l n-container-xs">
			<provet-stack>
				<AuthForm page="login">
					<template #footer>
						{{ $t("auth.login.footer.no_account") }}
						<NuxtLink to="signup">{{ $t("auth.login.footer.sign_up") }}</NuxtLink>
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
