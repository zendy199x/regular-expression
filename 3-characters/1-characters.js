const text = "Hi, I am developer. Nice to meet you! My phone number is 038-817-1781. This is not-a-phone-number, I have only $5 left"

function removeText(str) {
    return str.replace(/[\.$]/g, "") //escapes
}

removeText(text)