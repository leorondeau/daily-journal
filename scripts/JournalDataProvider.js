const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const appStateChangedEvent = new CustomEvent("appStateChanged")
    eventHub.dispatchEvent(appStateChangedEvent)
}

let entries = []


export const useJournalEntries = () => {
    return entries.slice()
}

export const getEntries = () => {
    return fetch('http://localhost:8088/entries?_expand=mood')
        .then(response => response.json())
        .then(parsedNotes => {
            entries = parsedNotes
            // console.log("entries" , entries)
        //    console.log("entries in GET" , entries)
        })

}



export const saveEntry = (entry) => {
    return fetch('http://localhost:8088/entries?_expand=mood', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}
