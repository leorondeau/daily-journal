import { MoodFilter } from "./MoodFilters.js"

const contentTarget = document.querySelector(".filters")

export const FilterBar = () => {
    render = () => {
        contentTarget.innerHTML = `
            ${MoodFilter()}
        `
    }

     render()
}

