<template>
	<div>
		<tou></tou>
		<neirong></neirong>
		<guanggao></guanggao>
		<wei></wei>
	</div>
</template>

<script>
	import tou from '@/components/tou.vue';
	import neirong from '@/components/neirong.vue';
	import guanggao from '@/components/guanggao.vue';
	import wei from '@/components/wei.vue';

	export default {
		name: 'Index',
		components: {
			tou: tou,
			neirong: neirong,
			guanggao: guanggao,
			wei: wei,
		},
	}
</script>
