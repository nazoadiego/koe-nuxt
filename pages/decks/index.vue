<script setup>
const { data: decks, error, pending } = await useApiFetch("/decks");
console.log("here");
</script>

<template>
  <span v-if="pending">Loading...</span>
  <div v-else-if="decks">
    Decks:
    <div v-for="deck in decks" :key="deck">
      <DeckCard :title="deck.name" :linkTo="'/decks/' + deck.id"></DeckCard>
    </div>
  </div>
  <span v-else-if="error">Error: {{ error }}</span>
  <BackLink></BackLink>
</template>

<style></style>
