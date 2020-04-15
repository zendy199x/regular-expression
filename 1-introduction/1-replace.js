//Ex 1:

const phoneNumber = "038-817-1781"

function removeHyphens(str) {
    return str.replace("-", "") //Trả về 038817-1781
}

removeHyphens(phoneNumber)

//Ex 2:

const listPhone = [
    "012-345-6789",
    "038.817.1781",
    "098 765 4321"
]

function sanitize(arr) {
    return arr.map(str => {
        return str.replace(/[. -]/g, "")
    })
}

sanitize(listPhone)