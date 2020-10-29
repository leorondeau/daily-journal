/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.


// export const useJournalEntries = () => {
//     return [...journalEntries]
// }
//  console.log(useJournalEntries())
/*
    You export a function that provides a version of the
    raw data in the format that you want
*/

// let journalEntries = []
// console.log("jounrnalEntries" , journalEntries)

// export const useJournalEntries = () => {
//     const sortedByDate = journalEntries.sort(
//         (currentEntry, nextEntry) =>
//             Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
//     )
//     return sortedByDate
// }

// export const getEntries = () => {
//     return fetch("http://localhost:8088/entries") 
//     .then(response => response.json())
//         .then(
//             entries => {
        
//                 return journalEntries = entries
                
//             }
//         )      
// }


let entries = []


export const useJournalEntries = () => {
    return entries.slice()
}

export const getEntries = () => {
    return fetch('http://localhost:8088/entries')
        .then(response => response.json())
        .then(parsedNotes => {
            entries = parsedNotes
           console.log("entries in GET" , entries)
        })

}

console.log("EntriesatBOT" , useJournalEntries())
