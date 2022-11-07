<template>
  <masonry-wall
    :items="events"
    :ssr-columns="4"
    :column-width="300"
    :gap="16"
    v-if="events"
  >
    <template #default="{ item }">
      <EventCard :event="item.event" />
    </template>
  </masonry-wall>
  <p v-else class="text-center">No upcoming events found.</p>
</template>
<script setup>
const props = defineProps({
  events: Object,
});
</script>

<style scoped>
</style>