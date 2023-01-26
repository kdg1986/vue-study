<!-- BlogPost.vue -->
<script setup>
import {ref} from "vue";
import Home from "./Home.vue";
import Archive from "./Archive.vue";
import Posts from "./Posts.vue";

const props = defineProps(["title"]);
const emit = defineEmits(["enlarge-text"]);
emit("enlarge-text");

const currentTab = ref("Home");

const tabs = {
	Home,
	Posts,
	Archive,
};
</script>

<template>
	<div class="blog-post">
		<h4>{{ title }}</h4>
		<button @click="$emit('enlarge-text')">Enlarge text</button>
		<slot></slot><br />
		<select v-model="currentTab">
			<option>Home</option>
			<option>Posts</option>
			<option>Archive</option>
		</select>
		<component :is="tabs[currentTab]" class="tab"></component>
	</div>
</template>
