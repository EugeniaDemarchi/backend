const btncaja1 = document.getElementById("btncaja1");
const btncaja2 = document.getElementById("btncaja2");
const btncaja3 = document.getElementById("btncaja3");
const btncaja4 = document.getElementById("btncaja4");
const btncaja5 = document.getElementById("btncaja5");
const btncaja6 = document.getElementById("btncaja6");

//document.getElementById("btncaja1").onclick = function () {
  //setTimeout(function () {
   // window.open("/cursos/infancias", "_blank");
  //}, 1000);
//};
document.getElementById("btncaja2").onclick = function () {
  setTimeout(function () {
    window.open("arteurbano.html", "_blank");
  }, 1000);
};
document.getElementById("btncaja3").onclick = function () {
  setTimeout(function () {
    window.open("ilustracion.html", "_blank");
  }, 1000);
};
document.getElementById("btncaja4").onclick = function () {
  setTimeout(function () {
    window.open("pinturaCreativa.html", "_blank");
  }, 1000);
};
document.getElementById("btncaja5").onclick = function () {
  setTimeout(function () {
    window.open("H.A.html", "_blank");
  }, 1000);
};
document.getElementById("btncaja6").onclick = function () {
  setTimeout(function () {
    window.open("clinica.html", "_blank");
  }, 1000);
};

document
  .getElementById("theme-toggle-btn")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
