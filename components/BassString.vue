<script setup>
import { defineProps } from "vue";
defineProps({
  string: {
    type: String,
    default: "Missing",
  },
  cardString: {
    type: String,
    default: "Missing",
  },
  fret: {
    type: Number,
  },
});
</script>

<template>
  <span v-if="string === cardString"> {{ string }}---{{ fret }}---- </span>
  <span v-else> {{ string }}-------- </span>
</template>
