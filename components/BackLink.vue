<template>
  <NuxtLink
    @click.prevent="$router.back()"
    class="bg-blue-600 py-2 px-6 flex justify-center rounded-xl active:scale-90 duration-150"
  >
    Go back
  </NuxtLink>
</template>
