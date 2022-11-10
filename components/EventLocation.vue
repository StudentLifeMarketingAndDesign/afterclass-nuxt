<template>
  <span
    class="text-uppercase"
    v-if="props.event.location_name || props.event.virtual"
  >
    <font-awesome-icon icon="fa-solid fa-map-pin" />&nbsp;
    <span v-if="props.event.virtual">Virtual Event </span>
    <span itemprop="location" v-if="!props.event.virtual">
      <span v-if="props.event.room_number"> {{ roomNumberParsed }}, </span>
      <NuxtLink
        v-if="props.event.location_id"
        :href="'/events/venue/' + props.event.location_id"
        >{{ props.event.location_name }}</NuxtLink
      >
      <span v-else itemprop="location">{{ props.event.location_name }}</span>
    </span>
  </span>
</template>
<script setup>
const props = defineProps({
  event: Object,
});
var roomNumberParsed = "";

if (props.event.room_number) {
  if (isNaN(props.event.room_number)) {
    roomNumberParsed = props.event.room_number;
  } else {
    roomNumberParsed = "Room " + props.event.room_number;
  }
}
</script>