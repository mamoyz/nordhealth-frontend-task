<template>
	<provet-card>
		<div class="n-padding-l">
			<provet-stack>
				<provet-input data-testid="username" size="l" :label="$t('auth.form.username_label')" expand required hide-required name="username" type="email" placeholder="user@example.com" :error="formState.email.error || undefined" @blur="handleEmailBlur" />
				<provet-input data-testid="password" size="l" :label="$t('auth.form.password_label')" expand required hide-required name="password" :type="passwordInputType" placeholder="••••••••" :error="formState.password.error || undefined" @blur="handlePasswordBlur">
					<template #end>
						<provet-button data-testid="reveal-password-button" size="l" square @mousedown="handleTogglePassword(true)" @mouseup="handleTogglePassword(false)">
							<provet-icon :name="isPasswordRevealed ? 'interface-edit-off' : 'interface-edit-on'" />
						</provet-button>
					</template>
				</provet-input>
				<provet-button :loading="isLoading" data-testid="submit-button" size="l" type="submit" expand variant="primary" @click="handleSubmit">
					<span v-if="page === 'signup'">{{ $t("auth.signup.cta_title") }}</span>
					<span v-else>{{ $t("auth.login.cta_title") }}</span>
				</provet-button>

				<provet-checkbox v-if="page === 'signup'" type="checkbox" :hint="$t('auth.form.updates_hint')" :label="$t('auth.form.updates_label')" expand :checked="formState.confirmedUpdates" @change="handleUpdateCheckbox" />
			</provet-stack>
		</div>
	</provet-card>
	<div v-if="$slots.footer" data-testid="footer" class="n-align-center n-color-text-weaker">
		<slot name="footer" />
	</div>
	<provet-toast-group v-if="displayValidationToast">
		<provet-toast variant="danger" @dismiss="displayValidationToast = false">
			{{ $t("auth.form.errors.toast") }}
		</provet-toast>
	</provet-toast-group>
</template>

<script setup lang="ts">
	import type { FormData } from "@/types";

	const { t } = useI18n();
	interface Props {
		page: "login" | "signup";
		isLoading: boolean;
	}
	const PASSWORD_MIN_LENGTH = 8;

	withDefaults(defineProps<Props>(), {
		isLoading: false,
	});
	const emit = defineEmits(["submit"]);
	const displayValidationToast = ref(false);
	const formState = ref<FormData>({
		email: {
			value: "",
			error: "",
		},
		password: {
			value: "",
			error: "",
		},
		confirmedUpdates: true,
	});
	const isPasswordRevealed = ref(false);

	const passwordInputType = computed(() => (isPasswordRevealed.value ? "text" : "password"));

	const isFormValid = computed(() => {
		return !formState.value.email.error && !formState.value.password.error && formState.value.email.value && formState.value.password.value;
	});

	const validateEmail = () => {
		if (!formState.value.email.value) {
			formState.value.email.error = t("auth.form.errors.email_required");
			return;
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formState.value.email.value)) {
			formState.value.email.error = t("auth.form.errors.email_invalid");
			return;
		}

		formState.value.email.error = "";
	};

	const validatePassword = () => {
		if (!formState.value.password.value) {
			formState.value.password.error = t("auth.form.errors.password_required");
			return;
		}

		if (formState.value.password.value.length < PASSWORD_MIN_LENGTH) {
			formState.value.password.error = t("auth.form.errors.password_required");
			return;
		}
		formState.value.password.error = "";
	};

	const handleEmailBlur = (event: Event) => {
		const input = event.target as HTMLInputElement;
		formState.value.email.value = input.value;
		validateEmail();
	};

	const handlePasswordBlur = (event: Event) => {
		const input = event.target as HTMLInputElement;
		formState.value.password.value = input.value;
		validatePassword();
	};

	const handleUpdateCheckbox = () => (formState.value.confirmedUpdates = !formState.value.confirmedUpdates);
	const handleTogglePassword = (status: boolean) => (isPasswordRevealed.value = status);

	const handleSubmit = () => {
		if (!isFormValid.value) {
			displayValidationToast.value = true;
			return;
		}
		emit("submit", { ...formState.value });
	};
</script>

<style scoped></style>
