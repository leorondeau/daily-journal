

export const JournalEntryComponent = (entry) => {
    return `
    <ul id="entry--${entry.id}" class="entryCard">
        <li>Date: ${entry.date}</li>
        <li>Concept: ${entry.conlit}</li>
        <li>Entry: ${entry.entry}</li>
        <li>Mood: ${entry.mood}</li>
    </ul>
    `
}

// Builds HTML representation of each object and exports a function.