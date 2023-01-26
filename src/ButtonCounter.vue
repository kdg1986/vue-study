<script setup>
import {ref} from "vue";

const ref1 = ref("1");
// export default {
// 	setup() {
// 		const count = ref(0);
// 		return {count};
// 	},
// 	template: `
//     <button @click="count++">
//       You clicked me {{ count }} times.
//     </button>`,
// 	// or `template: '#my-template-element'`
// };

const Test = {
	data() {
		return {
			count: 0,
			data: [1, 2, 3, 4],
			rawHtml: "<br/>11111",
		};
	},
	render() {
		return (
			<div>
				{this.data.map(v => (
					<>
						<br />
						{v}
					</>
				))}
				<div v-html={this.rawHtml}></div>
			</div>
		);
	},
};
</script>

<template>
	{{ ref1 }}
	<Test />
</template>
