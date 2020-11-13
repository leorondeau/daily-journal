import { getMoods, useJournalMoods } from "./MoodProvider.js"
// const contentTarget = document.querySelector(".mood--filter")



export const MoodFilter = () => {
    getMoods()
    .then(()=>{

        allMoods = useJournalMoods()
        
        
        
        return `
        <fieldset class="fieldset">
        <legend>Filter Journal Entries by Mood</legend>
        ${
            allMoods.map(
                (mood) => {
                    return `<input type="radio" name="moodFilter" value="${ mood.id }"/>
                    <label for="moodFilter--happy">${ mood.label }</label>
                    `
                }
                ).join("")
            }
            </fieldset>
            `
        })
}
