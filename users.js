const users =  document.querySelector(".users")



function user() {
    axios(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => {
            console.log(res.data)
            res.data.map((el) => (
                users.innerHTML += `<div class="user">
<img src="./img/user.png" class="card my-4 py-2 mx-2 d-flex flex-wrap nav-fill gap-2 p-1 small bg-light rounded-5 shadow-sm" style="width: 400px"" alt="">
<h4>${el.name}</h4>
<h5>${el.email}</h5>
<a href="tel:${el.phone}" class="text-dark "> phone:  ${el.phone}</a>
</div>`
            ))
        })
}
user()


//
// searchBtn.addEventListener("click", () => {
//     axios(`https://jsonplaceholder.typicode.com/users/${searchInput.value}`)
//         .then((name) => {
//             users.innerHTML = ""
//             console.log(name.data)
//             name.data.map((el) => (
//                 users.innerHTML += `<div class="user">
// <img src="./img/user.png" class="card my-4 py-2 mx-2 d-flex flex-wrap nav-fill gap-2 p-1 small bg-light rounded-5 shadow-sm" style="width: 400px"" alt="">
// <h4>${el.name}</h4>
// <h5>${el.email}</h5>
// <a href="tel:${el.phone}" class="text-dark "> phone:  ${el.phone}</a>
// </div>`
//             ))
//         })
// })






// function userFun(res) {
//     res.data.map((el) => (
//         users.innerHTML += `<div class="user">
// <img src="./img/user.png" class="card my-4 py-2 mx-2 d-flex flex-wrap nav-fill gap-2 p-1 small bg-light rounded-5 shadow-sm" style="width: 400px"" alt="">
// <h4>${el.name}</h4>
// <h5>${el.email}</h5>
// <a href="tel:${el.phone}" class="text-dark "> phone:  ${el.phone}</a>
//
// </div>`
//     ))
// }
//
// searchInput.addEventListener("input", (e) => {
//     userFun(`${e.target.value}`)
// })
