<template>
	<div>
		<index></index>
	</div>
</template>

<script>
	import index from '@/components/index.vue'

	export default {
		name: 'Home',
		components: {
			index: index,
		},
	}
</script>
<style>
	@import url("../assets/css/home.css");
	
</style>