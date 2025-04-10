<template>
	<div>
		<provet-layout>
			<template #header>
<provet-header >
				<h1 class="n-typescale-l">Dashboard</h1>
				<template #end>
<provet-button variant="primary" >
					<template #start>
<provet-icon  name="interface-add-small"/>
</template>
					Create new
				</provet-button>
</template>
				<provet-tooltip id="export" position="block-end">Export data as Spreadsheet</provet-tooltip>
			</provet-header>
</template>
			<provet-stack gap="l">
				<provet-card>
					<template #header>
<h2 >Card heading</h2>
</template>
					<provet-banner variant="success">
						Your order has been shipped and will arrive on May 27th.
						<a href="#">Track order</a>
					</provet-banner>
				</provet-card>
			</provet-stack>
		</provet-layout>
		<provet-command-menu/>
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		layout: "dashboard",
		middleware: ["auth"],
	});
</script>

<style scoped></style>
