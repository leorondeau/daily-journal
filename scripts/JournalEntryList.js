import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const entryLog = document.querySelector("#entryLog")

export const EntryListComponent = () => {
    const entries = useJournalEntries()
    let journalHTMLRepresentation = ""
    for (const entry of entries) {
        
        journalHTMLRepresentation += JournalEntryComponent(entry)
    }
return entryLog.innerHTML += 
`<ul ="entryLog">
    <li>${journalHTMLRepresentation}<li>
    </ul>`
}