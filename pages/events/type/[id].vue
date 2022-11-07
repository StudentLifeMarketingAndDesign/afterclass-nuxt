<template>
  <div>
    <Title>{{ type.name }}</Title>
    <HeaderSmall />
    <div class="container-fluid">
      <h1 class="filter-header">Events categorized under "{{ type.name }}":</h1>
      <EventWall :events="events" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const route = useRoute();
//console.log(feed.value);
// filterList = typeFeed.value[filterType];
const events = ref([]);
const eventFeed = ref([]);

eventFeed.value = await getEvents(
  null,
  null,
  null,
  null,
  route.params.id,
  null
).then((result) => {
  events.value = result.value.events;
});

const feedUrl =
  "https://content.uiowa.edu/api/v1/views/filters_api.json?display_id=filters";
const { data: typesFeed } = await useFetch(feedUrl);
//console.log(typesFeed);
var type;

if (typesFeed.value["event_types"].length > 0) {
  // console.log("searching through other filters");
  // console.log(types.value);
  typesFeed.value["event_types"].forEach((element) => {
    if (element.id == route.params.id) {
      type = element;
    }
  });
}
//= await getFilter("event_types", route.params.id);
</script>
  
<style scoped>
</style>


