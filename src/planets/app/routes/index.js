import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
   queryParams = {
    id: {
      refreshModel: true
    }
  };

  model(params) {
    console.log(params);
    const planet = this.store.peekRecord('planet', params.id || 0);
    console.log(planet);
    return planet;
  }

}
