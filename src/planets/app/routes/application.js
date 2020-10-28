import Route from "@ember/routing/route";

export default class ApplicationRoute extends Route {
  async model() {
    let response = await fetch("https://swapi.dev/api/planets/");
    let planets = await response.json();
    const data = planets.results.map((r, index) => {
      return { id: ++index, type: "planet", attributes: { ...r } };
    });
    this.store.push({
      data,
    });
  }
}
