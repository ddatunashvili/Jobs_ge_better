
document.addEventListener("DOMContentLoaded", () => {
    titles = document.querySelectorAll(".regularEntries tr td:nth-child(2)")


    for (t of titles) {
        if (t.textContent.includes("დეველ")){
            t.classList.add("chosen")
        }
    }
})

