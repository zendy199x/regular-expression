const phoneNumber = "038-817-1781"

function removeHyphens(str) {
    return str.replace(/-/g, "") //Trả về 038817-1781
}

removeHyphens(phoneNumber)