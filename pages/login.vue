<template>
	<div>
		<div>
			<h1 class="n-font-size-xxl n-color-accent-text">Happier patients and teams are a click away</h1>
			<p class="n-font-size-m n-color-text-weaker n-margin-bs-xs n-padding-i-xxl">Join over 2,300 veterinary clinics using Provet Cloud to improve patient care and grow their business.</p>
		</div>
		<div class="n-margin-bs-l n-container-xs">
			<provet-stack>
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
							<provet-button size="l" type="submit" expand variant="primary">Create Account</provet-button>
							<provet-checkbox type="checkbox" hint="Optional" label=" I'd like to receive occasional product updates, event announcements, surveys and offers Terms of use Privacy policy Disconnect" expand @change="toggleConfirmedUpdates" :checked="confirmedUpdates"></provet-checkbox>
						</provet-stack>
					</div>
				</provet-card>
				<div class="n-align-center n-color-text-weaker">
					Already have an account?
					<a href="#">Login</a>
				</div>
			</provet-stack>
		</div>
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		layout: "auth",
	});
	const isPasswordRevealed = ref(false);
	const confirmedUpdates = ref(true);
	const passwordInputType = computed(() => (isPasswordRevealed.value ? "text" : "password"));
	const toggleConfirmedUpdates = () => (confirmedUpdates.value = !confirmedUpdates.value);
	const revealPassword = (status: boolean) => (isPasswordRevealed.value = status);
</script>

<style scoped></style>
