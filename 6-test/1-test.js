const phoneNumberRegex = /^0[0-9]{9}$/ //bắt đầu từ 0, từ 0 đến 0 lặp lại 9 lần, ^ bắt đầu 1 chuỗi, $ kết thúc 1 chuỗi

const phoneNumberRegex2 = new RegExp("^0[0-9]{9}$") //tuơng tự nhau

phoneNumberRegex.test("01234567899") // false - Không match

phoneNumberRegex.test("01234567899") //true - match

//Nếu không để ^, $ thì nó match nhiều số