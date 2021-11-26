function maxProductOfTwoNumber (arr) {
    if (typeof arr === "object" && arr.length > 0) {
        let maxArr = []
        for (j = 0; j < arr.length - 1; j++) {
            let productArrOfNum = []
            for (i = j + 1; i < arr.length; i++) {
                productArrOfNum.push(arr[i] * arr[j])
            }
            let maxProduct = Math.max(...productArrOfNum)
            maxArr.push({
                maxProduct: maxProduct,
                firstNum: arr[j],
                secondNum: maxProduct/arr[j]
            })
        }
        let result = maxArr.sort((a,b)=>{return b.maxProduct - a.maxProduct})[0]
        
        console.log('Tích 2 sô lớn nhất là:' + result.maxProduct + ", là cặp: " + result.firstNum +" và " + result.secondNum);
    } else {
        console.log("Vui lòng nhập vào 1 mảng.");
    }
}
maxProductOfTwoNumber([2,3,-5,-2,3,-4,4]) // Tích 2 sô lớn nhất là:20, là cặp: -5 và -4

function alternatingSums(arr) {
    if (typeof arr === "object" && arr.length > 0) {
        let oddArr = []
        let evenArr = []
        arr.forEach((item, index) => {
            if (index % 2 === 0) {
                oddArr.push(item)
            } else {
                evenArr.push(item)
            }
        })
        let totalOdd = oddArr.reduce((total, item) => {
            return total = total + item
        }, 0)
        let totalEven = evenArr.reduce((total, item) => {
            return total = total + item
        }, 0)
        let result = [totalOdd, totalEven]
        console.log(result);
    } else {
        console.log("Vui lòng nhập vào 1 mảng.");
    }
}
alternatingSums([60,40,55,75,64]) // [179, 115]

// shortener Link

const inputLink = document.querySelector('#input-link')
const outputLink = document.querySelector('.output-link')
const getShortenLink = document.querySelector('.button')
const optionDomain = document.querySelectorAll('.option')
let optionActive = document.querySelector('.option.active').innerText
optionDomain.forEach(option => {
    option.addEventListener('click', (e)=> {
        optionDomain.forEach(item => {
            item.classList.remove('active')
        })
        e.target.classList.add('active')
        optionActive = e.target.innerText
    })
})
function shortenLink (url) {
    const apiBase = "https://api.shrtco.de/v2/"
    if(url) {
        fetch(`${apiBase}shorten?url=${url}`)
            .then(res => res.json())
            .then(link => renderShortenLink(link))
    }
}
function renderShortenLink (link) {
    if (optionActive === "shrtco.de") {
        outputLink.innerHTML = link.result.short_link
    } else if (optionActive === "9qr.de") {
        outputLink.innerHTML = link.result.short_link2
    } else {
        outputLink.innerHTML = link.result.short_link3
    }
}
getShortenLink.addEventListener('click', () => {
    let url = inputLink.value
    shortenLink(url)
})