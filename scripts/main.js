console.log("Welcome to the main module")

import { EntryListComponent } from "./JournalEntryList.js"
import "./JournalDataProvider.js"
import { getEntries, useJournalEntries } from "./JournalDataProvider.js"

EntryListComponent()

// getEntries()
// useJournalEntries()