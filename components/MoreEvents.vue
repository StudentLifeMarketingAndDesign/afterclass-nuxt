<template>
  <div>
    <div class="container-fluid">
      <EventWall :events="shuffledEvents" :startDate="props.startDate" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps({
  startDate: String,
});
const shuffledEvents = ref([]);

const eventFeed = ref(
  await getEvents(null, null, null, null, null, null, 10).then((result) => {
    // console.log(result.value.events);
    shuffledEvents.value = shuffleArray(result.value.events);
    //console.log(shuffledEvents.value);
    // return shuffledEvents;
  })
);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array.slice(0, 10);
}
</script>

<style scoped>
</style>