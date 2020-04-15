const phoneNumberRegex = /^0[0-9]{9}$/

module.exports = (req, res, next) => {
	const {phoneNumber} = req.body
	if (phoneNumberRegex.test(phoneNumber)) {
		return next()
	}
	res.status(400).end("INVALID_PHONE_NUMBER")
}