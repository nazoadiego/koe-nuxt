<script setup>
import { defineProps } from "vue";
defineProps({
  title: {
    type: String,
    default: "Missing card title",
  },
  card: {
    type: Object,
    default: {},
  },
  showAnswer: {
    type: Boolean,
    default: true,
  },
});
const DEFAULT_TUNNING = ["E", "A", "D", "G"];
</script>

<template>
  <div class="bg-blue-700 py-10 px-6 rounded-xl">
    <h3 class="text-center">
      {{ title }}
    </h3>

    <div v-if="showAnswer" class="flex flex-col items-center mt-4">
      <div v-for="string in DEFAULT_TUNNING">
        <BassString
          :string="string"
          :cardString="card.string"
          :fret="card.fret"
        />
      </div>
    </div>
  </div>
</template>
