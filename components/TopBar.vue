<template>
	<provet-top-bar class="n-padding-xl">
		<provet-stack direction="horizontal">
			<NuxtLink class="n-color-text-on-accent" to="/">
				<provet-icon label="Provet Logo" aria-label="Provet Logo">
					<AppLogo style="width: 140px" data-testid="app-logo"></AppLogo>
				</provet-icon>
			</NuxtLink>
		</provet-stack>
		<provet-select :value="locale" slot="end" size="m" data-testid="language-selector" hide-label @change="handleLanguageSwitch">
			<option v-for="locale in locales" :key="locale.name" :value="locale.code">{{ locale.name }}</option>
		</provet-select>
		<provet-dropdown slot="end">
			<provet-button variant="plain" slot="toggle" aria-describedby="user-tooltip">
				<provet-avatar size="l" name="Ariel Salminen">AS</provet-avatar>
			</provet-button>
			<provet-avatar slot="header" size="m" name="Ariel Salminen">AS</provet-avatar>
			<p slot="header" class="n-color-text-weak n-font-size-s">
				Signed in as
				<span class="n-font-weight-active">Ariel Salminen</span>
			</p>
			<provet-dropdown-group>
				<provet-dropdown-item>My profile</provet-dropdown-item>
				<provet-dropdown-item>Account Settings</provet-dropdown-item>
			</provet-dropdown-group>

			<provet-dropdown-item>
				<span>Sign out</span>
				<provet-icon slot="end" size="xs" name="interface-logout"></provet-icon>
			</provet-dropdown-item>
		</provet-dropdown>
	</provet-top-bar>
</template>

<script setup lang="ts">
	import type { Lang } from "@/types";
	const { locales, setLocale, locale } = useI18n();
	const handleLanguageSwitch = (event: Event) => {
		const target = event.target as HTMLSelectElement;
		const languageCode = target.value as Lang;
		setLocale(languageCode);
	};
</script>
