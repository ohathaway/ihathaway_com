import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowDown,
  faBan,
  faBlog,
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
  faPenNib,
  faScaleBalanced,
  faTriangleExclamation,
  faUserTie,
} from "@fortawesome/pro-solid-svg-icons";
import { faFile as farFile } from "@fortawesome/pro-regular-svg-icons";

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false;

library.add(
  faArrowDown,
  faBan,
  faBlog,
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
  faPenNib,
  faScaleBalanced,
  faTriangleExclamation,
  faUserTie,
  farFile
);

// Register the component globally
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);
});
