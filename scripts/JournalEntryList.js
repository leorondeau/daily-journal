import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"



export const EntryListComponent = () => {
    const entryLog = document.querySelector("#entryLog")
    const entries = useJournalEntries()
 
    entryLog.innerHTML +=
        `<section id ="entryLog">
    <p>${entries.map(entry => JournalEntryComponent(entry)).join("")}<p>
    </section>`
}
