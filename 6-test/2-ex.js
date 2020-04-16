const phoneNumberRegex = /^0[0-9]{9}$/

module.exports = (req, res, next) => {
	const {phoneNumber} = req.body
	if (phoneNumberRegex.test(phoneNumber)) {
		return next()
	}
	res.status(400).end("INVALID_PHONE_NUMBER")
}

arr = [
    {
        id: 0,
        name: 'Đức',
        age: 12
    },
    {
        id: 1,
        name: 'Quỳnh Anh',
        age: 24
    }
]

arr && arr.map((val, index) => {
return (<li style={{ border: "1px solid #000000", width: "600px" }} key={index} data-id={arr.id} onClick={this.setVal}>
    <span style={{ border: "1px solid #ff0000", width: "300px", margin: "20px" }}>Value for {val.name}</span>
</li>);
});