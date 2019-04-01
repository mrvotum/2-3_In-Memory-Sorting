function removeChildren(elem) {
  elem.lastChild.removeChild(elem.lastChild.children[1]);
  // console.log(1);
}

let lowStart = 0;

export default function creatTable(dataJSON) {
  for (var i = 0; i < dataJSON.length; i++) {
    const trEl = document.createElement('tr');
    trEl.className = 'infMovie';

    const table = document.querySelector('[data-table=tableWithMovies]');
    const emptyTr = table.children[0];
    emptyTr.appendChild(trEl);

    let tdEl = document.createElement('td');
    tdEl.innerHTML = dataJSON[i].id;
    emptyTr.lastChild.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.innerHTML = dataJSON[i].title;
    emptyTr.lastChild.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.innerHTML = `(${dataJSON[i].year})`;
    emptyTr.lastChild.appendChild(tdEl);
    
    tdEl = document.createElement('td');
    tdEl.innerHTML = `imdb: ${dataJSON[i].imdb.toFixed(2)}`;
    emptyTr.lastChild.appendChild(tdEl);

    if (lowStart > 4){
      removeChildren(table);
    } else {
      lowStart++;
    }
  };
};
