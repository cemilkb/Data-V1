/*
todo: <-----------------------------------> Population Data <----------------------------------->  */

let population = data.sort((a, b) => {
    return b.population - a.population
})

let red = data.reduce((a, b) => a + b.population, 0)
let world = { "name": "World", "population": red }
let populationData = [...population]
populationData.unshift(world)

/*
todo: <-----------------------------------> Population Data <----------------------------------->  */

let languagesArr = []

data.forEach(e => {
    let lng = e.languages
    languagesArr.push(lng)
})

let a = languagesArr.join(",")
let b = a.split(",")
let languages = new Set(b)

/* 
!  <-----------------------------------> !!! BÖYLE DE BULUNUYO DAHA KOLAY DAHA HATASIZ !!! <-----------------------------------> 
languages.forEach(e => {
    let a = b.filter(j => j == e)
    console.log(a)
})
*/

let arr = []
languages.forEach(e => {
    let pattern = e
    let flag = "g"
    let reg = new RegExp(pattern, flag)
    let bak = b.join(",").match(reg)
    if (bak != null) {
        let name = e
        let number = bak.length
        let obj = { name: e, count: number }
        arr.push(obj)
    }
})
let sort = arr.sort((a, b) => b.count - a.count)


console.log(languages)
console.log(arr)

/*
todo: <-----------------------------------> Pick AND Create Elements <----------------------------------->  */

let main = document.querySelector("main")
let popBtn = document.querySelector("#pop")
let lngBtn = document.querySelector("#lng")
let table = document.querySelector(".table")
let hr = document.createElement("div")
let paragraph = document.createElement("p")

/*
todo: <-----------------------------------> Data ADD ClassName <----------------------------------->  */

hr.setAttribute("class", "hr")
hr.style.marginTop = "50px"

/*
todo: <-----------------------------------> Append TO Table With Population <----------------------------------->  */

popBtn.addEventListener("click", e => {

    table.innerHTML = `<div class="hr" style="margin-bottom: 50px;"></div>`

    for (let i = 0; i < 10; i++) {
        paragraph.textContent = "10 Most Population Country on The World"
        paragraph.style.marginTop = "20px"
        main.append(paragraph)
        let dataDiv = document.createElement("div")
        let leftP = document.createElement("p")
        let barDiv = document.createElement("div")
        let rightP = document.createElement("p")

        dataDiv.setAttribute("class", "data")
        leftP.setAttribute("class", "left")
        barDiv.setAttribute("class", "bar")
        rightP.setAttribute("class", "right")
        rightP.textContent = populationData[i].population
        leftP.textContent = populationData[i].name
        barDiv.style.width = `${((populationData[i].population) / (populationData[0].population)) * 100}%`

        dataDiv.append(leftP)
        dataDiv.append(barDiv)
        dataDiv.append(rightP)
        table.append(dataDiv)

    }
    table.append(hr)
})

/*
todo: <-----------------------------------> Append TO Table With Languages <----------------------------------->  */

lngBtn.addEventListener("click", e => {

    table.innerHTML = `<div class="hr" style="margin-bottom: 50px;"></div>`
    paragraph.textContent = "10 Most Spoken Languages in The World"
    paragraph.style.marginTop = "20px"
    main.append(paragraph)

    for (let i = 0; i < 10; i++) {
        let dataDiv = document.createElement("div")
        let leftP = document.createElement("p")
        let barDiv = document.createElement("div")
        let rightP = document.createElement("p")

        dataDiv.setAttribute("class", "data")
        leftP.setAttribute("class", "left")
        barDiv.setAttribute("class", "bar")
        rightP.setAttribute("class", "right")
        rightP.textContent = sort[i].count
        leftP.textContent = sort[i].name
        barDiv.style.width = `${((sort[i].count) / (sort[0].count)) * 100}%`

        dataDiv.append(leftP)
        dataDiv.append(barDiv)
        dataDiv.append(rightP)
        table.append(dataDiv)

    }
    table.append(hr)
})