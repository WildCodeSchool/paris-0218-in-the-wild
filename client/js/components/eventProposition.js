export const form = form => {
  return `

    <div class="eventImg">
      <label for="file" class="label-file"> + Choisir une image</label>
      <input id="file"  class="input-file" type="file" accept="image/*">
    </div>

    <div class="form-container">

      <form id="regForm" class="eventForm" action="">

      <div class="tab">
          <span>Title :</span>
           <input placeholder="Title of the event" oninput="this.className = ''">
      </div>

      <div class="tab">
        <span>Location :</span>
      <input placeholder="Location of the event" oninput="this.className = ''">
      </div>

      <div class="tab">
        <span>Starting Time :</span>
      <input type="date" placeholder="Starting Time" oninput="this.className = ''">
      </div>

      <div class="tab">
        <span>Description :</span>
      <input type="text" placeholder="Description of the event" oninput="this.className = ''">
      </div>

      <div class="tab">
        <span>Category :</span>
       <select type="dropdown" placeholder="Category of the event" oninput="this.className = ''">

         <option value="get together">Get Together</option>
         <option value="boire un coup">Boire un verre</option>
         <option value="live coding">Live Coding</option>
         <option value="cours de soutien">Cours de soutien</option>

       </select>
      </div>

      <div class="buttons">
       <div>
         <button type="button" class="prevBtn" id="prevBtn"> < </button>
         <button type="button" class="nextBtn" id="nextBtn"> > </button>
       </div>
      </div>

      <!-- Circles which indicates the steps of the form: -->
      <div>
       <span class="step"></span>
       <span class="step"></span>
       <span class="step"></span>
       <span class="step"></span>
       <span class="step"></span>
      </div>

      </form>

    </div>

  `
}
