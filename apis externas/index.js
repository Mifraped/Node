class Pokemon {
  constructor(foto, nombre, habilidades) {
    this.foto = foto;
    this.nombre = nombre;
    this.habilidades = habilidades;
  }
}

// **********************************************************XMLHttpRequest**************************************************************

// function ocultaForm() {
//   document.getElementById("formulario").style.display = "none";
//   document.getElementById("targeta").style.display = "flex";
// }
// function ocultaTarg() {
//   document.getElementById("targeta").style.display = "none";
//   document.getElementById("formulario").style.display = "flex";
//   let padre = document.getElementById("habilidadesPokemon");
//   while (padre.firstChild) {
//     padre.removeChild(padre.firstChild);
//   }
// }

// function getPokemon() {
//   if (document.getElementById("inputPokemon").value != "") {
//     let xhttp = new XMLHttpRequest();

//     xhttp.onreadystatechange = function (aEvt) {
//       if (xhttp.readyState == 4 && xhttp.status == 404) {
//         alert("No se ha encontrado ningun Pokemon con ese nombre");
//       } else if (xhttp.readyState == 4 && xhttp.status == 200) {
//         let data = JSON.parse(xhttp.responseText);
//         let habilidades = [];
//         data.abilities.forEach((habilidad) =>
//           habilidades.push(habilidad.ability.name)
//         );

//         let pokemon = new Pokemon(
//           data.sprites.front_default,
//           data.forms[0].name,
//           [...habilidades]
//         );

//         document.getElementById("nombrePokemon").textContent = pokemon.nombre;
//         document.getElementById("imagen").setAttribute("src", pokemon.foto);
//         for (hab of habilidades) {
//           let habList = document.getElementById("habilidadesPokemon");
//           let item = document.createElement("li");
//           item.textContent = hab;
//           habList.appendChild(item);
//         }
//         ocultaForm();
//       }
//     };
//     let pokemonVal = document.getElementById("inputPokemon").value;
//     xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${pokemonVal}`, true);
//     xhttp.send();

//     document.getElementById("inputPokemon").value = "";
//   } else alert("Introduce el nombre de un pokemon");
// }

// ************************************************Fetch*********************************************************************************

// function ocultaForm() {
//   document.getElementById("formulario").style.display = "none";
//   document.getElementById("targeta").style.display = "flex";
// }
// function ocultaTarg() {
//   document.getElementById("targeta").style.display = "none";
//   document.getElementById("formulario").style.display = "flex";
//   let padre = document.getElementById("habilidadesPokemon");
//   while (padre.firstChild) {
//     padre.removeChild(padre.firstChild);
//   }
// }
// async function getPokemon() {
//   if (document.getElementById("inputPokemon").value != "") {
//     let pokemonVal = document.getElementById("inputPokemon").value;
//     let url = `https://pokeapi.co/api/v2/pokemon/${pokemonVal}`;

//     let param = {
//       headers: { "Content-type": "application/json; charset= UTF-8" },
//       method: "GET",
//     };
//     try {
//       let data = await fetch(url, param);
//       let result = await data.json();
//       let habilidades = [];
//       result.abilities.forEach((habilidad) =>
//         habilidades.push(habilidad.ability.name)
//       );
//       let pokemon = new Pokemon(
//         result.sprites.front_default,
//         result.forms[0].name,
//         [...habilidades]
//       );
//       document.getElementById("nombrePokemon").textContent = pokemon.nombre;
//       document.getElementById("imagen").setAttribute("src", pokemon.foto);
//       for (hab of habilidades) {
//         let habList = document.getElementById("habilidadesPokemon");
//         let item = document.createElement("li");
//         item.textContent = hab;
//         habList.appendChild(item);
//       }
//       ocultaForm();
//       document.getElementById("inputPokemon").value = "";
//       console.log(data);
//       console.log(result);
//     } catch (error) {
//       alert("Pokemon no encontrado");
//     }
//   } else alert("Introduce el nombre de un Pokemon");
// }
