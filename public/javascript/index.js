  /**
   * You might want to use this template to display each new characters
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template#examples
   */  
  
  /*
   * <template id="template">
			<div class="character-info">
				<div class="character-id">Id: <span></span></div>
				<div class="name">Name: <span></span></div>
				<div class="occupation">Occupation: <span></span></div>
				<div class="cartoon">Cartoon: <span></span></div>
				<div class="weapon">Weapon: <span></span></div>
			</div>
		</template>
   */

const characterTemplate = document.getElementById('template')

/**
 * Create an instance of axios
 */
const characterApi = axios.create({
  baseURL: 'http://localhost:5005/api/ajax-crud-characters/characters'
})

const myUrl = 'http://localhost:5005/api/'



  document.getElementById('fetch-all').addEventListener('click', fetchAll (event) {

  });

  document.getElementById('fetch-one').addEventListener('click', fetchOne (event) {

  });

  document.getElementById('delete-one').addEventListener('click', deleteOne (event) {

  });




  document.getElementById('edit-character-form').addEventListener('submit', editOne (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', newOne (event) {

  });

