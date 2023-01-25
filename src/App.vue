<script>
import {withModifiers, defineComponent} from "vue";
import Composition from "./Composition";

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

export default {
	data() {
		return {
			message: "Hello World",
			rawHtml: "<br/>11111",
			dynamicId: "dynamicId111",
			seen: "1",
			attributeName: "click",
			url: "alert(1)",
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
		Test,
		Composition,
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
		<!-- {{ message }}
		<button v-bind:id="`list-${dynamicId}`">dynamicId</button><br />
		<span :title="(() => 'helo')()"> 123 </span><br />
		<p v-if="seen">Now you see me</p>
		<br />
		<a :[`on${attributeName}`]="url">naver</a> -->

		<Composition class="baz boo" v-if="true" />
	</div>
</template>
