<script setup>
import { ref } from "vue";
const eStringNotesList = ref([]);

useAsyncData("eStringNotesQuery", () => {
  const json = queryContent("/e-string").findOne();
  eStringNotesList.value = json.body;
});
</script>

<template>
  <ul class="grid grid-cols-2 sm:grid-cols-6 xl:grid-cols-12 gap-2 mt-10">
    <li
      class="p-4 flex flex-col bg-slate-600 rounded-xl hover:scale-110 duration-75"
      v-for="note in eStringNotesList"
      :key="`note-${note.key}`"
    >
      <div>Fret - {{ note.fret }}</div>
      <div class="text-center">{{ note.key }}</div>
    </li>
  </ul>
</template>
