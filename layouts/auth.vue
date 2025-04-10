<template>
	<div>
		<TopBar />
		<div class="n-container-xs n-padding-b-xxl n-margin-i-auto n-align-center">
			<slot></slot>
		</div>
		<provet-toast-group v-if="displayToastMessage">
			<provet-toast :variant="toastType" @dismiss="displayToastMessage = false">
				{{ notificationMessage }}
			</provet-toast>
		</provet-toast-group>
	</div>
</template>

<script setup lang="ts">
	const { toastType, notificationMessage, displayToastMessage } = useAuth();
</script>

<style scoped></style>
