const container = document.querySelector(".container");
const submit = document.getElementById("button");
const input = document.getElementById("input");

async function getData() {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`;

  const response = await fetch(url);
  const data = await response.json();
  const name = document.createElement("p");
  const license = document.createElement("p");
  const definition = document.createElement("p");

  container.appendChild(name);
  container.appendChild(license);
  container.appendChild(definition);
  name.innerText = `Word: ${data[0].word}`;
  license.innerText = `License name: ${data[0].license.name}`;
  definition.innerText = `Definition: ${data[0].meanings[0].definitions[1].definition}`;
}
submit.addEventListener("click", getData);
