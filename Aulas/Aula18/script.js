let imgPoke = document.querySelector("#imgPokemon")
let form = document.querySelector("#form")
let input = document.querySelector("#input").value
let id = document.querySelector("#id")
let nome = document.querySelector("#nomeP")
let tipo1 = document.querySelector("#tipo1")
let tipo2 = document.querySelector("#tipo2")
let habilidade = document.querySelector("#habilidade")
let peso = document.querySelector("#peso")
let altura = document.querySelector("#altura")

let numPokedex = 1

const fetchPoke = async(pokemon) =>{
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/
${pokemon}`);
    const data = await APIresponse.json()
    return data
}

const show = async(pokemon)=>{
    const dataPoke = await fetchPoke(pokemon)
    imgPoke.src = dataPoke.sprites.front_default
    pokeName.innerHTML = dataPoke.Name
    pokeid = dataPoke.id
    pokeType1 = dataPoke.types[0].type.name
    pokeType2 = dataPoke.types[1].type.name
    pokeHabilit = dataPoke
    pokeWeight = dataPoke.weight
    pokeHeight = dataPoke.height
}

form.addEventListener("subimit", (e)=> {
    e.preventDefault();
    show(input.toLowerCase());
})