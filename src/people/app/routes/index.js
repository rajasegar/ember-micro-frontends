import Route from "@ember/routing/route";

export default class IndexRoute extends Route {
  queryParams = {
    id: {
      refreshModel: true,
    },
  };

  model(params) {
    const person = this.store.peekRecord("people", params.id || 0);
    const people = this.store.peekAll("people");
    return { people, person };
  }
}
