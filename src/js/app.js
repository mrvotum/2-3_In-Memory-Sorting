import * as sortLike from './sort';
import creatTable from './creatingTable';

const sortArr = [
  sortLike.byId, sortLike.byIdInvert, sortLike.byTitle, sortLike.byTitleInvert,
  sortLike.byYear, sortLike.byYearInvert, sortLike.byImdb, sortLike.byImdbInvert
]
const dataJSON = [
  {
    "id": 26,
    "title": "Побег из Шоушенка",
    "imdb": 9.30,
    "year": 1994
  },
  {
    "id": 25,
    "title": "Крёстный отец",
    "imdb": 9.20,
    "year": 1972
  },
  {
    "id": 27,
    "title": "Крёстный отец 2",
    "imdb": 9.00,
    "year": 1974
  },
  {
    "id": 1047,
    "title": "Тёмный рыцарь",
    "imdb": 9.00,
    "year": 2008
  },
  {
    "id": 223,
    "title": "Криминальное чтиво",
    "imdb": 8.90,
    "year": 1994
  }
];

let sortFunc = sortArr[0];
dataJSON.sort(sortFunc);
creatTable(dataJSON);
let count = 0;

const timer = setInterval(function() {
  if (count < 7) {
    sortFunc = sortArr[count];
    dataJSON.sort(sortFunc);
    creatTable(dataJSON);
    count = count + 1;
  } else {
    count = 0;
    sortFunc = sortArr[count];
    dataJSON.sort(sortFunc);
    creatTable(dataJSON);
  }
}, 1000);
