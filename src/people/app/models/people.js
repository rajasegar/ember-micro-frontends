import Model, { attr } from "@ember-data/model";

export default class PeopleModel extends Model {
  @attr name;
  @attr birth_year;
  @attr eye_color;
  @attr gender;
  @attr hair_color;
  @attr height;
  @attr mass;
  @attr skin_color;
  @attr homeworld;
  @attr films;
  @attr species;
  @attr starships;
  @attr vehicles;
  @attr url;
  @attr created;
  @attr edited;
}
