let imgPoke = document.querySelector("#imgPokemon")
let form = document.querySelector("#form")
let inputf = document.querySelector("#input")
let id = document.querySelector("#id")
let nome = document.querySelector("#nomeP")
let tipo1 = document.querySelector("#tipo1")
let tipo2 = document.querySelector("#tipo2")
let habilidade = document.querySelector("#habilidade")
let peso = document.querySelector("#peso")
let altura = document.querySelector("#altura")
let back = document.querySelector("#volta")
let next = document.querySelector("#proximo")

let numPokedex = 1

const fetchPoke = async(pokemon) =>{
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/
${pokemon}`);
    const data = await APIresponse.json()
    return data
}

const show = async(pokemon)=>{
    const dataPoke = await fetchPoke(pokemon)
    imgPoke.src = dataPoke.sprites.front_default
    nome.innerHTML = dataPoke.name
    id.innerHTML = dataPoke.id
    tipo1.innerHTML = dataPoke.types[0].type.name
    tipo2.innerHTML = dataPoke.types[1].type.name
    habilidade.innerHTML = dataPoke.abilities[0].ability.name
    peso.innerHTML = dataPoke.weight
    altura.innerHTML = dataPoke.heigth
}

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    show(inputf.value.toLowerCase());
})

back.addEventListener("click"),(e)=> {
    if (numPokedex > 1){
        numPokedex--
    }
    show(numPokedex)
}

next.addEventListener("click"),(e)=> {
    if (numPokedex < 1000){
        numPokedex++
    }
    show(numPokedex)
}