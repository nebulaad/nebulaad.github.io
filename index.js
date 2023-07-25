var subclass01 = document.getElementById('subclass01');
var subclass02 = document.getElementById('subclass02');

var sub01button = document.getElementById('sub01');
var sub02button = document.getElementById('sub02');

var toggle01 = 0;
var toggle02 = 0;

function toggleRow(rowid) {
  switch(rowid) {
    case 1:
      if(toggle01 == 0) {
        subclass01.style.display = "table-row";
        sub01.innerHTML = "v";
        toggle01 = 1; }
      else if(toggle01 == 1) {
        subclass01.style.display = "none";
        sub01.innerHTML = ">";
        toggle01 = 0; }
      break;
    case 2:
      if(toggle02 == 0) {
        subclass02.style.display = "table-row";
        sub02.innerHTML = "v";
        toggle02 = 1; }
      else if(toggle02 == 1) {
        subclass02.style.display = "none";
        sub02.innerHTML = ">";
        toggle02 = 0; }
      break;
  }
}
