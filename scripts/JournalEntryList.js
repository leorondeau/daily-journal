import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"



export const EntryListComponent = () => {
    const entryLog = document.querySelector("#entryLog")
    const entries = useJournalEntries()
    let journalHTMLRepresentation = ""
    for (const entry of entries) {

        journalHTMLRepresentation += JournalEntryComponent(entry)
    }
    entryLog.innerHTML +=
        `<section id ="entryLog">
    <p>${journalHTMLRepresentation}<p>
    </section>`
}

