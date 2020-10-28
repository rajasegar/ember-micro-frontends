import Route from "@ember/routing/route";

export default class ApplicationRoute extends Route {
  async model() {
    let response = await fetch("https://swapi.dev/api/people/");
    let people = await response.json();
    const data = people.results.map((r, index) => {
      return { id: ++index, type: "people", attributes: { ...r } };
    });
    this.store.push({
      data,
    });
  }
}
