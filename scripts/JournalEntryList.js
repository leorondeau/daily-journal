import { useJournalEntries ,getEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const eventHub = document.querySelector(".container")


eventHub.addEventListener("appStateChanged", () => EntryListComponent())

export const EntryListComponent = () => {
    

    
    return getEntries()
    .then(()=> {
    const entryList = useJournalEntries()
    // console.log("TEST" , entryList)
    render(entryList)
})}

const render = (collection) => {

    const entryLog = document.querySelector("#entryLog")
    entryLog.innerHTML =
        `<section id ="entryLog">
    <p>${collection.map(entry => JournalEntryComponent(entry)).join("")}<p>
    </section>`}