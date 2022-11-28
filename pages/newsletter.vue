<template>
  <div>
    <Head>
      <Title>Newsletter Creator</Title>
    </Head>
    <HeaderSmall />
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h1 class="mt-6">After Class Newsletter Creator</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <form>
            <label for="header-text" class="d-block">Header Text</label>
            <textarea
              id="header-text"
              v-model="headerText"
              @input="updateHtmlGen"
              class="form-control"
              rows="8"
            />
            <div v-for="index in 8" :key="index">
              <label :for="'featured-event-' + index"
                >Featured Event {{ index }}:</label
              >
              <select
                :id="'featured-event-' + index"
                :name="'featured-event-' + index"
                class="form-select form-select-sm"
                v-model="featuredEventIds[index]"
                @change="updateHtmlGen"
              >
                <option value="0" label="(No event)">0</option>
                <option
                  @click="updateHtmlGen($event.target.value)"
                  v-for="event in eventFeed.events"
                  :key="event.event.id"
                  :value="event.event.id"
                  :label="
                    event.event.title +
                    ' (' +
                    getUpcomingDates(event.event.event_instances)[0]
                      .formattedDate +
                    ')'
                  "
                >
                  {{ event.event.id }}
                </option>
                <!-- <EventCard v-for="event in eventFeed.events" :key="event.id" :event="event" /> -->
              </select>
            </div>
            <div v-for="index in 8" :key="index">
              <label :for="'nonfeatured-event-' + index"
                >Nonfeatured Event {{ index }}:</label
              >
              <select
                :id="'nonfeatured-event-' + index"
                :name="'nonfeatured-event-' + index"
                class="form-select form-select-sm"
                v-model="nonfeaturedEventIds[index]"
                @change="updateHtmlGen"
              >
                <option value="0" label="(No event)">0</option>
                <option
                  @click="updateHtmlGen($event.target.value)"
                  v-for="event in eventFeed.events"
                  :key="event.event.id"
                  :value="event.event.id"
                  :label="event.event.title"
                >
                  {{ event.event.id }}
                </option>
              </select>
            </div>
            <label for="footer-text" class="d-block">Footer Text</label>
            <textarea
              id="footer-text"
              v-model="footerText"
              @input="updateHtmlGen"
              class="form-control"
              rows="8"
            />
          </form>
        </div>
        <div class="col-lg-6">
          <iframe :srcdoc="htmlGen" width="100%" height="1000"> </iframe>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <label for="outputHTML">Copy/Paste HTML:</label>
          <textarea
            readonly
            rows="40"
            cols="50"
            id="outputHTML"
            class="form-control output-html"
            @click="$event.target.select()"
            v-model="htmlGen"
          >
          </textarea>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// import TextClamp from "vue3-text-clamp";
import { ref } from "vue";
const eventFeed = await getEvents(
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  "week"
);
//const htmlGen = getExampleNewsletterHtml();
const htmlGen = ref("");
const headerText = ref("");
const footerText = ref("");
const featuredEventIds = ref([0, 0, 0, 0, 0, 0, 0, 0, 0]);
const nonfeaturedEventIds = ref([0, 0, 0, 0, 0, 0, 0, 0, 0]);

// Run this initially to get an empty template to preview:
onMounted(() => {
  updateHtmlGen();
});

const toggleMoreEventsList = () => {
  isShowMoreEvents.value = !isShowMoreEvents.value;
};

function updateHtmlGen() {
  var featuredEventArray = [];
  var nonfeaturedEventArray = [];

  featuredEventIds.value.forEach(function (element, index) {
    if (element == 0) {
      featuredEventArray[index] = null;
    } else {
      featuredEventArray[index] = getEventFromFeed(eventFeed, element);
    }
  });

  nonfeaturedEventIds.value.forEach(function (element, index) {
    if (element == 0) {
      nonfeaturedEventArray[index] = null;
    } else {
      nonfeaturedEventArray[index] = getEventFromFeed(eventFeed, element);
    }
  });

  htmlGen.value = getHtmlGen(featuredEventArray, nonfeaturedEventArray);
}

function getHtmlGen(featuredEventArray, nonfeaturedEventArray) {
  var htmlGen = getNewsletterHeaderHtml();

  htmlGen += getNewsletterHeaderTextHtml(headerText.value);

  featuredEventArray.forEach(function (element, index) {
    if (element != null) {
      htmlGen += getNewsletterFeaturedEventHtml(element.event);
    }
  });

  nonfeaturedEventArray.forEach(function (element, index) {
    if (element != null) {
      htmlGen += getNewsletterNonfeaturedEventHtml(element.event);
    }
  });

  htmlGen += getNewsletterFooterTextHtml(footerText.value);

  htmlGen += getNewsletterFooterHtml();

  return htmlGen;
}

function getEventFromFeed(eventFeed, id) {
  var item = eventFeed.value.events.find(function (element, index, array) {
    if (element.event.id == this) {
      return element.event;
    }
  }, id);

  return item;
}
</script>
  
<style>
.output-html {
  font-family: monospace;
  font-size: 10px;
}
</style>

