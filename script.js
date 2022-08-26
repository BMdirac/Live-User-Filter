const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = [] // initialize an array (empty array where we will put the data that we fetch)

async function getData() {
    // its going to represent response from our fetch request
    const res = await fetch('https://randomuser.me/api/?results=50')

    // to get our data after fetch
    // res is going to be promise.
    const { results } = await res.json() // destructure

    // Clear results
    results.innerHTML = ''

    // to loop through the data
    results.forEach(user => {
        // to construct the users
        
    })
}

getData()

// ********************** LEARNING PHASE 2 *************************************

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