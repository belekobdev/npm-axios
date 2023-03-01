


const breedsAll = document.querySelector(".breeds")
const breedsImg = document.querySelector(".breed-img")
const select = document.querySelector(".select")


searchInput.addEventListener("input", (e) => {
    fetchImg(e.target.value)
})
function fetchAll() {
    axios(`https://dog.ceo/api/breeds/list/all`)
        .then((res) => {
            Object.keys(res.data.message).map((el) => {
                breedsAll.innerHTML += `<button class="breed-btn btn btn-success m-1">${el}</button>`
            })
            Object.keys(res.data.message).map((el) => {
                select.innerHTML += `<option value="${el}">${el}</option>`
            })
        })
        .then(() => getBtn())
}
fetchAll()

    select.addEventListener("change", (e) => {
        fetchImg(e.target.value)
    })
function getBtn() {
    const button = document.querySelectorAll(".breed-btn")
    button.forEach(btn => {
        btn.addEventListener("click", () => {
            fetchImg(btn.innerHTML)
        })
    })
}


function fetchImg(name) {
    axios(`https://dog.ceo/api/breed/${name}/images/random`)
        .then((res) =>  {
        breedsImg.innerHTML = `<img src="${res.data.message}" alt="">`
    })
}