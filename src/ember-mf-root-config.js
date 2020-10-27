import { registerApplication, start } from "single-spa";
/*
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

const routes = constructRoutes(document.querySelector("#single-spa-layout"));
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
*/

import { loadEmberApp } from "single-spa-ember";

registerApplication(
  "planets",
  () => {
    const appName = "planets";
    const appUrl = "/planets/planets.js";
    const vendorUrl = "/planets/vendor.js";
    return loadEmberApp(appName, appUrl, vendorUrl);
  },
  (location) => location.pathname.startsWith("/planets")
);

registerApplication(
  "people",
  () => {
    const appName = "people";
    const appUrl = "/people/people.js";
    const vendorUrl = "/people/vendor.js";
    return loadEmberApp(appName, appUrl, vendorUrl);
  },
  (location) => location.pathname.startsWith("/people")
);

start();
