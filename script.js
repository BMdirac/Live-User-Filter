// ********************** FINAL LEARNING PHASE *************************************************

const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = [] // initialize an array (empty array where we will put the data that we fetch)

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    // its going to represent response from our fetch request
    const res = await fetch('https://randomuser.me/api/?results=50')

    // to get our data after fetch
    // res is going to be promise.
    const { results } = await res.json() // destructure

    // Clear result
    result.innerHTML = ''

    // to loop through the data
    results.forEach(user => {
        // to construct list item for each of the users
        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `
        // to put the created list into the ul ( the result id in html)
        result.appendChild(li)
    })
}

getData()

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}

// ********************** LEARNING PHASE 3 *************************************************

// const result = document.getElementById('result')
// const filter = document.getElementById('filter')
// const listItems = [] // initialize an array (empty array where we will put the data that we fetch)

// async function getData() {
//     // its going to represent response from our fetch request
//     const res = await fetch('https://randomuser.me/api/?results=50')

//     // to get our data after fetch
//     // res is going to be promise.
//     const { results } = await res.json() // destructure

//     // Clear result
//     result.innerHTML = ''

//     // to loop through the data
//     results.forEach(user => {
//         // to construct list item for each of the users
//         const li = document.createElement('li')

//         listItems.push(li)

//         li.innerHTML = `
//             <img src="${user.picture.large}" alt="${user.name.first}">
//             <div class="user-info">
//                 <h4>${user.name.first} ${user.name.last}</h4>
//                 <p>${user.location.city}, ${user.location.country}</p>
//             </div>
//         `
//         // to put the created list into the ul ( the result id in html)
//         result.appendChild(li)
//     })
// }

// getData()


// ********************** LEARNING PHASE 2 *************************************************

// const result = document.getElementById('result')
// const filter = document.getElementById('filter')
// const listItems = [] // initialize an array (empty array where we will put the data that we fetch)

// async function getData() {
//     // its going to represent response from our fetch request
//     const res = await fetch('https://randomuser.me/api/?results=50')

//     // to get our data after fetch
//     // res is going to be promise.
//     const data = await res.json()

//     console.log(data)
// }

// getData()


// ********************** LEARNING PHASE 1 *************************************
// Not present