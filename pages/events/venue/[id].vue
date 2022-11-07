<template>
  <div>
    <Head>
      <Title>{{ venue.name }}</Title>
      <MetaImageDefault />
    </Head>
    <HeaderSmall />
    <div class="container-fluid">
      <h1 class="filter-header">Events located at "{{ venue.name }}":</h1>
      <EventWall :events="events" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const route = useRoute();

const events = ref([]);
const eventFeed = ref([]);

eventFeed.value = await getEvents(
  null,
  null,
  route.params.id,
  null,
  null,
  null
).then((result) => {
  events.value = result.value.events;
});

const feedUrl =
  "https://content.uiowa.edu/api/v1/views/filters_api.json?display_id=filters";
const { data: venuesFeed } = await useFetch(feedUrl);
//console.log(venuesFeed);
var venue;

if (venuesFeed.value["places"].length > 0) {
  // console.log("searching through other filters");
  // console.log(venues.value);
  venuesFeed.value["places"].forEach((element) => {
    if (element.id == route.params.id) {
      venue = element;
    }
  });
}
</script>
  
<style scoped>
</style>


