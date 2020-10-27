import Component from '@glimmer/component';

export default class PlanetListComponent extends Component {
  get planets() {  
    return [
    "Tatooine",
"Alderaan",
"Yavin IV",
"Hoth",
"Dagobah",
"Bespin",
"Endor",
"Naboo",
"Coruscant",
"Kamino",
  ];
  }
}
