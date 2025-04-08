<template>
	<div>
		<provet-top-bar class="n-padding-xl">
			<provet-stack direction="horizontal">
				<provet-icon label="Provet Logo" aria-label="Provet Logo">
					<AppLogo />
				</provet-icon>
			</provet-stack>
			<provet-select slot="end" size="m" name="page-size" value="25" hide-label>
				<option value="en-GB">English</option>
				<option value="fi-FI">Finnish</option>
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
	</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
