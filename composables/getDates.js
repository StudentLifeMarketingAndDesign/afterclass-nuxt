import { add, isPast, parseISO, format } from "date-fns";

function getUpcomingDates(eventInstances) {
  var dates = [];

  if (!eventInstances.length) {
    return false;
  }

  eventInstances.forEach((element, index) => {
    var parsedDate = parseISO(element.event_instance.start);
    // Base upcoming events on the day after the event instance so events stay on the calendar
    // for the entire day they occur.
    var parsedDateDayAfter = add(parsedDate, { days: 1 });
    if (!isPast(parsedDateDayAfter)) {
      var formattedDate = formatEventInstance(element.event_instance);
      dates.push({
        isoDate: element.event_instance.start,
        formattedDate: formattedDate,
      });
    }
  });

  return dates;
}

function getPastDates(eventInstances) {
  var dates = [];
  if (!eventInstances.length) {
    return false;
  }
  eventInstances.forEach((element, index) => {
    var parsedDate = parseISO(element.event_instance.start);
    var parsedDateDayAfter = add(parsedDate, { days: 1 });

    if (isPast(parsedDateDayAfter)) {
      var formattedDate = formatEventInstance(element.event_instance);
      dates.push(formattedDate);
    }
  });

  return dates;
}

function getAllDates(eventInstances) {
  var dates = [];
  if (!eventInstances.length) {
    return false;
  }
  eventInstances.forEach((element, index) => {
    var formattedDate = formatEventInstance(element.event_instance);
    dates.push(formattedDate);
  });
  return dates;
}

function formatEventInstance(eventInstance) {
  const preferredLongDateFormat = "EEEE, MMMM d, h:mm aaaa";
  const preferredLongDateFormatAllDay = "EEEE, MMMM d";

  var parsedDate = parseISO(eventInstance.start);
  var formattedDate = "";
  if (eventInstance.all_day) {
    formattedDate = format(parsedDate, preferredLongDateFormatAllDay);
    formattedDate += " (All Day)";
  } else {
    formattedDate = format(parsedDate, preferredLongDateFormat);
  }

  return formattedDate;
}

export { getUpcomingDates, getPastDates, getAllDates };
