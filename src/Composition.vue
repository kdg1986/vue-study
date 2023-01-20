<script setup>
import {reactive, nextTick, ref} from "vue";
// const state = reactive({count: 0});
const cc = reactive({value: 0});
const obj = {
	foo: ref(0),
	bar: ref(2),
};

const {foo, bar} = obj;

// function increment() {
// 	state.count++;
// 	nextTick(() => {
// 		// access updated DOM
// 		console.log("updated");
// 	});
// 	console.log("inc");
// }

const incrementRef = () => {
	state.count++;
};
</script>

<template>
	<!-- reactive :
	<button v-on:click="increment">
		{{ state.count }}</button
	><br />
	ref :
	<button v-on:click="count++">
		{{ count }}</button
	><br /> -->
	<!-- Object ref :
	<button v-on:click="foo++">
		{{ foo }}</button
	><br /> -->
</template>
