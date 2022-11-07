<template>
  <div>
    <Head>
      <Meta
        name="description"
        content="After Class: A listing of student-focused events at the University of Iowa"
      />
      <MetaImageDefault />
    </Head>
    <HeaderLarge />
    <div class="container-fluid">
      <EventWall :events="events" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const eventFeed = ref([]);
const events = ref([]);
eventFeed.value = await getEvents().then((result) => {
  events.value = result.value.events;
  //console.log(events.value);
});

//console.log(eventFeed.value.events);
</script>

<style scoped>
</style>