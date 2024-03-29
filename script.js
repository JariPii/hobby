let text = document.querySelector('.text');
let spans = text.innerText
  .split('')
  .map((letter, i) => {
    return `<span style="transition-delay:${i * 40}ms; filter:hue-rotate(${
      i * 30
    }deg)">${letter}</span>`;
  })
  .join('');

text.innerHTML = spans;
console.log(spans);

let joker = document.querySelector('.under-text');
let jSpans = joker.innerText
  .split('')
  .map((letter, i) => {
    return `<span style="transition-delay:${i * 40}ms; filter:hue-rotate(${
      i * 15
    }deg)">${letter}</span>`;
  })
  .join('');

joker.innerHTML = jSpans;
console.log(jSpans);

let batText = document.querySelector('.sub-text');

let batSpans = batText.innerText
  .split('')
  .map((letter, i) => {
    return `<span style= "animation-duration: ${
      Math.random() * 5
    }s; filter:hue-rotate(${i * 50}deg">${letter}</span>`;
  })
  .join('');

batText.innerHTML = batSpans;
