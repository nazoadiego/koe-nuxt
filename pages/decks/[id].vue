<script setup>
const route = useRoute();
const deckID = route.params.id;
const {
  data: deck,
  error,
  pending,
} = await useApiFetch(`decks/${deckID}/review`);
const { cards } = deck.value;
console.log(deck.value);
</script>

<template>
  <span>Deck ID: {{ deck.name }}</span>
  <div>
    <div v-for="card in cards">
      {{ card.name }}
    </div>
  </div>
</template>
