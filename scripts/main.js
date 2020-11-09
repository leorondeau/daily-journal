console.log("Welcome to the main module")

import { EntryListComponent } from "./JournalEntryList.js"
import "./JournalDataProvider.js"
import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"
import { JournalFormComponent } from "./JournalForm.js"
import "./MoodProvider.js"
import { getMoods } from "./MoodProvider.js"

EntryListComponent()

getEntries()
useJournalEntries()
JournalFormComponent()
getMoods()