<template>
  <span class="text-uppercase">
    <span
      v-if="upcomingDates.length > 0"
      itemprop="startDate"
      :datetime="upcomingDates[0].isoDate"
    >
      <font-awesome-icon icon="fa-solid fa-calendar-alt" />
      {{ upcomingDates[0].formattedDate }}
    </span>
    <span v-if="pastDates">
      <font-awesome-icon icon="fa-solid fa-calendar-alt" /> {{ pastDates[0] }}
    </span>
  </span>
</template>
<script setup>
const props = defineProps({
  eventInstances: Array,
  showMoreDatesLink: Boolean,
});

var upcomingDates = [];
var pastDates = [];

upcomingDates = getUpcomingDates(props.eventInstances);

if (upcomingDates.length == 0) {
  pastDates = getPastDates(props.eventInstances);
} else {
  pastDates = null;
}
</script>