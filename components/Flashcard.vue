<script setup>
import { defineProps } from "vue";
defineProps({
  title: {
    type: String,
    default: "Missing card title",
  },
});
</script>

<template>
  <div class="bg-blue-700 py-10 px-6 flex justify-center rounded-xl">
    {{ title }}
  </div>
</template>
