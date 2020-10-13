import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const entryLog = document.querySelector("entryLog")

export const EntryListComponent = () => {
    const entries = useJournalEntries()

    for (const entry of entries) {
        JournalEntryComponent(entry)

        entryLog.innerhtml += 
    }

}