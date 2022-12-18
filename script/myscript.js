var callback = function () {
  function gombNyom() {
    var elem = this;

    function elRejt() {
      let kinyitva = document.getElementsByClassName("nyitva");
      while (kinyitva.length) {
        kinyitva[0].style.backgroundImage = "";
        kinyitva[0].classList.remove("nyitva");
      }
      clearTimeout(idozito);
    }

    //alert("Hello, Click Me");
    elem.style.backgroundImage = "url('" + elem.getAttribute("kep") + "')";
    elem.classList.add("nyitva");
    idozito = setTimeout(function () {
      elRejt();
    }, 3000);
  }
  var idozito;
  var oszlop = 5;
  var sor = 4;
  var szoveg = "";
  for (let j = 0; j < sor; j++) {
    szoveg += '<div class="sor">';
    for (let i = 0; i < oszlop; i++) {
      szoveg += '<div class="cella"></div>';
    }
    szoveg += "</div>";
  }
  document.getElementById("game").innerHTML = szoveg;

  var kepSzam = Math.floor((oszlop * sor) / 2);
  if (kepSzam > 23) kepSzam = 23;

  for (let i = 1; i <= kepSzam; i++) {
    for (let j = 0; j < 2; j++) {
      var x = Math.round(Math.random() * (sor - 1));
      var y = Math.round(Math.random() * (oszlop - 1));
      var kep = document.getElementById("game").children[x].children[y];
      if (kep.getAttribute("kep") == null) {
        kep.setAttribute("kep", "./img/" + i + ".png");
        //kep.style.backgroundImage="url('./img/" + i + ".png')";
        //console.log("url('./img/" + i + ".png')");
        //kep.style.backgroundImage="url('"+kep.getAttribute("kep")+"')";
      } else {
        j--;
      }

      var cellak = document.getElementsByClassName("cella");
      var cellaSzam = cellak.length;
      for (let i = 0; i < cellaSzam; i++) {
        cellak[i].addEventListener("click", gombNyom);
      }
    }
  }
};

if (
  document.readyState === "complete" ||
  (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}
