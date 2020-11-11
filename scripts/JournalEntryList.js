import { useJournalEntries , getEntries , deleteEntry } from "./JournalDataProvider.js"
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

    eventHub.addEventListener("click" , event => {
        if(event.target.id.startsWith("deleteNote--")) {
            const [prefix , id] = event.target.id.split("--")
            console.log("buttonClick" , id)
            deleteEntry(id)
            .then(() =>
            {
                const updatedEntries = useJournalEntries()
                console.log("updatedEntries" , updatedEntries)
                const newEntryArray = updatedEntries.map(entry => {
                    
                    const newEntry = JournalEntryComponent(entry)
                    
                    return newEntry
                }).join("")
                console.log("entry" , newEntryArray)
                render(newEntryArray)
            })
        }
     })  