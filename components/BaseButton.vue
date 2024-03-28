<script setup>
import { defineProps } from "vue";

defineProps({
  text: {
    type: String,
    default: "Missing text",
  },
});
</script>

<template>
  <button class="bg-blue-600 p-4 rounded-xl active:scale-90 duration-150">
    {{ text }}
  </button>
</template>
