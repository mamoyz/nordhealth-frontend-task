<template>
	<provet-card>
		<div class="n-padding-l">
			<provet-stack>
				<provet-input size="l" label="Username" expand required hide-required name="username" type="email" placeholder="user@example.com"></provet-input>
				<provet-input size="l" label="Password" expand required hide-required name="password" :type="passwordInputType" placeholder="••••••••">
					<provet-button size="l" slot="end" aria-describedby="password-tooltip" square @mousedown="revealPassword(true)" @mouseup="revealPassword(false)">
						<provet-icon v-if="isPasswordRevealed" name="interface-edit-off"></provet-icon>
						<provet-icon v-else name="interface-edit-on"></provet-icon>
					</provet-button>
				</provet-input>
				<provet-button size="l" type="submit" expand variant="primary">
					<span v-if="page === 'signup'">Create Account</span>
					<span v-else>Log in</span>
				</provet-button>
				<provet-checkbox v-if="page === 'signup'" type="checkbox" hint="Optional" label=" I'd like to receive occasional product updates, event announcements, surveys and offers Terms of use Privacy policy Disconnect" expand @change="toggleConfirmedUpdates" :checked="confirmedUpdates"></provet-checkbox>
			</provet-stack>
		</div>
	</provet-card>
	<div v-if="$slots.footer" class="n-align-center n-color-text-weaker">
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
