// Základ: potvrdenie odoslania formulára
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Zabraň štandardnému odoslaniu
    alert("Ďakujeme za správu! Ozveme sa ti čoskoro.");
  });
  