<template>
	<TopBar />
	<div class="n-container-xs n-padding-b-xxl n-margin-i-auto n-align-center">
		<slot />
	</div>
	<provet-toast-group v-if="displayToastMessage">
		<provet-toast @dismiss="displayToastMessage = false" :variant="toastType">
			{{ notificationMessage }}
		</provet-toast>
	</provet-toast-group>
</template>

<script setup lang="ts">
	const { toastType, notificationMessage, displayToastMessage } = useAuth();
</script>

<style scoped></style>
