function cleanImg(){
  const tableId = document.getElementById('id');
  tableId.textContent = `id`;
  const tableTtl = document.getElementById('title');
  tableTtl.textContent = `title`;
  const tableYr = document.getElementById('year');
  tableYr.textContent = `year`;
  const tableImdb = document.getElementById('imdb');
  tableImdb.textContent = `imdb`;
}

function byId(a,b) {
  cleanImg();
  const table = document.getElementById('id');
  table.textContent = `id ↓`;
  if (a.id < b.id)
    return -1;
  if (a.id > b.id)
    return 1;
  return 0;
}
function byIdInvert(a,b) {
  cleanImg();
  const table = document.getElementById('id');
  table.textContent = `id ↑`;
  //console.log('&darr');
  if (b.id < a.id)
    return -1;
  if (b.id > a.id)
    return 1;
  return 0;
}

function byTitle(a,b) {
  cleanImg();
  const table = document.getElementById('title');
  table.textContent = `title ↓`;
  if (a.title < b.title)
    return -1;
  if (a.title > b.title)
    return 1;
  return 0;
}
function byTitleInvert(a,b) {
  cleanImg();
  const table = document.getElementById('title');
  table.textContent = `title ↑`;
  if (b.title < a.title)
    return -1;
  if (b.title > a.title)
    return 1;
  return 0;
}

function byYear(a,b) {
  cleanImg();
  const table = document.getElementById('year');
  table.textContent = `year ↓`;
  if (a.year < b.year)
    return -1;
  if (a.year > b.year)
    return 1;
  return 0;
}
function byYearInvert(a,b) {
  cleanImg();
  const table = document.getElementById('year');
  table.textContent = `year ↑`;
  if (b.year < a.year)
    return -1;
  if (b.year > a.year)
    return 1;
  return 0;
}

function byImdb(a,b) {
  cleanImg();
  const table = document.getElementById('imdb');
  table.textContent = `imdb ↓`;
  if (a.imdb < b.imdb)
    return -1;
  if (a.imdb > b.imdb)
    return 1;
  return 0;
}
function byImdbInvert(a,b) {
  cleanImg();
  const table = document.getElementById('imdb');
  table.textContent = `imdb ↑`;
  if (b.imdb < a.imdb)
    return -1;
  if (b.imdb > a.imdb)
    return 1;
  return 0;
}

export { byId, byTitle, byYear, byImdb, byIdInvert, byTitleInvert, byYearInvert, byImdbInvert };
