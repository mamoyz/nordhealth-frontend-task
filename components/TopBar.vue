<template>
	<div>
		<provet-top-bar class="n-padding-xl">
			<provet-stack direction="horizontal">
				<NuxtLink class="n-color-text-on-accent" to="/">
					<provet-icon label="Provet Logo" aria-label="Provet Logo">
						<AppLogo style="width: 140px" data-testid="app-logo"></AppLogo>
					</provet-icon>
				</NuxtLink>
			</provet-stack>
			<provet-select slot="end" :value="locale" size="m" data-testid="language-selector" hide-label @change="handleLanguageSwitch">
				<option v-for="item in locales" :key="item.name" :value="item.code">{{ item.name }}</option>
			</provet-select>
			<provet-dropdown v-if="userData" slot="end">
				<provet-button slot="toggle" variant="plain" aria-describedby="user-tooltip">
					<provet-avatar size="l" :src="userData.avatar" :name="userData?.name">{{ userData?.name[0] }}</provet-avatar>
				</provet-button>
				<provet-avatar slot="header" size="m" :src="userData.avatar" :name="userData?.name">{{ userData?.name[0] }}</provet-avatar>
				<p slot="header" class="n-color-text-weak n-font-size-s">
					{{ $t("topbar.signed_in") }}
					<span class="n-font-weight-active">{{ userData?.name }}</span>
				</p>
				<provet-dropdown-group>
					<provet-dropdown-item>{{ $t("topbar.my_profile") }}</provet-dropdown-item>

					<provet-dropdown-item>{{ $t("topbar.account_settings") }}</provet-dropdown-item>
				</provet-dropdown-group>

				<provet-dropdown-item>
					<span @click="handleLogOut">{{ $t("topbar.sign_out") }}</span>
					<provet-icon slot="end" size="xs" name="interface-logout"></provet-icon>
				</provet-dropdown-item>
			</provet-dropdown>
		</provet-top-bar>
	</div>
</template>

<script setup lang="ts">
	import type { Lang } from "@/types";
	const { locales, setLocale, locale } = useI18n();
	const { userData } = useAuthStore();
	const { handleLogOut } = useAuth();
	const handleLanguageSwitch = (event: Event) => {
		const target = event.target as HTMLSelectElement;
		const languageCode = target.value as Lang;
		setLocale(languageCode);
	};
</script>
