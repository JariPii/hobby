let text = document.querySelector('.text');
let spans = text.innerText
  .split('')
  .map((letter, i) => {
    return `<span>${letter}</span>`;
  })
  .join('');

text.innerHTML = spans;
console.log(spans);
