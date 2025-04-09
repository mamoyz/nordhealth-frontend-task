<template>
	<provet-card>
		<div class="n-padding-l">
			<provet-stack>
				<provet-input data-testid="username" size="l" :label="$t('auth.form.username_label')" expand required hide-required name="username" type="email" placeholder="user@example.com"></provet-input>
				<provet-input data-testid="password" size="l" :label="$t('auth.form.password_label')" expand required hide-required name="password" :type="passwordInputType" placeholder="••••••••">
					<provet-button data-testid="reveal-password-button" size="l" slot="end" aria-describedby="password-tooltip" square @mousedown="revealPassword(true)" @mouseup="revealPassword(false)">
						<provet-icon v-if="isPasswordRevealed" name="interface-edit-off"></provet-icon>
						<provet-icon v-else name="interface-edit-on"></provet-icon>
					</provet-button>
				</provet-input>
				<provet-button data-testid="submit-button" size="l" type="submit" expand variant="primary">
					<span v-if="page === 'signup'">{{ $t("auth.signup.cta_title") }}</span>
					<span v-else>{{ $t("auth.login.cta_title") }}</span>
				</provet-button>

				<provet-checkbox v-if="page === 'signup'" type="checkbox" :hint="$t('auth.form.updates_hint')" :label="$t('auth.form.updates_label')" expand @change="toggleConfirmedUpdates" :checked="confirmedUpdates"></provet-checkbox>
			</provet-stack>
		</div>
	</provet-card>
	<div v-if="$slots.footer" data-testid="footer" class="n-align-center n-color-text-weaker">
		<slot name="footer"></slot>
	</div>
</template>

<script setup lang="ts">
	interface Props {
		page: "login" | "signup";
	}
	const props = defineProps<Props>();
	const isPasswordRevealed = ref(false);
	const confirmedUpdates = ref(true);
	const passwordInputType = computed(() => (isPasswordRevealed.value ? "text" : "password"));
	const toggleConfirmedUpdates = () => (confirmedUpdates.value = !confirmedUpdates.value);
	const revealPassword = (status: boolean) => (isPasswordRevealed.value = status);
</script>

<style scoped></style>
