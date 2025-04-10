<template>
	<provet-stack class="n-color-status-info n-padding-b-xxl" align-items="center" justify-content="center" style="height: 100vh">
		<provet-stack class="n-container-l" direction="vertical" align-items="center" gap="l">
			<AppLogo style="width: 300px"/>
			<h1 class="n-color-text-on-accent n-align-center n n-font-size-xxxl n-font-weight-heading">{{ $t("home.title") }}</h1>
			<div class="n-container-xs n-margin-i-auto n-align-center">
				<h2 class="n-color-text-on-accent n-align-center n n-font-weight-active">{{ $t("home.description") }}</h2>
			</div>
			<NuxtLink to="signup">
				<provet-button style="--n-button-background-color: var(--n-color-border-warning)" size="l">{{ $t("home.cta_label") }}</provet-button>
			</NuxtLink>
		</provet-stack>
	</provet-stack>
</template>

<script setup lang="ts">
	import AppLogo from "@/components/AppLogo.vue";
</script>
