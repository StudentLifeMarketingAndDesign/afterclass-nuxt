async function getEvents() {
    const response = await fetch("https://content.uiowa.edu/api/v1/views/events_api.json?display_id=threemonths&filters[interests]=284&items_per_page=100");
    return response.json();
}


export default async () => {
    const routes = [];
    const events = await getEvents();

    events.events.forEach((event) => {
        routes.push({
            url: 'event/' + event.event.id,
            lastmod: event.event.updated_at
        });
    });
        
    //console.log(routes);
  return routes;
};
