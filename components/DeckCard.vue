<script setup>
import { defineProps } from "vue";
defineProps({
  title: {
    type: String,
    default: "Missing deck title",
  },
  linkTo: {
    type: String,
    default: "/",
  },
});
</script>

<template>
  <NuxtLink
    :to="linkTo"
    class="bg-blue-600 py-10 px-6 flex justify-center rounded-xl active:scale-90 duration-150"
  >
    {{ title }}
  </NuxtLink>
</template>
