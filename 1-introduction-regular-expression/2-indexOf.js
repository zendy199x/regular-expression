const phoneNumber = "038-817-1781"

function removeHyphens(str) {
    while (str.indexOf("-") !== -1) {
        str = str.replace("-", "")
    }
    return str // Trả về 0388171781
}

removeHyphens(phoneNumber)