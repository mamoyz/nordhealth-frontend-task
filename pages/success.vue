<template>
	<div class="n-padding-b-xxl n-full-h">
		<div class="n-container-l n-margin-i-auto n-align-center">
			<provet-stack direction="vertical" gap="l" align-items="center" justify-content="center">
				<provet-banner variant="success">{{ $t("success.description") }}</provet-banner>
				<NuxtLink to="login">
					<provet-button variant="primary" size="l">{{ $t("success.cta_label") }}</provet-button>
				</NuxtLink>
			</provet-stack>
		</div>
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		layout: "dashboard",
	});
</script>

<style scoped></style>
