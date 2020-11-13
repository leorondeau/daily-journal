console.log("Welcome to the main module")

import { EntryListComponent } from "./Journal/JournalEntryList.js"
import "./Journal/JournalDataProvider.js"
import { getEntries, useJournalEntries } from "./Journal/JournalDataProvider.js"
import { JournalEntryComponent } from "./Journal/JournalEntry.js"
import { JournalFormComponent } from "./Journal/JournalForm.js"
import "./Mood/MoodProvider.js"
import { getMoods } from "./Mood/MoodProvider.js"
import { FilterBar } from "./Mood/FilterBar.js"
import { MoodFilter } from "./Mood/MoodFilters.js"

EntryListComponent()

getEntries()
useJournalEntries()
JournalFormComponent()
getMoods()
FilterBar()
MoodFilter()

