// target to the all Element from html 

const mainDiv = document.querySelector(".maincontainer")
const container = document.querySelector(".UserContainer")
const userImage = document.querySelector(".userImg")
const details = document.querySelector(".details")
const load = document.querySelector('.load')
console.log(window.location.search.slice(4));
window.addEventListener('DOMContentLoaded', () => {
    load.classList.add('loader')
    let total = fetch(`https://randomuser.me/api?id=${window.location.search.slice(4)}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.results[0])
            load.classList.remove('loader')

            // create username 
            let UserName = document.createElement("h2")
            UserName.innerHTML = `Name: ${data.results[0].name.first}${data.results[0].name.last}`
            details.append(UserName)

            // create usesDob 
            let UserDob = document.createElement("h2")
            UserDob.innerText = `DOB: ${data.results[0].dob.date}`
            details.append(UserDob)

            // create User gender 
            let Usergender = document.createElement('h2')
            Usergender.innerText = `Gender: ${data.results[0].gender}`
            details.append(Usergender)

            // create user email 
            let UserEmail = document.createElement("h2")
            UserEmail.innerText = `Email: ${data.results[0].email}`
            details.append(UserEmail)

            // create user location 
            let userLocation = document.createElement('h2')
            userLocation.innerText = `Location: ${data.results[0].location.city}`
            details.append(userLocation)

            // create user phone number 

            let userPhoneNumber = document.createElement('h2')
            userPhoneNumber.innerText = `Phone: ${data.results[0].phone}`
            details.append(userPhoneNumber)

            // create userimage 
            let userImg = document.createElement('img')
            userImg.src = data.results[0].picture.large
            userImage.append(userImg)
        })
})



