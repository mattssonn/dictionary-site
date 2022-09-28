const getData = async () => {
  response = await fetch(
    "https://api.dictionaryapi.dev/api/v2/entries/en/video"
  );
  data = await response.json();
  console.log(data[0].meanings[0].definitions[1].definition);
  console.log(data[0].word);

  const navbar = document.querySelector(".topnav");
  const definition = document.createElement("p");
  const license = document.createElement("p");
  const name = document.createElement("p");
  navbar.appendChild(name);
  navbar.appendChild(license);
  navbar.appendChild(definition);
  name.innerText = `Name: ${data[0].word}`;
  license.innerText = `License name: ${data[0].license.name}`;
  definition.innerText = `Definition: ${data[0].meanings[0].definitions[1].definition}`;
};

getData();
