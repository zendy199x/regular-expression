const text = "Hi, I am developer. Nice to meet you! My phone number is 038-817-1781. This is not-a-phone-number, I have only $5 left"

function removeText(str) {
    // return str.replace(/[\w]/g, "") //Match tất cả word, number, underscore
    // return str.replace(/[\W]/g, "") //Match không phải word, number, underscore
    // return str.replace(/[\d]/g, "") //Match tất cả number
    // return str.replace(/[\D]/g, "") //Match không phải number
    // return str.replace(/[\d]+/g, "") //Match tất cả number đứng liền nhau
    // return str.replace(/[\s]/g, "") //Match tất cả whitespace
    // return str.replace(/.+/g, "") //Match tất cả kí tự nằm trên cùng 1 hàng
    return str.replace(/[^0-9]/g, "") //Match tất cả kí tự không phải number
}

removeText(text)