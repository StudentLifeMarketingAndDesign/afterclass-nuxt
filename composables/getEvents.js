const feedBase = "https://content.uiowa.edu/api/v1/views/events_api.json?";

async function getEvents(
  startDate,
  endDate,
  venue,
  keyword,
  type,
  interest,
  perPage
) {
  var feedParams = "";
  var afterClassInterest = 284;

  if (startDate || endDate) {
    feedParams += "display_id=events";
  } else {
    feedParams += "display_id=threemonths";
  }

  // Date business
  if (startDate) {
    feedParams += "&filters[startdate][value][date]=" + startDate;
  }

  if (endDate) {
    feedParams += "&filters[enddate][value][date]=" + endDate;
  }

  if (venue) {
    feedParams += "&filters[place]=" + venue;
  }

  if (keyword) {
    feedParams += "&filters[keywords]=" + keyword;
  }

  if (type) {
    feedParams += "&filters[types]=" + type;
  }

  //If interest is manually set override After Class General Interest
  if (interest) {
    feedParams += "&filters[interests]=" + interest;
  } else {
    feedParams += "&filters[interests]=" + afterClassInterest;
  }

  if (perPage) {
    feedParams += "&items_per_page=" + perPage;
  } else {
    feedParams += "&items_per_page=100";
  }

  const feedUrl = feedBase + feedParams;

  //console.log(feedUrl);

  const { data: feed } = await useFetch(feedUrl, { key: feedUrl });
  return feed;
}

async function getEvent(id) {
  const { data: feed } = await useFetch(
    "https://content.uiowa.edu/api/v1/node/" + id + ".json",
    {
      key: id,
    }
  );
  return feed;
}

export { getEvents, getEvent };
