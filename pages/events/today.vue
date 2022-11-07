<template>
  <div>
    <Head>
      <Title>Today</Title>
    </Head>
    <HeaderSmall />
    <div class="container-fluid">
      <h1 class="filter-header">Today:</h1>
      <EventWall :events="events" />
    </div>
  </div>
</template>
<script setup>
import { format } from "date-fns";
import { ref } from "vue";

const events = ref([]);
const eventFeed = ref([]);

const now = new Date();
var start;
var end;

start = format(now, "MM-dd-yyyy");
end = format(now, "MM-dd-yyyy");

eventFeed.value = await getEvents(start, end).then((result) => {
  events.value = result.value.events;
});
</script>
  
<style scoped>
</style>