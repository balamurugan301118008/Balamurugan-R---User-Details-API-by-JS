let UserDetails = document.querySelector('.name')
let container = document.querySelector('.container')
let searchingUser = document.querySelector('#Search')
let male = document.querySelector('.male')
let female = document.querySelector('.female')
let load = document.querySelector(".load")
const Erroralert = document.querySelector('p')
const more = document.querySelector('.more')
let count = 12

// loading code in below 
function loading() {
    load.classList.add('loader')
    setTimeout(() => {
        load.classList.remove('loader')
    }, 1000)
}

window.addEventListener('DOMContentLoaded', () => {
    load.classList.add('loader')
})

function process() {
    let totaldatas = fetch(`https://randomuser.me/api?results=${count}`)
        .then(res => res.json())//raw data to json
        .then(data => {  // json to js object
            load.classList.remove('loader')
            for (let i = 0; i < data.results.length; i++) {
                let div = document.createElement('div')
                div.setAttribute('id', 'userDetails')

                let link = document.createElement('a')
                link.setAttribute('class', 'userDetails')
                link.href = `userDetails.html?id=${data.results[i].id.value}`;
                div.append(link)

                let images = document.createElement('img')
                images.src = data.results[i].picture.large
                link.append(images)



                let fullName = document.createElement('h3')
                fullName.setAttribute('class', 'Username')
                fullName.innerText = `${data.results[i].name.first}${data.results[i].name.last}`;
                div.appendChild(fullName)
                UserDetails.append(div)

                // when the hover the images then work the below codes 
                images.addEventListener('mouseenter', imageHover)
                images.addEventListener('mouseleave', leaveHover)
                fullName.addEventListener('mouseenter', imageHover)

                // when the click the male button then run this below codes 
                male.addEventListener("click", (e) => {
                    if (data.results[i].gender == 'male') {
                        // console.log(data.results.gender);
                        images.style.display = "block"
                    }
                    else {
                        images.style.display = "none"
                    }
                })

                // when the click the female button then run this below codes 
                female.addEventListener("click", (e) => {
                    if (data.results[i].gender == 'female') {
                        // console.log(data.results.gender);
                        images.style.display = "block";
                    }
                    else {
                        images.style.display = "none";
                    }
                })
                // searchingUser.addEventListener('keyup', filter)

                searchingUser.addEventListener("keyup", () => {
                    let userName = document.querySelectorAll('.Username')
                    for (let u = 0; u < userName.length; u++) {
                        if (userName[u].innerText.toUpperCase().indexOf(searchingUser.value.toUpperCase()) != -1) {
                            userName[u].parentElement.style.display = "block"
                        }
                        else {
                            userName[u].parentElement.style.display = "none"
                        }
                    }
                })
                function imageHover() {
                    images.style.opacity = '0.7'
                    fullName.style.visibility = "visible"
                }
                function leaveHover() {
                    images.style.opacity = '1'
                    fullName.style.visibility = "hidden"
                }
            }
        }).catch(error => {
            console.log(error.message);
        })
}
process()

// when the click the more button then run the blow codes 
more.addEventListener('click', () => {
    count++
    console.log(count);
    process()
})

// function filter() {
//     let Usname = document.querySelectorAll(".Username")
//     let filter = searchingUser.value.toLowerCase();
//     for (let f = 0; f < Usname.length; f++) {
//         let final = Usname[f].innerText.toLowerCase();
//         if (final.indexOf(filter)!=-1) {
//             Usname[f].parentElement.style.visibility = "visible";
//         }
//         else {
//             Usname[f].parentElement.style.visibility = "hidden";
//         }
//     }
// }