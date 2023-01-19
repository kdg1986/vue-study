<script>
import {withModifiers, defineComponent} from "vue";

export default {
	data() {
		return {
			message: "Hello World",
			rawHtml: "<br/>11111",
		};
	},
	mounted: function () {
		this.message = "Hello World1";
	},
	updated: function () {
		console.log(`updated => ${this.message}`);
	},
	beforeUpdate: function () {
		console.log(`beforeUpdate => ${this.message}`);
	},
	components: {
		Test: {
			data() {
				return {
					count: 0,
					data: [1, 2, 3, 4],
				};
			},
			render() {
				return (
					<div onClick={() => this.data.push(1)}>
						{this.data.map(v => (
							<>
								<br />
								{v}
							</>
						))}
					</div>
				);
			},
		},
	},
};
</script>

<style>
#app {
	font-size: 18px;
	font-family: "Roboto", sans-serif;
	color: blue;
}
</style>

<template>
	<div>
		{{ message }}
		<Test />
		<p>Using v-html directive: <span v-html="rawHtml"></span></p>
	</div>
</template>
