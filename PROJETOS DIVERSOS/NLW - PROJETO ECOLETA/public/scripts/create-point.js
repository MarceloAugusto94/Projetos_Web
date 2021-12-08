

function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( (res) => {return res.json( )})
    // .then( res => res.json( ) )
    .then( states => {

        for( const state of states ) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }

    
    } )
}

populateUFs()


function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json( ) )
    .then( cities => {
        for( const city of cities ) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }    

       citySelect.disabled = false
    } )
}



document
    .querySelector("select[name=uf]")
    // ouvidor de eventos
    // () => {} função anonima ou arrow function
    .addEventListener("change", getCities)


// Itens de coleta
// Pegar todos os li's
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}


const collectedItems = document.querySelectorAll("input[name=items]")

let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target

    // add or remove a class with javascript
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    console.log("ITEM ID: ", itemId)

    // verificar se existem itens selecionados, se sim
    // pagar os itens selecionados

    const alreadySelected = selectedItems.findIndex( function(item) {
        const itemFound = item == itemId // Isso será true or false
        return itemFound
    })

    // se já estiver selecionado, 
    if (alreadySelected >= 0) {
        // tirar da seleção
        const filteredItems = selectedItems.filter( item =>{
            const itemIsDififferent = item != itemId // false
            return itemIsDififferent
        })

        selectedItems = filteredItems
    } else {
         // se não estiver selecionado,
         // adicionar à seleção
         selectedItems.push(itemId)
    } 

    console.log("selectedItems: ", selectedItems)

    // atualizar o campo escondido com os dados selecionados
    collectedItems.value = selectedItems
}