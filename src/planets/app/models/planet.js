import Model, { attr } from "@ember-data/model";

export default class PlanetModel extends Model {
  @attr edited;
  @attr climate;
  @attr surface_water;
  @attr name;
  @attr diameter;
  @attr rotation_period;
  @attr created;
  @attr terrain;
  @attr gravity;
  @attr orbital_period;
  @attr population;
  @attr films;
  @attr residents;
}
