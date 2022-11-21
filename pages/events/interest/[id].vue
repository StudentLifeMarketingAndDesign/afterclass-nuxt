<template>
  <div>

    <Head>
      <Title>{{ interest.name }}</Title>
      <Meta name="title" :content="interest.name" />
      <Meta name="description=" content="The purpose of Late Night and Weekend Programs is to promote the
              health, well-being and safety of students by providing
              opportunities to engage with others and build community in an
              environment without alcohol." v-if="interest.id == 7491" />
      <MetaImageDefault />
    </Head>
    <HeaderSmall />
    <div class="container-fluid">
      <h1 class="filter-header">Events tagged as "{{ interest.name }}":</h1>

      <div class="row">
        <div class="col-lg-7 m-auto">
          <div class="late-night-feature my-4" v-if="interest.id == 7491">
            <p>
              <img class="late-night-feature__flag" src="~/assets/images/latenightbanner.png"
                alt="Late Night Programs Flag" role="presentation" />The purpose of Late Night and Weekend Programs is
              to promote the
              health, well-being and safety of students by providing
              opportunities to engage with others and build community in an
              environment without alcohol.
            </p>
            <p>
              <a href="https://leadandengage.uiowa.edu/our-programs/late-night-weekend-programs" target="_blank">Learn
                more on the Late Night and Weekend Programs website.</a>
            </p>

            <p class="late-night-feature__smalltext"></p>
          </div>
        </div>
      </div>

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
  null,
  null,
  route.params.id
).then((result) => {
  events.value = result.value.events;
});

const feedUrl =
  "https://content.uiowa.edu/api/v1/views/filters_api.json?display_id=filters";
const { data: interestsFeed } = await useFetch(feedUrl);
//console.log(interestsFeed);
var interest;

if (interestsFeed.value["event_general_interest"].length > 0) {
  // console.log("searching through other filters");
  // console.log(interests.value);
  interestsFeed.value["event_general_interest"].forEach((element) => {
    if (element.id == route.params.id) {
      interest = element;
    }
  });
}

//console.log(interest);
</script>
  
<style scoped>

</style>


