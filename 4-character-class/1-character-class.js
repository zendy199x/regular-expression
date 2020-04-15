//EX 1:
const text = "$1000 @2100"

function removeText(str) {
    // return str.replace(/[$@][0123456789]+/g, "") //escapes
    return str.replace(/[$@][0-9]+/g, "") //escapes
}

removeText(text)

//EX 2:

const textReplace = "grey gray"

function removeReplace(str) {
    return str.replace(/[gr[ae]y]/g, "") //escapes
}

removeReplace(textReplace)