/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "09/30/20",
        concept: "CSS",
        entry: "Worked on flexbox, furthered understanding of how to manipulate containers.",
        mood: "trailing"
    },
    {
        id: 2,
        date: "10/05/20",
        concept: "github workflow",
        entry: "Completed commits, pull requests and pushes.",
        mood: "flailing"
    },
    {
        id: 3,
        date: "10/08/20",
        concept: "javascript bouncing ball",
        entry: "Wrote scripts across multiple modules, importing and exporting functions plus their html representation",
        mood: "flailing"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}
