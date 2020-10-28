import Route from '@ember/routing/route';


export default class ApplicationRoute extends Route {
  model() {
    this.store.push({
      data: [ {
    "attributes": {
      "edited": "2014-12-20T20:58:18.411Z",
      "climate": "arid",
      "surface_water": "1",
      "name": "Tatooine",
      "diameter": "10465",
      "rotation_period": "23",
      "created": "2014-12-09T13:50:49.641Z",
      "terrain": "desert",
      "gravity": "1 standard",
      "orbital_period": "304",
      "population": "200000"
    },
    "type": "planet",
    "id": 1
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.420Z",
      "climate": "temperate",
      "surface_water": "40",
      "name": "Alderaan",
      "diameter": "12500",
      "rotation_period": "24",
      "created": "2014-12-10T11:35:48.479Z",
      "terrain": "grasslands, mountains",
      "gravity": "1 standard",
      "orbital_period": "364",
      "population": "2000000000"
    },
    "type": "planet",
    "id": 2
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.421Z",
      "climate": "temperate, tropical",
      "surface_water": "8",
      "name": "Yavin IV",
      "diameter": "10200",
      "rotation_period": "24",
      "created": "2014-12-10T11:37:19.144Z",
      "terrain": "jungle, rainforests",
      "gravity": "1 standard",
      "orbital_period": "4818",
      "population": "1000"
    },
    "type": "planet",
    "id": 3
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.423Z",
      "climate": "frozen",
      "surface_water": "100",
      "name": "Hoth",
      "diameter": "7200",
      "rotation_period": "23",
      "created": "2014-12-10T11:39:13.934Z",
      "terrain": "tundra, ice caves, mountain ranges",
      "gravity": "1.1 standard",
      "orbital_period": "549",
      "population": "unknown"
    },
    "type": "planet",
    "id": 4
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.425Z",
      "climate": "murky",
      "surface_water": "8",
      "name": "Dagobah",
      "diameter": "8900",
      "rotation_period": "23",
      "created": "2014-12-10T11:42:22.590Z",
      "terrain": "swamp, jungles",
      "gravity": "N/A",
      "orbital_period": "341",
      "population": "unknown"
    },
    "type": "planet",
    "id": 5
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.427Z",
      "climate": "temperate",
      "surface_water": "0",
      "name": "Bespin",
      "diameter": "118000",
      "rotation_period": "12",
      "created": "2014-12-10T11:43:55.240Z",
      "terrain": "gas giant",
      "gravity": "1.5 (surface), 1 standard (Cloud City)",
      "orbital_period": "5110",
      "population": "6000000"
    },
    "type": "planet",
    "id": 6
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.429Z",
      "climate": "temperate",
      "surface_water": "8",
      "name": "Endor",
      "diameter": "4900",
      "rotation_period": "18",
      "created": "2014-12-10T11:50:29.349Z",
      "terrain": "forests, mountains, lakes",
      "gravity": "0.85 standard",
      "orbital_period": "402",
      "population": "30000000"
    },
    "type": "planet",
    "id": 7
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.430Z",
      "climate": "temperate",
      "surface_water": "12",
      "name": "Naboo",
      "diameter": "12120",
      "rotation_period": "26",
      "created": "2014-12-10T11:52:31.066Z",
      "terrain": "grassy hills, swamps, forests, mountains",
      "gravity": "1 standard",
      "orbital_period": "312",
      "population": "4500000000"
    },
    "type": "planet",
    "id": 8
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.432Z",
      "climate": "temperate",
      "surface_water": "unknown",
      "name": "Coruscant",
      "diameter": "12240",
      "rotation_period": "24",
      "created": "2014-12-10T11:54:13.921Z",
      "terrain": "cityscape, mountains",
      "gravity": "1 standard",
      "orbital_period": "368",
      "population": "1000000000000"
    },
    "type": "planet",
    "id": 9
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.434Z",
      "climate": "temperate",
      "surface_water": "100",
      "name": "Kamino",
      "diameter": "19720",
      "rotation_period": "27",
      "created": "2014-12-10T12:45:06.577Z",
      "terrain": "ocean",
      "gravity": "1 standard",
      "orbital_period": "463",
      "population": "1000000000"
    },
    "type": "planet",
    "id": 10
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.437Z",
      "climate": "temperate, arid",
      "surface_water": "5",
      "name": "Geonosis",
      "diameter": "11370",
      "rotation_period": "30",
      "created": "2014-12-10T12:47:22.350Z",
      "terrain": "rock, desert, mountain, barren",
      "gravity": "0.9 standard",
      "orbital_period": "256",
      "population": "100000000000"
    },
    "type": "planet",
    "id": 11
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.439Z",
      "climate": "temperate, arid, windy",
      "surface_water": "0.9",
      "name": "Utapau",
      "diameter": "12900",
      "rotation_period": "27",
      "created": "2014-12-10T12:49:01.491Z",
      "terrain": "scrublands, savanna, canyons, sinkholes",
      "gravity": "1 standard",
      "orbital_period": "351",
      "population": "95000000"
    },
    "type": "planet",
    "id": 12
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.440Z",
      "climate": "hot",
      "surface_water": "0",
      "name": "Mustafar",
      "diameter": "4200",
      "rotation_period": "36",
      "created": "2014-12-10T12:50:16.526Z",
      "terrain": "volcanoes, lava rivers, mountains, caves",
      "gravity": "1 standard",
      "orbital_period": "412",
      "population": "20000"
    },
    "type": "planet",
    "id": 13
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.442Z",
      "climate": "tropical",
      "surface_water": "60",
      "name": "Kashyyyk",
      "diameter": "12765",
      "rotation_period": "26",
      "created": "2014-12-10T13:32:00.124Z",
      "terrain": "jungle, forests, lakes, rivers",
      "gravity": "1 standard",
      "orbital_period": "381",
      "population": "45000000"
    },
    "type": "planet",
    "id": 14
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.444Z",
      "climate": "artificial temperate ",
      "surface_water": "0",
      "name": "Polis Massa",
      "diameter": "0",
      "rotation_period": "24",
      "created": "2014-12-10T13:33:46.405Z",
      "terrain": "airless asteroid",
      "gravity": "0.56 standard",
      "orbital_period": "590",
      "population": "1000000"
    },
    "type": "planet",
    "id": 15
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.446Z",
      "climate": "frigid",
      "surface_water": "unknown",
      "name": "Mygeeto",
      "diameter": "10088",
      "rotation_period": "12",
      "created": "2014-12-10T13:43:39.139Z",
      "terrain": "glaciers, mountains, ice canyons",
      "gravity": "1 standard",
      "orbital_period": "167",
      "population": "19000000"
    },
    "type": "planet",
    "id": 16
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.447Z",
      "climate": "hot, humid",
      "surface_water": "unknown",
      "name": "Felucia",
      "diameter": "9100",
      "rotation_period": "34",
      "created": "2014-12-10T13:44:50.397Z",
      "terrain": "fungus forests",
      "gravity": "0.75 standard",
      "orbital_period": "231",
      "population": "8500000"
    },
    "type": "planet",
    "id": 17
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.449Z",
      "climate": "temperate, moist",
      "surface_water": "unknown",
      "name": "Cato Neimoidia",
      "diameter": "0",
      "rotation_period": "25",
      "created": "2014-12-10T13:46:28.704Z",
      "terrain": "mountains, fields, forests, rock arches",
      "gravity": "1 standard",
      "orbital_period": "278",
      "population": "10000000"
    },
    "type": "planet",
    "id": 18
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.450Z",
      "climate": "hot",
      "surface_water": "unknown",
      "name": "Saleucami",
      "diameter": "14920",
      "rotation_period": "26",
      "created": "2014-12-10T13:47:46.874Z",
      "terrain": "caves, desert, mountains, volcanoes",
      "gravity": "unknown",
      "orbital_period": "392",
      "population": "1400000000"
    },
    "type": "planet",
    "id": 19
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.452Z",
      "climate": "temperate",
      "surface_water": "unknown",
      "name": "Stewjon",
      "diameter": "0",
      "rotation_period": "unknown",
      "created": "2014-12-10T16:16:26.566Z",
      "terrain": "grass",
      "gravity": "1 standard",
      "orbital_period": "unknown",
      "population": "unknown"
    },
    "type": "planet",
    "id": 20
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.454Z",
      "climate": "polluted",
      "surface_water": "unknown",
      "name": "Eriadu",
      "diameter": "13490",
      "rotation_period": "24",
      "created": "2014-12-10T16:26:54.384Z",
      "terrain": "cityscape",
      "gravity": "1 standard",
      "orbital_period": "360",
      "population": "22000000000"
    },
    "type": "planet",
    "id": 21
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.456Z",
      "climate": "temperate",
      "surface_water": "70",
      "name": "Corellia",
      "diameter": "11000",
      "rotation_period": "25",
      "created": "2014-12-10T16:49:12.453Z",
      "terrain": "plains, urban, hills, forests",
      "gravity": "1 standard",
      "orbital_period": "329",
      "population": "3000000000"
    },
    "type": "planet",
    "id": 22
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.458Z",
      "climate": "hot",
      "surface_water": "60",
      "name": "Rodia",
      "diameter": "7549",
      "rotation_period": "29",
      "created": "2014-12-10T17:03:28.110Z",
      "terrain": "jungles, oceans, urban, swamps",
      "gravity": "1 standard",
      "orbital_period": "305",
      "population": "1300000000"
    },
    "type": "planet",
    "id": 23
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.460Z",
      "climate": "temperate",
      "surface_water": "unknown",
      "name": "Nal Hutta",
      "diameter": "12150",
      "rotation_period": "87",
      "created": "2014-12-10T17:11:29.452Z",
      "terrain": "urban, oceans, swamps, bogs",
      "gravity": "1 standard",
      "orbital_period": "413",
      "population": "7000000000"
    },
    "type": "planet",
    "id": 24
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.461Z",
      "climate": "temperate",
      "surface_water": "unknown",
      "name": "Dantooine",
      "diameter": "9830",
      "rotation_period": "25",
      "created": "2014-12-10T17:23:29.896Z",
      "terrain": "oceans, savannas, mountains, grasslands",
      "gravity": "1 standard",
      "orbital_period": "378",
      "population": "1000"
    },
    "type": "planet",
    "id": 25
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.463Z",
      "climate": "temperate",
      "surface_water": "98",
      "name": "Bestine IV",
      "diameter": "6400",
      "rotation_period": "26",
      "created": "2014-12-12T11:16:55.078Z",
      "terrain": "rocky islands, oceans",
      "gravity": "unknown",
      "orbital_period": "680",
      "population": "62000000"
    },
    "type": "planet",
    "id": 26
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.464Z",
      "climate": "temperate",
      "surface_water": "10",
      "name": "Ord Mantell",
      "diameter": "14050",
      "rotation_period": "26",
      "created": "2014-12-15T12:23:41.661Z",
      "terrain": "plains, seas, mesas",
      "gravity": "1 standard",
      "orbital_period": "334",
      "population": "4000000000"
    },
    "type": "planet",
    "id": 27
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.466Z",
      "climate": "unknown",
      "surface_water": "unknown",
      "name": "unknown",
      "diameter": "0",
      "rotation_period": "0",
      "created": "2014-12-15T12:25:59.569Z",
      "terrain": "unknown",
      "gravity": "unknown",
      "orbital_period": "0",
      "population": "unknown"
    },
    "type": "planet",
    "id": 28
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.468Z",
      "climate": "arid",
      "surface_water": "unknown",
      "name": "Trandosha",
      "diameter": "0",
      "rotation_period": "25",
      "created": "2014-12-15T12:53:47.695Z",
      "terrain": "mountains, seas, grasslands, deserts",
      "gravity": "0.62 standard",
      "orbital_period": "371",
      "population": "42000000"
    },
    "type": "planet",
    "id": 29
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.469Z",
      "climate": "arid",
      "surface_water": "unknown",
      "name": "Socorro",
      "diameter": "0",
      "rotation_period": "20",
      "created": "2014-12-15T12:56:31.121Z",
      "terrain": "deserts, mountains",
      "gravity": "1 standard",
      "orbital_period": "326",
      "population": "300000000"
    },
    "type": "planet",
    "id": 30
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.471Z",
      "climate": "temperate",
      "surface_water": "100",
      "name": "Mon Cala",
      "diameter": "11030",
      "rotation_period": "21",
      "created": "2014-12-18T11:07:01.792Z",
      "terrain": "oceans, reefs, islands",
      "gravity": "1",
      "orbital_period": "398",
      "population": "27000000000"
    },
    "type": "planet",
    "id": 31
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.472Z",
      "climate": "temperate",
      "surface_water": "40",
      "name": "Chandrila",
      "diameter": "13500",
      "rotation_period": "20",
      "created": "2014-12-18T11:11:51.872Z",
      "terrain": "plains, forests",
      "gravity": "1",
      "orbital_period": "368",
      "population": "1200000000"
    },
    "type": "planet",
    "id": 32
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.474Z",
      "climate": "superheated",
      "surface_water": "5",
      "name": "Sullust",
      "diameter": "12780",
      "rotation_period": "20",
      "created": "2014-12-18T11:25:40.243Z",
      "terrain": "mountains, volcanoes, rocky deserts",
      "gravity": "1",
      "orbital_period": "263",
      "population": "18500000000"
    },
    "type": "planet",
    "id": 33
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.476Z",
      "climate": "temperate",
      "surface_water": "unknown",
      "name": "Toydaria",
      "diameter": "7900",
      "rotation_period": "21",
      "created": "2014-12-19T17:47:54.403Z",
      "terrain": "swamps, lakes",
      "gravity": "1",
      "orbital_period": "184",
      "population": "11000000"
    },
    "type": "planet",
    "id": 34
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.478Z",
      "climate": "arid, temperate, tropical",
      "surface_water": "unknown",
      "name": "Malastare",
      "diameter": "18880",
      "rotation_period": "26",
      "created": "2014-12-19T17:52:13.106Z",
      "terrain": "swamps, deserts, jungles, mountains",
      "gravity": "1.56",
      "orbital_period": "201",
      "population": "2000000000"
    },
    "type": "planet",
    "id": 35
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.480Z",
      "climate": "temperate",
      "surface_water": "unknown",
      "name": "Dathomir",
      "diameter": "10480",
      "rotation_period": "24",
      "created": "2014-12-19T18:00:40.142Z",
      "terrain": "forests, deserts, savannas",
      "gravity": "0.9",
      "orbital_period": "491",
      "population": "5200"
    },
    "type": "planet",
    "id": 36
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.481Z",
      "climate": "temperate, arid, subartic",
      "surface_water": "5",
      "name": "Ryloth",
      "diameter": "10600",
      "rotation_period": "30",
      "created": "2014-12-20T09:46:25.740Z",
      "terrain": "mountains, valleys, deserts, tundra",
      "gravity": "1",
      "orbital_period": "305",
      "population": "1500000000"
    },
    "type": "planet",
    "id": 37
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.483Z",
      "climate": "unknown",
      "surface_water": "unknown",
      "name": "Aleen Minor",
      "diameter": "unknown",
      "rotation_period": "unknown",
      "created": "2014-12-20T09:52:23.452Z",
      "terrain": "unknown",
      "gravity": "unknown",
      "orbital_period": "unknown",
      "population": "unknown"
    },
    "type": "planet",
    "id": 38
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.485Z",
      "climate": "temperate, artic",
      "surface_water": "unknown",
      "name": "Vulpter",
      "diameter": "14900",
      "rotation_period": "22",
      "created": "2014-12-20T09:56:58.874Z",
      "terrain": "urban, barren",
      "gravity": "1",
      "orbital_period": "391",
      "population": "421000000"
    },
    "type": "planet",
    "id": 39
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.487Z",
      "climate": "unknown",
      "surface_water": "unknown",
      "name": "Troiken",
      "diameter": "unknown",
      "rotation_period": "unknown",
      "created": "2014-12-20T10:01:37.395Z",
      "terrain": "desert, tundra, rainforests, mountains",
      "gravity": "unknown",
      "orbital_period": "unknown",
      "population": "unknown"
    },
    "type": "planet",
    "id": 40
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.489Z",
      "climate": "unknown",
      "surface_water": "unknown",
      "name": "Tund",
      "diameter": "12190",
      "rotation_period": "48",
      "created": "2014-12-20T10:07:29.578Z",
      "terrain": "barren, ash",
      "gravity": "unknown",
      "orbital_period": "1770",
      "population": "0"
    },
    "type": "planet",
    "id": 41
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.491Z",
      "climate": "temperate",
      "surface_water": "unknown",
      "name": "Haruun Kal",
      "diameter": "10120",
      "rotation_period": "25",
      "created": "2014-12-20T10:12:28.980Z",
      "terrain": "toxic cloudsea, plateaus, volcanoes",
      "gravity": "0.98",
      "orbital_period": "383",
      "population": "705300"
    },
    "type": "planet",
    "id": 42
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.493Z",
      "climate": "temperate",
      "surface_water": "20",
      "name": "Cerea",
      "diameter": "unknown",
      "rotation_period": "27",
      "created": "2014-12-20T10:14:48.178Z",
      "terrain": "verdant",
      "gravity": "1",
      "orbital_period": "386",
      "population": "450000000"
    },
    "type": "planet",
    "id": 43
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.495Z",
      "climate": "tropical, temperate",
      "surface_water": "80",
      "name": "Glee Anselm",
      "diameter": "15600",
      "rotation_period": "33",
      "created": "2014-12-20T10:18:26.110Z",
      "terrain": "lakes, islands, swamps, seas",
      "gravity": "1",
      "orbital_period": "206",
      "population": "500000000"
    },
    "type": "planet",
    "id": 44
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.497Z",
      "climate": "unknown",
      "surface_water": "unknown",
      "name": "Iridonia",
      "diameter": "unknown",
      "rotation_period": "29",
      "created": "2014-12-20T10:26:05.788Z",
      "terrain": "rocky canyons, acid pools",
      "gravity": "unknown",
      "orbital_period": "413",
      "population": "unknown"
    },
    "type": "planet",
    "id": 45
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.498Z",
      "climate": "unknown",
      "surface_water": "unknown",
      "name": "Tholoth",
      "diameter": "unknown",
      "rotation_period": "unknown",
      "created": "2014-12-20T10:28:31.117Z",
      "terrain": "unknown",
      "gravity": "unknown",
      "orbital_period": "unknown",
      "population": "unknown"
    },
    "type": "planet",
    "id": 46
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.500Z",
      "climate": "arid, rocky, windy",
      "surface_water": "unknown",
      "name": "Iktotch",
      "diameter": "unknown",
      "rotation_period": "22",
      "created": "2014-12-20T10:31:32.413Z",
      "terrain": "rocky",
      "gravity": "1",
      "orbital_period": "481",
      "population": "unknown"
    },
    "type": "planet",
    "id": 47
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.502Z",
      "climate": "unknown",
      "surface_water": "unknown",
      "name": "Quermia",
      "diameter": "unknown",
      "rotation_period": "unknown",
      "created": "2014-12-20T10:34:08.249Z",
      "terrain": "unknown",
      "gravity": "unknown",
      "orbital_period": "unknown",
      "population": "unknown"
    },
    "type": "planet",
    "id": 48
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.504Z",
      "climate": "temperate",
      "surface_water": "unknown",
      "name": "Dorin",
      "diameter": "13400",
      "rotation_period": "22",
      "created": "2014-12-20T10:48:36.141Z",
      "terrain": "unknown",
      "gravity": "1",
      "orbital_period": "409",
      "population": "unknown"
    },
    "type": "planet",
    "id": 49
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.506Z",
      "climate": "temperate",
      "surface_water": "unknown",
      "name": "Champala",
      "diameter": "unknown",
      "rotation_period": "27",
      "created": "2014-12-20T10:52:51.524Z",
      "terrain": "oceans, rainforests, plateaus",
      "gravity": "1",
      "orbital_period": "318",
      "population": "3500000000"
    },
    "type": "planet",
    "id": 50
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.508Z",
      "climate": "unknown",
      "surface_water": "unknown",
      "name": "Mirial",
      "diameter": "unknown",
      "rotation_period": "unknown",
      "created": "2014-12-20T16:44:46.318Z",
      "terrain": "deserts",
      "gravity": "unknown",
      "orbital_period": "unknown",
      "population": "unknown"
    },
    "type": "planet",
    "id": 51
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.510Z",
      "climate": "unknown",
      "surface_water": "unknown",
      "name": "Serenno",
      "diameter": "unknown",
      "rotation_period": "unknown",
      "created": "2014-12-20T16:52:13.357Z",
      "terrain": "rainforests, rivers, mountains",
      "gravity": "unknown",
      "orbital_period": "unknown",
      "population": "unknown"
    },
    "type": "planet",
    "id": 52
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.512Z",
      "climate": "unknown",
      "surface_water": "unknown",
      "name": "Concord Dawn",
      "diameter": "unknown",
      "rotation_period": "unknown",
      "created": "2014-12-20T16:54:39.909Z",
      "terrain": "jungles, forests, deserts",
      "gravity": "unknown",
      "orbital_period": "unknown",
      "population": "unknown"
    },
    "type": "planet",
    "id": 53
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.514Z",
      "climate": "unknown",
      "surface_water": "unknown",
      "name": "Zolan",
      "diameter": "unknown",
      "rotation_period": "unknown",
      "created": "2014-12-20T16:56:37.250Z",
      "terrain": "unknown",
      "gravity": "unknown",
      "orbital_period": "unknown",
      "population": "unknown"
    },
    "type": "planet",
    "id": 54
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.516Z",
      "climate": "frigid",
      "surface_water": "100",
      "name": "Ojom",
      "diameter": "unknown",
      "rotation_period": "unknown",
      "created": "2014-12-20T17:27:41.286Z",
      "terrain": "oceans, glaciers",
      "gravity": "unknown",
      "orbital_period": "unknown",
      "population": "500000000"
    },
    "type": "planet",
    "id": 55
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.517Z",
      "climate": "temperate",
      "surface_water": "unknown",
      "name": "Skako",
      "diameter": "unknown",
      "rotation_period": "27",
      "created": "2014-12-20T17:50:47.864Z",
      "terrain": "urban, vines",
      "gravity": "1",
      "orbital_period": "384",
      "population": "500000000000"
    },
    "type": "planet",
    "id": 56
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.519Z",
      "climate": "temperate",
      "surface_water": "25",
      "name": "Muunilinst",
      "diameter": "13800",
      "rotation_period": "28",
      "created": "2014-12-20T17:57:47.420Z",
      "terrain": "plains, forests, hills, mountains",
      "gravity": "1",
      "orbital_period": "412",
      "population": "5000000000"
    },
    "type": "planet",
    "id": 57
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.521Z",
      "climate": "temperate",
      "surface_water": "unknown",
      "name": "Shili",
      "diameter": "unknown",
      "rotation_period": "unknown",
      "created": "2014-12-20T18:43:14.049Z",
      "terrain": "cities, savannahs, seas, plains",
      "gravity": "1",
      "orbital_period": "unknown",
      "population": "unknown"
    },
    "type": "planet",
    "id": 58
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.523Z",
      "climate": "arid, temperate, tropical",
      "surface_water": "unknown",
      "name": "Kalee",
      "diameter": "13850",
      "rotation_period": "23",
      "created": "2014-12-20T19:43:51.278Z",
      "terrain": "rainforests, cliffs, canyons, seas",
      "gravity": "1",
      "orbital_period": "378",
      "population": "4000000000"
    },
    "type": "planet",
    "id": 59
  },
  {
    "attributes": {
      "edited": "2014-12-20T20:58:18.525Z",
      "climate": "unknown",
      "surface_water": "unknown",
      "name": "Umbara",
      "diameter": "unknown",
      "rotation_period": "unknown",
      "created": "2014-12-20T20:18:36.256Z",
      "terrain": "unknown",
      "gravity": "unknown",
      "orbital_period": "unknown",
      "population": "unknown"
    },
    "type": "planet",
    "id": 60
  }
]
    });
  }
}
