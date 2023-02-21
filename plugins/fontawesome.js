import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons/faCalendar";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons/faCalendarAlt";
import { faMapPin } from "@fortawesome/free-solid-svg-icons/faMapPin";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons/faPlusCircle";
import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons/faCalendarWeek";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons/faInfoCircle";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkAlt";
import { faLaptopHouse } from "@fortawesome/free-solid-svg-icons/faLaptopHouse";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(faCalendar);
library.add(faCalendarAlt);
library.add(faPlusCircle);
library.add(faMoon);
library.add(faMapPin);
library.add(faClock);
library.add(faCalendarWeek);
library.add(faInfoCircle);
library.add(faPhone);
library.add(faExternalLinkAlt);
library.add(faArrowRight);
library.add(faLaptopHouse);
library.add(faPlus);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
