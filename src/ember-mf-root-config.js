import { registerApplication, start, getApps } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

const routes = constructRoutes(document.querySelector("#single-spa-layout"));

/*
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
*/

//applications.forEach(registerApplication);

import { loadEmberApp } from "single-spa-ember";

const planetsApp = registerApplication(
  "planets",
  () => {
    const appName = "planets";
    const appUrl = "/planets/planets.js";
    const vendorUrl = "/planets/vendor.js";
    return loadEmberApp(appName, appUrl, vendorUrl);
  },
  (location) => location.pathname.startsWith("/planets")
);

const peopleApp = registerApplication(
  "people",
  () => {
    const appName = "people";
    const appUrl = "/people/people.js";
    const vendorUrl = "/people/vendor.js";
    return loadEmberApp(appName, appUrl, vendorUrl);
  },
  (location) => location.pathname.startsWith("/people")
);

const applications = [planetsApp, peopleApp];

const layoutEngine = constructLayoutEngine({ routes, applications });
layoutEngine.activate();
start();
