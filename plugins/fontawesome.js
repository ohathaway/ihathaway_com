import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowDown,
  faBan,
  faCircle,
  faCircleInfo,
  faDatabase,
  faEnvelope,
  faHouseChimneyUser,
  faLocationDot,
  faMicrochip,
  faNetworkWired,
  faPeopleRoof,
  faPlay,
  faScaleBalanced,
  faTriangleExclamation,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { faFile as farFile } from "@fortawesome/free-regular-svg-icons";

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
  faArrowDown,
  faBan,
  faCircle,
  faCircleInfo,
  faEnvelope,
  faDatabase,
  faLinkedin,
  faHouseChimneyUser,
  faLocationDot,
  faMicrochip,
  faNetworkWired,
  faPeopleRoof,
  faPlay,
  faScaleBalanced,
  faTriangleExclamation,
  faUserTie,
  farFile
);

// Register the component globally
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);
});
