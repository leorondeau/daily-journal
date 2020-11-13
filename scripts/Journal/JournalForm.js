import { saveEntry } from "./JournalDataProvider.js"
import { getMoods, useJournalMoods } from "../Mood/MoodProvider.js"

const contentTarget = document.querySelector(".info-input")
const eventHub = document.querySelector(".container")







export const JournalFormComponent = () => {
   console.log()
   
   getMoods()
   .then(() => {
    const moodArray = useJournalMoods()
    // console.log("moodArray" , moodArray)
    render(moodArray)
   })
}
   
const render = (moodArray) => {
   return contentTarget.innerHTML = `
   <section class="date-mood">
   <label class="entry__date" for="entry-date">Entry Date</label>
   <input type="date" id="journal--date" name="trip-start" value="2020-10-13" min="2020-01-01" max="2020-31-12">
   <label class="mood__label" for="mood-select">Mood</label>
   <select id = "journal--mood" class="moodSelect">
   ${moodArray.map(moodObj => {
       return `<option  value="${moodObj.id}" placeholder ="Select Mood">${moodObj.label}</option>`
   })}
   </select>
   <div class="filters></div>
   <label for="key-subject">Point of this entry:</label>
   <input type="text" id="journal--subject">
   </section>
   <h4>Summary</h4>
   <textarea id="journal--entry" rows="6" cols="100"></textarea>
   <button type="button" id="buttonClick">Log it</button>
        `
}



eventHub.addEventListener("click" , event => {
    
    if (event.target.id === "buttonClick") {
    // console.log("button")

        const date = document.querySelector("#journal--date").value
        const moodId = parseInt(document.querySelector("#journal--mood").value)
        const concept = document.querySelector("#journal--subject").value
        const entry = document.querySelector("#journal--entry").value
     
    const newEntry = {
        date,
        moodId,
        concept,
        entry
    }
    saveEntry(newEntry)
}
    // console.log("SAVED" , saveEntry())
})