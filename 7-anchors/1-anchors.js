/**
 * ^ (caret): Bắt đầu string
 * $ (dollar sign): Kết thúc string
 * \b (word boundary): ranh giới (bắt đầu của 1 từ, kết thúc của 1 từ)
 */

const text = "038-817-1781 012-345-6789 098-765-43210"

function removeText(str) {
    return str.replace(/^\d\d\d-\d\d\d-\d\d\d\d$/gm, "")
}

removeText(text)


//EX2:
const textReg = "This is a dog \n This is a dogdy" // true - false

function removeTextReg(str) {
    return str.replace(/\bdog\b/gm, "") //escapes
}

removeTextReg(textReg)