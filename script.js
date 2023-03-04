// Explosive component from my old failed portfolio
// select every u tag in the dom
const explosives = document.querySelectorAll("u");
explosives.forEach((el) => {
  let letters = el.innerHTML.split("");
  el.innerHTML = "";
  // to wrap every letter in span element
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.innerHTML = letter;
    el.appendChild(span);
  });
});
