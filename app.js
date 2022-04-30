/*
Co je za úkol v tomto projektu:

1) Do prvku s id="recepty" vygeneruj z dat seznam všech receptů z naší "databáze".
HTML vzor, jak vygenerovaný recept vypadá, je zakomentovaný v index.html. */

/*2) Doplň hledání - v hlavičce odkomentuj pole pro hledání. Pri kliknutí na tlačítko Hledat
by se měl seznam receptů vyfiltrovat podle hledaného slova.

3) Doplň filtrovanání receptů podle kategorie.

4) Doplň řazení receptů podle hodnocení.

5) Na recepty v seznamu by mělo jít kliknout a na pravé polovině, se objeví detail receptu.
Doplň patričné údaje receptu do HTML prvků s ID recept-foto, recept-kategorie,
recept-hodnoceni, recept-nazev, recept-popis.

6) Poslední vybraný recept ulož do Local Storage, aby se při novém otevření aplikace načetl.
*/


function vygenerujRecepty() {
    for (let i=0; i < recepty.length; i = i+1) {

    const seznamRecepty = document.querySelector('#recepty');

    let recept = document.createElement('div');
    recept.className = "recept"; /*https://www.geeksforgeeks.org/javascript-adding-a-class-name-to-the-element/*/;
    recept.dataset.index = i;
    recept.addEventListener('click', priKliknuti);

    let receptObrazek = document.createElement('div');
    receptObrazek.className = "recept-obrazek";

    let imgObrazek = document.createElementNS('img');
    imgObrazek.src = recepty[i].img;

    let receptInfo = document.createElement('div');
    receptInfo.className = "recept-info";

    let nadpis = document.createElement('h3');
    nadpis.innerHTML = recepty[i].nadpis;

    seznamRecepty.appendChild(recept);

    recept.appendChild(receptObrazek);
    recept.appendChild(receptInfo);

    receptInfo.appendChild(nadpis);
    receptObrazek.appendChild(imgObrazek);
    }
  
}

function priKliknuti(i) {
    document.querySelector('#recept-foto').src = recepty[i].img;
    document.querySelector('#recept-nazev').innerHTML = recepty[i].nadpis;
    document.querySelector('#recept-popis').innerHTML = recepty[i].popis;
    document.querySelector('#recept-hodnoceni').innerHTML ;
    document.querySelector('#recept-kategorie').innerHTML ; 

    ulozLocalStorage(i)
}


function ulozLocalStorage(i) {
    let vybranyRecept = recepty[i];
    localStorage.vybranyRecept = JSON.stringify(vybranyRecept);
}

function nactiStorage() {
	let hodnota = localStorage.vybranyRecept;

	if(hodnota === null || hodnota === undefined) {
		vygenerujRecepty();
	} else {
		vybranyRecept = JSON.parse(hodnota);
	}

}



function vyhledavani() {
    let vyhledavanyText = document.querySelector('input[id=hledat]').value;

    const filterRecepty = recepty.filter(item => typeof item === 'string');
    console.log('filterRecepty');

    const includeFilterRecepty = filterRecepty.filter(item => item.includes(vyhledavanyText));
     console.log('includeFilterRecepty');

}


function serzani() {



}

function hodnoceni() {

}

















 