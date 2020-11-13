let moods = []

export const useJournalMoods = () => {
    return moods.slice()
}



export const getMoods = () => {
    return fetch('http://localhost:8088/moods')
        .then(response => response.json())
        .then(parsedMoods => {
            moods = parsedMoods
            // console.log("moods", moods)
        //    console.log("entries in GET" , entries)
        })

}

