const statusWrapper = document.getElementById('statWrap');

const getGitStatus = () => {
    fetch("https://kctbh9vrtdwd.statuspage.io/api/v2/components.json")
        .then(res => res.json())
        .then(data => {
            let original = data.components;
           let deleted = original.splice(3, 1); //Deleted the 3rd item from array

            statusWrapper.innerHTML = original.map(el => {
                return `<div class="component">${el.name}<div class="status">${el.status}</div></div></div>`
            }).join('')

        })
}
getGitStatus()


//Get git status on button click
const getCurrentStatus = () => {
    getGitStatus()
}
document.getElementById('btn').addEventListener('click', getCurrentStatus);




