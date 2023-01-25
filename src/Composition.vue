<script setup>
import {reactive, nextTick, ref, computed, watch, onMounted} from "vue";

onMounted(() => {
	console.log(document);
});

const state = reactive({count: 0});
const watchstate = reactive({count: 0});
const cc = reactive({value: 0});
const obj = {
	foo: ref(0),
	bar: ref(2),
};

const {foo, bar} = obj;

const author = reactive({
	name: "John Doe",
	books: ["Vue 2 - Advanced Guide", "Vue 3 - Basic Guide", "Vue 4 - The Mystery"],
});

function increment() {
	state.count++;
	author.books.length === 3 && author.books.push("test");
	nextTick(() => {
		// access updated DOM
		// console.log("updated");
	});
	// console.log("inc");
}

// const incrementRef = () => {
// 	state.count++;
// };

// const test = () => {
// 	console.log("test");
// 	return author.books.length > 0 ? "Yes" : "No";
// };
const test = computed(() => {
	console.log("computed");
	return author.books.length === 3 ? "Yes" : "No";
});

const ifelse = ref(false);
const li = ref([
	{message: "Foo", isComplete: false, children: [1, 2, 3]},
	{message: "Bar", isComplete: true, children: [1, 2, 3]},
]);

const myObject = reactive({
	title: "How to do lists in Vue",
	author: "Jane Doe",
	publishedAt: "2016-04-10",
});

const text = ref("");
const selected = ref("");

const options = ref([
	{text: "One", value: "A"},
	{text: "Two", value: "B"},
	{text: "Three", value: "C"},
]);

const inputFunction = event => {
	console.log("input");
	text.value = event.target.value;
};

const todoId = ref(1);
const data = ref(null);

watch(
	todoId,
	async () => {
		if (todoId.value) {
			const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`);
			data.value = await response.json();
		} else {
			data.value = null;
		}
	},
	// {immediate: true},
);
</script>

<template>
	<!-- <p class="foo bar" v-bind:class="$attrs.class">Hi!</p>
	{{ test }}
	{{ $attrs.show }}
	<br />
	reactive :
	<button v-on:click="increment">
		{{ state.ount }}
	</button>
	<br />
	-->
	<button @click="ifelse = !ifelse">
		{{ ifelse }}</button
	><br />
	<h1 v-if="ifelse">Vue is awesome!</h1>
	<h1 v-else>Oh no 😢</h1>
	<br />

	<li v-for="item in li">
		<span v-for="childItem in item.children"> {{ item.message }} {{ childItem }} </span>
	</li>

	<ul>
		<li v-for="value in myObject">
			{{ value }}
		</li>
	</ul>
	<li v-for="(value, key) in myObject">{{ key }}: {{ value }}</li>
	<br />
	<li v-for="(value, key, index) in myObject">{{ index }}. {{ key }}: {{ value }}</li>

	<br />

	<template v-for="item in li" v-if="ifelse">
		<li>{{ item.message }}</li>
		<li class="divider" role="presentation"></li>
	</template>

	<br />
	<br />
	<br />
	<br />
	<li v-for="item in li">
		<span v-for="childItem in item.children" v-if="!item.isComplete"> {{ item.message }} {{ childItem }} </span>
	</li>

	<input v-model="text" />

	{{ text }}
	<br />
	<br />
	<!-- {{ selected }}
	<select v-model="selected" multiple>
		<option disabled value="">Please select one</option>
		<option>A</option>
		<option>B</option>
		<option>C</option>
	</select> -->

	<br />
	<br />
	<select v-model="selected">
		<option v-for="option in options">
			{{ option.text }}
		</option>
	</select>

	<div>Selected: {{ selected }}</div>

	<br />
	<input v-model="todoId" />
	<br />

	{{ data }}

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
