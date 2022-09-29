const container = document.querySelector(".container");
const submit = document.getElementById("button");
const input = document.getElementById("input");
const results = document.querySelector(".results");
const clear = document.getElementById("clear");

async function getData() {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`;

  const response = await fetch(url);
  const data = await response.json();
  const name = document.createElement("p");
  const license = document.createElement("p");
  const definition = document.createElement("p");

  results.appendChild(name);
  results.appendChild(definition);
  results.appendChild(license);
  name.innerText = `Word: ${data[0].word}`;
  definition.innerText = `Definition: ${data[0].meanings[0].definitions[0].definition}`;
  license.innerText = `License name: ${data[0].license.name}`;

  clear.addEventListener("click", function clearData() {
    results.removeChild(name);
    results.removeChild(definition);
    results.removeChild(license);
  });
  clearData();
}

submit.addEventListener("click", getData);
