<script setup>
const route = useRoute();
const deckID = route.params.id;
const { data, error, pending } = await useApiFetch(`decks/${deckID}/review`);
const { deck, cards } = data.value;

const state = ref({
  queue: cards,
  activeCard: cards[0],
});

const showAnswer = ref(false);

function onCorrect() {
  state.value.queue.shift();
  state.value.activeCard = state.value.queue[0];
  nextCard();
}

function onFailed() {
  const answeredCard = state.value.queue.shift();
  state.value.queue.push(answeredCard);
  nextCard();
}

function onAnswer() {
  showAnswer.value = true;
}

function nextCard() {
  showAnswer.value = false;
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
        <Flashcard :title="state.activeCard.name" :card="state.activeCard" />
      </div>
      <div v-else>
        <span>Done!</span>
      </div>
    </div>
    <span v-else-if="error">Error: {{ error }}</span>
    <div v-if="showAnswer" class="mt-4 flex gap-2">
      <button
        @click="onFailed"
        :disabled="cardsLeft === 0"
        class="bg-red-700 p-4 rounded-xl flex justify-center"
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
    <div v-else class="mt-4">
      <button
        @click="onAnswer"
        :disabled="cardsLeft === 0"
        class="bg-blue-900 p-4 rounded-xl flex"
      >
        Show Answer
      </button>
    </div>
  </div>
</template>
