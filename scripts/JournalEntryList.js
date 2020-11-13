import { useJournalEntries , getEntries , deleteEntry } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"


const eventHub = document.querySelector(".container")
let entryList = ""

eventHub.addEventListener("appStateChanged", () => EntryListComponent())

export const EntryListComponent = () => {
    
 getEntries()
    .then(()=> {
      entryList = useJournalEntries()
    // console.log("TEST" , entryList)
    render()
})}

const render = () => {

    const entryLog = document.querySelector("#entryLog")
    entryLog.innerHTML =
        `<section id ="entryLog">
    <p>${entryList.map(entry => JournalEntryComponent(entry)).join("")}<p>

    </section>`}

    eventHub.addEventListener("click" , event => {
        if(event.target.id.startsWith("deleteNote--")) {
            const [prefix , id] = event.target.id.split("--")
            console.log("buttonClick" , id)
            deleteEntry(id)
            .then(() =>
            {
                entryList = useJournalEntries()
                
                const newEntryArray = entryList.map(entry => {
                    
                    const newEntry = JournalEntryComponent(entry)
                    
                    return newEntry
                }).join("")
                // console.log("entry" , newEntryArray)
                render()
            })
        }
     })  