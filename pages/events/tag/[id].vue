<template>
  <div>
    <Head>
      <Title>{{ tag.name }}</Title>
      <MetaImageDefault />
    </Head>
    <HeaderSmall />
    <div class="container-fluid">
      <h1 class="filter-header">Events tagged as "{{ tag.name }}":</h1>
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
  null,
  route.params.id,
  null,
  null
).then((result) => {
  events.value = result.value.events;
});
// console.log(tag);
const feedUrl =
  "https://content.uiowa.edu/api/v1/views/filters_api.json?display_id=keywords";

const { data: tagsFeed } = await useFetch(feedUrl);

var tag;

//console.log(tagsFeed.value.keywords);

if (tagsFeed.value) {
  // console.log("searching through keywords...");
  // console.log(types.value);
  tagsFeed.value.keywords.forEach((element) => {
    if (element.id == route.params.id) {
      //console.log("found one!");
      tag = element;
    }
  });
}
</script>
  
<style scoped>
</style>


