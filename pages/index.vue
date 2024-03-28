<script setup>
const user = "Diego";
</script>

<template>
  <h2>Hello {{ user }}!</h2>
  <div class="grid grid-cols-2 gap-3 mt-10">
    <DeckCard title="Learn your fretboard" linkTo="fretboard" />
    <DeckCard title="Learn the sounds" linkTo="sounds" />
  </div>
</template>

<style></style>
