/**
   * You might want to use this template to display each new characters
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template#examples
   */  
  
  // <template id="template">
	//		<div class="character-info">
	//			<div class="character-id">Id: <span></span></div>
	//			<div class="name">Name: <span></span></div>
	//			<div class="occupation">Occupation: <span></span></div>
	//			<div class="cartoon">Cartoon: <span></span></div>
	//			<div class="weapon">Weapon: <span></span></div>
	//		</div>
	//	</template>
  

const fetchAllButton = document.getElementById('fetch-all')
const fetchOneButton = document.getElementById('fetch-one')
const deleteButton = document.getElementById('delete-one')

const editCharacterButton = document.getElementById('edit-button')
const createNewCharacterButton = document.getElementById('create-button')

const displayedCharacterSection = document.querySelector('.character-info')
const characterTemplate = document.getElementById('template')

const nameInput = document.getElementById('name')
const occupationInput = document.getElementById('occupation')
const weaponInput = document.getElementById('weapon')
const cartoonInput = document.getElementById('cartoon')

const nameInputUpdate = document.getElementById('name-update')
const occupationInputUpdate = document.getElementById('occupation-update')
const weaponInputUpdate = document.getElementById('weapon-update')
const cartoonInputUpdate = document.getElementById('cartoon-update')

/**
 * Create an instance of axios
 */
  
const axios = require('axios')

const characterApi = axios.create({
  baseURL: 'http://localhost:5005/api/ajax-crud-characters/characters'
})

const myUrl = 'http://localhost:5005/api/'


fetchAllButton.addEventListener('click', fetchAllCharacters)

fetchOneButton.addEventListener('click', fetchOneCharacter)

deleteButton.addEventListener('click', deleteCharacter)
 
editCharacterButton.addEventListener('submit', editCharacter)

createNewCharacterButton.addEventListener('submit', createCharacter)



async function updateCharacterInDatabase(event) {
  event.preventDefault()
  const name = nameInput.value
  const occupation = occupationInput.value
  const weapon = weaponInput.value
  const cartoon = cartoonInput.value
  const characterToUpdate = {
    name,
    occupation,
    weapon,
    cartoon,
  }

  try {
    const response = await characterApi.patch(
      `${updateForm.dataset.id}`,
      characterToUpdate
    )
    console.log(response)
    await fetchAllCharacters()
  } catch (error) {
    console.log(error)
  }
} 


async function addCharacterToDatabase(event) {
  event.preventDefault()
  const name = nameInput.value
  const occupation = occupationInput.value
  const weapon = weaponInput.value
  const cartoon = cartoonInput.value
  const characterToCreate = {
    name,
    occupation,
    weapon,
    cartoon,
  }

  try {
    const response = await characterApi.post('/', characterToCreate)
    console.log(response)
    createCharacter(response.data)
  } catch (error) {
    console.log(error)
  }
  // console.log({
  //  name,
  //  occupation,
  //  weapon,
  //  cartoon,
  // })
}


function createCharacter(element) {
  const clone = characterTemplate.content.cloneNode(true)
  clone.querySelector('name').textContent = element.name
  clone.querySelector('occupation').textContent = element.occupation
  clone.querySelector('weapon').textContent = element.weapon
  clone.querySelector('cartoon').checkbox = element.cartoon
  clone
    .querySelector('create-button')
    .addEventListener('click', () => fillTheUpdateForm(element))
  displayedCharacterSection.append(clone)
}


function fillTheUpdateForm(character) {
  nameInputUpdate.value = character.name
  occupationInputUpdate.value = character.occupation
  weaponInputUpdate.value = character.weapon
  cartoonInputUpdate.value = character.cartoon
}


async function deleteCharacter(id) {
  // console.log(id)
  try {
    const message = await axios.delete(`${myUrl}characters/${id}`)
    console.log(message)
    await fetchAllCharacters()
  } catch (error) {
    console.error(error)
  }
}


async function fetchAllCharacters() {
  displayedCharacterSection.innerHTML = ''
  try {
    const { data } = await axios.get(`${myUrl}characters`)
    for (const character of data) {
      createCharacter(character)
    }
  } catch (error) {
    console.error(error)
  }
}













    // document.getElementById('fetch-all').addEventListener('click', async function (event) {
    // try {
    //   const response = await characterApi.get('/')
    //   const characters = response.data
    // 
    //   const container = document.getElementById('characters-container')
    //   container.innerHTML = ''
    // 
    //   characters.forEach(function (character) {
    //     const characterCard = characterTemplate.content.cloneNode(true)
    // 
    //     characterCard.querySelector('.character-id span').textContent = character._id
    //     characterCard.querySelector('.name span').textContent = character.name
    //     characterCard.querySelector('.occupation span').textContent = character.occupation;
    //     characterCard.querySelector('.cartoon span').textContent = character.cartoon
    //     characterCard.querySelector('.weapon span').textContent = character.weapon
    // 
    //     container.appendChild(characterCard)
    //   })
    // } catch (error) {
    //   console.error(error)
    // }
    // })


      // document.getElementById('new-character-form').addEventListener('submit', async function (event) {
      //  event.preventDefault()
      //
      //  const name = document.getElementById('name').value
      //  const occupation = document.getElementById('occupation').value
      //  const weapon = document.getElementById('weapon').value;
      //  const cartoon = document.getElementById('cartoon').checked
      //
      //  try {
      //    const response = await axios.post(myUrl, { name, occupation, weapon, cartoon })
      //    const newCharacter = response.data
      //
      //    document.getElementById('create-button').style.backgroundColor = 'green'
      //
      //    const characterCard = characterTemplate.content.cloneNode(true);
      //    characterCard.querySelector('.character-id span').textContent = newCharacter._id
      //    characterCard.querySelector('.name span').textContent = newCharacter.name
      //    characterCard.querySelector('.occupation span').textContent = newCharacter.occupation
      //    characterCard.querySelector('.cartoon span').textContent = newCharacter.cartoon
      //    characterCard.querySelector('.weapon span').textContent = newCharacter.weapon
      //    document.getElementById('characters-container').appendChild(characterCard)
      //  } catch (error) {
      //    console.error(error)
      //
      //    document.getElementById('create-button').style.backgroundColor = 'red'
      //  }
      // });