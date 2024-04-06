<script setup>
const route = useRoute();
const deckID = route.params.id;
const { data, error, pending } = await useApiFetch(`decks/${deckID}/review`);
const { deck, cards } = data.value;

const state = ref({
  queue: cards,
  activeCard: cards[0],
});

function onCorrect() {
  state.value.queue.shift();
  state.value.activeCard = state.value.queue[0];
}

function onFailed() {
  const answeredCard = state.value.queue.shift();
  state.value.queue.push(answeredCard);
  state.value.activeCard = state.value.queue[0];
}

const cardsLeft = computed(() => {
  return state.value.queue.length;
});
</script>

<template>
  <div>
    <span v-if="pending">Loading...</span>
    <div v-else-if="deck">
      <span>Deck ID: {{ deck.name }}</span>
      <div v-if="cardsLeft > 0">
        <span> Cards Left: {{ cardsLeft }} </span>
        <Flashcard :title="state.activeCard.name" />
      </div>
      <div v-else>
        <span>Done!</span>
      </div>
    </div>
    <span v-else-if="error">Error: {{ error }}</span>
    <div class="flex gap-2">
      <button
        @click="onFailed"
        :disabled="cardsLeft === 0"
        class="bg-red-700 p-4 rounded-xl justify-center"
      >
        Fail
      </button>
      <button
        @click="onCorrect"
        :disabled="cardsLeft === 0"
        class="bg-green-700 p-4 rounded-xl flex justify-center"
      >
        Correct
      </button>
    </div>
  </div>
</template>
